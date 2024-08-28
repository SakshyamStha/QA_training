const axios = require('axios');
import {expect} from '@playwright/test';
const cookie = require ('cookie');

let apiUrl
async function getApiBaseUrl(){
    apiurl =process.env.API_BASE_URL;
    if(!apiUrl){
        apiUrl=''
    }
}

async function createEntity(userData, accessToken, module, {request}){
    const apiurl = await getApiBaseUrl();
    const headers = {
        'Content-Type' : 'application/json',
        'Accept': 'application/json',
        'authorization': "bearer "+accessToken,
    };
    const response = await request.post(apiUrl + module,{
        headers,
        data: JSON.stringify(userData),
    });

    const responseBody = await response.json();
    const statusCOde = response.status();
    expect(statusCOde).toBe(201);
}


async function authenticateUser(username, password, {request}) {
    const apiurl= await getApiBaseUrl();
    const headers = {
        'Content-Type': 'application/json',
    };
    const requestBody={
        email:username,
        password: password,
    };
    const response = await request.post(apiurl + "user/login",{
        data: JSON.stringify(requestBody),
        headers,
    });

    const statusCode = response.status();
    expect (statusCode).toBe(200);
    const cookieHeader = response.headers()['set-cookie'];
    expect (cookieHeader).toBeDefined();

    let token;
    if(typeof cookieHeader === 'string'){
        if(cookieHeader.includes('tokens')){
            token = cookieHeader.split('token')[1].split(';')[0].trim();
        }
    }else if(Array.isArray(cookieHeader)){
            for (const cookie of cookieHeader){
                if(cookie.includes('token')){
                    token = cookie.split('token=')[1].split(';')[0].trim();
                    break;
                }
            }
        } else{
            console.log("Unexpected format for set-cookie header");
        }
        expect(token).toBeDefined();
        return token;

}
