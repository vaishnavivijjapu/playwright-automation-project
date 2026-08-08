const { test, expect} = require('@playwright/test');
const {POManager}= require('../Pages/POManager');
const dataset =JSON.parse(JSON.stringify(require('../Utils/testdata.json')));
let loginpage;
let dashboardpage;
let pimpage1;
let add1;
test.beforeEach(async ({ page }) => {

    const poManager = new POManager(page);
    loginpage = poManager.getLoginPage();

    await loginpage.gotourl();
    await loginpage.verifycredentials(dataset.login.username,dataset.login.password);
    dashboardpage = poManager.getDashboardPage();
    await dashboardpage.clickpim();
    pimpage1 = poManager.getPIMPage();
    await pimpage1.clickaddemployee();
    add1 = poManager.getAddEmployeePage();
});
test("@AddEmployeeTitle",async({page})=>{
    await add1.verifyaddEmployee();
    await add1.adddetails(dataset.employeeDetails.firstname1,dataset.employeeDetails.middlename1,dataset.employeeDetails.lastname1);
});
test("@UploadImage",async({page})=>{
    await add1.addimages(dataset.employeeDetails.imagepath);
});
test("@E2Etestcase",async({page})=>{
    await add1.adddetails(dataset.employeeDetails.firstname1,dataset.employeeDetails.middlename1,dataset.employeeDetails.lastname1);
    await add1.addimages(dataset.employeeDetails.imagepath);
    await add1.saverecord();
});
test("@E2ECredentialtest",async({page})=>{
    await add1.adddetails(dataset.employeeDetails.firstname1,dataset.employeeDetails.middlename1,dataset.employeeDetails.lastname1);
    await add1.addimages(dataset.employeeDetails.imagepath);
    await add1.createlogindetails(dataset.employeeDetails.credusername,dataset.employeeDetails.credspassword);
    await add1.saverecord();
});