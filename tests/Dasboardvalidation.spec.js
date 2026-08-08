const { test, expect} = require('@playwright/test');
const {POManager}= require('../Pages/POManager');
const dataset =JSON.parse(JSON.stringify(require('../Utils/testdata.json')));
let loginpage;
let dashboardpage;
test.beforeEach(async ({ page }) => {

    const poManager = new POManager(page);
    loginpage = poManager.getLoginPage();

    await loginpage.gotourl();
    await loginpage.verifycredentials(dataset.login.username,dataset.login.password);
    dashboardpage = poManager.getDashboardPage();
});
test('@Dashboard',async({page})=>{
    await dashboardpage.verifydashboardtitle();
});
test('Search Validation',async({page})=>{
    await dashboardpage.clicksearch();
    await expect(page.getByText("PIM")).toBeVisible();
});
test('ClickMenu',async({page})=>{
    await dashboardpage.clickpim();
    await expect(page).toHaveURL(/pim/);
    await dashboardpage.clickadmin();
    //wehave applied js regex mexthod for url
    await expect(page).toHaveURL(/admin/);
    await dashboardpage.clicktime();
    await expect(page).toHaveURL(/time/);

});