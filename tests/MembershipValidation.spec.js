const { test, expect} = require('@playwright/test');
const {POManager}= require('../Pages/POManager');
const dataset =(require('../Utils/testdata.json'));
const {EmployeeSetup} = require('../Helpers/EmployeeSetup');
let member;
test.beforeEach(async ({ page }) => {

    const poManager = new POManager(page);
    await EmployeeSetup.createEmployee(page, poManager, dataset);
    member = poManager.getMembershipPage();
    await member.clickonmembershiptab();
    await page.waitForURL(/viewMemberships/);
    await member.waitForLoader();

});
test('@VerifyMembershipDetails',async({page})=>{
    await member.verifyaddmembership(dataset.membershipdetails.Membership,dataset.membershipdetails.paidby,dataset.membershipdetails.subscriptionamount,dataset.membershipdetails.Currency1,dataset.membershipdetails.commencedate,dataset.membershipdetails.reneweldate);
});
