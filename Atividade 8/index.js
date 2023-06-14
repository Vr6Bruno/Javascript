function checkAnagrams() {
    var word1 = document.getElementById("word1Input").value;
    var word2 = document.getElementById("word2Input").value;
    var resultText = document.getElementById("resultText");

    if (areAnagrams(word1, word2)) {
        resultText.textContent = "'" + word1 + "' e '" + word2 + "' são anagramas.";
    } else {
        resultText.textContent = "'" + word1 + "' e '" + word2 + "' não são anagramas.";
    }
}

function areAnagrams(word1, word2) {
    if (word1.length !== word2.length) {
        return false;
    }

    var sortedWord1 = word1.toLowerCase().split("").sort().join("");
    var sortedWord2 = word2.toLowerCase().split("").sort().join("");

    return sortedWord1 === sortedWord2;
}