const {test, expect, chromium} = require('@playwright/test');
const {MainPage} = require("./pages/MainPage");
const {MattresPage} = require("./pages/MattresPage");
const {FormPage} = require("./pages/FormPage");

let browser, context, page;
let mainPage, formPage, mattressPage

const customer = {
    email:'debisa9940@pyrelle.com',
    fullName:'Ablaihan nurmagambetov',
    address:'123qwe',
    city:'Alaska',
    zipCode:'99501',
    phoneNumber:"7026008812",
    state:'AK',
    country: 'United States'
}

test.beforeEach(async () => {
    browser = await chromium.launch({headless: true});
    context = await browser.context;
    page = await browser.newPage();
    mainPage = new MainPage(page);
    mattressPage = new MattresPage(page);
    formPage = new FormPage(page);

})
test.afterEach(async () => {
    // await context.close()
    await browser.close()
})
test('levelssleep test', async () => {
    await mainPage.goToMainPage()
    await mainPage.clickShopMattressBtn()
    await mattressPage.addToCard()
    await formPage.fillTheForm(customer)
    await formPage.submitForm()
    await page.screenshot({path: 'screenshot.png', fullPage: true});
    const checkPayment = page.locator('#checkout_payment_continue_btn')
    await expect(checkPayment).toBeVisible();
});