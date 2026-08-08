const { test, expect} = require('@playwright/test');
const {POManager}= require('../Pages/POManager');
const dataset =(require('../Utils/testdata.json'));
const {EmployeeSetup}=require('../Helpers/EmployeeSetup');
let job;
test.beforeEach(async ({ page }) => {

    const poManager = new POManager(page);
    await EmployeeSetup.createEmployee(page, poManager, dataset);
    job = poManager.getJobDetailsPage();
    await job.clickjobtab();
    await page.waitForURL(/viewJobDetails/);
    await job.waitForLoader();

});
test("@VeifyJobDetails",async({page})=>{
    await job.verifyjobdetails(dataset.jobdetails.joineddate,dataset.jobdetails.jobcategory,dataset.jobdetails.subunit,dataset.jobdetails.location,dataset.jobdetails.employementstatus);
});
test('@VerifyContract',async({page})=>{
    await job.verifyjobdetails(dataset.jobdetails.joineddate,dataset.jobdetails.jobcategory,dataset.jobdetails.subunit,dataset.jobdetails.location,dataset.jobdetails.employementstatus);
    await job.verifycontractdetails(dataset.jobdetails.contractstartdate,dataset.jobdetails.contractenddate,dataset.jobdetails.contractdetailsattachment);
});
test('VerifyTerminate',async({page})=>{
    await job.verifyterminate(dataset.jobdetails.terminationdate,dataset.jobdetails.terminationreason,dataset.jobdetails.terminationnote);
    await job.verifyactivatetermination();
});
