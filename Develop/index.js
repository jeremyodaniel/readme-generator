// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown/');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license should be usef?',
        choices: ['MIT', 'APACHE']
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
    fs.writeFileSync(path.join(process.cwd(), fileName), data)


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        const markdown = generateMarkdown(answers);
        writeToFile('README.md', markdown)
    }) 
}

// Function call to initialize app
init();
