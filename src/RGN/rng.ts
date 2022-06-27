import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//ask user for max number
rl.question('Enter max number: ', (answer) => {
    //convert answer to number
    let max = parseInt(answer);
    //ask user for min number
    rl.question('Enter min number: ', (answer) => {
        //convert answer to number
        let min = parseInt(answer);
        //ask user for number of random numbers
        rl.question('Enter number of random numbers: ', (answer) => {
            //convert answer to number
            let num = parseInt(answer);
            //generate random numbers
            let randomNumbers = generateRandomNumbers(min, max, num);
            //print random numbers
            console.log(randomNumbers);
            //close readline interface
            rl.close();
        }
        );
    }
    );
}
);

function generateRandomNumbers (min: number, max: number, num: number) {
    //create array
    let randomNumbers: number[] = [];
    //loop num times
    for (let i = 0; i < num; i++) {
        //generate random number
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        //add random number to array
        randomNumbers.push(randomNumber);
    }
    //return array
    return randomNumbers;
}
