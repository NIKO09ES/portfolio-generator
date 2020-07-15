// const fs = require('fs');
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
  .then(answers => console.log(answers));

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;

// const generatePage = require('./src/page-template');

// const pageHTML = generatePage(portfolioData);

// fs.writeFile('./index.html', generatePage(name, github), err => {
//   if (err) throw new Error(err);

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });

