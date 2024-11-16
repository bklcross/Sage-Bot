require('dotenv').config();

const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Use environment variables
    const username = process.env.USERNAME;
    const password = process.env.PASSWORD;

    console.log(username, password)

    // Navigate to the login page
    await page.goto('https://my.sagesure.com/');

    // Enter username and password
    await page.type('#username', username);
    await page.type('#password', password);

    // Submit the login form
    // await page.click('#submit');

    // Wait for navigation
    // await page.waitForNavigation();

    await page.screenshot({ path: "./output/test.png" });
    await browser.close();
})();