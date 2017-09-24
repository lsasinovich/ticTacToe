class Player {
         constructor(symbol) {
            this.symbol = symbol;
        }
    };

class TicTacToe {

    constructor() {
        var vinPosition = [["x", "x", "x"],["o", "o", "o"]];
        this.count = 0;
        this.player1 = new Player("x");
        this.player2 = new Player("o");
        this.currentPlayer = this.player1;
        this.matrix = new Array(3);
        for(var i = 0; i<3; i++)
            this.matrix[i] = new Array(3);
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
            this.count++;
        }
    }

    isFinished() {
        if(this.getWinner()!== null || this.isDraw() == true)
            return true;
        else return false;
    }

    getWinner() {
        for(var i = 0; i<3; i++)
        {
            if(vinPosition.indexOf(this.matrix[i]) != -1)
                return this.matrix[i][0];
            if(vinPosition.indexOf([this.matrix[0][i],this.matrix[1][i],this.matrix[2][i]]) != -1)
                return this.matrix[0][i];
        }
        if(vinPosition.indexOf([this.matrix[0][0],this.matrix[1][1],this.matrix[2][2]]) != -1)
                return this.matrix[0][0];
        if(vinPosition.indexOf([this.matrix[0][2],this.matrix[1][1],this.matrix[2][0]]) != -1)
                return this.matrix[1][1];        
          return null;
    }

    noMoreTurns() {
        if (this.count == 9)
                    return true;
        return false;
    }

    isDraw() {
        if(this.noMoreTurns() == true && this.getWinner() == null)
            return true;
        else return false;
    }

    getFieldValue(rowIndex, colIndex) {
        if(this.matrix[rowIndex][colIndex] == undefined)
            return null;
        else return this.matrix[rowIndex][colIndex];
    }
}
            
module.exports = TicTacToe;
