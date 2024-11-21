require("dotenv").config();

const puppeteer = require("puppeteer");

const payload = {
  quoteNumber: "CRU4Q-17685296",
  input: "input",
  input: "input",
};

const username = process.env.USERNAME;
const password = process.env.PASSWORD;

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setViewport({ width: 1920, height: 1080 });

  await page.goto("https://agents.sagesure.com/login.html");

  await page.type("#login-username", username);
  await page.type("#login-password", password);

  await page.click('button[type="submit"]');

  await page.goto(`https://agents.sagesure.com/quote/${payload.quoteNumber}/edit`);

  await page.waitForSelector('#QTC-main', { visible: true });

  await page.waitForSelector('.controlContainer[data-bdd="QTC Use Insurance Score Estimate? Input"]');

  // ***** Start Form Fill *****
  await page.$eval(
    'input[name="InsuranceScoreRangeEstimateIndicator"][value="200"]',
    (radio) => {
      if (!radio.checked) {
        radio.click();
      }
    }
  );

  await page.screenshot({ path: "./output/test.png" });
  await browser.close();
})();

// await page.waitForNavigation();

// await page.select('#dropdown-id', 'value-to-select');
// await page.waitForSelector('[data-testid="loginErrorMessage"]');
