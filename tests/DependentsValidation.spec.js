const { test, expect} = require('@playwright/test');
const {POManager}= require('../Pages/POManager');
const dataset =(require('../Utils/testdata.json'));
const{EmployeeSetup}=require('../Helpers/EmployeeSetup');
let dependent;
test.beforeEach(async ({ page }) => {

    const poManager = new POManager(page);
    await EmployeeSetup.createEmployee(page, poManager, dataset);
    dependent = poManager.getDependents();
    await dependent.clickdependanttab();
    await page.waitForURL(/viewDependents/);
    dependent.waitForLoader();

});
test('@ValidateDependents',async({page})=>{
    dependent. verifydependantdetails(dataset.dependents.DependantName,dataset.dependents.DependentRelation,dataset.dependents.Dob,dataset.dependents.SpecifyDependant);
});