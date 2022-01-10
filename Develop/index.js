// TODO: Include packages needed for this application
const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of messages for user input
const questions = [{
    type: "input",
    message: "dot dot dot",
    name: "Title"
}, {
    type: "input",
    message: "dot dot dot",
    name: "Title"
},{
    type: "input",
    message: "dot dot dot",
    name: "Title"
},{
    type: "input",
    message: "dot dot dot",
    name: "Title"
},{
    type: "input",
    message: "dot dot dot",
    name: "Title"
},{
    type: "input",
    message: "dot dot dot",
    name: "Title"
},{
    type: "input",
    message: "dot dot dot",
    name: "Title"
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
        writeToFile("ReadMe.md", generateMarkdown(data));
        console.log(data)
    })
}

// Function call to initialize app
init();
