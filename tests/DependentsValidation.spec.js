const { test, expect} = require('@playwright/test');
const {POManager}= require('../Pages/POManager');
const dataset =(require('../Utils/testdata.json'));
const{EmployeeSetup}=require('../Helpers/EmployeeSetup');
test.describe.configure({ timeout: 120000 });
let dependent;
test.beforeEach(async ({ page }) => {

    const poManager = new POManager(page);
    await EmployeeSetup.createEmployee(page, poManager, dataset);
    dependent = poManager.getDependents();
    await dependent.clickdependanttab();
    await page.waitForURL(/viewDependents/,{ waitUntil: 'domcontentloaded' });
    await dependent.waitForLoader();
    //await expect(dependent.adddependants).toBeVisible({timeout: 30000});
//     await expect(dependent.adddependants).toBeVisible();
// await expect(dependent.adddependants).toBeEnabled();

});
test('@ValidateDependents',async({page})=>{
    await dependent. verifydependantdetails(dataset.dependents.DependantName,dataset.dependents.DependentRelation,dataset.dependents.Dob,dataset.dependents.SpecifyDependant);
});