import {test,expect} from '@playwright/test';

test.use({
   // permissions:[],
    permissions:['geolocation','camera','notifications'],
    geolocation: {
        latitude: 28.6139,
        longitude: 77.2090
    }
});



test('sample_test',async({page})=>{

    await page.goto('https://www.google.com');

    const permissionState = await page.evaluate(async () => {
    const permission = await navigator.permissions.query({
        name: 'geolocation'
    });

    return permission.state;
});


console.log(permissionState);
});