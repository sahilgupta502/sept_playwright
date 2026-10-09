import {test,expect} from '@playwright/test';
import { request } from 'http';



test('new_api_test',async({request})=>{
//const response=await request.get('https://conduit-api.bondaracademy.com/api/tags');

//Post API
// const response =await request.post('https://reqres.in/api/users',{
//    data: {
//   "name": "morpheus",
//   "job": "leader"
// }
// });

// const obj=await response.json();
// console.log(obj['_meta']['context']);
//Delete API
const response=await request.fetch('http://reqres.in/api/users',
    {
        method:'POST',
    data:{
        name:'testing11',
        job:'demo job'
    }    
    }
);

const data=await response.json();

console.log(data);

const userData:UserData={
name:'Test1',
id:20,
age:35,
active:true
}

console.log(userData);

//expect(response.status()).toBe(204);
});


interface UserData{
name:string,
id:number,
age:number,
active:Boolean
}