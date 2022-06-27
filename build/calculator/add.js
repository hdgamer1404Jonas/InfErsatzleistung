"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
const chalk_1 = __importDefault(require("chalk"));
const readline_1 = __importDefault(require("readline"));
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
}
exports.add = add;
