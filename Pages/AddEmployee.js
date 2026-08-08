const { expect } = require('@playwright/test');
class AddEmployee{
    constructor(page){
        this.page=page;
        this.addemployeetitle = page.locator(".oxd-text.oxd-text--h6.orangehrm-main-title");
        this.firstname = page.getByPlaceholder("First Name");
        this.middlename= page.getByPlaceholder("Middle Name");
        this.lastname = page.getByPlaceholder("Last Name");
        this.image = page.locator(".employee-image");
        this.addimage = page.locator(".oxd-icon.bi-plus");
        this.employeeid = page.locator('.oxd-input-group').filter({ hasText: 'Employee Id' }).locator('input');
        this.savebutton = page.getByRole('button',{name: 'Save'});
        this.uploadInput = page.locator('input[type="file"]');
        this.togglecreate = page.locator('.oxd-switch-input');
        //this.credname = page.locator('input').and(page.locator('[model-id="username"]')); // If model-id is available
        // OR safer with layout-group chaining:
        this.credname = page.locator('.oxd-input-group').filter({ hasText: 'Username' }).locator('input');
        this.credpassword = page.locator('.oxd-input-group').filter({ hasText: 'Password' }).locator('input[type="password"]').first();
        this.confirmpassword = page.locator('.oxd-input-group').filter({ hasText: 'Confirm Password' }).locator('input[type="password"]');
    }
    async verifyaddEmployee(){
        await expect(this.addemployeetitle).toHaveText("Add Employee");
    }
    async adddetails(firstname1,middlename1,lastname1){
        await this.firstname.fill(firstname1);
        await this.middlename.fill(middlename1);
        await this.lastname.fill(lastname1);
        //await page.pause();
        const randomId =Math.floor(100000 + Math.random()*900000);
        await this.employeeid.clear();
        await this.employeeid.fill(randomId.toString());
    }
    async addimages(imagepath){
        await expect(this.addimage).toBeVisible();
        await this.uploadInput.setInputFiles(imagepath);
        await expect(this.image).toBeVisible();
        await expect(this.uploadInput).toHaveValue(/jpg|png/);
     }
     async saverecord(){
        //await expect(this.employeeid).toBeVisible();
        //await this.employeeid.fill('0519');
        await this.savebutton.click();
       // await expect(this.page).toHaveURL(/viewPersonalDetails/);
     }
    // async saverecord() {
    //     await this.savebutton.click();
    
    //     console.log(await this.page.url());
    
    //     await this.page.pause();
    // }
     async createlogindetails(credusername,credspassword){
        await this.togglecreate.click();
        await this.credname.fill(credusername);
        await this.credpassword.fill(credspassword);
        await this.confirmpassword.fill(credspassword);
     }
}
module.exports = {AddEmployee};