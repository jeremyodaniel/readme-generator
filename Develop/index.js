// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');



// TODO: Create an array of questions for user input
const questions = [
      {
        type: 'input',
        name: 'title',
        message: 'What is your project title? ',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please describe your project: ',
      },
			{
				type: 'input',
				name: 'usage',
				message: 'Please describe the usage of this project: ',
			},
      {
        type: 'input',
        name: 'github',
        message: 'What is your Github Username? ',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email? ',
      },
			{
				type: 'list',
				name: 'license',
				message: 'Choose a license for your project.',
				choices: ['MIT', 'Apache 2.0', 'BSD', 'GPL', 'MPL',]
			},
			{
				type: 'input',
				name: 'installation',
				message: 'What steps are required to install this project? ',
			},
			{
				type: 'input',
				name: 'contributions',
				message: 'How can others contribute to this project? ',
			},
];			


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
	inquirer.prompt(questions)
		.then(function(data) {
			writeToFile(generateMarkdown(data));
		})
};

// Function call to initialize app
init();
