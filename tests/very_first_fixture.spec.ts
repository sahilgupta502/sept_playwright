//import { expect } from '@playwright/test';
import {test2,expect1} from './first_fixture';

test2('very_first_test',async({loggedInFixture})=>{
    console.log("Testing WebSite");
    expect1(loggedInFixture).toHaveURL(/inventory/);
});