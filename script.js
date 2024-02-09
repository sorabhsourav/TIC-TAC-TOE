console.log("Welcome to Zero Kaata");
let music = new Audio("music.mp3");
let audioturn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");

let turn = "X";
let isgameover = false;
//fxn to change turn
const changeTurn = () => {

    return turn === "X" ? "O" : "X"
}

//fxn to check for win
music.play();
const checkWin = () => {
    let boxtexts = document.getElementsByClassName('boxtext')
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " won "
            isgameover = true; // to stop increasing the turns
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '200px';
        }
    })
}

//game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
        let boxtext = element.querySelector('.boxtext');
        element.addEventListener('click', (e) => {
            if (boxtext.innerText === '') {
                boxtext.innerText = turn;
                turn = changeTurn(); //will update turn value by running that fxn and return 
                audioturn.play();
                checkWin();
                if (!isgameover) {

                    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
                }

            }
        })
    })
    //adding onclick listener to reset button

reset.addEventListener('click', (e) => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    })
    turn = "X";
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '0px';

})