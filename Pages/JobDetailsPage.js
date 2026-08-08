const { expect } = require('@playwright/test');
const { BasePage } = require('./BasePage');
class JobDetailsPage extends BasePage{
    constructor(page){
        //this.page=page;
        super(page);
        this.jobtab = page.getByRole('link', { name: 'Job' });
        this.joineddate =  page.locator('.oxd-input-group').filter({ hasText: 'Joined Date' }).locator('input');
        this.jobtitle = page.locator('.oxd-input-group').filter({ hasText: 'Job Title' }).locator('.oxd-select-text');
        this.jobcategory = page.locator('.oxd-input-group').filter({ hasText: 'Job Category' }).locator('.oxd-select-text');
        this.subunit = page.locator('.oxd-input-group').filter({ hasText: 'Sub Unit' }).locator('.oxd-select-text');
        this.location = page.locator('.oxd-input-group').filter({ hasText: 'Location' }).locator('.oxd-select-text');
        this.employmentstatus = page.locator('.oxd-input-group').filter({ hasText: 'Employment Status' }).locator('.oxd-select-text');
        this.togglecontract = page.locator('.oxd-switch-wrapper .oxd-switch-input');
        this.contractstartdate = page.locator('.oxd-input-group').filter({ hasText: 'Contract Start Date' }).locator('input');
        this.contractenddate = page.locator('.oxd-input-group').filter({ hasText: 'Contract End Date' }).locator('input');
        this.contractdetailsattachment = page.locator('input[type="file"]');
        this.jobsave = page.locator('form').getByRole('button',{name:'Save'}).last();
        this.terminateemployment = page.getByRole('button',{name : 'Terminate Employment'});
        this.terminationdate = page.locator('.oxd-dialog-container-default').locator('.oxd-input-group').filter({ hasText: 'Termination Date' }).locator('input');
        this.terminationreason = page.locator('.oxd-dialog-container-default').locator('.oxd-input-group').filter({ hasText: 'Termination Reason' }) .locator('.oxd-select-text');
        this.terminationnote = page.getByPlaceholder('Type here');
        this.terminatesave = page.locator('.oxd-dialog-container-default').getByRole('button', { name: 'Save' });
        this.activatedepartment = page.getByRole('button',{name : 'Activate Employment'});
        
    }
    async clickjobtab(){
        await this.jobtab.click();
    }
    async verifyjobdetails(joineddate,jobcategory,subunit,location,employementstatus){
        await expect( this.joineddate).toBeVisible();
        await this.joineddate.fill(joineddate);
        // await this.jobtitle.click();
        // await this.page.getByRole('option',{name:jobtitle,exact:true}).click();
        await this.jobcategory.click();
        await this.page.getByRole('option',{name:jobcategory,exact:true}).click();
        await this.subunit.click();
        await this.page.getByRole('option',{name:subunit,exact:true}).click();
        await this.location.click();
        await this.page.getByRole('option',{name:location,exact:true}).click();
        await this.employmentstatus.click();
        await this.page.getByRole('option',{name:employementstatus,exact:true}).click();
        await this.jobsave.click();
    }
    async verifycontractdetails(contractstartdate,contractenddate,contractdetailsattachment){
        await this.togglecontract.click();
        await expect( this.contractstartdate).toBeVisible();
        await this.contractstartdate.fill(contractstartdate);
        await expect( this.contractenddate).toBeVisible();
        await this.contractenddate.fill(contractenddate);
        await this.contractdetailsattachment.setInputFiles(contractdetailsattachment);
        await this.jobsave.click();

    }
    async verifyterminate(terminationdate,terminationreason,terminationnote){
        await expect(this.terminateemployment).toBeVisible();
        await this.terminateemployment.click();
        await expect( this.terminationdate).toBeVisible();
        await this.terminationdate.fill(terminationdate);
        await this.terminationreason.click();
        await this.page.getByRole('option',{name:terminationreason,exact:true}).click();
        //await expect(this.terminationnote).toBeVisible();
        await this.terminationnote.fill(terminationnote);
        await this.terminatesave.click();

    }
    async verifyactivatetermination(){
        await this.activatedepartment.click();
    }
}
module.exports = {JobDetailsPage};