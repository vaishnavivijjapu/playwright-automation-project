const { expect } = require('@playwright/test');
class PersonalDetails{
    constructor(page){
        this.page=page;
        //It looks for the specific .oxd-input-group container that holds the label "Driver's License Number".
        //It then targets the text box (input) inside that block, ensuring you don't accidentally select the Employee ID, Username, or any other input field on the page.
        this.drivinglicencenumber = page.locator(".oxd-input-group").filter({hasText : "Driver's License Number"}).locator("input");
        this.licenseExpiryDate = page.locator('.oxd-input-group').filter({ hasText: 'License Expiry Date' }).getByPlaceholder('yyyy-dd-mm');
        this.nationalityDropdown = page.locator('.oxd-input-group').filter({ hasText: 'Nationality' }).locator('.oxd-select-text');
        this.maritalStatus = page.locator('.oxd-input-group').filter({ hasText: 'Marital Status' }).locator('.oxd-select-text');
        this.dob = page.locator(".oxd-input-group").filter({hasText : "Date of Birth"}).getByPlaceholder('yyyy-dd-mm');
        // this.maleGender =page.getByRole('radio', {name: 'Male',exact: true});
        // this.femaleGender = page.getByRole('radio', {name: 'Female',exact: true});
        // this.genderSection =page.locator('.oxd-radio-wrapper');
        // this.maleGender =this.genderSection.locator('input[type="radio"]').first();
        // this.femaleGender =this.genderSection.locator('input[type="radio"]').last();
        this.savePersonalDetails = page.getByRole('button',{name:'Save'}).first();
        this.savecustomerdetails =page.getByRole('button',{ name: 'Save' }).nth(1);
        this.bloodtype = page.locator('.oxd-input-group').filter({ hasText: 'Blood Type' }).locator('.oxd-select-text');
        this.addAttachmentButton =page.getByRole('button', { name: 'Add' });
        this.attachment = page.locator('input[type="file"]');
        this.saveaddattachment = page.getByRole('button', { name: 'Save' }).nth(2);

    }
    async verifypersonaldetails(licencenumber,licencedate,nationality,maritialstatus,dateofbirth){
       // await this.page.pause();
        await expect( this.drivinglicencenumber).toBeVisible();
        await  this.drivinglicencenumber.fill(licencenumber);
        await expect(this.drivinglicencenumber).toHaveValue(licencenumber);
        await this.licenseExpiryDate.fill(licencedate);
        await expect(this.nationalityDropdown).toBeVisible();
        await this.nationalityDropdown.click();
        await this.page.getByRole('option',{name:nationality,exact:true}).click();
        await this.maritalStatus.click();
        //await this.page.pause();
        await this.page.getByRole('option',{name:maritialstatus,exact:true}).click();
        await this.dob.fill(dateofbirth);

    }
    // async selectGender(gender){
    //     if(gender === 'Male'){
    //         await this.maleGender.check();
    //         await expect(this.maleGender)
    //               .toBeChecked();
    //     }
    //     else{
    //         await this.femaleGender.check();
    //         await expect(this.femaleGender)
    //               .toBeChecked();
    //     }
    
    // }
    // async selectGender(gender) {
    //     const normalizedGender = gender ? gender.trim().toLowerCase() : '';
    
    //     if (normalizedGender === 'male') {
    //         await this.maleGender.click(); // Changed from .check() to .click()
    //         // To assert, verify the underlying radio input inside the wrapper becomes checked
    //         await expect(this.maleGender.locator('input[type="radio"]')).toBeChecked();
    //     } else if (normalizedGender === 'female') {
    //         await this.femaleGender.click(); // Changed from .check() to .click()
    //         await expect(this.femaleGender.locator('input[type="radio"]')).toBeChecked();
    //     } else {
    //         throw new Error(`Invalid gender value provided: "${gender}". Expected 'Male' or 'Female'.`);
    //     }
    // }
    async savepersonal(){
        //await this.page.waitForLoadState('networkidle');
        //await expect(this.savePersonalDetails).toBeVisible();
    
        //await expect(this.savePersonalDetails).toBeEnabled();
        //await this.page.pause();
        await this.savePersonalDetails.click();
        //await this.page.pause();

    }
    async verifycustomerdetails(bloodtype1){
        await this.bloodtype.click();
        await this.page.getByRole('option',{name:bloodtype1,exact:true}).click();
        await this.page.keyboard.press('Escape');
        await this.savecustomerdetails.click();
    }
    async addattachment(Attachment){
        await this.addAttachmentButton.click();
        //await expect(this.attachment).toBeVisible();

        await this.attachment.setInputFiles(Attachment);
        await this.saveaddattachment.click();
    }
}
module.exports = {PersonalDetails};