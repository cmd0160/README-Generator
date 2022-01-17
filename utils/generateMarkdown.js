// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (!license){
    return '';
  }else if(license === 'MIT'){
    return `https://img.shields.io/badge/License-MIT-yellow.svg`
  }else if(license === 'Apache 2.0'){
    return `https://img.shields.io/badge/License-Apache%202.0-blue.svg`
  }else if(license === 'CC0') {
    return `https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg`
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(name, license) {
  if (!license){
    return '';
  }else if(license === 'MIT'){
    return `Copyright ${new Date().getFullYear()} ${name}

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

    https://opensource.org/licenses/MIT`

  }else if(license === 'Apache 2.0'){
    return `Copyright ${new Date().getFullYear()} ${name}
    
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
   
    http://www.apache.org/licenses/LICENSE-2.0
   
    Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
   `
  }else if(license === 'CC0') {
    return `http://creativecommons.org/publicdomain/zero/1.0/`
  }
};


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(name, license) {
  if (!license){
    return '';
  }
  return `![license](${renderLicenseBadge(license)})
  
  ${renderLicenseLink(name, license)}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

const {name, username, email, title, license, description, installation, usage, contributing, test, deployedSite} = data;

  return `
  # ${title}

  ### Project Creator
  ${name}
  ## Description
  ${description}

  ## Table of Contents

  [License](#license)

  [Installation](#installation)

  [Usage](#usage)

  [Contributing](#contributing)

  [Tests](#tests)

  [Questions](#questions)
    
  ## License   
  ${renderLicenseSection(name, license)}

  ## Installation
  ${installation}

  ## Usage
  ${usage}

  [Click to view the deployed project website.](https://${deployedSite})
  ## Contributing  
  ${contributing}

  ## Tests
  ${test}

  ## Questions  
  [Click here to visit my GitHub Profile.](https://www.github.com/${username})

  [If you have any questions, send me an email at: ${email}]
`;
}

module.exports = generateMarkdown;
