let boxes =document.querySelectorAll(".box");
let resetBtn =document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let count=0;

let turn0=true;         //playerX,playero
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGame = () =>{
    turn0= true;
    enableBoxes();
    msgContainer.classList.add('hide');
}; 

boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
       /* console.log("box is click");*/
        if (turn0==true){  //player0
            box.innerText="O";
            turn0=false;
            box.classList.remove("change");
            count++;  
        }
        else{               
            //player X
            box.innerText="X";
            turn0=true;
            box.classList.add("change");
            count++;
        }
        box.disabled =true;
        checkWinner();
        isDraw();
       
    
    });
    
});


const disableBoxes =() =>{
    for(let box of boxes){
        box.disabled =true;
    }
}

const enableBoxes =() =>{
    for(let box of boxes){
        box.disabled =false;
        box.innerText="";
    }
}

const showWinner=(winner) =>{
    msg.innerText=`Congrutulations !!  Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    count=0;

} 
const showDraw=() =>{
    msg.innerText=`This Game is a Draw !!`;
    msgContainer.classList.remove("hide");

} 

const isDraw =() =>{
    if(count>=9){
        showDraw();
        count=0;
    }
}

const checkWinner =() =>{
    for(let patterns of winPatterns){
        /*  console.log(patterns[0],patterns[1],patterns[2]);
        //console.log(boxes[patterns[0]],boxes[patterns[1]],boxes[patterns[2]]);
        console.log(
            boxes[patterns[0]].innerText,
            boxes[patterns[1]].innerText,
            boxes[patterns[2]].innerText
        );*/
        let pos1val= boxes[patterns[0]].innerText;
        let pos2val= boxes[patterns[1]].innerText;
        let pos3val= boxes[patterns[2]].innerText;
        
        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val==pos2val&& pos2val==pos3val){
               /* console.log("winner",pos1val);*/
                disableBoxes();
                showWinner(pos1val);

                
            }
        }

    }
};
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);




