const { expect } = require('@playwright/test');
class ContactDetails{
    constructor(page){
        this.page=page;
        //this.addresstitle = page.locator('.orangehrm-sub-title');
        this.street1 = page.locator('.oxd-input-group').filter({ hasText: 'Street 1' }).locator('input');
        this.street2 = page.locator('.oxd-input-group').filter({ hasText: 'Street 2' }).locator('input');
        this.city = page.locator('.oxd-input-group').filter({ hasText: 'City' }).locator('input');
        this.state = page.locator('.oxd-input-group').filter({hasText : "State/Province"}).locator('input');
        this.zipcode=page.locator('.oxd-input-group').filter({hasText : "Zip/Postal Code"}).locator('input');
        this.country = page.locator('.oxd-input-group').filter({ hasText: 'Country' }).locator('.oxd-select-text');
        this.mobilenumber = page.locator('.oxd-input-group').filter({hasText : "Mobile"}).locator('input');
        this.worknumber = page.locator('.oxd-input-group').filter({hasText: /^Work$/ }).locator('input');
        this.workemail = page.locator('.oxd-input-group').filter({hasText : "Work Email"}).locator('input');
        this.savecontactdetails = page.locator('form').getByRole('button',{name:'Save'}).last();
        this.contactDetailsTab =page.getByRole('link', { name: 'Contact Details' });
        
    }
    // async verifyaddresstitle(){
    //     await expect(this.addresstitle).toBeVisible();
    // }
    async gotoContactDetails(){
        await this.contactDetailsTab.click();
    }
    async verifycontactdetails(street1,street2,city,state,zipcode,country,worknumber,workemail,mobilenumber){
        await expect(this.street1).toBeVisible();
        await this.street1.fill(street1);
        await expect(this.street2).toBeVisible();
        await this.street2.fill(street2);
        await expect(this.city).toBeVisible();
        await this.city.fill(city);
        await expect(this.state).toBeVisible();
        await this.state.fill(state);
        await expect(this.zipcode).toBeVisible();
        await this.zipcode.fill(zipcode);
        await this.country.click();
        await this.page.getByRole('option',{name:country,exact:true}).click();
        await expect(this.mobilenumber).toBeVisible();
        await this.mobilenumber.fill(mobilenumber);
        await expect(this.worknumber).toBeVisible();
        await this.worknumber.fill(worknumber);
        await expect(this.workemail).toBeVisible();
        await this.workemail.fill(workemail);
        await this.savecontactdetails.click();

    }
}
module.exports = {ContactDetails};