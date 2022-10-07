// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseName = data.license[0];
  let string = ""
  if(licenseName === "MIT"){
    string = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
  };
  if (licenseName === "ISC"){
    string = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]`
  };
  if (licenseName === "APACHE"){
    string = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
  };
  return string
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLink = data.link[0];
  if(licenseLink === "MIT"){
    string = `(https://opensource.org/licenses/MIT)`
  };
  if(licenseLink === "ISC"){
    string = `(https://opensource.org/licenses/ISC)`
  };
  if(licenseLink === "APACHE"){
    string = `(https://opensource.org/licenses/Apache-2.0)`
  };
  return string
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Table of contents:
1.[Project](#Project)
2.[Description](#Description)
3.[Installation](#Installation)
4.[Usage](#Usage)
5.[License](#License)
6.[Contributors](#Contributors)
7.[Badges](#Badges)
8.[Github](#Github)
9.[Email](#Email)

## Project
${data.project}
## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## License
${data.license}
## Contributors
${data.contributors}
## Badges
${data.badges}
## GIthub
${data.github}
## Email
${data.email}
`;
}

module.exports = generateMarkdown;
