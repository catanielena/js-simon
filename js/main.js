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
// secondi
var sec = 30;
// clock
var clock;
// user array
var userArr = [];
var foundNumbers = [];
var score = document.getElementById("score");
// btn genera
var genera = document.getElementById("genera");
// play-again
var playAgain = document.getElementById("play-again");
// *
// *
// *
// *btn genera
genera.addEventListener("click",
    function() {
        // Generazione casuale di 5 numeri
        while (arr.length < 5) {
            var rndNumber = getRndInteger(1, 50);
            if (arr.includes(rndNumber) == false) {
                arr.push(rndNumber);
                document.getElementById("numbers").innerHTML += `<div class="memory-numbers">${rndNumber}</div>`;
            }
        }
        console.log(`arr`, arr);
        genera.classList.add("hide");
        setTimeout( 
            function() {
                document.getElementById("numbers").classList.add("hide");     
                document.getElementById("form").classList.add("open-flex");   
                clock = setInterval(
                    function() {
                        document.getElementById("seconds").innerHTML = sec;
                        sec--;
                        if (sec == -1) {
                            clearInterval(clock);
                        }
                    }, 1000);  
                    setTimeout(function() {
                        for(let i=1; i<= 5; i++) {
                            var userNumber = parseInt(document.getElementById(`user-number#${i}`).value);
                            userArr.push(userNumber);
                            document.getElementById(`user-number#${i}`).disabled = true;
                        }
                        console.log(`userArr`, userArr);
                        //confronto array
                        for (let n=0; n<5; n++) {
                            if(arr.includes(userArr[n])) {
                                foundNumbers.push(userArr[n]);
                            }
                        }
                        // messaggio finale
                        if (foundNumbers.length > 1) {
                            score.innerHTML = `Hai trovato ${foundNumbers.length} numeri (${foundNumbers})`;
                        } else if (foundNumbers.length == 1) {
                            score.innerHTML = `Hai trovato ${foundNumbers.length} numero (${foundNumbers})`;
                        } else {
                            score.innerHTML = `Non hai trovato alcun numero`;
                        }
                        document.getElementById("seconds").classList.add("hide");
                        document.getElementById("btn-score").classList.add("open");
                    }, 31000);   
        }, 2000);
    }
); 
// *
// *
// * btn play-again
playAgain.addEventListener("click",
    function() {
        location.reload();
    }
);

