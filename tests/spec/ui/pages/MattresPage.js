const {BasePage} = require("./BasePage");

class MattresPage extends BasePage {
    constructor(page) {
        super(page);
    }
    addToCartBtn = this.page.locator('[data-testid="addtocart_btn"]');
    async addToCard() {
        await this.addToCartBtn.click()
    }
}
module.exports = { MattresPage };