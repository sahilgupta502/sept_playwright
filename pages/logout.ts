import { Page } from "@playwright/test";

export async function logoutMethod(page:Page)
{
await page.locator('[class="bm-burger-button"]').click();
await page.locator('[id="logout_sidebar_link"]').click();
}