// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require('./generateMarkdown');
// const input = require("type");


// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is your project title?',
    name: 'projectTitle',
  },
  {
    type: 'input',
    message: 'Describe your project in detail?',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Is there any installation process? :',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'what is project use for?:',
    name: ' usage',
  },
  {
    type: 'input',
    message: 'which license are you using for the project?:',
    name: 'license',
  },
  {
    type: 'input',
    message: 'how many people contributed?:',
    name: 'contributors',
  },
  {
    type: 'input',
    message: 'do you have any badges?:',
    name: 'badge',
  },
  {
    type: 'input',
    message: 'enter your github username?:',
    name: 'github username',
  },
  {
    type: 'input',
    message: 'please enter your email address:',
    name: 'email',
  },

];
// function user has all the questions which are necessary to make readme
// function ask(){
//   inquirer
//   .prompt(questions)
//   .then((response)=>{
//     // (response)
//     console.log(response.description);
//   })
// }

// // TODO: Create a function to write README file
const writeFile = (fileName, data) => {
  // fs.writeFile('readme.txt',' questions'), (err)=>
  // err ? console.error(err) : console.log("you have generated README")
}
// console.log(writeFile);

//   / // TODO: Create a function to initialize app  ask questions
const init = () => {
  inquirer
    .prompt(questions)
    .then((response) => {
      console.log(response);
      fs.writeFile('sample.md', generateMarkdown({...response}), (err) =>
        err ? console.error(err) : console.log("you have generated README")
    )})
}
    init();




//   // // Function call to initialize app
//  init()
//  .then(userInput => {
//   return generateMarkdown(userInput);
//  })
// .then(readmeInfo => {
//   return ask(readmeInfo)
// })
// .catch(err => {
//   console.log(err);
// })

