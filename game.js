let board = ['','','','','','','','','']
let player = 0
let symbols = ["x","o"]
let gameOver = false

function handlemove(position){

    if(gameOver){
        return
    }
    if(board[position] ==  ""){

        board[position] = symbols[player]

        gameOver = isWin()

        if(!gameOver){
            if(player == 1){
                player = 0
            }else{
                player = 1
            }
    }
}
    return gameOver
}

function isWin(){
    let states = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6],
        [0,3,6],
        [1,4,7],
        [2,5,8],
    ]

    for (let i = 0; i < states.length; i++) {
        let seq = states[i]

        let pos1 = seq[0]
        let pos2 = seq[1]
        let pos3 = seq[2]

        if(board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != ""){
            return true
         }
       
        
    }

    let completedSquare = 0

    for (let i = 0; i < board.length; i++) {
        if(board[i] != ""){
            completedSquare++
        }
        
    }
    if(completedSquare == board.length){
        return false
    }
    
    
}




