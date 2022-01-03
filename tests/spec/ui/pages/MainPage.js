const {BasePage} = require("./BasePage");

class MainPage extends BasePage{
    constructor(page) {
        super(page)
    }

    shopMattressBtn = this.page.locator('[data-testid="shop_mattress_button"]');
    async goToMainPage() {
        await super.navigate("/");
    }
    async clickShopMattressBtn() {
        await this.shopMattressBtn.click()
    }
}
module.exports = { MainPage };
