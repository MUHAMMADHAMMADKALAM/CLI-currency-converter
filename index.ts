#! /usr/bin/env node

import inquirer from "inquirer";

// currency base 
const currency: any = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    IND: 74.57,
    PKR: 280,
};
      

let userAnswer = await inquirer.prompt(
    [
        {
            name: "from",
            message: "Enter From Currency",
            type: "list",
            choices: ["USD", "EUR", "GBP", "IND", "PKR"]
        },
        {
            name: "to",
            message: "Enter To Currency",
            type: "list",
            choices: ["USD", "EUR", "GBP", "IND", "PKR"]
        },
        {
            name: "amount",
            message: "Enter Your Amount",
            type: "number",
        },
    ]
);

let fromAmount = currency[userAnswer.from];
let toAmount = currency[userAnswer.to];
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;

console.log(convertedAmount);
