let squares = document.querySelectorAll('.square')
let reiniciar = document.getElementById("restart")
let res = document.getElementById("res")
reiniciar.addEventListener('click', restartGame)

squares.forEach((square) =>{

    square.addEventListener('click', handclick)
})

function handclick(event){
    
    let square = event.target
    let position = square.id

    
    if(handlemove(position)){
            
            if(player == 0){

                res.innerHTML = `O player 1 ganhou a rodada!!`
            }else if(player == 1){
                res.innerHTML = `O player 2 ganhou a rodada!!`
            }
           
    }else if(handlemove(position) == false){
        res.innerHTML = `Velha!!!`
    }

    UpgradeScreen()

    
}

function UpgradeScreen(){

    squares.forEach((square) =>{
        let position = square.id
        let symbol = board[position]

        if(board[position] != ""){
            square.innerHTML = `<div class = "${symbol}"></div>`
        }
    })
}

function restartGame(){
    
    squares.forEach((square) =>{
        let position = square.id
        
        square.innerHTML = ""
        board[position] = ""
        gameOver = false
        res.innerHTML = ""
        
    })
}


