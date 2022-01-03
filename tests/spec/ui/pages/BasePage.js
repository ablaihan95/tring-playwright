class BasePage {
    constructor(page) {
        this.page = page;
    }
    async navigate(path) {
        await this.page.goto(`https://www.levelsleep.com${path}`);
    }
}
module.exports = { BasePage };