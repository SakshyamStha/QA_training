import{test,expect} from '@playwright/test';
import { LoginPage } from '../pageObjects/login.po';
import { AddContact } from '../pageObjects/addcontact.po';
import { EditContact } from '../pageObjects/editcontact.po';
const testData=require('../fixtures/loginFixture.json');
const testData1=require('../fixtures/contactfixtures.json');


test.beforeEach(async({page})=>{
    await page.goto('/');
            const login = new LoginPage(page);
            await login.loginForm(testData.validUser.userName , testData.validUser.password);
            await login.validateLogin();
        })
 

test.describe('To add a new contact',()=>{
    test('Adding a new contact', async({page})=>{
        await page.locator('//button[@id="add-contact"]').click();
        const add = new AddContact(page);
        await add.contactform(
            testData1.add.fname,
            testData1.add.lname,
            testData1.add.dob,
            testData1.add.email,
            testData1.add.phone,
            testData1.add.adr1,
            testData1.add.adr2,
            testData1.add.city,
            testData1.add.state,
            testData1.add.postal,
            testData1.add.country
        );
    })
})

test.describe('to see if the new contact is added or not',()=>{
    test('checking the added contact', async({page})=>{
        const add = new AddContact(page);
        await page.locator('//td[contains(text(),"saxam@gmail.com")]').click();
        await add.AddedContact(testData1.add.fname,
            testData1.add.lname,
            testData1.add.dob);
    })
})

test.only('Contact edit Test', async ({page,request})=>{
    await page.locator('//td[contains(text(),"saxam@gmail.com")]').click();
    const Data = {
        "fname":"sakshyam",
        "lname":"shrestha",
        "dob":"1999-08-11",
        "email":"saxam@gmail.com",
        "phone":"1234567898",
        "adr1":"ktm",
        "adr2":"pkr",
        "city":"ktm",
        "state":"04",
        "postal":"11111",
        "country":"nepal"
    };
    const contact = new EditContact(page);
    accessToken = await authenticateUser(testData.validUser.userName,testData.validUser.password);
    await createEntity(Data, accessToken,'/contacts', (request));
    page.reload();
    await contact.viewContact();
    await contact.contactEdit(testData1.edit.fname);

    const id = await getEntity(accessToken,'/contacts','200',(request));
    await deleteEntity(accessToken, /contacts/(id),(request));
    await validateEntry(accessToken), /contacts/(id),'404',(request);
})

