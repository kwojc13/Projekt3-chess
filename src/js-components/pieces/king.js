"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.King = void 0;
const piece_1 = require("./piece");
class King extends piece_1.Piece {
    constructor(color, positionX, positionY) {
        super(color, positionX, positionY);
        this.symbol = `../../../static/assets/${this.color}King.png`; //<-- w przyszłości bedzie tu ścieżka do img figury
        this.setOnBoard(this.positionX, this.positionY);
    }
    showPossibleMoves() {
        const arrayOfX = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        const indexOfX = arrayOfX.indexOf(this.getPositionX());
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                const square = document.querySelector(`#${arrayOfX[indexOfX + i]}-${this.getPositionY() + j}`);
                if (square != null && square.innerHTML == "")
                    square.classList.add('active');
            }
        }
        this.move();
    }
    move() {
        const squares = document.querySelectorAll('.board-container div');
        squares.forEach(square => {
            square.addEventListener('click', () => {
                if (square.classList.contains('active')) {
                    console.log(square);
                    this.setOnBoard(square.id.charAt(0), parseInt(square.id.charAt(2)));
                    squares.forEach(square => square.classList.remove('active'));
                }
            });
        });
    }
}
exports.King = King;
