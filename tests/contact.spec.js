import{test,expect} from '@playwright/test';
import { LoginPage } from '../pageObjects/login.po';
import { AddContact } from '../pageObjects/addcontact.po';
const testData=require('../fixtures/loginFixture.json');
const testData1=require('../fixtures/contactfixtures.json');


test.beforeEach(async({page})=>{
    await page.goto('/');
    
        
            const login = new LoginPage(page);
            await login.loginForm(testData.validUser.userName , testData.validUser.password);
            await login.validateLogin(testData.successful_login.success);

            
        })
 



// test.describe('To add a new contact',()=>{
//     test('Adding a new contact', async({page})=>{
//         await page.locator('//button[@id="add-contact"]').click();
//         const add = new AddContact(page);
//         await add.contactform(
//             testData1.add.fname,
//             testData1.add.lname,
//             testData1.add.dob,
//             testData1.add.email,
//             testData1.add.phone,
//             testData1.add.adr1,
//             testData1.add.adr2,
//             testData1.add.city,
//             testData1.add.state,
//             testData1.add.postal,
//             testData1.add.country
//         );
//     })
// })

test.describe('to see if the new contact is added or not',()=>{
    test('checking the added contact', async({page})=>{
        const add = new AddContact(page);
        await add.AddedContact();
        
        
        
   
    })
})

