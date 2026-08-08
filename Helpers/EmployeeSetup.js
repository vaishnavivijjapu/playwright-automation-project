class EmployeeSetup{
    static async createEmployee(page, poManager, dataset) {
        const loginPage = poManager.getLoginPage();
        await loginPage.gotourl();
        await loginPage.verifycredentials(
            dataset.login.username,
            dataset.login.password
        );

        const dashboardPage = poManager.getDashboardPage();
        await dashboardPage.clickpim();

        const pimPage = poManager.getPIMPage();
        await pimPage.clickaddemployee();

        const addEmployeePage = poManager.getAddEmployeePage();
        await addEmployeePage.adddetails(
            dataset.employeeDetails.firstname1,
            dataset.employeeDetails.middlename1,
            dataset.employeeDetails.lastname1
        );
        await addEmployeePage.addimages(dataset.employeeDetails.imagepath);
        await addEmployeePage.saverecord();
        await page.waitForURL(/viewPersonalDetails/,{ waitUntil: 'networkidle' });
    await page.locator('.oxd-form-loader').waitFor({ state: 'hidden' });

        
    }
}
module.exports = {EmployeeSetup};