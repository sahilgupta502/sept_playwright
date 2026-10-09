import {test,expect} from '@playwright/test';

test('all_form_data_test',async({page})=>{
// await page.setViewportSize({
//     height:400,
//     width:400
// });



await page.emulateMedia({colorScheme:'dark'});

await page.goto('https://playwrightlab.github.io/?utm_source=chatgpt.com');
await page.locator('#themeToggle').click();

// await page.locator('#fullName').fill('Test1');
// await page.locator('#email').fill('test1@gmail.com');
// await page.locator('#password').fill('12345678');
// await page.locator('#phone').fill('1234567890');
// await page.locator('#country').click();
// await page.locator('#country').selectOption({
//     value:'in'
// });

// await page.locator('#labelMale').click();
// await page.locator('#labelFemale').click();
// await page.locator('#checkPython').check();
// await page.locator('#labelJava').check();

// await page.locator('//textarea[@name="bio"]').fill('How are you good morning');

// await page.locator('[class="terms-checkbox"]').check();

await page.locator('#uploadBrowseLabel').setInputFiles('C:/Users/hp/Desktop/22-09-2026/new_order_file.pdf');

await page.locator('#multiSelect').selectOption([
'React','Angular'
]);

await page.locator('#customDropdownTrigger').click();
const tr1=await page.locator('tr').filter({
    hasText:'alice@example.com'
});

await tr1.locator('.row-checkbox').check();
//await tr1.getByTitle('Delete').click();
// const page22=page.waitForEvent('.custom-dialog');
 await tr1.getByTitle('Edit').click();
// const page2=await page22
const dialog=page.getByRole('dialog')
expect(dialog).toBeVisible();
await dialog.locator('#editName').fill('test22');
await dialog.locator('#editEmail').fill('test1@gmail.com');
await dialog.locator('#modalConfirm').click();


const source=await page.getByTestId('dnd-item-1');
const destination=await page.getByTestId('dnd-item-5');

await destination.dragTo(source);

await page.locator('//div[@class="hover-box"]').hover();
await page.locator('//div[@class="hover-box scale"]').hover();
await page.locator('//div[@class="hover-box rotate"]').hover();
await page.locator('//div[@class="hover-box color-shift"]').hover();

await page.locator('#tooltipContainer').hover();
await page.locator('#doubleClickDemo').hover();
await page.locator('#rightClickDemo').hover();

await page.locator('#toggleBold').click();
await page.locator('#toggleItalic').click();
await page.locator('#toggleUnderline').click();
await page.locator('[class="switch"]').click();

//await page.locator('[class="btn btn-outline"]').click();
//await page.locator('#colorPicker').click();
await page.waitForTimeout(5000);
});