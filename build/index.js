"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const readline_1 = __importDefault(require("readline"));
const calc1 = __importStar(require("./calculator/add"));
console.log(chalk_1.default.green('Starting app...'));
console.log(chalk_1.default.blue('Programms:'));
console.log(chalk_1.default.yellow('1. Calculator - add'));
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question(`Please select a Programm by it's number`, function (programm) {
    console.log(`You selected: ${programm}`);
    if (programm === '1') {
        console.log(chalk_1.default.green('Starting Calculator...'));
        calc1.add();
    }
    rl.close();
});
