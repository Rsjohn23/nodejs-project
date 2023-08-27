function evaluateExpression(expression) {
    const operations = expression.split('/').filter(Boolean);

    if (operations.length % 2 !== 1) {
        throw new Error('Invalid expression format');
    }

    let result = parseFloat(operations[0]);

    for (let i = 1; i < operations.length; i += 2) {
        const operator = operations[i];
        const operand = parseFloat(operations[i + 1]);

        if (isNaN(operand)) {
            throw new Error('Invalid operand');
        }

        switch (operator) {
            case 'plus':
                result += operand;
                break;
            case 'minus':
                result -= operand;
                break;
            case 'into':
                result *= operand;
                break;
            case 'over':
                result /= operand;
                break;
            default:
                throw new Error('Invalid operator');
        }
    }

    return result;
}

const expression = '/2/plus/3/into/2';
try {
    const answer = evaluateExpression(expression);
    console.log('Answer:', answer);
} catch (error) {
    console.error('Error:', error.message);
}
