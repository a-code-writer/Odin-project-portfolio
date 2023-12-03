const Gameboard = (() => {
    let gameboard = ["", "", "", "", "", "", "", "", ""];

    const render = () =>{
        let boardHTML = '';
        gameboard.forEach((square, index) => {
            boardHTML += `<div class = 'square' id='square-${index}'>${square}</div>`
        });
        document.querySelector('#gameboard').innerHTML = boardHTML;
       
    }

    const update = (index, value) => {
        gameboard[index] = value
        render();
    }

    const getGameboard = () => gameboard;
    
    return{
        render, update, getGameboard
    };
})();

const createPlayer = (name, mark) =>{
    return{
        name,
        mark
    }
}

const Game = (() => {
    let players = [];
    let currentPlayerIndex = 0;
    let gameOver;

    const start = () =>{
        players = [
            createPlayer(document.getElementById('player1').value, "X"),
            createPlayer(document.getElementById('player2').value, "O")
        ]
        currentPlayerIndex = 0; 
        gameOver = false;
        Gameboard.render()
        const squares = document.querySelectorAll('.square');
        console.log(squares)
        squares.forEach(addEventListener('click', handleclick));
    }

    const handleclick = (event) =>{
        let index = parseInt(event.target.id.split("-")[1]);
        if(Gameboard.getGameboard()[index] !== ""){
            return
        }
        Gameboard.update(index, players[currentPlayerIndex].mark)

        if(checkForWin(Gameboard.getGameboard(), players[currentPlayerIndex].mark)){
            gameOver = true;
            alert(`${players[currentPlayerIndex].name} won!`)
        } else if(checkForTie(Gameboard.getGameboard())){
            gameOver = true;
            alert("It's a tie")
        }


        currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
    }

    const restart = () => {
        for (let i = 0; i < 9; i++){
            Gameboard.update(i, "")
        }
        Gameboard.render();
    }


    return{
        start, handleclick, restart
    }
})();

function checkForWin(board){
    const winningCombinations = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for(let i = 0; i < winningCombinations.length; i++){
        const [a,b,c] = winningCombinations[i];
        if(board[a] && board[a] === board[b] && board[a] === board[c]){
            return true;
        }
    }
    return false;
}

function checkForTie(board) {
    return board.every(cell => cell !== "")
}

const startBtn = document.getElementById("start-button");

const restartBtn = document.getElementById("restart-button");

restartBtn.addEventListener('click', () => {
    Game.restart();
})

startBtn.addEventListener('click', () => {
    Game.start();
})
