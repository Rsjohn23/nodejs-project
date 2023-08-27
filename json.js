function rewriteMathExpression(inputString,ans) {
    const operators = {
        plus: '+',
        minus: '-',
        into: '*',
        by: '/'
    };

    const parts = inputString.split('/').filter(Boolean);
    const expression = parts.map((part, index) => {
        if (index % 2 === 0) {
            return part;
        } else {
            return operators[part];
        }
    }).join('');

    const jsonResult = {
        question: expression,
        answer: ans
    };

    return jsonResult;
}

const inputString = '/2/plus/3/minus/1/by/2/into/8';
const result = rewriteMathExpression(inputString,"xx");
console.log(result);
