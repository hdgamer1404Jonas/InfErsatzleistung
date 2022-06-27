"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const readline_1 = __importDefault(require("readline"));
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question(`Do you want to add, devide, subtract or multiply?`, function (func) {
    if (func === "add") {
        add();
    }
    if (func === "devide") {
        devide();
    }
    if (func === "subtract") {
        subtract();
    }
    if (func === "multiply") {
        multiply();
    }
});
async function add() {
    const rl = readline_1.default.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question(`Please enter 2 Numbers to add devided by a comma`, function (numbers) {
        console.log(numbers);
        const numbersArray = numbers.split(',');
        const result = parseInt(numbersArray[0]) + parseInt(numbersArray[1]);
        console.log(chalk_1.default.green(`The result is: ${result}`));
    });
    return;
}
async function devide() {
    const rl = readline_1.default.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question(`Please enter 2 Numbers to devide devided by a comma`, function (numbers) {
        console.log(numbers);
        const numbersArray = numbers.split(',');
        const result = parseInt(numbersArray[0]) / parseInt(numbersArray[1]);
        console.log(chalk_1.default.green(`The result is: ${result}`));
    });
    return;
}
async function subtract() {
    const rl = readline_1.default.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question(`Please enter 2 Numbers to subtract devided by a comma`, function (numbers) {
        console.log(numbers);
        const numbersArray = numbers.split(',');
        const result = parseInt(numbersArray[0]) - parseInt(numbersArray[1]);
        console.log(chalk_1.default.green(`The result is: ${result}`));
    });
    return;
}
async function multiply() {
    const rl = readline_1.default.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question(`Please enter 2 Numbers to multiply devided by a comma`, function (numbers) {
        console.log(numbers);
        const numbersArray = numbers.split(',');
        const result = parseInt(numbersArray[0]) * parseInt(numbersArray[1]);
        console.log(chalk_1.default.green(`The result is: ${result}`));
    });
    return;
}
