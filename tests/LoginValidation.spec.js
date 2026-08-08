const { test, expect} = require('@playwright/test');
const {POManager}= require('../Pages/POManager');
const dataset =JSON.parse(JSON.stringify(require('../Utils/testdata.json')));
let loginpage;
test.beforeEach(async ({ page }) => {

    const poManager = new POManager(page);
    loginpage = poManager.getLoginPage();

    await loginpage.gotourl();
});
test('@UILoginValidation',async({page})=>{
    await expect(page.getByRole('img',{name : 'company-branding'})).toBeVisible();
    await expect(page.locator(".oxd-text.oxd-text--h5.orangehrm-login-title")).toBeVisible();

   
})

test('@Login Validation', async ({ page }) => {
    await loginpage.verifyLoginPageLoaded();
    await loginpage.verifycredentials(dataset.login.username,dataset.login.password);



});