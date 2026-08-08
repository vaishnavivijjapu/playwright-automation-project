const { BasePage } = require("./BasePage");

class MembershipPage extends BasePage{
    constructor(page){
        super(page);
        this.membershiptab = page.getByRole('link', { name: 'Memberships' });
        this.addmembership = page.locator('.orangehrm-edit-employee-content').filter({ hasText: 'Assigned Memberships' }) .getByRole('button', { name: 'Add' }).first();
        this.membership = page.locator('.oxd-input-group').filter({ hasText: 'Membership' }).locator('.oxd-select-text');
        this.subscriptionpaidby = page.locator('.oxd-input-group').filter({ hasText: 'Subscription Paid By' }).locator('.oxd-select-text');
        this.subscriptionamount = page.locator('.oxd-input-group').filter({ hasText: 'Subscription Amount' }).locator('input');
        this.subscriptioncurrency = page.locator('.oxd-input-group').filter({ hasText: 'Currency' }).locator('.oxd-select-text');
       this.commencedate = page.locator('.oxd-input-group').filter({ hasText: 'Subscription Commence Date' }).locator('input');
        this.reneweldate = page.locator('.oxd-input-group').filter({ hasText: 'Subscription Renewal Date' }).locator('input');
        this.membershipsave = page.locator('form').getByRole('button',{name:'Save'});

    }
    async clickonmembershiptab(){
        await this.membershiptab.click();
    }
    async verifyaddmembership(Membership,paidby,subscriptionamount,Currency1,commencedate,reneweldate){
        await this.addmembership.click();
        await this.membership.click();
        await this.page.getByRole('option',{name:Membership,exact:true}).click();
        await this.subscriptionpaidby.click();
        await this.page.getByRole('option',{name:paidby,exact:true}).click();
        await this.subscriptionamount.fill(subscriptionamount)
        await this.subscriptioncurrency.click();
        await this.page.getByRole('option',{name:Currency1,exact:true}).click();
        await this.commencedate.fill(commencedate);
        await this.reneweldate.fill(reneweldate);
        await this.membershipsave.click();



    }
}
module.exports = {MembershipPage};