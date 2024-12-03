import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "num1",
        message: "Kindly Enter your First Number"
    },
    {
        type: "number",
        name: "num2",
        message: "Kindly Enter your Second Number"
    },
    {
        type: "list",
        name: "Operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
        message: "Select operator:"
    },
]);
const { num1, num2, Operator } = answers;
if (num1 && num2 && Operator) {
    let result = 0;
    if (Operator === "Addition") {
        result = num1 + num2;
    }
    else if (Operator === "Subtraction") {
        result = num1 - num2;
    }
    else if (Operator === "Multiplication") {
        result = num1 * num2;
    }
    else if (Operator === "Division") {
        result = num1 / num2;
    }
    console.log("Your result is:", result);
}
else {
    console.log("Kindly enter valid input!..");
}
