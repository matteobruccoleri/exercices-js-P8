function convertToBinary() {
    // Obtenir la valeur saisie par l'utilisateur
    let decimalValue = document.getElementById("decimalInput").value;
    
    // Convertir cette valeur en un nombre entier
    let decimalNumber = parseInt(decimalValue);

    // Vérifier que l'utilisateur a bien entré un nombre
    if (isNaN(decimalNumber)) {
        document.getElementById("binaryResult").innerText = "Veuillez entrer un nombre valide.";
        return;
    }

    // Convertir le nombre entier en binaire
    let binaryResult = decimalNumber.toString(2);

    // Afficher le résultat
    document.getElementById("binaryResult").innerText = `Résultat binaire : ${binaryResult}`;
}