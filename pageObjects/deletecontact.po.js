const{expect}= require("@playwright/test");
const testData1=require('../fixtures/contactfixtures.json');

exports.DeleteContact = class DeleteContact{
    constructor(page){
        this.page=page;
        this.clicktodel='//td[contains(text(),"kaluvai@gmail.com")]';
        this.delete='//button[@id="delete"]';
        
    }

    
}