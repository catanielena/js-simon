// *
// * La funzione genera numeri causali entro un intervallo stabilito
// *
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// *
// *
// *
// *Programma principale
// *
// *
// *
// array
var arr = [];
// Generazione casuale di 5 numeri
while (arr.length < 5) {
    var rndNumber = getRndInteger(1, 50);
    if (arr.includes(rndNumber) == false) {
        arr.push(rndNumber);
    }
}
console.log(arr);
// Alert array
alert(arr);
// user array
var userArr = [];
var foundNumbers = [];
setTimeout(function() {
    var i = 1;
    while (userArr.length < 5) {
        // user numbers
        var userNumber = parseInt(prompt(`Inserisci il ${i}° numero presente nella lista`));
        // controllo ripetizioni
        while (userArr.includes(userNumber) == true) {
            var userNumber = parseInt(prompt(`Attenzione hai già inserito questo numero! Riprova`));
        }
        // controllo identità
        if (!(isNaN(userNumber))) {
            userArr.push(userNumber);
            i++;
        } 
    }
    console.log(userArr);
    //confronto array
    for (let n=0; n<5; n++) {
        if(arr.includes(userArr[n])) {
            foundNumbers.push(userArr[n]);
        }
    }
    // messaggio finale
    alert(`Hai trovato ${foundNumbers.length} numeri (${foundNumbers})`);
}, 3000);
