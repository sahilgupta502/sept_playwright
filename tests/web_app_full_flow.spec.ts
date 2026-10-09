import {test,expect} from '@playwright/test';
import {login} from '../pages/LoginScreen';
import {newDashBoard} from '../pages/new_dashboard';
import {logoutMethod} from '../pages/logout';

test('Web site full flow',async({page})=>{

await login(page,'standard_user','secret_sauce');
await newDashBoard(page);
await logoutMethod(page);

});