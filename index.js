const generateHTML = require("./src/page-template")
const inquirer = require('inquirer');
const fs = require('fs');

const questions = [{
    type: 'input',
    message: 'What title would you like your app to have?',      
    name: 'title',
},]



function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(error) {
        console.log(fileName)
        console.log(data)
        if (error){
            return console.log(error)
        }else {
            console.log("success")
        }
    })
}

// Function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile('./team.html', generateHTML(data));
            console.log(data)  
    })    
}

// Function call to initialize app
init();