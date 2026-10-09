import {test,expect} from '@playwright/test';

test('slow_network',async({page})=>{

    const client=await page.context().newCDPSession(page);

    await client.send('Network.enable');
await client.send("Network.emulateNetworkConditions",{
    offline:true,
    latency:500,
    downloadThroughput:50*1024,
    uploadThroughput:20*1024
});

await page.goto('https://example.com');

    await expect(page).toHaveTitle(/Example/);
});