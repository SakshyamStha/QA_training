// @ts-check
const { test, expect } = require('@playwright/test'); //import

// test('Login using valid email and pasword', async ({ page }) => {
//   await page.goto('https://thinking-tester-contact-list.herokuapp.com/');

//   // Expect a title "to contain" a substring.
//   await page.getByPlaceholder('Email').fill('sakshyam@gmail.com');
//   await page.getByPlaceholder('Password').fill('sakshyam');
//   await page.locator('//button[@id="submit"]').click();
//   await expect(page.locator('//p[contains (text(), "Click on any contact to view the Contact Details")]')).toHaveText('Click on any contact to view the Contact Details');
// });

// test('Login using invalid email',async ({ page }) => {
//     await page.goto('https://thinking-tester-contact-list.herokuapp.com/');

//     // Expect a title "to contain" a substring.
//     await page.getByPlaceholder('Email').fill('syam@gmail.com');
//     await page.getByPlaceholder('Password').fill('sakshyam');
//     await page.locator('//button[@id="submit"]').click();
//     await expect(page.locator('//span[@id="error"]')).toHaveText('Incorrect username or password');
// });
test('Login using invalid email',async ({ page }) => {
    await page.goto('https://thinking-tester-contact-list.herokuapp.com/');

    // Expect a title "to contain" a substring.
    await page.getByPlaceholder('Email').fill('syam@gmail.com');
    await page.getByPlaceholder('Password').fill('');
    await page.locator('//button[@id="submit"]').click();
    await expect(page.locator('//span[@id="error"]')).toHaveText('Incorrect username or password');
});