// TODO: Include packages needed for this application
const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of messages for user input
const questions = [{
    type: "input",
    message: "Enter the Title of your Project: ",
    name: "Title"
}, {
    type: "input",
    message: "Enter the Description of your Project: ",
    name: "Description"
},{
    type: "input",
    message: "Enter your Table of Contents (Optional): ",
    name: "Table of Contents"
},{
    type: "input",
    message: "Enter the installation needs for this App: ",
    name: "Installation"
},{
    type: "input",
    message: "Enter how to use this App: ",
    name: "Usage"
},{
    type: "input",
    message: "Enter collaborations, tutorials or third party assets. Provide Links: ",
    name: "Credits"
},{
    type: "input",
    message: "Enter what other developers know what they can and cannot do with your project: ",
    name: "License"
},{
    type: "input",
    message: "Enter badges to let nkow other deveolpers know that you know what are you doing: ",
    name: "Badges"
},{
    type: "input",
    message: "Enter Features for this app: ",
    name: "Features"
},{
    type: "input",
    message: "Enter how can other developers con cutribute on your app. add guidelines to do if so: ",
    name: "Contributing"
},{
    type: "input",
    message: "Write test for your app. Then provide examples on how to run them: ",
    name: "Tests"
},

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(error) {
        console.log(fileName)
        console.log(data)
        if (error) {
            return 
            console.log(error)
        } else {
            console.log("Perfect")
        }
    })
}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions).then(function(data) {
        writeToFile("README.md", generateMarkdown(data));
        console.log(data)
    })
}

// Function call to initialize app
init();
