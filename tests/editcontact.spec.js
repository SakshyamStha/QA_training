import{test,expect} from '@playwright/test';
import { LoginPage } from '../pageObjects/login.po';
import { EditContact } from '../pageObjects/editcontact.po';
const testData=require('../fixtures/loginFixture.json');
const testData1=require('../fixtures/contactfixtures.json');


test.beforeEach(async({page})=>{
    await page.goto('/');
            const login = new LoginPage(page);
            await login.loginForm(testData.validUser.userName , testData.validUser.password);
            await login.validateLogin();
        })
 


test.describe('To check if the edit works properly or not',()=>{
    test('checking edit', async({page})=>{
        await page.locator('//td[contains(text(),"saxam@gmail.com")]').click();
        await page.locator('//button[@id="edit-contact"]').click();
        const edit = new EditContact(page);
        await edit.editfile(
            testData1.edit.fname,
            testData1.edit.lname,
            testData1.edit.dob,
            testData1.edit.email,
            testData1.edit.phone,
            testData1.edit.adr1,
            testData1.edit.adr2,
            testData1.edit.city,
            testData1.edit.state,
            testData1.edit.postal,
            testData1.edit.country
        );
    })
})

    test.describe('to see if the contact is edited or not',()=>{
        test('checking the edited contact', async({page})=>{
            const edit = new EditContact(page);
            await edit.editconfirm();
        })
    })
    
