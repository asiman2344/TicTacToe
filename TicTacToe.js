
let cells=document.querySelectorAll('.cell');
let checkerX=document.querySelector('.checker-x');
let checkerO=document.querySelector('.checker-o');
let winnerDiv=document.querySelector('.winner');
let restartButton=document.querySelector('.restart');
let winnerFound = false;
let playerChecker='O'

let winnerCom=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],
               [1,4,7],[2,5,8],[0,4,8],[2,4,6]];

let playerX=[];
let playerO=[];

cells.forEach(element=>{
    element.addEventListener('click',function(e){
        if(e.target.textContent==='' && winnerFound===false){
            if(playerChecker==='O'){
                e.target.textContent='X';
                playerChecker='X'
                checkerX.classList.remove('active');
                checkerO.classList.add('active');
                playerX.push(Number(e.target.id));
            }else{
                e.target.textContent='O';
                playerChecker='O';
                checkerO.classList.remove('active');
                checkerX.classList.add('active');
                playerO.push(Number(e.target.id));
            }

            checkWinner();
        }
    })
});

function checkWinner() {
    for (let winner of winnerCom) {
        let a = winner[0];
        let b = winner[1];
        let c = winner[2];

        if (playerX.length >= 3 || playerO.length >= 3) {
            if (playerX.includes(a) && playerX.includes(b) && playerX.includes(c)) {
                winnerDiv.textContent = 'Winner is X';
                winnerFound = true;
            } else if (playerO.includes(a) && playerO.includes(b) && playerO.includes(c)) {
                winnerDiv.textContent = 'Winner is O';
                winnerFound = true;
            }
        }
    }
}

restartButton.addEventListener('click',function(){
    cells.forEach(cell => {
        cell.textContent = ''; // Clear cell contents
    });
    winnerDiv.textContent = ''; // Clear winner display
    playerX = []; // Clear player X moves
    playerO = []; // Clear player O moves
    playerChecker = 'O'; // Reset player turn to O
    checkerX.classList.remove('active');
    checkerO.classList.add('active');
    winnerFound = false; // Reset winner found status
})

// console.log(playerX);