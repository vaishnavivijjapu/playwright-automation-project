class BasePage {
    constructor(page) {
        this.page = page;
    }

    async waitForLoader() {
        await this.page.locator('.oxd-form-loader')
            .waitFor({ state: 'hidden' });
    }
}
module.exports = {BasePage};