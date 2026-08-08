const { test, expect} = require('@playwright/test');
const {POManager}= require('../Pages/POManager');
const dataset =(require('../Utils/testdata.json'));
const{EmployeeSetup}=(require('../Helpers/EmployeeSetup'));
let immigration;
test.beforeEach(async ({ page }) => {

    const poManager = new POManager(page);
    await EmployeeSetup.createEmployee(page, poManager, dataset);
    await page.waitForURL(/viewPersonalDetails/);
    immigration = poManager.getImmigrationDetails();
    await immigration.clickimmigrationtab();
    await page.waitForURL(/viewImmigration/);
    await immigration.waitForLoader();

});
test('@VerifyImmigrationPage',async({page})=>{
    await immigration.verifyimmigrationdetails(dataset.immigrationdetails.PassportNumber,dataset.immigrationdetails.PassportIssueDate,dataset.immigrationdetails.PassportExpiryDate,dataset.immigrationdetails.Eligiblestatus,dataset.immigrationdetails.Issuedby,dataset.immigrationdetails.ReviewDate,dataset.immigrationdetails.Comments)
});