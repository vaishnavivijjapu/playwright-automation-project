const { expect} = require('@playwright/test');
class DashboardPage{
    constructor(page){
        this.page=page;
        this.dashboardtitle = page.locator("h6");
        this.search = page.getByPlaceholder("Search");
        this.admin = page.getByRole('link', {name : "Admin"});
        this.pim = page.getByRole('link', {name : "PIM"});
        this.time = page.getByRole('link',{name:"Time"});
        this.userprofiledropdown = page.locator(".oxd-userdropdown-name");
        this.about = page.locator(".oxd-userdropdown-link").first();
        this.timeatwork = page.getByText("Time at Work");
        this.actions=page.getByText("My Actions");
        this.quicklaunch = page.getByText("Quick Launch");
        this.buzzlatestphoto = page.getByText("Buzz Latest Posts");
        this.employeeonleavetoday = page.getByText("Employees on Leave Today");
        this.employeedistribution = page.getByText("Employee Distribution by Sub Unit");
        this.employeedistributionlocation = page.getByText("Employee Distribution by Location");
        this.sidemenu = page.locator(".oxd-main-menu-item");
    }
    async verifydashboardtitle(){
        await expect(this.dashboardtitle).toHaveText("Dashboard");
        await expect(this.userprofiledropdown).toBeVisible();
        await this.userprofiledropdown.click();
        //await this.about.click();
        //await expect(this.about).toHaveText("About");
        await expect(this.timeatwork).toBeVisible();
        await expect(this.actions).toBeVisible();
        await expect(this.quicklaunch).toBeVisible();
        await expect(this.sidemenu).toHaveCount(12);
        await expect(this.buzzlatestphoto).toBeVisible();
        await expect(this.employeeonleavetoday).toBeVisible();
        await expect(this.employeedistribution).toBeVisible();
        await expect(this.employeedistributionlocation).toBeVisible();

    }
    async clicksearch(){
        await this.search.fill("PIM");
       

    }
    async clickadmin(){
        await this.admin.click();
    }
    async clickpim(){
        await this.pim.click();
    }
    async clicktime(){
        await this.time.click();
    }


}
module.exports = {DashboardPage};