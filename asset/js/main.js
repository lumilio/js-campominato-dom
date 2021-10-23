

/* Consegna
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un cellId:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l'utente clicca su ogni cella:
se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso 
e la partita termina,




altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba
o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve scoprire tutte le bombe e comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito. */





const griglia = document.getElementById('container')
const punteggio = document.getElementById('punteggio-txt')

let cellNumber;
let cellDimension;
let userPoint = 0 


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




function bombGeneretor(quantity, max){
    const bombList = []
    while(bombList.length < quantity){
      var randomBombs = Math.floor(Math.random() * max) + 1
      if(bombList.indexOf(randomBombs) === -1) bombList.push(randomBombs)
    }
  return(bombList)
}




function grillgen(x,y) {


    let bombs = bombGeneretor(16, x);


    for (let i = 1; i <= x; i++) {  
         
        let cell = document.createElement('div');
        cell.className = 'cell_type'
        cell.style.width = y
        cell.style.height = y

        let theNumber = document.createElement('div');
        let cellId = i
        griglia.append(cell)
        cell.append(theNumber)
        theNumber.innerHTML = cellId 



        cell.addEventListener('click',  function selezione(e) {   
            if (bombs.includes(cellId)){
                punteggio.innerHTML = `GAME OVER <br> POINTS: ${userPoint}` 
                for (let i = 0; i < bombs.length; i++) {
                    document.getElementsByClassName('cell_type').item(bombs[i] - 1).classList.add("color-bomb");  /* -----------per colorarne solo una this.classList.add("color-bomb"); */
                }
                for (let i = 0; i < x; i++) {
                    document.getElementsByClassName('cell_type').item(i).classList.add("stop")
                }              
            }  
            if (!this.classList.contains("stop")) {
                userPoint++;
                console.log(userPoint);
                this.removeEventListener("click", selezione); 
                this.classList.add("color");
                if (userPoint == x - 16){
                    punteggio.innerHTML = `GAME OVER<br>YOU WIN<br> MAX POINT GAINED: ${userPoint}`
                }
            }
        })   
    }
}



    



/* function gameOver() {
    // select all cells
    const elements = document.getElementsByClassName('cell')
    // [.cell, .cell]
    // for each cell remove the enven litener
    for (let index = 0; index < cellSelect.length; index++) {
      const element = elements[index];
      element.removeEventListener('click', cellSelect)
    }
  } */





/* function removeclick(){           
    if (bombs.includes(cellId)){
        punteggio.innerHTML = `GAME OVER <br> POINTS: ${userPoint}`
        for (let i = 0; i < bombs.length; i++) {
            document.getElementsByClassName("cell_type").item(bombs[i] - 1).classList.add("color-bomb");   
        }               
    }  
    else {
        this.classList.add("color");
        userPoint++;
        if (userPoint == x - 16){}
    }
} */
    



























/* for (let index = 0; index < selMode; index++) {
    elemento.removeEventListener("click", addColor);
}


for (let i = 0; index < x; index++) {
    document.getElementsByClassName("cell_type").removeEventListener("click", e);
}  */
/* function generateBombs(cellNumber) {
    let bombsList = []
    while (bombsList.length < 16) {
      let randomNumber = random_Utility(1, cellNumber)
      if (!bombsList.includes(randomNumber)) {
        bombsList.push(randomNumber)
      } 
    }
    return bombsList;
}

let bombs = generateBombs(cellNumber);
console.log(bombs); 

function random_Utility(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

*/








