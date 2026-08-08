const { expect} = require('@playwright/test');
class LoginPage{
    constructor(page){
        this.page=page;
        this.username = page.getByPlaceholder('Username');
        this.password=page.getByPlaceholder('Password');
        this.login = page.getByRole('button', { name: 'Login' });

    }
    async gotourl(){
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        await this.page.waitForLoadState('networkidle');
    }
    async verifycredentials(username,password){
        await this.username.fill(username);
        await this.password.fill(password);
        await this.login.click();

    }
    // LoginPage.js
    async verifyLoginPageLoaded() {
    await expect(this.username).toBeVisible();
    await expect(this.password).toBeVisible();
    await expect(this.login).toBeVisible();
}
}
module.exports = {LoginPage};