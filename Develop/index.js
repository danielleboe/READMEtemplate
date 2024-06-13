// TODO: Include packages needed for this application
const inquirer = require('inquirer');  // npm i inquirer@8.2.4
const fs = require('fs'); //file system

const generateREADME = (answers) => `
# ${answers.title} 

${getLicense(answers.license)} 

- GitHub Repo: [${answers.username}](https://github.com/${answers.username}) 
- GitHub Application URL: [${answers.username}](https://${answers.username}.github.io/${answers.repo}) 

## Description
${answers.description} 

## Table of Contents
- [Installation](#instructions)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [Screen Shots](#image)

## Installation  
${answers.instructions}  

## Usage  
${answers.usage}  

## License  
This project is licensed under the ${answers.license} license.  

## Contributing  
${answers.contribution}  
${answers.contributors}  

## Tests  
${answers.tests}  

## Questions  
For any questions, please contact me with the information below:  

GitHub: [${answers.username}](https://github.com/${answers.username})  

Email: ${answers.email}
`;

//get the license badge
const getLicense = (license) => {
    switch (license) {
      case 'MIT':
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      case 'Apache 2.0 License':
        return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      case 'BSD 3-Clause':
        return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';

      case 'Boost Software License 1.0':
        return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
      case 'CC0':
        return '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)';
      case 'Eclipse Public License 1.0':
        return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
      case 'GNU GPL v3':
        return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      case 'The Hippocratic License 3.0':
        return '[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)';
      case 'IBM Public License Version 1.0':
        return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
      case 'ISC License (ISC)':
        return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
      case 'Attribution License (BY)':
        return '[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)';
      default:
        return '';
    }
  };


// TODO: Create an array of questions for user input
// description, installation instructions, usage information, contribution guidelines, and test instructions
//add app link, image


inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'Project Title',
    }, 
    {
        type: 'input',
        name: 'description',
        message: 'Description of your application',
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'Installation Instructions',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage Instructions',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Contribution Guidelines',
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Contributors',
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'Test Instructions',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Test Instructions',
    },
    {
        type: 'input',
        name: 'image',
        message: 'Screen Shots & Videos',
    },
    {
        type: 'input',
        name: 'repo',
        message: 'Github repo name',
    },
    {
        type: 'input',
        name: 'username',
        message: "Github Username",
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email Address',
    },
    {
        type: 'list',
        name: 'license',
        message: 'License',
        choices: [
            'MIT',
            'Apache 2.0 License',
            'BSD 3-Clause',
            'Boost Software License 1.0', 
            'CC0',
            'Eclipse Public License 1.0',
            'GNU GPL v3',
            'The Hippocratic License 3.0',
            'IBM Public License Version 1.0',
            'ISC License (ISC)',
            'Attribution License (BY)',
            'None',
        ]
    },
])
.then ((answers) => {
    const readmeContent = generateREADME(answers);

    // // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

    fs.writeFile('README.md', readmeContent, (err) =>
    err ? console.log(err) : console.log('Success!')
    );
})
.catch((error) => {
  console.error('Error generating README.md:', error);
});

// // // TODO: Create a function to initialize app
// init();

