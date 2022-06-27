import chalk from "chalk";
import readline from "readline";


const rl = readline.createInterface({
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
})






async function add () {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
    rl.question(`Please enter 2 Numbers to add devided by a comma`, function (numbers) { 
        console.log(numbers);
        const numbersArray = numbers.split(',');
        const result = parseInt(numbersArray[0]) + parseInt(numbersArray[1]);
        console.log(chalk.green(`The result is: ${result}`));
    });
    return
}

async function devide () {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
        });
    rl.question(`Please enter 2 Numbers to devide devided by a comma`, function (numbers) {
        console.log(numbers);
        const numbersArray = numbers.split(',');
        const result = parseInt(numbersArray[0]) / parseInt(numbersArray[1]);
        console.log(chalk.green(`The result is: ${result}`));
    }
    );
    return
}

async function subtract () {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
        });
    rl.question(`Please enter 2 Numbers to subtract devided by a comma`, function (numbers) {
        console.log(numbers);
        const numbersArray = numbers.split(',');
        const result = parseInt(numbersArray[0]) - parseInt(numbersArray[1]);
        console.log(chalk.green(`The result is: ${result}`));
    }
    );
    return
}

async function multiply () {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
        });
    rl.question(`Please enter 2 Numbers to multiply devided by a comma`, function (numbers) {
        console.log(numbers);
        const numbersArray = numbers.split(',');
        const result = parseInt(numbersArray[0]) * parseInt(numbersArray[1]);
        console.log(chalk.green(`The result is: ${result}`));
    }
    );
    return
}

