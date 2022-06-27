"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculator = void 0;
const readline_1 = __importDefault(require("readline"));
async function calculator() {
    const rl = readline_1.default.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question(`Do you want to add, distract, dividide or muliply numbers?`, function (programm) {
        console.log(`You selected: ${programm}`);
        if (programm === 'add') {
        }
        rl.close();
    });
}
exports.calculator = calculator;
