// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "name",
    message: "What is your first and last name?",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your first and last name!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "username",
    message: "What is your github username?",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your github username!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is your Email address?",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your email address!");
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter your project title!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project.',
    validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter a description of your project!');
          return false;
        }
    }
  }, 
  {
    type: 'input',
    name: 'deployedSite',
    message: 'Provide a link to the deployed site.',
    validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please provide a link to the deployed site!');
          return false;
        }
    }
  }, 
  {
    type: 'input',
    name: 'installation',
    message: 'Provide a description of how to install your project.',
    validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter a description of how to install your project!');
          return false;
        }
    }
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide a description of how to use your project.',
    validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter a description of how to use your project!');
          return false;
        }
    }
  },
  {
    type: 'list',
    name: 'license',
    message: 'What license should your project have?',
    choices:['MIT', 'Apache 2.0', 'CC0']  
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Provide a description of how to contribute to your project repo.',
    validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter a description of how to contribute to your project repo!');
          return false;
        }
    }
  },
  {
    type: 'input',
    name: 'test',
    message: 'Provide a description of how to test your project.',
    validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter a description of how to test your project!');
          return false;
        }
    }
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      throw err;
      return;
    }
    console.log('File Created!')
  });
}

// TODO: Create a function to initialize app
function init() {
  return inquirer.prompt(questions);
}

// Function call to initialize app
init()
  .then((readMeData) => {
    return generateMarkdown(readMeData);
  })
  .then((readMeData) => {
    return writeToFile(`README.md`, readMeData);
  })
  .catch((err) => {
    console.log(err);
  });
