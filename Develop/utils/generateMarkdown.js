// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  }

  var keyword = '';

  switch(license) {
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
  }
  return 'https://img.shields.io/badge/license-' + keyword + '-brightgreen';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  }

  var link = '';
  switch(license) {
    case 'MIT License':
      link = 'https://www.mit.edu/~amini/LICENSE.md';
      break;
    case 'GNU General Public License':
      link = 'https://www.gnu.org/licenses/gpl-3.0.en.html';
      break;
    case 'Mozilla Public License':
      link = 'https://www.mozilla.org/en-US/MPL/2.0/';
      break;
    case 'Apache License':
      link = 'https://www.apache.org/licenses/LICENSE-2.0.txt';''
      break;
    case 'Boost Software License':
      link = 'https://www.boost.org/LICENSE_1_0.txt';
      break;
    case 'The Unlicense':
      link = 'https://unlicense.org/';
      break;
  }

  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return 'This project is not licensed.';
  }

  return 'Licensed under ' + license + '; you may not use this file except in compliance with the License. You may obtain a copy of ' + license + ' at ' + renderLicenseLink(license);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // create variable for license chosen
  const license = data.license;
  // call renderLicense functions using license variable parameter
  return `# ${data.title}
  ![](${renderLicenseBadge(license)})
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
${renderLicenseSection(license)}
## Contributing
${data.contributing}
## Tests
${data.tests}
## Questions
Find me on github at [${data.github}](https://github.com/${data.github}) or reach out to me via email at ${data.email} if you have any questions!
  `;
}

module.exports = generateMarkdown;
