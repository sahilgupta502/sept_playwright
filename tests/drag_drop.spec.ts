import {test,expect, devices} from '@playwright/test';

// test.use({
//     ...devices['iPhone 13']
// });

test('drag_drop',async({page,request})=>{
// await page.goto('https://the-internet.herokuapp.com/drag_and_drop?utm_source=chatgpt.com');

// const source=await page.locator('#column-a');
// const target=await page.locator('#column-b');

// await source.dragTo(target);
// await target.dragTo(source);



await page.goto('https://lab.hakdogan.com/practice/drag-drop/?utm_source=chatgpt.com');

const source=await page.locator('#dnd-card-design');
const target=await page.locator('#dnd-col-doing');

await source.dragTo(target);


const source1=await page.locator('#dnd-card-design');
const target1=await page.locator('#dnd-col-todo');

await source1.dragTo(target1);


const source2=await page.locator('#dnd-card-design');
const target2=await page.locator('#dnd-col-done');
await source2.dragTo(target2);

});

//http://conduit-api.bondaracademy.com/api/tags