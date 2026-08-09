const { BasePage } = require("./BasePage")
const { expect } = require('@playwright/test');

class EmployeeDetailsPage extends BasePage{
    constructor(page){
        super(page);
        this.employeename1 = page.getByPlaceholder("Type for hints...").first();
        this.employeeid1 = page.locator('.oxd-input-group').filter({ hasText: 'Employee Id' }).locator('input');
        this.employeestatus1 = page.locator('.oxd-input-group').filter({ hasText: 'Employment Status' }).locator('.oxd-select-text');
        this.include = page.locator('.oxd-input-group').filter({ hasText: 'Include' }).locator('.oxd-select-text');
        this.supervisiorname = page.getByPlaceholder("Type for hints...").nth(1);
        this.jobtitle1 = page.locator('.oxd-input-group').filter({ hasText: 'Job Title' }).locator('.oxd-select-text');
        this.subunit1 = page.locator('.oxd-input-group').filter({ hasText: 'Sub Unit' }).locator('.oxd-select-text');
        this.searchButton = page.getByRole('button',{name:'Search'});
        this.resetButton = page.getByRole('button',{name:'Reset'});

        
    }
    async verifyemployeevalidation(firstname1,employeeId,employementstatus,includes,supervisiorname,workjobtitle,subunit){
        await expect(this.employeename1).toBeVisible();
        await this.employeename1.fill(firstname1);
        // await this.page.locator('.oxd-autocomplete-dropdown').waitFor();
        // await this.page.getByRole('option', { name: /Charles Carter/i }).click();
        await this.page.locator('.oxd-autocomplete-dropdown').getByRole('option').filter({ hasText: firstname1 }) .first().click();
        await expect(this.employeeid1).toBeVisible();
        await this.employeeid1.fill(employeeId);
        await this.employeestatus1.click();
        await this.page.getByRole('option',{name:employementstatus,exact:true}).click();
        await this.include.click();
        await this.page.getByRole('option',{name:includes,exact:true}).click();
        await expect(this.supervisiorname).toBeVisible();
        await this.supervisiorname.fill(supervisiorname);
        // await this.page.locator('.oxd-autocomplete-dropdown').waitFor();
        // await this.page.getByRole('option', { name: /Ravi M B/i }).click();
        await this.page.locator('.oxd-autocomplete-dropdown').getByRole('option').filter({ hasText: supervisiorname }) .first().click();
        await this.jobtitle1.click();
        await this.page.getByRole('option',{name:workjobtitle,exact:true}).click();
        await this.subunit1.click();
        await this.page.getByRole('option',{name:subunit,exact:true}).click();
    }
    async verifysearch(){
        await this.searchButton.click();
    }
    async verifyreset(){
        await this.resetButton.click();
    }
}
module.exports = {EmployeeDetailsPage};