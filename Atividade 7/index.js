function checkPrimeFibonacci() {
    var number = document.getElementById("numberInput").value;
    var resultText = document.getElementById("resultText");

    if (number < 0) {
        resultText.textContent = "O número deve ser maior ou igual a zero.";
        return;
    }

    if (isPrime(number) && isFibonacci(number)) {
        resultText.textContent = number + " é um número primo de Fibonacci.";
    } else {
        resultText.textContent = number + " não é um número primo de Fibonacci.";
    }
}

function isPrime(number) {
    if (number < 2) {
        return false;
    }

    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

function isPerfectSquare(number) {
    var squareRoot = Math.sqrt(number);
    return Number.isInteger(squareRoot);
}

function isFibonacci(number) {
    var fibPrev = 0;
    var fibCurr = 1;

    while (fibCurr <= number) {
        if (fibCurr === number) {
            return true;
        }

        var temp = fibCurr;
        fibCurr += fibPrev;
        fibPrev = temp;
    }

    return false;
}