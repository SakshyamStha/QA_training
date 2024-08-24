const{expect}= require("@playwright/test");

exports.AddContact = class AddContact{
    constructor(page){
        this.page=page;
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
        this.submitbtn='//button[@id="submit"]';
        this.cancelbtn='//button[@id="cancel"]';

        //for the confirmation of new contact
        this.newcontact='//td[contains(text(),"saxam@gmail.com")]';
    }

    async contactform(fname, lname, dob, email, phone, adr1, adr2, city, state, postal, country){
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
        await this.page.locator(this.submitbtn).click();
        await this.page.locator(this.cancelbtn).click();
    }

    async AddedContact() {
        const added = this.page.locator(this.newcontact);
        await expect(added).toBeVisible();
    }
    
}