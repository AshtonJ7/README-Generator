// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`
  }
  return '';
}

//Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
    This project is licensed under the ${license} license.`;
  }
  return '';
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Decription
${data.description}

## Table of Contents

* [Installation (#installation)]
* [Usage (#usage)]
${renderLicenseLink(data.license)}
* [Contributing (#contributing)]
* [Tests (#tests)]
* [Questions (#questions)]

## Installation

To install dependancies, run the following command:


${data.installation}


## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

Run the following command to run tests:

\`\`\`
${data.test}
\`\`\`

## More information

If you have any queries about the repo, open an issue or contact me at ${data.email}.
You can find my work at [${data.github}](https://github.com/${data.github}).
`;
}


module.exports = generateMarkdown;