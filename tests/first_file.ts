import { expect, Locator, Page } from "@playwright/test"
import 'dotenv/config';

export class TestFile{
    readonly userName:Locator
    readonly password:Locator
    loginButton:Locator
    page:Page;

    constructor(page:Page)
    {
this.page=page;
this.userName=page.locator('#user-name');
this.password=page.locator('#password');
this.loginButton=page.getByText('Login');
    }

    async gotoPage() {
        console.log("Url data is == ",process.env.BASE_URL);
const url=process.env.BASE_URL;
        await this.page.goto(url);
   // await this.page.goto('https://www.saucedemo.com/?utm_source=chatgpt.com');
    }

    async loginData(userNameValue:string,passwordValue:string,type:number)
    {
        const count=await this.userName.count();
        console.log('count value is = ',count);
await this.userName.fill(userNameValue);
await this.password.fill(passwordValue);
await this.loginButton.click();


//if(type>0){
await expect(this.page).toHaveURL(/inventory/);
//}
await this.page.waitForTimeout(5000);    
}
}