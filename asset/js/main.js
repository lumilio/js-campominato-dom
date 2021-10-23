

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
const newGame = document.getElementById('reload')

let userPoint = 0 

let cellNumber, cellDimension


document.getElementById("lv1btn").addEventListener('click', function () {
    cellNumber = 100;
    cellDimension = '63px';       
    grillgen(cellNumber,cellDimension);
    document.getElementById('pulsanti').style.display = 'none';
    griglia.classList.remove('bombpic');
    griglia.classList.add('bg-white');
})

document.getElementById("lv2btn").addEventListener('click', function () {
    cellNumber = 81;
    cellDimension = '70px';
    grillgen(cellNumber,cellDimension);
    document.getElementById('pulsanti').style.display = 'none';
    griglia.classList.remove('bombpic');
    griglia.classList.add('bg-white');
})

document.getElementById("lv3btn").addEventListener('click', function () {
    cellNumber = 49;
    cellDimension = '90px';
    grillgen(cellNumber,cellDimension);
    document.getElementById('pulsanti').style.display = 'none';
    griglia.classList.remove('bombpic');
    griglia.classList.add('bg-white');
})




function bombGeneretor(quantity, max){
    const bombList = []
    while(bombList.length < quantity){
      var randomBombs = Math.floor(Math.random() * max) + 1
      if(bombList.indexOf(randomBombs) === -1) bombList.push(randomBombs)
    }
  return(bombList)
}




newGame.addEventListener('click', function () {
    document.getElementById('pulsanti').style.display = 'block';
    newGame.classList.add('d-none')
    griglia.innerHTML = ''
    punteggio.innerHTML = ''
    userPoint = 0 
    griglia.classList.add('bombpic');
});






function grillgen(x,y) {

    let bombs = bombGeneretor(16, x);
    console.log(bombs);

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

        let cellSelector = document.getElementsByClassName('cell_type')





        cell.addEventListener('click',  function selezione(e) { 
            
            
            if (bombs.includes(cellId)){
                newGame.classList.remove('d-none')
                punteggio.innerHTML = `GAME OVER <br> POINTS: ${userPoint}` 

                for (let i = 0; i < bombs.length; i++) {
                    cellSelector.item(bombs[i] - 1).classList.add("color-bomb");  /* ----------- per colorarne solo una this.classList.add("color-bomb"); */
                }

                for (let i = 0; i < x; i++) {
                    cellSelector.item(i).classList.add("stop")  /* ----------- classe vuota per fermare il click quando trovo una bomba */
                } 
            }


            if (!this.classList.contains("stop")) {
                userPoint++;
                this.removeEventListener("click", selezione); 
                this.classList.add("color");
                if (userPoint == x - 16){
                    newGame.classList.remove('d-none')
                    punteggio.innerHTML = `GAME OVER<br>YOU WIN<br> MAX POINT GAINED: ${userPoint}`

                    for (let i = 0; i < bombs.length; i++) {
                        cellSelector.item(bombs[i] - 1).classList.add("color-bomb");  
                    }

                    for (let i = 0; i < x; i++) {
                        cellSelector.item(i).classList.add("stop")  
                    } 
                }
            }
        })   
    }
}






    































