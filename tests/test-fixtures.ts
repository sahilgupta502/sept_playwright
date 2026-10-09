import {test as base,expect} from '@playwright/test';

type MyFixture11 = {
    newName:String
};

export const test=base.extend<MyFixture11>({
    newName:async({page},use)=>{
       // await page.goto('https://www.google.com')
        await use("testing data");



    }
});

export{expect}
