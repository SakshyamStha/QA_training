import{test,expect} from '@playwright/test';
import { LoginPage } from '../pageObjects/login.po';
const testData=require('../fixtures/loginFixture.json');


test.beforeEach(async({page})=>{
    await page.goto('/');

})

// test('Login using valid username and password', async({page})=>{
//     const login = new LoginPage(page);
//     await login.loginForm('standard_user', 'secret_sauce');
//     //await login.verifyValidLogin();

// })

test.describe("Valid login username and password",() =>{
    test('Login using valid username and valid password', async({page})=>{
        const login = new LoginPage(page);
        await login.loginForm(testData.validUser.userName , testData.validUser.password);
        await login.validateLogin();
        
    })
})


// test.describe("inValid login username and password",() =>{
//     test('Login using invalid username and invalid password', async({page})=>{
//         const login = new LoginPage(page);
//         await login.loginForm(testData.invalidUser.userName , testData.invalidUser.password);
        
//     })
// })


// test.describe("Login validation ",() =>{
//     test('Login validation and desired site is open', async({page})=>{
//         const login = new LoginPage(page);
//        // await login.loginForm(testData.validUser.userName , testData.validUser.password);
//         await login.validateLogin(testData.successful_login.success);
        
//     })
// })


