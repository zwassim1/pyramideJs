alert('Salut, bienvenue dans ma super pyramide !');
console.log('Salut, bienvenue dans ma super pyramide !');

do {
    var nombreEtages = Number(prompt("Combien d'étages veux-tu ?"));
    if (nombreEtages > 25) {
        alert("Le nombre d'étages doit être inférieur à 25 !");
    }
} while (nombreEtages > 25)

console.log('Voici la pyramide :');

for (let i = 1; i <= nombreEtages; i++) {
    let etage = '';
    for (let j = nombreEtages - i; j >= 1; j--) {
        etage += ' ';
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
        etage += '#';
    }
    console.log(etage);
}