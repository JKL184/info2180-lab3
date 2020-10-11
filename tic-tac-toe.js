
window.onload=function boardlayout(){
    var grid= document.querySelectorAll('#board div');
for(let x=0;x<grid.length;x++){
    grid[x].classList.add('square');
    setHover(grid[x]);
    grid[x].addEventListener('click',playturn,{once: true});
    
}
}
let xturn=true;
function playturn(e){
    addMark(e.target,xturn);
    switchturn();
    setStatus();
    console.log("Square clicked");
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

function setStatus(){
    let statusbox=document.querySelector('#status');
    if (xturn){
        statusbox.innerHTML="It's currently X's Turn";
    }else{
        statusbox.textContent="It's currently O's Turn"; 
    }
}
function setHover(cell){
    cell.onmouseover=function(){
        if (cell.textContext==null){
            cell.classList.add("hover");
        }
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


