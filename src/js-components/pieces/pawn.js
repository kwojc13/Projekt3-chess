"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pawn = void 0;
const piece_1 = require("./piece");
//pion
class Pawn extends piece_1.Piece {
    constructor(color, positionX, positionY) {
        super(color, positionX, positionY);
        this.symbol = `../../../static/assets/${this.color}Pawn.png`;
        this.setOnBoard(this.positionX, this.positionY);
        let $self = this;
        this.parentSquare.addEventListener("click", this.showPossibleMoves.bind(this));
    }
    showPossibleMoves() {
        this.removeClassActive();
        if (this.color === 'white') {
            let positionY1 = this.positionY + 1;
            if (document.getElementById(`${this.positionX}-${positionY1}`).classList.contains('pieceInside')) {
                console.log('no possible moves!');
                return;
            }
            if (this.positionY === 2) {
                for (let i = 3; i < 5; i++) {
                    document.getElementById(`${this.positionX}-${i}`).classList.add('active');
                }
            }
            else {
                document.getElementById(`${this.positionX}-${positionY1}`).classList.add('active');
            }
        }
        else {
            let positionY1 = this.positionY - 1;
            if (this.positionY === 7) {
                for (let i = 6; i > 4; i--) {
                    document.getElementById(`${this.positionX}-${i}`).classList.add('active');
                }
            }
            else {
                document.getElementById(`${this.positionX}-${positionY1}`).classList.add('active');
            }
        }
    }
    removeClassActive() {
        let elems = document.querySelectorAll('.active');
        for (var i = 0; i < elems.length; i++) {
            elems[i].classList.remove('active');
        }
    }
}
exports.Pawn = Pawn;
