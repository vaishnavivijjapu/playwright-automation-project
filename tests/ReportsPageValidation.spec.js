const { test, expect} = require('@playwright/test');
const {POManager}= require('../Pages/POManager');
const dataset =(require('../Utils/testdata.json'));
const{EmployeeSetup}=require('../Helpers/EmployeeSetup');
let report;
test.beforeEach(async ({ page }) => {

    const poManager = new POManager(page);
    await EmployeeSetup.createEmployee(page, poManager, dataset);
    report = poManager.getReportsPage();
    await report.clickonreportstab();
    await page.waitForURL(/viewReportToDetails/);
    await report.waitForLoader();

});
test("@VerifySupervisior",async({page})=>{
    await report.verifysupervisior(dataset.reportdetails.supervisiorname,dataset.reportdetails.supervisiormethod);
    await report. verifysubordinate(dataset.reportdetails.supervisiorname,dataset.reportdetails.supervisiormethod);
});