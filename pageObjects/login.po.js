const{expect}= require("@playwright/test");

exports.LoginPage = class LoginPage{
    constructor(page){
        this.page = page;
        this.usernameInput = '//input[@id="email"]';
        this.passwordInput = '//input[@id="password"]';
        this.loginButton = '//button[@id="submit"]';
        this.loginValidation = '//p[contains(text(),"Click on any contact to view the Contact Details")]';
    }

    async loginForm(username,password){
        await this.page.locator(this.usernameInput).fill(username);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.loginButton).click();
        //this.page.waitforTimeout(3000);
    }

    async validateLogin(){
        const sth = this.page.locator(this.loginValidation);
        await expect(sth).toBeVisible();
        
    }
}