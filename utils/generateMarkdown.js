// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

const {name, username, email} = data;

  return `
  # ${data.title}
  ### Project Creator
    ${data.name}
  ## Description
    ${data.description}

  ## Table of Contents
    * [License](#license)
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
    
  ## License   
    ${data.license}

  ## Installation
    ${data.installation}

  ## Usage
    ${data.usage}

    [Click to view the deployed project website.](https://${data.deployedSite})
  ## Contributing  
    ${data.contributing}

  ## Tests
    ${data.test}

  ## Questions  
    [Click on the link to visit my GitHub Profile.](https://www.github.com/${data.username})

    [If you have any questions, send me an email at: ${data.email}]
`;
}

module.exports = generateMarkdown;
