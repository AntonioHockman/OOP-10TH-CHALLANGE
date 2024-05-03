//"echo \"Error: no test specified\" && exit 1" this was originally in my script, inside package.json not sure if need it saving it incase
//removed dist from git ignore line 92 and line 101 after the vuepress/ 

// const { readFile, writeFile } = require('fs/promises');
// const inquirer = require("inquirer");
// const colors = require("colors");
// const questions = require ('./Lib/questions');

// const init = () => {
//     inquirer.prompt(questions)
//     .then((data)   => {
//         console.log(data);
//     })
// };

const { readFile, writeFile } = require('fs').promises; // Corrected import for fs/promises
const inquirer = require('inquirer');
//import inquirer from 'inquirer';
const colors = require('colors');
const questions = require('./Lib/questions');

const init = () => {
    inquirer.prompt(questions)
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error("An error occurred:", error);
        });
};

init(); // Call the init function to start