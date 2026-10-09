import {test,expect} from '@playwright/test';

test('broken_links',async({page,request})=>{
await page.goto('https://practice.expandtesting.com/?utm_source=chatgpt.com');

const data=await page.locator('a');
console.log(data);

const allLinks=await page.locator('a').evaluateAll(
    links=>links.map(link=>(link as HTMLAnchorElement).href)
    .filter(href =>{href && href.startsWith('https');
}))
console.log(allLinks);

for(const link of allLinks)
{
  const response= await request.get(link);
if(response.status()>=400)
{
    console.log(link+" url is broken");
}
}

});