function wordToOperator(word) {
    const operators = {
        'plus': '+',
        'minus': '-',
        'times': '*',
        'divided by': '/'
    };
    return operators[word] || null;
}

function calculateExpression(expression) {
    const words = expression.split(' ');

    if (words.length % 2 === 0) {
        return null; 
    }

    let total = parseFloat(words[0]);
    for (let i = 1; i < words.length; i += 2) {
        const operator = wordToOperator(words[i]);
        if (!operator) {
            return null; 
        }

        const operand = parseFloat(words[i + 1]);

        if (operator === '+') {
            total += operand;
        } else if (operator === '-') {
            total -= operand;
        } else if (operator === '*') {
            total *= operand;
        } else if (operator === '/') {
            if (operand === 0) {
                return null; 
            }
            total /= operand;
        }
    }

    return total;
}

const inputExpression = prompt("Enter the expression in words: ");
const result = calculateExpression(inputExpression);

if (result === null) {
    console.log("Invalid input or operator.");
} else {
    console.log("Result:", result);
}
