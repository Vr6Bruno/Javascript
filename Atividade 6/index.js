function checkPerfectSquare() {
    var number = document.getElementById("numberInput").value;
    var resultText = document.getElementById("resultText");

    if (number < 0) {
        resultText.textContent = "O número deve ser maior ou igual a zero.";
        return;
    }

    var squareRoot = Math.sqrt(number);
    if (Number.isInteger(squareRoot)) {
        resultText.textContent = number + " é um quadrado perfeito.";
    } else {
        resultText.textContent = number + " não é um quadrado perfeito.";
    }
}