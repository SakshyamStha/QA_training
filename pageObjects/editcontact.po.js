const{expect}= require("@playwright/test");
const testData1=require('../fixtures/contactfixtures.json');

exports.EditContact = class EditContact{
    constructor(page){
        this.page=page;
        this.clicktoedit='//td[contains(text(),"saxam@gmail.com")]';
        this.edit='//button[@id="edit-contact"]';
        this.submit='//button[@id="submit"]';
        this.cancel='//button[@id="cancel"]';
        this.return='//button[@id="return"]';

        this.fname='//input[@id="firstName"]';
        this.lname='//input[@id="lastName"]';
        this.dob='//input[@id="birthdate"]';
        this.email='//input[@id="email"]';
        this.phone='//input[@id="phone"]';
        this.adr1='//input[@id="street1"]';
        this.adr2='//input[@id="street2"]';
        this.city='//input[@id="city"]';
        this.state='//input[@id="stateProvince"]';
        this.postal='//input[@id="postalCode"]';
        this.country='//input[@id="country"]';


    }

    async editfile(fname, lname, dob, email, phone, adr1, adr2, city, state, postal, country){
        await this.page.locator(this.fname).fill(fname);
        await this.page.locator(this.lname).fill(lname);
        await this.page.locator(this.dob).fill(dob);
        await this.page.locator(this.email).fill(email);
        await this.page.locator(this.phone).fill(phone);
        await this.page.locator(this.adr1).fill(adr1);
        await this.page.locator(this.adr2).fill(adr2);
        await this.page.locator(this.city).fill(city);
        await this.page.locator(this.state).fill(state);
        await this.page.locator(this.postal).fill(postal);
        await this.page.locator(this.country).fill(country);
        await this.page.locator(this.submit).click();
        await this.page.locator(this.cancel).click();
        await this.page.locator(this.return).click();
    }

    async editconfirm(){
        const sth = this.page.locator(`//td[contains(text(),"${testData1.edit.fname}")]`);
        await expect(sth).toBeVisible();

    }

}