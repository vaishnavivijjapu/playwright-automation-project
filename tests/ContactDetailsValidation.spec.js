const { test, expect} = require('@playwright/test');
const {POManager}= require('../Pages/POManager');
const dataset =(require('../Utils/testdata.json'));
const{EmployeeSetup}=require('../Helpers/EmployeeSetup');
let contactpage;
test.beforeEach(async ({ page }) => {

    const poManager = new POManager(page);
    await EmployeeSetup.createEmployee(page, poManager, dataset);
    contactpage = poManager.getContactDetails();
    await contactpage.gotoContactDetails();
    await page.waitForURL(/contactDetails/,{ waitUntil: 'networkidle' });
    await page.locator('.oxd-form-loader').waitFor({ state: 'hidden' });

});
test('@ContactDetails',async({page})=>{
    //await contactpage.verifyaddresstitle();
    await contactpage.verifycontactdetails(dataset.contactdetails.street1,dataset.contactdetails.street2,dataset.contactdetails.city,dataset.contactdetails.state,dataset.contactdetails.zipcode,dataset.contactdetails.country,dataset.contactdetails.worknumber,dataset.contactdetails.workemail,dataset.contactdetails.mobilenumber)
});