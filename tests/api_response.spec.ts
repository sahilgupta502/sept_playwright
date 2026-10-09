import {test,expect} from '@playwright/test';

test('apiResponse_test',async({page})=>{
await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1?utm_source=chatgpt.com');

// const response=page.waitForResponse(
//     response =>  response.status()==200
// );

const response=page.on("response",async(response)=>{
    console.log("response_code====",response.status());
})

await page.getByRole('button',{
name:'Start'
}).click();

//const response22=await response;
//console.log('hello title===',await response22.json());

const cookies=await page.context().cookies();
console.log("Before Add new cookies===",cookies);

await page.context().addCookies([
    {
        name: 'Testing Data',
        expires: Date.now() / 1000 / 1000,
        domain: 'the testing domain',
        httpOnly: true,
        value: 'value_for_cookies',
        path:'/'
    }
])

console.log('After Add new cookies ===',await page.context().cookies());

await page.context().clearCookies({
    name:'Testing Data'
});

});