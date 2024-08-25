import{test,expect} from '@playwright/test';
import { LoginPage } from '../pageObjects/login.po';
import { DeleteContact } from '../pageObjects/deletecontact.po';
const testData=require('../fixtures/loginFixture.json');
const testData1=require('../fixtures/contactfixtures.json');


test.beforeEach(async({page})=>{
    await page.goto('/');
            const login = new LoginPage(page);
            await login.loginForm(testData.validUser.userName , testData.validUser.password);
            await login.validateLogin();
        })
 

test.describe('To delete a contact',()=>{
    test('Deleting works or not', async({page})=>{
        await page.locator('//td[contains(text(),"kaluvai@gmail.com")]').click();
        await page.locator('//button[@id="delete"]').click();
       
    })
})
