const diligentEffort = async (page) => {
  try {
    await page.$eval('#DeclinationDiligentEffort-field', (radio) => {
      if (!radio.checked) {
        radio.click();
      }
    });

    // agent
    await page.$eval(
      'input[name="DeclinationProducerType"][value="100"]',
      (radio) => {
        if (!radio.checked) {
          radio.click();
        }
      }
    );

    await page.click('div[data-bdd="QTC Agent License Number Input"]', {
      clickCount: 3,
    });
    await page.keyboard.press("Backspace");

    await page.type("#AgentLicenseNumber", agentId);

    // ********** Declination 1

    await page.click("#DeclinationDateOfContact1");

    await page.type("#DeclinationDateOfContact1", formattedDate);

    await page.click('div[data-bdd="QTC Agent License Number Input"]');

    await page.click('div[data-bdd="QTC 1st Declination - Insurer Input"]');

    await page.type(
      'div[data-bdd="QTC 1st Declination - Insurer Input"]',
      "ALLSTATE INSURANCE COMPANY"
    );

    await page.waitForSelector(
      'div[data-bdd="QTC 1st Declination - Insurer Input"] .uit-react-select__menu'
    );

    page.keyboard.press("Enter");

    await page.click('div[data-bdd="QTC 1st Declination - Reason Input"]');

    await page.waitForSelector(
      'div[data-bdd="QTC 1st Declination - Reason Input"] .uit-react-select__control--menu-is-open'
    );

    await page.evaluate(() => {
      const options = document.querySelectorAll(
        'div[data-bdd="QTC 1st Declination - Reason Input"] .uit-react-select__option'
      );
      options.forEach((option) => {
        if (option.textContent.trim() === `Company's capacity reached`) {
          option.click();
        }
      });
    });

    await page.$eval(
      'input[name="DeclinationSubmissionChannel1"][value="100"]',
      (radio) => {
        if (!radio.checked) {
          radio.click();
        }
      }
    );

    await page.evaluate((selector) => {
      const input = document.querySelector(selector);
      if (input) {
        input.value = "";
      }
    }, 'div[data-bdd="QTC 1st Declination - Website URL Input"]');

    await page.click(
      'div[data-bdd="QTC 1st Declination - Website URL Input"]',
      {
        clickCount: 3,
      }
    );
    await page.keyboard.press("Backspace");
    await page.type(
      'div[data-bdd="QTC 1st Declination - Website URL Input"]',
      "https://myconnection2.allstate.com/ia/"
    );

    // ********** Declination 2

    await page.click("#DeclinationDateOfContact2");

    await page.type("#DeclinationDateOfContact2", formattedDate);

    await page.click('div[data-bdd="QTC Agent License Number Input"]');

    await page.click('div[data-bdd="QTC 2nd Declination - Insurer Input"]');

    await page.type(
      'div[data-bdd="QTC 2nd Declination - Insurer Input"]',
      "AMERICAN MODERN HOME INSURANCE COMPANY"
    );

    await page.waitForSelector(
      'div[data-bdd="QTC 2nd Declination - Insurer Input"] .uit-react-select__menu'
    );

    page.keyboard.press("Enter");

    await page.click('div[data-bdd="QTC 2nd Declination - Reason Input"]');

    await page.waitForSelector(
      'div[data-bdd="QTC 2nd Declination - Reason Input"] .uit-react-select__control--menu-is-open'
    );

    await page.evaluate(() => {
      const options = document.querySelectorAll(
        'div[data-bdd="QTC 2nd Declination - Reason Input"] .uit-react-select__option'
      );
      options.forEach((option) => {
        if (option.textContent.trim() === `Company's capacity reached`) {
          option.click();
        }
      });
    });

    await page.$eval(
      'input[name="DeclinationSubmissionChannel2"][value="100"]',
      (radio) => {
        if (!radio.checked) {
          radio.click();
        }
      }
    );

    await page.evaluate((selector) => {
      const input = document.querySelector(selector);
      if (input) {
        input.value = "";
      }
    }, 'div[data-bdd="QTC 2nd Declination - Website URL Input"]');

    await page.click(
      'div[data-bdd="QTC 2nd Declination - Website URL Input"]',
      {
        clickCount: 3,
      }
    );
    await page.keyboard.press("Backspace");
    await page.type(
      'div[data-bdd="QTC 2nd Declination - Website URL Input"]',
      "https://amsuite.amig.com"
    );

    // ********** Declination 3

    await page.click("#DeclinationDateOfContact3");

    await page.type("#DeclinationDateOfContact3", formattedDate);

    await page.click('div[data-bdd="QTC Agent License Number Input"]');

    await page.click('div[data-bdd="QTC 3rd Declination - Insurer Input"]');

    await page.type(
      'div[data-bdd="QTC 3rd Declination - Insurer Input"]',
      "FOREMOST INSURANCE COMPANY GRAND RAPIDS MICHIGAN"
    );

    await page.waitForSelector(
      'div[data-bdd="QTC 3rd Declination - Insurer Input"] .uit-react-select__menu'
    );

    page.keyboard.press("Enter");

    await page.click('div[data-bdd="QTC 3rd Declination - Reason Input"]');

    await page.waitForSelector(
      'div[data-bdd="QTC 3rd Declination - Reason Input"] .uit-react-select__control--menu-is-open'
    );

    await page.evaluate(() => {
      const options = document.querySelectorAll(
        'div[data-bdd="QTC 3rd Declination - Reason Input"] .uit-react-select__option'
      );
      options.forEach((option) => {
        if (option.textContent.trim() === `Company's capacity reached`) {
          option.click();
        }
      });
    });

    await page.$eval(
      'input[name="DeclinationSubmissionChannel3"][value="100"]',
      (radio) => {
        if (!radio.checked) {
          radio.click();
        }
      }
    );

    await page.evaluate((selector) => {
      const input = document.querySelector(selector);
      if (input) {
        input.value = "";
      }
    }, 'div[data-bdd="QTC 3rd Declination - Website URL Input"]');

    await page.click(
      'div[data-bdd="QTC 3rd Declination - Website URL Input"]',
      {
        clickCount: 3,
      }
    );
    await page.keyboard.press("Backspace");
    await page.type(
      'div[data-bdd="QTC 3rd Declination - Website URL Input"]',
      "https://www.foremoststar.com"
    );
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

module.exports = { diligentEffort };
