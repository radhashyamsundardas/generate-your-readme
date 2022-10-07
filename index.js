// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require('./generateMarkdown');



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
function ask(){
  inquirer
  .prompt(questions)
  .then((Response)=>{
    input.push(Response)
    console.log(input);
  })
}
         
  // // TODO: Create a function to write README file
  const writeToFile = (fileName, data) => {
    fs.ask(fileName, data), (err)=>
    err ? console.error(err) : console.log("you have generated README")
  }
  console.log(writeToFile);
  
//   / // TODO: Create a function to initialize app  ask questions
    const init = () => {
      return inquirer.prompt(questions);
    }
    
    
  
//   // // Function call to initialize app
 init()
 .then(userInput => {
  return generateMarkdown(userInput);
 })
.then(readmeInfo => {
  return ask(readmeInfo)
})
.catch(err => {
  console.log(err);
})

