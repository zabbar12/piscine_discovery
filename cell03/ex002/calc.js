function calculate() {
    var leftOperand = parseInt(document.getElementById("leftOperand").value);
    var operator = document.getElementById("operator").value;
    var rightOperand = parseInt(document.getElementById("rightOperand").value);

    if (isNaN(leftOperand) || isNaN(rightOperand) || leftOperand < 0 || rightOperand < 0) {
        alert("Error :(");
        return;
    }

    var result;

    switch (operator) {
        case "+":
            result = leftOperand + rightOperand;
            break;
        case "-":
            result = leftOperand - rightOperand;
            break;
        case "*":
            result = leftOperand * rightOperand;
            break;
        case "/":
            if (rightOperand === 0) {
                alert("It's over 9000!");
                console.log("It's over 9000!");
                return;
            }
            result = leftOperand / rightOperand;
            break;
        case "%":
            if (rightOperand === 0) {
                alert("It's over 9000!");
                console.log("It's over 9000!");
                return;
            }
            result = leftOperand % rightOperand;
            break;
        default:
            alert("Invalid operator");
            return;
    }

    alert("Result: " + result);
    console.log("Result: " + result);
}

setInterval(function() {
    alert("Please, use me...");
}, 30000);
