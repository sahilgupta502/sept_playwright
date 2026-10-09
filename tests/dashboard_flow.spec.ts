import {test,expect} from '@playwright/test';
import {login} from '../pages/LoginScreen';
import {newDashBoard} from '../pages/new_dashboard';

test('dashboard flow',async({page})=>{

await login(page,'test_user','secret_sauce');
await newDashBoard(page);

});