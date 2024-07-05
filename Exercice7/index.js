function convertToBinary() {
    // Réinitialiser le contenu du paragraphe pour qu'il soit vide avant de lancer la conversion
    let binaryResultElement = document.getElementById("binaryResult");
    binaryResultElement.innerText = "";

    // Obtenir la valeur saisie par l'utilisateur
    let decimalValue = document.getElementById("decimalInput").value;
    
    // Vérifier que l'utilisateur a bien entré un nombre entier valide
    if (!/^\d+$/.test(decimalValue)) {
        // Ne rien afficher si l'entrée contient des caractères non numériques
        return;
    }

    // Convertir cette valeur en un nombre entier
    let decimalNumber = parseInt(decimalValue);

    // Convertir le nombre entier en binaire
    let binaryResult = decimalNumber.toString(2);

    // Afficher le résultat
    binaryResultElement.innerText = `Résultat binaire : ${binaryResult}`;
}