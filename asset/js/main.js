

/* Consegna
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un cellId:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l'utente clicca su ogni cella:
se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina,
altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando
il giocatore clicca su una bomba
o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve scoprire tutte le bombe e comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito. */





// seleziono elemento dalla DOM
const griglia = document.getElementById('container')


let cellNumber;
let cellDimension;


document.getElementById("lv1btn").addEventListener('click', function () {
    cellNumber = 100;
    cellDimension = '63px';       
    grillgen(cellNumber,cellDimension)
    document.getElementById('pulsanti').style.display = 'none';
})

document.getElementById("lv2btn").addEventListener('click', function () {
    cellNumber = 81;
    cellDimension = '70px';
    grillgen(cellNumber,cellDimension)
    document.getElementById('pulsanti').style.display = 'none';
})

document.getElementById("lv3btn").addEventListener('click', function () {
    cellNumber = 49;
    cellDimension = '90px';
    grillgen(cellNumber,cellDimension)
    document.getElementById('pulsanti').style.display = 'none';
})


//creo una funzione che genera una griglia
function grillgen(x,y) {
    for (let i = 1; i <= x; i++) {

        //creo il numero casuale dei ivelli
        let cellId = i
        //creo un div ripetuto e ci aggiungo una classe
        let cell = document.createElement('div');
        cell.style.width = y
        cell.style.height = y
        cell.className = 'cell_type' , 'color'
        griglia.append(cell)     

        //creo un secondo div per ogni cella e ci metto il numero 
        let theNumber = document.createElement('div');
        theNumber.innerHTML = cellId 
        cell.append(theNumber)  
 
        //al click modifico le classi dei div
        cell.addEventListener('click',  function () {    
            if (this.classList.contains("color")) {
                this.classList.remove("color")
            } else {
                this.classList.add("color")
            }
        })
    }
}



function random_Utility(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateBombs(cellNumber) {
    const bombs = []
    while (bombs.length < 16) {
      const randomNumber = random_Utility(1, cellNumber)
      if (!bombs.includes(randomNumber)) {
        console.log('Add a bomb');
        bombs.push(randomNumber)
      }
    }
    return bombs;
}









/**

 */



/* const bombs = []

while (bombs.length < 16) {
    const numeroBomba = getRandomNumber(1, cellNumber)
    if (!bombs.includes(numeroBomba)) {
        bombs.push(numeroBomba)
    }
} 


console.log(bombs);  */




