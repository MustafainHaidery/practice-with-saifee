import inquirer from "inquirer";
function calculator() {
    inquirer
        .prompt([
        {
            type: 'number',
            name: 'num1',
            message: 'Enter the first number:',
        },
        {
            type: 'number',
            name: 'num2',
            message: 'Enter the second number:',
        },
        {
            type: 'list',
            name: 'operation',
            message: 'Select an operation:',
            choices: ['+', '-', '*', '/'],
        },
    ])
        .then((answers) => {
        const { num1, num2, operation } = answers;
        let result;
        switch (operation) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            default:
                console.log('Invalid operation');
                return;
        }
        console.log(`Result: ${num1} ${operation} ${num2} = ${result}`);
    })
        .catch((error) => {
        console.error('Error:', error);
    });
}
calculator();
