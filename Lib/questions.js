//const { choices } = require("yargs");

const questions = [
    {
        type: 'input',
        name: "text",
        message: 'Enter up to 3 characters for your logo',
        validate: function(input) {
            if (input.length === 3) {
                return true; // Return true for valid input
            } else {
                return "Please enter exactly 3 characters."; // Return a message for invalid input
            }
        }
    },

    {
        type: 'input',
        name: 'textColor',
        message: ' Enter the text color (color keyword or hexadecimal number):',
        validate: function(value) {
            // You can add custom validation logic here
            return true; // Return true to accept any input for now
        }
    },
    {
        type: 'list',
        name: 'shape',
        message: ' what shape do you want ?',
        choices: 'circle, triangle, square'

    },
    {
        type: 'input',
        name: 'shapeColor',
        message: ' Enter the shape color (color keyword or hexadecimal number):',
        validate: function(value) {
            // You can add custom validation logic here
            return true; // Return true to accept any input for now
        }
    },

];

//console.log(questions);

module.exports = questions;