import {test,expect} from '@playwright/test';

test('first_test',async({page})=>{
await page.goto('https://www.google.com');
});

test('second_test',async({page})=>{
await page.goto('https://www.facebook.com');
});

test('third_test',async({page})=>{
await page.goto('https://www.instagram.com');
});

test('fourth_test',async({page})=>{
await page.goto('https://www.linkedin.com');
});