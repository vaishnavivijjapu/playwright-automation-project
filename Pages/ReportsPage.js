const { BasePage } = require("./BasePage");
const { expect } = require('@playwright/test');

class ReportsPage extends BasePage{
    constructor(page){
        super(page);
        this.reportstab = page.getByRole('link', { name: 'Report-to' });
        this.addsupervisior = page.locator('.orangehrm-edit-employee-content').filter({ hasText: 'Assigned Supervisors' }) .getByRole('button', { name: 'Add' }).first();
        this.supervisiorname = page.getByPlaceholder("Type for hints...");
        this.supervisiorreportingmethod = page.locator('.oxd-input-group').filter({ hasText: 'Reporting Method' }).locator('.oxd-select-text').first();
        this.reportsave = page.locator('form').getByRole('button',{name:'Save'}).first();
        //this.editButton = page.locator('button').filter({ has: page.locator('i.bi-pencil-fill') }).first();
        //this.deleteButton = page.locator('button').filter({ has: page.locator('i.bi-trash') }).first();
        const supervisorTable = page.locator('.orangehrm-edit-employee-content').filter({ hasText: 'Assigned Supervisors' });
    this.editButton = supervisorTable.locator('i.bi-pencil-fill').locator('..');
    this.deleteButton = supervisorTable.locator('i.bi-trash').locator('..');
       // this.addsubordinate = page.locator('.orangehrm-edit-employee-content').filter({ hasText: ' Add Subordinate' }) .getByRole('button', { name: 'Add' }).last();
       this.addsubordinate = page.locator('div').filter({ has: page.getByRole('heading', { name: 'Assigned Subordinates' }) }).getByRole('button', { name: 'Add' }).nth(1);
        this.subordinatename = page.getByPlaceholder("Type for hints...").last();
        this.subordinatemethod = page.locator('.oxd-input-group').filter({ hasText: 'Reporting Method' }).locator('.oxd-select-text').last();
        this.reportsave1 = page.locator('form').getByRole('button',{name:'Save'}).last();
        const subordinateTable = page.locator('.orangehrm-edit-employee-content').filter({ hasText: 'Assigned Subordinates' });
    this.editButton1 = subordinateTable.locator('i.bi-pencil-fill').locator('..');
    this.deleteButton1 = subordinateTable.locator('i.bi-trash').locator('..');
    this.yesDelete = this.page.getByText('Yes, Delete');
    }
    async clickonreportstab(){
        await this.reportstab.click();
    }
    async verifysupervisior(supervisiorname,supervisiormethod){
        await this.addsupervisior.click();
        await expect(this.supervisiorname).toBeVisible();
        await this.supervisiorname.fill(supervisiorname);
        await this.page.locator('.oxd-autocomplete-dropdown').waitFor();
        await this.page.getByRole('option', { name: /Ravi M B/i }).click();
        await this.supervisiorreportingmethod.click();
        //await this.page.getByRole('option',{name:supervisiormethod,exact:true}).click();
        await this.page.getByRole('option', { name: supervisiormethod,exact: true }).first().click();
        await this.reportsave.click();
        await this.page.locator('.oxd-form-loader').waitFor({ state: 'hidden' });
        await expect(this.editButton).toBeVisible();
        await this.editButton.click();
        //await this.supervisiorname.fill("Perfdfsjle Testervstcqy");
//         await this.supervisiorname.fill("Perfdfsjle");
await this.supervisiorreportingmethod.click();
        await this.page.getByRole('option',{name:"Indirect",exact:true}).click();
//await this.page.getByRole('option').first().click();
        await this.reportsave.click();
        await this.deleteButton.click();
        await this.page.getByRole('button', { name: 'Yes, Delete' }).click();


    }
    async verifysubordinate(supervisiorname,supervisiormethod){
        await this.addsubordinate.click();
        await expect(this.subordinatename).toBeVisible();
        await this.subordinatename.fill(supervisiorname);
        await this.page.locator('.oxd-autocomplete-dropdown').waitFor();
        await this.page.getByRole('option', { name: /Ravi M B/i }).click();
        await this.subordinatemethod.click();
        //await this.page.getByRole('option',{name:supervisiormethod,exact:true}).click();
        await this.page.getByRole('option', { name: supervisiormethod,exact: true }).first().click();
        await this.reportsave1.click();
        await this.page.locator('.oxd-form-loader').waitFor({ state: 'hidden' });
        await expect(this.editButton1).toBeVisible();
        await this.editButton1.click();
        //await this.supervisiorname.fill("Perfdfsjle Testervstcqy");
//         await this.supervisiorname.fill("Perfdfsjle");
await this.subordinatemethod.click();
        await this.page.getByRole('option',{name:"Indirect",exact:true}).click();
//await this.page.getByRole('option').first().click();
        await this.reportsave1.click();
        await this.deleteButton1.click();

    }
}
module.exports = {ReportsPage};