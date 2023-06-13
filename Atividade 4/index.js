function converter() {
    var celsiusInput = document.getElementById('celsius');
    var celsius = parseFloat(celsiusInput.value);
    var fahrenheit = (celsius * 9/5) + 32;

    var resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = celsius + "grau Celsius equivalem a " + fahrenheit + "graus Fahrenheit.";


}