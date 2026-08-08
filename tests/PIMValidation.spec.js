const { test, expect} = require('@playwright/test');
const {POManager}= require('../Pages/POManager');
const dataset =JSON.parse(JSON.stringify(require('../Utils/testdata.json')));
let loginpage;
let dashboardpage;
let pimpage1;
test.beforeEach(async ({ page }) => {

    const poManager = new POManager(page);
    loginpage = poManager.getLoginPage();

    await loginpage.gotourl();
    await loginpage.verifycredentials(dataset.login.username,dataset.login.password);
    dashboardpage = poManager.getDashboardPage();
    await dashboardpage.clickpim();
    pimpage1 = poManager.getPIMPage();
});
test("@PIM Title",async({page})=>{
    await pimpage1.verifypimtitle();
});
test ("@PIMValidation",async({page})=>{
    await pimpage1.clickconfiguration();
    await pimpage1.clickemployeelistadd();
    await pimpage1. clickaddemployee();
    await pimpage1.clickreports();
});
test("@Helpsection",async({page})=>{
    await pimpage1.clickhelp();
});