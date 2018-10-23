alert('Salut, bienvenue dans ma super pyramide !');

console.log('Salut, bienvenue dans ma super pyramide !');

do {
    var nombreEtages = prompt("Combien d'étages veux-tu ?");
    if (nombreEtages > 25) {
        alert("Le nombre d'étages doit être inférieur à 25 !");
    } else if(nombreEtages <= 0){
        alert('Une pyramide ne pêut pas avoir de sous-sol :p');
    } else if(isNaN(nombreEtages)) {
        alert('La valeur d\'entrée doit être numérique');
    }
} while (nombreEtages > 25 || nombreEtages <= 0 || isNaN(nombreEtages) )


console.log('Voici la pyramide :');

let result = '';
for (let i = 1; i <= nombreEtages; i++) {
    let etage = '';
    etage += (' ').repeat(nombreEtages - i) + '#'.repeat(2 * i - 1);
    result += etage + '\n';
}
console.log(result);


