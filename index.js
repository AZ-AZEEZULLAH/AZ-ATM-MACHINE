#!/usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome-AZ-ATM-Machine");
let myBalance = 20000; // Dollar
let myPin = 3344;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["Withdraw Cash", "Check Balance", "Fast Cash"],
        },
    ]);
    console.log(operationAns);
    if (operationAns.operation === "Withdraw Cash") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number",
            },
        ]);
        myBalance -= amountAns.amount;
        console.log("Your remaining balance is: " + myBalance);
        if (amountAns.amount > myBalance) {
            console.log("You have an Insufficient Balance");
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log("Your remaining balance is " + myBalance);
    }
    else if (operationAns.operation === "Fast Cash") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "list",
                message: "Please Select Option",
                choices: ["2000", "5000", "10000", "15000", "20000"],
            },
        ]);
        myBalance -= amountAns.amount;
        console.log("Your remaining balance is: " + myBalance);
    }
}
else {
    console.log("Incorrect Pin Code !!!");
}
