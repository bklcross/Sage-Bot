require("dotenv").config();

const puppeteer = require("puppeteer");

const payload = {
  quoteNumber: "CRU4Q-17685296",
  agentId: "4373034",
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

  await page.waitForFunction(
    (targetUrl) => window.location.href === targetUrl,
    {},
    "https://agents.sagesure.com/home"
  );

  await page.goto(
    `https://agents.sagesure.com/quote/${payload.quoteNumber}/edit`
  );

  await page.waitForSelector(
    '.controlContainer[data-bdd="QTC Use Insurance Score Estimate? Input"]'
  );

  // ***** Start Applicant Information and Loss History *****
  await page.$eval(
    'input[name="InsuranceScoreRangeEstimateIndicator"][value="200"]',
    (radio) => {
      if (!radio.checked) {
        radio.click();
      }
    }
  );

  await page.$eval(
    'input[name="Insured1SSNRequiredIndicator"][value="200"]',
    (radio) => {
      if (!radio.checked) {
        radio.click();
      }
    }
  );

  await page.$eval(
    'input[name="NewHomeOccupancy"][value="0"]',
    (radio) => {
      if (!radio.checked) {
        radio.click();
      }
    }
  );

  await page.click('div[data-bdd="QTC Number of Claims in last 6 years Input"]');

  await page.waitForSelector('div[data-bdd="QTC Number of Claims in last 6 years Input"] .uit-react-select__control--menu-is-open');

  await page.evaluate(() => {
    const options = document.querySelectorAll('div[data-bdd="QTC Number of Claims in last 6 years Input"] .uit-react-select__option');
    options.forEach(option => {
      if (option.textContent.trim() === 'None') {
        option.click();
      }
    });
  });

  await page.click('div[data-bdd="QTC Occupancy Usage Input"]');

  await page.waitForSelector('div[data-bdd="QTC Occupancy Usage Input"] .uit-react-select__control--menu-is-open');

  await page.evaluate(() => {
    const options = document.querySelectorAll('div[data-bdd="QTC Occupancy Usage Input"] .uit-react-select__option');
    options.forEach(option => {
      if (option.textContent.trim() === 'Primary - Year Round') {
        option.click();
      }
    });
  });

  await page.click('div[data-bdd="QTC Number of Months Rented or Held For Rental Input"]');

  await page.waitForSelector('div[data-bdd="QTC Number of Months Rented or Held For Rental Input"] .uit-react-select__control--menu-is-open');

  await page.evaluate(() => {
    const options = document.querySelectorAll('div[data-bdd="QTC Number of Months Rented or Held For Rental Input"] .uit-react-select__option');
    options.forEach(option => {
      if (option.textContent.trim() === 'Not a Rental') {
        option.click();
      }
    });
  });

  await page.$eval(
    'input[name="TrusteeBusiness"][value="200"]',
    (radio) => {
      if (!radio.checked) {
        radio.click();
      }
    }
  );

  await page.$eval(
    'input[name="SkateboardRamp"][value="200"]',
    (radio) => {
      if (!radio.checked) {
        radio.click();
      }
    }
  );

  await page.$eval(
    'input[name="RoadAccess"][value="100"]',
    (radio) => {
      if (!radio.checked) {
        radio.click();
      }
    }
  );

  await page.$eval(
    'input[name="NativeBrushStructures"][value="200"]',
    (radio) => {
      if (!radio.checked) {
        radio.click();
      }
    }
  );

  await page.$eval(
    'input[name="NativeBrushHeight"][value="100"]',
    (radio) => {
      if (!radio.checked) {
        radio.click();
      }
    }
  );

  await page.$eval(
    'input[name="GrassHeight"][value="200"]',
    (radio) => {
      if (!radio.checked) {
        radio.click();
      }
    }
  );

  await page.$eval(
    'input[name="TreeHeight"][value="200"]',
    (radio) => {
      if (!radio.checked) {
        radio.click();
      }
    }
  );

  await page.$eval(
    'input[name="Vegetation"][value="100"]',
    (radio) => {
      if (!radio.checked) {
        radio.click();
      }
    }
  );

  await page.$eval(
    'input[name="PropaneTanks"][value="200"]',
    (radio) => {
      if (!radio.checked) {
        radio.click();
      }
    }
  );

  await page.$eval(
    'input[name="TwoWeekRental"][value="200"]',
    (radio) => {
      if (!radio.checked) {
        radio.click();
      }
    }
  );

  await page.click('div[data-bdd="QTC Construction Type Input"]');

  await page.waitForSelector('div[data-bdd="QTC Construction Type Input"] .uit-react-select__control--menu-is-open');

  await page.evaluate(() => {
    const options = document.querySelectorAll('div[data-bdd="QTC Construction Type Input"] .uit-react-select__option');
    options.forEach(option => {
      if (option.textContent.trim() === 'Frame') {
        option.click();
      }
    });
  });

  await page.click('div[data-bdd="QTC Exterior Wall Material Input"]');

  await page.waitForSelector('div[data-bdd="QTC Exterior Wall Material Input"] .uit-react-select__control--menu-is-open');

  await page.evaluate(() => {
    const options = document.querySelectorAll('div[data-bdd="QTC Exterior Wall Material Input"] .uit-react-select__option');
    options.forEach(option => {
      if (option.textContent.trim() === 'Stucco') {
        option.click();
      }
    });
  });

  await page.$eval(
    'input[name="PorchRailingHeight2"][value="100"]',
    (radio) => {
      if (!radio.checked) {
        radio.click();
      }
    }
  );

  await page.$eval(
    'input[name="CircuitBreakers"][value="200"]',
    (radio) => {
      if (!radio.checked) {
        radio.click();
      }
    }
  );

  await page.$eval(
    'input[name="CircuitBreakers"][value="200"]',
    (radio) => {
      if (!radio.checked) {
        radio.click();
      }
    }
  );

  const isSelected = await page.evaluate(() => {
    const yesRadioButton = document.querySelector('input[name="CentralAir"][value="100"]');
    return yesRadioButton.checked; // Check if "Yes" is selected
  });

  if (isSelected) {
    await page.click('div[data-bdd="QTC Condenser Units Input"]');

    await page.waitForSelector('div[data-bdd="QTC Condenser Units Input"] .uit-react-select__control--menu-is-open');

    await page.evaluate(() => {
      const options = document.querySelectorAll('div[data-bdd="QTC Condenser Units Input"] .uit-react-select__option');
      options.forEach(option => {
        if (option.textContent.trim() === '1') {
          option.click();
        }
      });
    });
  }

  await page.click('#replacementCostBuildingAdapter');

  await page.waitForSelector('.continue-button.btn.btn-primary');

  await page.click('.continue-button.btn.btn-primary');

  const today = new Date();
  today.setDate(today.getDate() - 1);
  const formattedDate = `${String(today.getMonth() + 1).padStart(
    2,
    "0"
  )}/${String(today.getDate()).padStart(
    2,
    "0"
  )}/${today.getFullYear()}`;

  // agent
  await page.$eval(
    'input[name="DeclinationProducerType"][value="100"]',
    (radio) => {
      if (!radio.checked) {
        radio.click();
      }
    }
  );

  await page.click('div[data-bdd="QTC Agent License Number Input"]');

  await page.type("#AgentLicenseNumber", payload.agentId);

  // Other Occupancy

  await page.$eval('input[name="UnderRenovation"][value="200"]', (radio) => {
    if (!radio.checked) {
      radio.click();
    }
  });

  await page.$eval('input[name="PropertyForSale"][value="200"]', (radio) => {
    if (!radio.checked) {
      radio.click();
    }
  });

  await page.$eval(
    'input[name="AdjacentPropertyCondition"][value="200"]',
    (radio) => {
      if (!radio.checked) {
        radio.click();
      }
    }
  );

  await page.$eval('input[name="SinkholeActivity"][value="200"]', (radio) => {
    if (!radio.checked) {
      radio.click();
    }
  });

  await page.$eval('input[name="Vehicles"][value="200"]', (radio) => {
    if (!radio.checked) {
      radio.click();
    }
  });

  await page.$eval('input[name="DoorwayLiability"][value="200"]', (radio) => {
    if (!radio.checked) {
      radio.click();
    }
  });

  await page.$eval(
    'input[name="TreeProximityExposure"][value="200"]',
    (radio) => {
      if (!radio.checked) {
        radio.click();
      }
    }
  );

  await page.$eval('input[name="PropertyOver5Acres"][value="200"]', (radio) => {
    if (!radio.checked) {
      radio.click();
    }
  });

  await page.$eval('input[name="CondemnedArea"][value="200"]', (radio) => {
    if (!radio.checked) {
      radio.click();
    }
  });

  await page.$eval('input[name="Foreclosure"][value="200"]', (radio) => {
    if (!radio.checked) {
      radio.click();
    }
  });

  await page.$eval('input[name="Bankruptcy"][value="200"]', (radio) => {
    if (!radio.checked) {
      radio.click();
    }
  });

  await page.$eval('input[name="ChildCare"][value="200"]', (radio) => {
    if (!radio.checked) {
      radio.click();
    }
  });

  await page.$eval('input[name="InsuranceFraud"][value="200"]', (radio) => {
    if (!radio.checked) {
      radio.click();
    }
  });

  await page.$eval('input[name="Misrepresentation"][value="200"]', (radio) => {
    if (!radio.checked) {
      radio.click();
    }
  });

  await page.$eval('input[name="Farming"][value="200"]', (radio) => {
    if (!radio.checked) {
      radio.click();
    }
  });

  // Other Construction

  await page.$eval(
    'input[name="ResidenceBuiltOverWater"][value="200"]',
    (radio) => {
      if (!radio.checked) {
        radio.click();
      }
    }
  );

  await page.$eval(
    'input[name="BuildingNotOriginallyDwelling"][value="200"]',
    (radio) => {
      if (!radio.checked) {
        radio.click();
      }
    }
  );

  await page.$eval('input[name="LogCabin"][value="200"]', (radio) => {
    if (!radio.checked) {
      radio.click();
    }
  });

  await page.$eval('input[name="PreviousDamage"][value="200"]', (radio) => {
    if (!radio.checked) {
      radio.click();
    }
  });

  await page.$eval(
    'input[name="PreviousDamageFoundation"][value="200"]',
    (radio) => {
      if (!radio.checked) {
        radio.click();
      }
    }
  );

  await page.$eval('input[name="PreviousDamageSlab"][value="200"]', (radio) => {
    if (!radio.checked) {
      radio.click();
    }
  });

  await page.$eval('input[name="PreviousDamageRoof"][value="200"]', (radio) => {
    if (!radio.checked) {
      radio.click();
    }
  });

  await page.$eval('input[name="EIFS"][value="200"]', (radio) => {
    if (!radio.checked) {
      radio.click();
    }
  });

  await page.$eval('input[name="UndergroundTanks"][value="200"]', (radio) => {
    if (!radio.checked) {
      radio.click();
    }
  });

  await page.$eval(
    'input[name="OutdatedPlumbingMaterials"][value="200"]',
    (radio) => {
      if (!radio.checked) {
        radio.click();
      }
    }
  );

  await page.$eval(
    'input[name="HeatingThermoControlled"][value="100"]',
    (radio) => {
      if (!radio.checked) {
        radio.click();
      }
    }
  );

  await page.waitForSelector("#RenovationYearWiring");

  await page.evaluate((selector) => {
    const input = document.querySelector(selector);
    if (input) {
      input.value = "";
    }
  }, "#RenovationYearWiring");

  await page.type("#RenovationYearWiring",  String(Math.floor(Math.random() * (2000 - 1990 + 1)) + 1990));

  await page.waitForSelector("#RenovationYearFurnace");

  await page.evaluate((selector) => {
    const input = document.querySelector(selector);
    if (input) {
      input.value = "";
    }
  }, "#RenovationYearFurnace");

  await page.type("#RenovationYearFurnace", String(Math.floor(Math.random() * (2010 - 2001 + 1)) + 2001));

  await page.waitForSelector("#RenovationYearPlumbing");

  await page.evaluate((selector) => {
    const input = document.querySelector(selector);
    if (input) {
      input.value = "";
    }
  }, "#RenovationYearPlumbing");

  

  await page.type("#RenovationYearPlumbing",  String(Math.floor(Math.random() * (2000 - 1990 + 1)) + 1990));

  await page.screenshot({ path: "./output/test.png" });
  await browser.close();
})();