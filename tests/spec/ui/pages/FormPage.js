const {BasePage} = require("./BasePage");

class FormPage extends BasePage {
    constructor(page) {
        super(page);
    }

    fullName = this.page.locator('#shippingAddress_fullName');
    email = this.page.locator('#email');
    address = this.page.locator('#shippingAddress_line1');
    city = this.page.locator('#shippingAddress_city');
    country = this.page.locator('#shippingAddress_country');
    state = this.page.locator('#shippingAddress_state');
    zipCode = this.page.locator('#shippingAddress_zip');
    phoneNumber = this.page.locator('#shippingAddress_phone');
    submitFormBtn = this.page.locator('#checkout_shipping_continue_btn');


    async fillTheForm(customer) {
        await this.email.fill(customer.email)
        await this.fullName.fill(customer.fullName)
        await this.address.fill(customer.address)
        await this.city.fill(customer.city)
        await this.zipCode.fill(customer.zipCode)
        await this.phoneNumber.fill(customer.phoneNumber)
        // await this.state.isVisible()
        await this.state.selectOption('AK')
        await this.country.selectText('United States')
    }

    async submitForm() {
        await this.submitFormBtn.click()
    }
}
module.exports = { FormPage };