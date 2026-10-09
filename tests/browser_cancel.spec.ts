import {test,expect} from '@playwright/test';

test('browser_disconnect',async({browser})=>{

    browser.on('disconnected',()=>{
        console.log("Browser is disconnected now");
    })

    const newContext=await browser.newContext();
    const newPage=await newContext.newPage();

    await newPage.goto('https://www.google.com');
//browser.close();

await expect(newPage).toHaveTitle('Google');
});