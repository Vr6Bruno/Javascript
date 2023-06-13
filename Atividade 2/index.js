function reverseString() {
    var string = document.getElementById("stringInput").value;
    var reversedString = "";

    for (var i = string.length - 1; i >= 0; i--) {
      reversedString += string[i];
    }

    document.getElementById("result").innerHTML = reversedString;
  }