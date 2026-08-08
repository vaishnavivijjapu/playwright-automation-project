const { test, expect} = require('@playwright/test');
const {POManager}= require('../Pages/POManager');
const dataset =(require('../Utils/testdata.json'));
const{EmployeeSetup}= require('../Helpers/EmployeeSetup');

let salary;
test.beforeEach(async ({ page }) => {

    const poManager = new POManager(page);
    await EmployeeSetup.createEmployee(page, poManager, dataset);
    salary = poManager.getSalaryPage();
    await salary.clickonsalarytab();
    await page.waitForURL(/viewSalaryList/);
    await salary.waitForLoader();

});
test("@VeifySalaryDetails",async({page})=>{
    await salary.verifysalary(dataset.salarydetails.salarycomponent,dataset.salarydetails.paygrade1,dataset.salarydetails.payfrequency,dataset.salarydetails.currency,dataset.salarydetails.amount,dataset.salarydetails.Comment);
});
test("@VerifyDepositStails",async({page})=>{
    await salary.verifysalary(dataset.salarydetails.salarycomponent,dataset.salarydetails.paygrade1,dataset.salarydetails.payfrequency,dataset.salarydetails.currency,dataset.salarydetails.amount,dataset.salarydetails.Comment);
    await salary.verifydepositdetails(dataset.salarydetails.accountnumber,dataset.salarydetails.accounttype,dataset.salarydetails.routingnumber,dataset.salarydetails.amount2);
});
