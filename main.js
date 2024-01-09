import inquirer from "inquirer";
let conversions = {
    "PKR": {
        "USD": 0.0036,
        "GBP": 0.028,
        "PKR": 1
    },
    "GBP": {
        "USD": 1.27,
        "PKR": 357,
        "GBP": 1
    },
    "USD": {
        "GBP": 0.79,
        "PKR": 281,
        "USD": 1
    }
};
let answers = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "GBP", "USD"],
        message: "Select Your Currency"
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "GBP", "USD"],
        message: "Select Your Conversion Currency"
    },
    {
        type: "number",
        name: "amount",
        message: "Enter Amount"
    },
]);
const { from, to, amount } = answers;
if (from && to && amount) {
    let result = conversions[from][to] * amount;
    console.log(`Your Conversion From ${from} To ${to} Is: ${result}`);
}
else {
    console.log("Kindly Enter Valid Input");
}
