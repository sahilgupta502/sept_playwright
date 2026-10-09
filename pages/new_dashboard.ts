import {test,expect, Page} from '@playwright/test';

export async function newDashBoard(page:Page)
{
    await expect(page).toHaveURL(/inventory/);
    await page.locator('.select_container').click();
    await page.locator('.product_sort_container').selectOption({
        value:'lohi'
    });

    await page.locator('.bm-burger-button').click();
    await page.locator('#about_sidebar_link').click();
    await expect(page).toHaveURL('https://saucelabs.com/');
    await page.goBack();
}