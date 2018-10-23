alert('Salut, bienvenue dans ma super pyramide !');

console.log('Salut, bienvenue dans ma super pyramide !');

do {
    var nombreEtages = prompt("Combien d'étages veux-tu ?");
    if (nombreEtages > 25) {
        alert("Le nombre d'étages doit être inférieur à 25 !");
    } else if (nombreEtages == 0) {
        alert('Le nombre d\'étages ne peut pas être nul');
    } else if (isNaN(nombreEtages)) {
        alert('La valeur d\'entrée doit être numérique');
    }
} while (nombreEtages > 25 || nombreEtages == 0 || isNaN(nombreEtages))


console.log('Voici la pyramide :');

let result = '';
let nombreEtagesPos = Math.abs(nombreEtages);

if (nombreEtages > 0) {
    for (let i = 1; i <= nombreEtagesPos; i++) {
        let etage = '';
        etage += (' ').repeat(nombreEtagesPos - i) + '#'.repeat(2 * i - 1);
        result += etage + '\n';
    }
} else {
    for (let i = nombreEtagesPos; i >= 1; i--) {
        let etage = '';
        etage += (' ').repeat(nombreEtagesPos - i) + '#'.repeat(2 * i - 1);
        result += etage + '\n';
    }
}
console.log(result);


