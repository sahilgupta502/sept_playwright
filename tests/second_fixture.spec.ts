import {test2,expect1} from './first_fixture';

test2('second_fixture',async({loggedInFixture})=>{
console.log('Second fixture test file');

loggedInFixture.on('console',msg=>{
    console.log('Console_Message_Listen',msg.text());
})

await loggedInFixture.locator('.product_sort_container').click();

await loggedInFixture.locator('//select[@class="product_sort_container"]').selectOption({
    value:'za'
});

await loggedInFixture.locator('.product_sort_container').click();
await loggedInFixture.locator('//select[@class="product_sort_container"]').selectOption({
    value:'hilo'
});
});