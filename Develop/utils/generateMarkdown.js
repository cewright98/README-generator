// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  }
  const keyword = '';
  switch(license) {
    case 'none':
      keyword = '';
      break;
    case 'MIT License':
      keyword = 'MIT';
      break;
    case 'GNU General Public License':
      keyword = 'GNU';
      break;
    case 'Mozilla Public License':
      keyword = 'Mozilla';
      break;
    case 'Apache License':
      keyword = 'Apache';
      break;
    case 'Boost Software License':
      keyword = 'Boost%20Software'
      break;
    case 'The Unlicense':
      keyword = 'Unlicense';
      break;
    case 'ISC License':
      keyword = 'ISC';
      break;
  }
  return 'https://img.shields.io/badge/license-' + keyword + '-brightgreen';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // create variable for license chosen
  const license = data.license;
  // call renderLicense functions using license variable parameter
  return `# ${data.title}
  ![license badge](${renderLicenseBadge(license)})
## Description
${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
## License
${data.license}
## Contributing
${data.contributing}
## Tests
${data.tests}
## Questions
Find me on github [here](https://github.com/${data.github}) or reach out to me via email at ${data.email} if you have any questions!
  `;
}

module.exports = generateMarkdown;
