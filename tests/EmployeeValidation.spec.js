const { test, expect} = require('@playwright/test');
const {POManager}= require('../Pages/POManager');
const dataset =(require('../Utils/testdata.json'));
let loginpage;
let dashboardpage;
let pimpage1;
//let add1;
let employeeinfo;
test.beforeEach(async ({ page }) => {

    const poManager = new POManager(page);
    loginpage = poManager.getLoginPage();

    await loginpage.gotourl();
    await loginpage.verifycredentials(dataset.login.username,dataset.login.password);
    dashboardpage = poManager.getDashboardPage();
    await dashboardpage.clickpim();
    pimpage1 = poManager.getPIMPage();
    await pimpage1.clickemployeelistadd();
    //add1 = poManager.getAddEmployeePage();
    // await add1.adddetails(dataset.firstname1,dataset.middlename1,dataset.lastname1);
    // await add1.addimages(dataset.imagepath);
    // await add1.saverecord();
    // await page.waitForURL(/viewPersonalDetails/);
    employeeinfo = poManager.getEmployeeDetailsPage();
    //await Promise.all([page.waitForURL(/viewEmergencyContacts/),emergencycontact.clickEmergencyContactTab()]);
    //await page.waitForURL(/viewEmergencyContacts/,{ waitUntil: 'networkidle' });
    await employeeinfo.waitForLoader();


});
test("VerifyEmployeeSearchValidation",async({page})=>{
    await employeeinfo.verifyemployeevalidation(dataset.employeeDetails.firstname1,dataset.employeelistdetails.employeeId,dataset.jobdetails.employementstatus,dataset.employeelistdetails.includes,dataset.reportdetails.supervisiorname,dataset.qualificationdetails.workjobtitle,dataset.jobdetails.subunit);
    await employeeinfo.verifysearch();
});
test("VerifyEmployeeResetValidation",async({page})=>{
    await employeeinfo.verifyemployeevalidation(dataset.employeeDetails.firstname1,dataset.employeelistdetails.employeeId,dataset.jobdetails.employementstatus,dataset.employeelistdetails.includes,dataset.reportdetails.supervisiorname,dataset.qualificationdetails.workjobtitle,dataset.jobdetails.subunit);
    await employeeinfo.verifyreset();
});
