window.onload=function boardlayout(){
var grid= document.querySelectorAll('#board div');
for(let x=0;x<grid.length;x++){
    grid[x].classList.add('square');
    grid[x].addEventListener('click',playturn,{once: true});
}
}
let xturn=true;
function playturn(e){
    addMark(e.target,xturn);
    switchturn();
    console.log("Square "+" clicked");
}
function boardmoves(){
    let moves=[[],[],[],[],[],[],[],[],[]];
    
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