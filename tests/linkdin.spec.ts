import {test,expect} from '@playwright/test';

test('linkdin',async({page})=>{

    await page.goto('https://in.linkedin.com/');
//     await page.locator('//a[@href="https://www.linkedin.com/signup?trk=guest_homepage-basic_nav-header-join"]').click();

// //await page.getByRole('button',{name:'Join now'}).click();

// await page.locator('#email-address').fill('test10@gmail.com');
// await page.locator('#password').fill('sample@123456');
// await page.getByRole('button',{
//     name:'Show'
// }).click();

// await page.getByRole('button',{
//     name:'Hide'
// }).click();

// await page.getByRole('button',{
//     name:'Agree & Join'
// }).click();

// await page.getByPlaceholder('First name').fill("Testing");
// await page.getByPlaceholder('Last name').fill("Demo user");
// await page.getByRole('button',{
//     name:'Continue'
// }).click();

await page.locator('//a[@href="https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin"]').click();
await page.locator('._4ae1f7fa eb71f454 b352aa02 a042dfc0 ef32aeae _5c718f7d _1855669e _9b88209a _6d9dd371 _45db96f7 _5499daae d053d6bb d75cb20e e9f4887a _0c06d15e _12a6b333 _9da6bf05 _03e079b9 _90ecec7c _9e6eb484 _1c60244a _545a42a5').fill("sample1@yopmail.com");
await page.locator('#R1bvvcjksop9h9j6').fill('Sample@123456');
await page.locator('//span[@name="Sign in"]').click();
});