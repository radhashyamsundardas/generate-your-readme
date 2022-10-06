// TODO: Include packages needed for this application
const fs = require("fs");
const depen = require("inquirer");


// TODO: Create an array of questions for user input
const questions = [];

function user(){

     depen
      .prompt([
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
        ])
  }
         
  // // TODO: Create a function to write README file
  function writeToFile(fileName, data) {}
  
  // // TODO: Create a function to initialize app
   async function init() {
    try{
        const solutions = await user();
        const gennerate = generateReadme(answers);
        await fs.writeFileSync(`./dist/README.md`, generateContent);
        console.log(`finished writing readme`);
    }
    catch(err){
        console.log(err)
    }
  }
  
  // // Function call to initialize app
  user();


        

  
 

