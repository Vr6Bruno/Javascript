function findLargestElement() {
    var matrixString = document.getElementById("matrixInput").value;
    var matrix = JSON.parse(matrixString);
    
    var largestElement = matrix[0][0];

    for (var i = 0; i < matrix.length; i++) {
      for (var j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] > largestElement) {
          largestElement = matrix[i][j];
        }
      }
    }

    document.getElementById("result").innerHTML = "O maior elemento na matriz é: " + largestElement;
  }