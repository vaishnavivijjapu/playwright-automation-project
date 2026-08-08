const { test, expect} = require('@playwright/test');
const {POManager}= require('../Pages/POManager');
const dataset =(require('../Utils/testdata.json'));
const{EmployeeSetup}=require('../Helpers/EmployeeSetup');
let emergencycontact;
test.beforeEach(async ({ page }) => {

    const poManager = new POManager(page);
    await EmployeeSetup.createEmployee(page, poManager, dataset);
    emergencycontact = poManager.getEmergencyContact();
    await Promise.all([page.waitForURL(/viewEmergencyContacts/),emergencycontact.clickEmergencyContactTab()]);
    //await page.waitForURL(/viewEmergencyContacts/,{ waitUntil: 'networkidle' });
    await page.locator('.oxd-form-loader').waitFor({ state: 'hidden' });

});
test("@VerifyEmergencyContact",async({page})=>{
    await emergencycontact.validateemergencycontact(dataset.emergencycontact.Emergencyname,dataset.emergencycontact.Relationshipname,dataset.emergencycontact.Mobile);
});
test("@VerifyRequired",async({page})=>{
    await emergencycontact.validaterequirevalidation();
});