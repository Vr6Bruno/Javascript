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

  function checkPrime() {
    var number = parseInt(document.getElementById("numberInput").value);
    var resultElement = document.getElementById("result");

    if (isPrime(number)) {
      resultElement.innerHTML = number + " é primo.";
    } else {
      resultElement.innerHTML = number + " não é primo.";
    }
  }