const { BasePage } = require("./BasePage");
const { expect } = require('@playwright/test');

class SalaryPage extends BasePage{
    constructor(page){
        super(page);
        this.salarytab= page.getByRole('link', { name: 'Salary' });
        this.addSalary = page.locator('.orangehrm-edit-employee-content').filter({ hasText: 'Assigned Salary Components' }) .getByRole('button', { name: 'Add' }).first();
        this.salarycomponent = page.locator('.oxd-input-group').filter({ hasText: 'Salary Component' }).locator('input');
        this.paygrade = page.locator('.oxd-input-group').filter({ hasText: 'Pay Grade' }).locator('.oxd-select-text');
        this.payfrequency= page.locator('.oxd-input-group').filter({ hasText: 'Pay Frequency' }) .locator('.oxd-select-text');
        this.currency = page.locator('.oxd-input-group').filter({ hasText: 'Currency' }) .locator('.oxd-select-text');
        this.amount = page.locator('.oxd-input-group').filter({ hasText: 'Amount' }).locator('input');
        this.salarycomment = page.locator('.oxd-textarea.oxd-textarea--active.oxd-textarea--resize-vertical');
        this.toggledeposit = page.locator('.oxd-switch-input');
        this.accountnumber = page.locator('.oxd-input-group').filter({ hasText: 'Account Number' }).locator('input');
        this.amount2 = page.locator('.oxd-input-group').filter({ hasText: 'Amount' }).locator('input').last();
        this.routingnumber = page.locator('.oxd-input-group').filter({ hasText: 'Routing Number' }).locator('input');
        this.accounttype = page.locator('.oxd-input-group').filter({ hasText: 'Account Type' }).locator('.oxd-select-text');
        this.salarysave = page.locator('form').getByRole('button',{name:'Save'}).last();


    }
    async clickonsalarytab(){
        await this.salarytab.click();
    }
    async verifysalary(salarycomponent,paygrade1,payfrequency,currency,amount,Comment){
        await this.addSalary.click();
        await expect(this.salarycomponent).toBeVisible();
        await this.salarycomponent.fill(salarycomponent);
        await this.paygrade.click();
        await this.page.getByRole('option',{name:paygrade1,exact:true}).click();
        await this.payfrequency.click();
        await this.page.getByRole('option',{name:payfrequency,exact:true}).click();
        await this.currency.click();
        await this.page.getByRole('option',{name:currency,exact:true}).click();
        await expect(this.amount).toBeVisible();
        await this.amount.fill(amount);
        await expect(this.salarycomment).toBeVisible();
        await this.salarycomment.fill(Comment);
       // await this.salarysave.click();
    }
    async verifydepositdetails(accountnumber,accounttype,routingnumber,amount2){
        await this.toggledeposit.click();
        await expect(this.accountnumber).toBeVisible();
        await this.accountnumber.fill(accountnumber);
        await this.accounttype.click();
        await this.page.getByRole('option',{name:accounttype,exact:true}).click();
        await expect(this.routingnumber).toBeVisible();
        await this.routingnumber.fill(routingnumber);
        await expect(this.amount2).toBeVisible();
        await this.amount2.fill(amount2);
        await this.salarysave.click();

    }
}
module.exports = {SalaryPage};