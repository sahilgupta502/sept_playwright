import {test,expect} from '@playwright/test';

test('gmail_test',async({page})=>{
await page.goto('https://accounts.google.com/v3/signin/identifier?continue=https://mail.google.com/mail/?service%3Dmail%26flowName%3DGlifWebSignIn%26flowEntry%3DAccountChooser%26ec%3Dasw-gmail-globalnav-signin&uj=gafb-gmail_asw-globalnav-en&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S1040611558:1789464529229450');

await page.getByLabel('Email or phone').fill('test1@gmail.com')
await page.getByRole('button',{
    name:'Create account'
}).click();
await page.getByText('For my personal use').click();
await page.locator('#firstName').fill('testing');
await page.locator('#lastName').fill('Demo');
await page.getByRole('button',{
    name:'Next'
}).click();

await page.locator('#month').click();
await page.locator('[id="gender"]').click();

await page.locator('[@class="VfPpkd-rymPhb-fpDzbe-fmcmS"]').click();
await page.locator('#day').fill('20');
await page.locator('#year').fill('2016');

//await page.locator('//span[@class="VfPpkd-rymPhb-fpDzbe-fmcmS"]').click();
// await page.getByRole('button',{
//     name:'Sign in'
// }).click();


await page.getByRole('link',{
    name:'Why we ask for your birthday and gender'
}).click();

const page33=page.waitForEvent('popup');
await page.locator('a[href="https://support.google.com/accounts/answer/1733224?hl=en_US"]').click();
//await page.getByText('Go back').click();
const page44=await page33;



await page44.getByPlaceholder('Describe your issue').fill("Testing data");

// await page44.evaluate(() => {
//     window.scrollTo(0, document.body.scrollHeight);
// });

//await page44.waitForTimeout(5000);

// await page44.mouse.wheel(0,500);
// await page44.waitForTimeout(500);
// await page44.mouse.wheel(0,500);
// await page44.waitForTimeout(500);

//await page44.evaluate(async ()=>{

// const scrollHeight=await page44.evaluate(()=>document.body.scrollHeight)
// console.log("Scroll Height is = ",scrollHeight);
// let counter=0;
//     while(scrollHeight>counter){
//         await page44.mouse.wheel(0,100);
//         await page44.waitForTimeout(500)
//         counter+=100;
//     }


    while (true) {

        const currentScrollY = await page44.evaluate(() => window.scrollY);

        await page44.mouse.wheel(0, 200);

        await page44.waitForTimeout(500);

        const newScrollY = await page44.evaluate(() => window.scrollY);

        if (currentScrollY === newScrollY) {
            break;
        }
    }

// await page44.evaluate(()=>{
//     window.scrollTo(0,0);
// })

//await page44.keyboard.press('Enter');

page.context().newCDPSession(page);
});