class Player {
         constructor(symbol) {
            this.symbol = symbol;
        }
    };

class TicTacToe {

    constructor() {
        this.count = 0;
        this.player1 = new Player("x");
        this.player2 = new Player("o");
        this.currentPlayer = this.player1;
        this.matrix = [[],[],[]];
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer.symbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.matrix[rowIndex][columnIndex] == undefined){
            this.matrix[rowIndex][columnIndex] = this.currentPlayer.symbol;
            if(this.currentPlayer.symbol == "x")
                this.currentPlayer = this.player2;
            else  this.currentPlayer = this.player1;
            this.count ++;
        }
    }

    isFinished() {
        if(this.getWinner()!== null || this.isDraw())
            return true;
        else return false;
    }

    getWinner() {
        for(var i = 0; i<3; i++)
        {
            if(this.matrix[i][0]=="x" && this.matrix[i][1]=="x" && this.matrix[i][2]=="x")
                return "x";
            if(this.matrix[i][0]=="o" && this.matrix[i][1]=="o" && this.matrix[i][2]=="o")
                return "o";
            if(this.matrix[0][i]=="o" && this.matrix[1][i]=="o" && this.matrix[2][i]=="o")
                return "o";
            if(this.matrix[0][i]=="x" && this.matrix[1][i]=="x" && this.matrix[2][i]=="x")
                return "x";
        }
        if(this.matrix[0][0]=="o" && this.matrix[1][1]=="o" && this.matrix[2][2]=="o")
                return "o";
        if(this.matrix[0][0]=="x" && this.matrix[1][1]=="x" && this.matrix[2][2]=="x")
                return "x";
        if(this.matrix[0][2]=="o" && this.matrix[1][1]=="o" && this.matrix[2][0]=="o")
                return "o";
        if(this.matrix[0][2]=="x" && this.matrix[1][1]=="x" && this.matrix[2][0]=="x")
                return "x";
        
          return null;
    }

    noMoreTurns() {
        return this.count == 9;
    }

    isDraw() {
        return this.noMoreTurns() && this.getWinner() == null;

    }

    getFieldValue(rowIndex, colIndex) {
        if(this.matrix[rowIndex][colIndex] == undefined)
            return null;
        else return this.matrix[rowIndex][colIndex];
    }
}
            
module.exports = TicTacToe;
