// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utis/generateMarkdown');

// Questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your Github username',
        name: 'github',
      },
      {
        type: 'input',
        message: 'What is your email address',
        name: 'email',
      },
      {
        type: 'input',
        message: 'What is your project name?',
        name: 'title',
      },
     
      {
        type: 'input',
        message: 'Please write a description of your project',
        name: 'description',
      },
      {
        type: 'list',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        name: 'license'
      },
      {
        type: 'input',
        message: 'What command should be used to run tests?',
        name: 'test',
      },
      {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'What does the user need to know about contributing to the Repo?',
        name: 'contributing',
      },
      {
        type: 'input',
        message: 'What does the user need to install to use the Repo?',
        name: 'installation',
      },
];

// Function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log('Generating ReadMe');

        const markdown = generateMarkdown({ ...inquirerResponses });

        writeToFile('README.MD', markdown);
    })
}

// Function call to initialize app
init();