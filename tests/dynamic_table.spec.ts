import {test,expect} from '@playwright/test';

test('dynamic_table',async({page})=>{
await page.goto('https://playwrightlab.github.io/?utm_source=chatgpt.com');

const mangoRow=await page.locator('tr').filter({
    hasText:'Mango'
});

await page.locator('//a[@href="locators.html"]').click();

await page.locator('//a[@href="get-by-text"]').click();


//const value=await mangoRow.locator('[data-column="price"]').textContent();
//console.log(value);
//await mangoRow.getByText('')

// await page.locator('#navAuthContainer').click();
// await page.locator('#loginEmail').fill('test@playlab.com');
// await page.locator('#loginPassword').fill('Password123');
// await page.getByRole('button',{
//     name:'Sign In'
// }).click();

// await page.locator('#goToDashboard').click();
// await page.getByRole('button',{
//     name:'Sign Out'
// }).click();

// await page.locator('#themeToggle').click();

// await page.locator('#navLogoutBtn').click();


// const row=await page.locator('tr').filter({
//     hasText:'charlie@example.com'
// });
// await row.getByTitle('Delete').click();

//await page.locator('.upload-link').setInputFiles('C:/Users/hp/Desktop/13-09-2026/sample_file.txt')
//await page.waitForTimeout(5000);

});