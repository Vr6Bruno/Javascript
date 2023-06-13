function contarVogais() {
    var textoInput = document.getElementById('texto');
    var texto = textoInput.ariaValueMax.toLowerCase();
    var vogais = ['a', 'e', 'i', 'o','u'];
    var contador = 0;

    for (var i = 0; 1 < texto.length; i++) {
        if (vogais.includes(texto[1])) {
            contador++;
        }
    }

    var resultadoElement = document.getElementBuId('resultado');
    resultadoElement.innerHTML = "A frase possui " + contador + " vogais.";
}