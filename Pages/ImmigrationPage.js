const { expect } = require('@playwright/test');
const { BasePage } = require('./BasePage');
class ImmigrationPage extends BasePage{
    constructor(page){
        //this.page = page;
        super(page);
        this.immigrationtab = page.getByRole('link', { name: 'Immigration' });
        this.addimmigration = page.getByRole('button', { name: 'Add' }).nth(0);
        this.documentoption = page.getByText('Passport', { exact: true });
        this.number = page.locator('.oxd-input-group').filter({ hasText: 'Number' }).locator('input');
        this.issuedate = page.locator('.oxd-input-group').filter({ hasText: 'Issued Date' }).locator('input');
        this.expirydate = page.locator('.oxd-input-group').filter({ hasText: 'Expiry Date' }).locator('input');
        this.eligiblestatus = page.locator('.oxd-input-group').filter({ hasText: 'Eligible Status' }).locator('input');
        this.issuedby = page.locator('.oxd-select-text-input');
        this.eligiblereviewdate = page.locator('.oxd-input-group').filter({ hasText: 'Eligible Review Date' }).locator('input');
        this.comments = page.getByPlaceholder('Type Comments here');
        this.immigrationsave = page.locator('form').getByRole('button',{name:'Save'}).last();
    }
    async clickimmigrationtab(){
        await this.immigrationtab.click();
    }
    async verifyimmigrationdetails(PassportNumber,PassportIssueDate,PassportExpiryDate,Eligiblestatus,Issuedby,ReviewDate,Comments){
        await this.addimmigration.click();
        await expect(this.documentoption).toBeVisible();
        await this.documentoption.click();
        await expect(this.number).toBeVisible();
        await this.number.fill(PassportNumber);
        await expect(this.issuedate).toBeVisible();
        await this.issuedate.fill(PassportIssueDate);
        await expect(this.expirydate).toBeVisible();
        await this.expirydate.fill(PassportExpiryDate);
        await expect(this.eligiblestatus).toBeVisible();
        await this.eligiblestatus.fill(Eligiblestatus);
        await this.issuedby.click();
        await this.page.getByRole('option',{name:Issuedby,exact:true}).click();
        await expect(this.eligiblereviewdate).toBeVisible();
        await this.eligiblereviewdate.fill(ReviewDate);
        await expect(this.comments).toBeVisible();
        await this.comments.fill(Comments);
        await this.immigrationsave.click();

    }
    

}
module.exports = {ImmigrationPage};