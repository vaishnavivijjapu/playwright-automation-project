const { expect } = require('@playwright/test');
class DependantsPage{
    constructor(page){
        this.page=page;
        this.adddependants =page.getByRole('button', { name: 'Add' }).nth(0);
        //page.locator('.orangehrm-action-header').filter({ hasText: 'Assigned Dependents' }).getByRole('button', { name: 'Add', exact: true });
        this.dependantname = page.locator('.oxd-input-group').filter({ hasText: 'Name' }).locator('input');
        this.dependantrelationship = page.locator('.oxd-select-text-input');
        this.specifydependant = page.locator('.oxd-input-group').filter({ hasText: 'Please Specify' }).locator('input');
        this.dependantdob = page.getByPlaceholder('yyyy-dd-mm');
        this.dependantsave = page.locator('form').getByRole('button',{name:'Save'}).last();
        this.dependenttab = page.getByRole('link', { name: 'Dependents' });
    }
    async clickdependanttab(){
        await this.dependenttab.click();
    }
    async verifydependantdetails(DependantName,DependentRelation,Dob,SpecifyDependant){
//await expect(this.adddependants).toBeEnabled({ timeout: 10000 });
        await this.adddependants.click();
        await expect(this.dependantname).toBeVisible();
        await this.dependantname.fill(DependantName);
        await expect(this.dependantrelationship).toBeVisible();
        await this.dependantrelationship.click();
        const relationshipOption = await this.page.getByRole('option',{name:DependentRelation,exact:true});
        await expect(relationshipOption).toBeVisible({ timeout: 10000 });
await relationshipOption.click();
        await expect(this.specifydependant).toBeVisible();
        await this.specifydependant.fill(SpecifyDependant)
        await this.dependantdob.fill(Dob);
        await this.dependantsave.click();
    }
    async waitForLoader() {
        await this.page.locator('.oxd-form-loader').waitFor({ state: 'hidden' , timeout: 15000 });
    }
}
module.exports = {DependantsPage};