import fs from 'fs';
import path from 'path';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

askQuestion();

async function askQuestion() {
    //ask the user for a new reminder / list reminder when they type "list"
    await rl.question('Please enter a new Reminder or type "list" to list all reminders: ', (answer) => {
        //if answer is "list"
        if (answer === 'list') {
            //print reminders
            printReminders();
        } else {
            //add reminder
            addReminder(answer);
        }
    }
    );
    //ask question again
}

function addReminder(reminder: string) {
    //read file
    let reminders = readFile();
    //add reminder to array
    //@ts-expect-error
    reminders.push(reminder);
    //write file
    writeFile(reminders);
}

function printReminders() {
    //read file
    let reminder = readFile();
    //print reminders
    console.log(reminder);
}

function readFile() {
    //get file path
    let filePath = path.join(__dirname, 'reminders.txt');
    //read file
    let reminders = fs.readFileSync(filePath, 'utf8');
    //convert string to array
    let reminder = reminders.split('\n');
    //return array
    return reminders;
}

function writeFile(reminder: string) {
    //get file path
    let filePath = path.join(__dirname, 'reminders.txt');
    //write file
    fs.writeFileSync(filePath, reminder);
}


