const { expect } = require('@playwright/test');
class EmergencyContact{
    constructor(page){
        this.page=page;
        this.addEmergencyContact =page.getByRole('button', { name: 'Add' }).nth(0);
        this.nameemergency = page.locator('.oxd-input-group').filter({ hasText: 'Name' }).locator('input');
        this.relationship = page.locator('.oxd-input-group').filter({ hasText: 'Relationship' }).locator('input');
        this.emergencymobilenumber = page.locator('.oxd-input-group').filter({hasText : "Mobile"}).locator('input');
        this.saveemergencydetails = page.locator('form').getByRole('button',{name:'Save'}).last();
        this.emergencycontactdetailstab = page.getByRole('link', { name: 'Emergency Contacts' });
    }
    async clickEmergencyContactTab(){
        await this.emergencycontactdetailstab.click();
        
    }
    async validateemergencycontact(Emergencyname,Relationshipname,Mobile){
        await this.addEmergencyContact.click();
        //await expect(page.locator('input[name="Name"]')).toHaveAttribute('required', '');
        await expect(this.nameemergency).toBeVisible();
        await this.nameemergency.fill(Emergencyname);
        //await expect(page.locator('input[name="Relationship"]')).toHaveAttribute('required', '');
        await expect(this.relationship).toBeVisible();
        await this.relationship.fill(Relationshipname);
        await expect(this.emergencymobilenumber).toBeVisible();
        await this.emergencymobilenumber.fill(Mobile);
        await this.saveemergencydetails.click();
        
    }
    async validaterequirevalidation(){
        await this.addEmergencyContact.click();
        await this.saveemergencydetails.click();
        const errorMessage = this.page.locator('.oxd-input-field-error-message'); // adjust selector
        //await expect(errorMessage).toHaveCount(2);
        await expect(errorMessage.nth(0)).toHaveText('Required');
        await expect(errorMessage.nth(1)).toHaveText('Required');
        const phoneError = this.page.locator('.oxd-input-field-error-message').last();
        await expect(phoneError).toHaveText('At least one phone number is required');

    }
}
module.exports = {EmergencyContact};