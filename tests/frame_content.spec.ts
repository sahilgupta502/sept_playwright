import {test,expect} from '@playwright/test';

test('frame_content',async({page})=>{
await page.goto('https://the-internet.herokuapp.com/iframe?utm_source');

const frame=await page.frameLocator('#mce_0_ifr');
 //   await frame.locator('body').fill('Hello Sahil');

 const newpage1=page.waitForEvent('popup');
   await page.locator('a[href="http://elementalselenium.com/"]').click();
const page22=await newpage1;

await page22.close();

//await frame.locator('a[href="https://www.tiny.cloud/?utm_campaign=editor_referral"]').click();
});
