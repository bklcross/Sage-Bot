const inquirer = require('inquirer');

const questions = [
  {
    type: "input",
    name: "quoteNumber",
    message: "Enter the quote number:",
    validate: (input) =>
      input.trim() !== "" ? true : "Quote number is required",
  },
];

const collectQuoteId = async () => {
  try {
    const answers = await inquirer.prompt(questions);
    
    return answers.quoteNumber;
  } catch (error) {
    console.error("Error collecting input:", error);
  }
};

module.exports = { collectQuoteId };
