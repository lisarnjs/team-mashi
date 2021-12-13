
const playerEl = document.querySelectorAll('.player');
const playerA = document.querySelector('.player_A');
const playerB = document.querySelector('.player_B');
const roleDice = document.querySelector('.dice-button');
const holdDice = document.querySelector('.hold-button');

let playerACount = 0;
let playerBCount = 0;
let turnCount = 0;
let turn = 0;

console.log(playerEl);
// console.log(playerEl[0].childElementCount);
console.log(playerEl[0].firstElementChild); //.player_A
console.log(playerEl[0].lastElementChild); //.player_B

//A와 B중 순서인 사람 누르기
playerEl[0].addEventListener('click', (ev)=>{
    if(ev.target.className === 'player_A') {
        alert('A의 차례입니다!');
        turn += 1;
    } else if(ev.target.className === 'player_B') {
        alert('B의 차례입니다!');
        turn += 2;
    }
    console.log(turn); //A=1 || B=2
});


function turnPlayer() {
    if(turn === 1) {
        return playerACount;
    }
    else if( turn === 2) {
        return playerBCount
    }
}
console.log(turnPlayer());
// 주사위 굴리기
var diceNum = 0;
var check = ture;
while(check) {
    
    roleDice.addEventListener('click', ()=> {
        //랜덤 숫자 굴리기
    });
    if(diceNum === 1) { break; }
    else {
        turnCount += diceNum; //해당 턴 점수에 나온 숫자 합산
        holdDice.addEventListener('click', ()=>{
            break;
        });
    }
}