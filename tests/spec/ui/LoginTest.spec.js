const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
    await page.goto('http://automationpractice.com/index.php?controller=authentication&back=my-account');
    const login = page.locator('#email');
    const password = page.locator('#passwd');
    const submitBtn = page.locator('#SubmitLogin');
    await login.type('debisa9940@pyrelle.com')
    await password.type('123qwe')
    await submitBtn.click()
    const logoutBtn = page.locator('.logout')
    await expect(logoutBtn).toBeVisible();
    await logoutBtn.click()
    await expect(login).toBeVisible();
});