console.log('welcome to tictactoe')
let turn = 'X'
let isgameover = false;




const changeTurn=()=>{
    if (turn ==='X'){
        return 0 ;
    }    
    else{
        return 'X';
    }
}

const checkwin=()=>{
    let boxtext = document.getElementsByClassName('boxtext')
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6] 
    ]
    wins.forEach(e => {
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== '')){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + 'won'
            isgameover = true
        }
    })
}

let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(elem=>{
    let boxtext = elem.querySelector('.boxtext');
    elem.addEventListener('click',()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText =turn
            turn = changeTurn();
            checkwin();
            if(!isgameover){
                document.getElementsByClassName('info')[0].innerText='Turn for '+ turn ; 
            }
        }
    })
})



reset.addEventListener('click',()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(elem =>{
        elem.innerText = ' '
    })
    turn = 'X'
    isgameover = false
        document.getElementsByClassName('info')[0].innerText='Turn for '+ turn ; 
    
})