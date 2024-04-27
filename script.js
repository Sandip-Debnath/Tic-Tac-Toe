let boxes=document.querySelectorAll('.box');
let rsbt=document.querySelector('#reset-btn')
let winner=document.querySelector('#winner')
let turn=0;

const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn===0){
            box.innerText='X';
            checkwinner();
            turn=1;
        }
        else{
            box.innerText='O';
            checkwinner();
            turn=0;
        }
        box.disabled = true;
    });
});

const resetGame=()=>{
    rsbt.innerText="Reset Game";
    turn=0;
    enableAllBoxes();
    winner.innerText="";
};

const disableAllBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableAllBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const checkwinner=()=>{
    for(let pattern of winPattern){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                    winner.innerHTML=`<i>Congratulations!! Winner is player${turn+1}</i>`;
                    disableAllBoxes();
                    rsbt.innerText="New Game";                
            }
        }
    }
};

rsbt.addEventListener("click",resetGame);