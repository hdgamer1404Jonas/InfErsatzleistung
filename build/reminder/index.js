"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const readline_1 = __importDefault(require("readline"));
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
askQuestion();
async function askQuestion() {
    await rl.question('Please enter a new Reminder or type "list" to list all reminders: ', (answer) => {
        if (answer === 'list') {
            printReminders();
        }
        else {
            addReminder(answer);
        }
    });
}
function addReminder(reminder) {
    let reminders = readFile();
    reminders.push(reminder);
    writeFile(reminders);
}
function printReminders() {
    let reminder = readFile();
    console.log(reminder);
}
function readFile() {
    let filePath = path_1.default.join(__dirname, 'reminders.txt');
    let reminders = fs_1.default.readFileSync(filePath, 'utf8');
    let reminder = reminders.split('\n');
    return reminders;
}
function writeFile(reminder) {
    let filePath = path_1.default.join(__dirname, 'reminders.txt');
    fs_1.default.writeFileSync(filePath, reminder);
}
