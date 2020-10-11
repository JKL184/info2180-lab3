
var grid;
var statusbox;

window.onload=function Startgame(){
    boardlayout();
    let newgame=document.getElementsByClassName('btn')[0];
    newgame.addEventListener('click',restart);
}

function boardlayout(){
    grid= document.querySelectorAll('#board div');
    for(let x=0;x<grid.length;x++){
        grid[x].classList.add('square');
        setHover(grid[x]);
        grid[x].addEventListener('click',playturn,{once: true});
    }
}
let xturn=true;
const winmoves=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let xmoves=[];
let omoves=[];
let gamewin=false;
function playturn(e){
    addMark(e.target,xturn);
    boardmoves(e.target);
    checkWin();
    switchturn();
    setStatus();
}
function addMark(cell,xturn){
    if (xturn){
        cell.textContent="X";
        cell.classList.add("X")
    }else{
        cell.textContent="O";
        cell.classList.add("O")
    }
}
function switchturn(){
    xturn=!xturn;
}

function setHover(cell){
    cell.onmouseover=function(){
        cell.classList.add("hover");

    }
    cell.onmouseout=function(){
        cell.className="square";
        if (cell.textContent=="X"){
            cell.classList.add("X")
        }
        if (cell.textContent=="O"){
            cell.classList.add("O")
        }
}
}
function setStatus(){
    statusbox=document.querySelector('#status');
    if (gamewin) {
        statusbox.classList.add('you-won');
        if (!xturn){
            statusbox.innerHTML="Congratulations!X is the Winner!";
        }else{
            statusbox.textContent="Congratulations!O is the Winner!"; 
        }
        for(let x=0;x<grid.length;x++){
            grid[x].removeEventListener('click',playturn);
        }
    }else{
        if (xturn){
            statusbox.innerHTML="It's currently X's Turn";
        }else{
            statusbox.textContent="It's currently O's Turn"; 
        }
    }
}


function boardmoves(cell){
    if (xturn) {
        xmoves.push(Array.prototype.indexOf.call(cell.parentNode.children, cell));
    } else{
        omoves.push(Array.prototype.indexOf.call(cell.parentNode.children, cell));
    }
    
}
function checkWin(){
    if (xturn){
        for (let [i,combo] of winmoves.entries()){
            if(combo.every(x=>xmoves.includes(x))){
                gamewin=true;
            }
        }
    }
    else{
        for (let [i,combo] of winmoves.entries()){
            if(combo.every(x=>omoves.includes(x))){
                gamewin=true;
            }
        }
    }     
}
function restart(e){
    xmoves=[];
    omoves=[];
    gamewin=false;
    statusbox.textContent=("Move your mouse over a square and click to play an X or an O.");
    statusbox.classList.remove('you-won');
    for(let x=0;x<grid.length;x++){
        grid[x].textContent=null;
        grid[x].addEventListener('click',playturn,{once: true});
    }
}
