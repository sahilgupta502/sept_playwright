import 'dotenv/config';
import {test,expect, chromium} from '@playwright/test';
import { TestFile } from './first_file';

test.describe.configure({ mode:'parallel'})

test('correct_login',async({})=>{
    
const browser=await chromium.launch();
const browserContext=await browser.newContext({
    permissions:['notifications'],
});
const page2=await browserContext.newPage();
await page2.clock.install({
        time: new Date('2030-01-01T10:00:00'),
    
});


const currentTime=await page2.evaluate(()=>{
    return  new Date().toISOString();
});
//const currentTime=await new Date().toISOString();
console.log("Current Time is = ",currentTime);




const name=process.env.NAME
const password=process.env.PASSWORD
console.log(name,password);

const testFile=new TestFile(page2);
await testFile.gotoPage();
await testFile.loginData(name,password,0);


await page2.clock.install({
    time:new Date('2028-01-01T02:20:20')
});

const newDate2=await page2.evaluate(()=>{
return new Date().toISOString();
});

console.log('new_date_Check_For_Current_data=', newDate2);

});

// test('userName_wrong_test',async({page})=>{
// const testFile=new TestFile(page);
// await testFile.gotoPage();
// await testFile.loginData('standard_user11','secret_sauce',1);
// });

// test('password_wrong_test',async({page})=>{
// const testFile=new TestFile(page);
// await testFile.gotoPage();
// await testFile.loginData('standard_user','abc',2);
// });

