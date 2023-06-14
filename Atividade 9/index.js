function calculateFactorial() {
    var number = document.getElementById("numberInput").value;
    var resultText = document.getElementById("resultText");

    if (number < 0) {
        resultText.textContent = "O número deve ser maior ou igual a zero.";
        return;
    }

    var factorial = calculateRecursiveFactorial(number);
    resultText.textContent = "O fatorial de " + number + " é " + factorial + ".";
}

function calculateRecursiveFactorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    } else {
        return number * calculateRecursiveFactorial(number - 1);
    }
}