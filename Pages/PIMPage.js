const { expect } = require('@playwright/test');
class PIMPage{
    constructor(page){
        this.page=page;
        this.pimtitle = page.locator(".oxd-topbar-header-title");
        this.configuration = page.locator('.oxd-topbar-body-nav-tab').first();
        this.employeelist = page.getByRole('link', { name: 'Employee List' });
        this.addemployee = page.getByText("Add Employee");
        this.reports = page.getByText("Reports");
        this.help = page.locator(".oxd-icon.bi-question-lg");;


    }
    async verifypimtitle(){
        await expect(this.pimtitle).toHaveText("PIM");
    }
    async clickconfiguration(){
        await expect(this.configuration).toBeVisible();
        await this.configuration.click();
    }
    async clickemployeelistadd(){
        await expect(this.employeelist).toBeVisible();
        await this.employeelist.click();
    }
    async clickaddemployee(){
        await expect(this.addemployee).toBeVisible();
        await this.addemployee.click();
    }
    async clickreports(){
        await expect(this.reports).toBeVisible();
        await this.reports.click();
    }
    async clickhelp(){
        //await expect(this.help).toBeVisible();
        //Browser, please listen for any new page/tab that gets opened.
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.help.click()
        ]);
        
        await newPage.waitForLoadState();
        await expect(newPage).toHaveURL(/starterhelp.orangehrm.com/);
    }
}
module.exports = {PIMPage};