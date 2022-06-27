"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter max number: ', (answer) => {
    let max = parseInt(answer);
    rl.question('Enter min number: ', (answer) => {
        let min = parseInt(answer);
        rl.question('Enter number of random numbers: ', (answer) => {
            let num = parseInt(answer);
            let randomNumbers = generateRandomNumbers(min, max, num);
            console.log(randomNumbers);
            rl.close();
        });
    });
});
function generateRandomNumbers(min, max, num) {
    let randomNumbers = [];
    for (let i = 0; i < num; i++) {
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        randomNumbers.push(randomNumber);
    }
    return randomNumbers;
}
