import {test,expect} from '@playwright/test';

test('instagram',async({page})=>{
await page.goto('https://www.instagram.com/');
await page.getByText('name').fill('test15@gmail.com');
await page.locator('[name="pass"]').fill('12345678');

await page.locator('//div[@class="x6s0dn4 x78zum5 x1c4vz4f x2lah0s xyqm7xq"]').click();

await page.getByText('Forgot password?').click();

await page.locator('[class="x78zum5 xdt5ytf xh8yej3"]').fill('test12@gmail.com');
//await page.locator('[class="x1ey2m1c xtijo5x x1o0tod xg01cxk x47corl x10l6tqk x13vifvy x1ebt8du x19991ni x1dhq9h x1fmog5m xu25z0z x140muxe xo1y3bh"]').click();
// await page.getByRole('button',{
//     name:'Log in'
// }).click();
});