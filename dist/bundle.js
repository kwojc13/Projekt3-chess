/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_components_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js-components/board */ \"./src/js-components/board.js\");\n/* harmony import */ var _js_components_fillBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js-components/fillBoard */ \"./src/js-components/fillBoard.js\");\n/* harmony import */ var _js_components_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js-components/game */ \"./src/js-components/game.js\");\n\r\n\r\n\r\n\r\n// const gameBoard = new Board();\r\n// gameBoard.drawBoard();\r\n// fillBoard();\r\n\r\nconst game = new _js_components_game__WEBPACK_IMPORTED_MODULE_2__.Game();\r\n\r\ndocument.querySelectorAll('.light').forEach(element => {\r\n    element.addEventListener('click', selectPiece)\r\n});\r\ndocument.querySelectorAll('.dark').forEach(element => {\r\n    element.addEventListener('click', selectPiece)\r\n});\r\n\r\nfunction selectPiece(e){\r\n    if(e.target.parentElement.classList.contains('pieceInside'))\r\n        game.startMove(e.target.parentElement);\r\n}\n\n//# sourceURL=webpack://projekt3-chess/./src/index.js?");

/***/ }),

/***/ "./src/js-components/board.js":
/*!************************************!*\
  !*** ./src/js-components/board.js ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.ID = exports.Board = void 0;\r\nvar ID;\r\n(function (ID) {\r\n    ID[ID[\"A\"] = 1] = \"A\";\r\n    ID[ID[\"B\"] = 2] = \"B\";\r\n    ID[ID[\"C\"] = 3] = \"C\";\r\n    ID[ID[\"D\"] = 4] = \"D\";\r\n    ID[ID[\"E\"] = 5] = \"E\";\r\n    ID[ID[\"F\"] = 6] = \"F\";\r\n    ID[ID[\"G\"] = 7] = \"G\";\r\n    ID[ID[\"H\"] = 8] = \"H\";\r\n})(ID || (ID = {}));\r\nexports.ID = ID;\r\nclass Board {\r\n    drawBoard() {\r\n        const boardWrapper = document.createElement('div');\r\n        boardWrapper.classList.add('board-wrapper');\r\n        const letters = document.createElement('div');\r\n        letters.classList.add('letters');\r\n        const numbers = document.createElement('div');\r\n        numbers.classList.add('numbers');\r\n        const boardContainer = document.createElement('div');\r\n        boardContainer.classList.add('board-container');\r\n        for (let i = 1; i < 9; i++) {\r\n            const div = document.createElement('div');\r\n            div.classList.add('notation');\r\n            div.innerText = `${ID[i]}`;\r\n            letters.appendChild(div);\r\n        }\r\n        for (let i = 8; i > 0; i--) {\r\n            const num = document.createElement('div');\r\n            num.innerText = `${i}`;\r\n            numbers.appendChild(num);\r\n        }\r\n        for (let i = 8; i > 0; i--) {\r\n            for (let j = 1; j < 9; j++) {\r\n                const div = document.createElement('div');\r\n                div.id = `${ID[j]}-${i}`; //<-- ważne żeby każdą komórkę na planszy dało się zidentyfikować za pomocą dwóch współrzędnych\r\n                if (i % 2 === 0)\r\n                    div.classList.add(`${j % 2 === 0 ? 'dark' : 'light'}`);\r\n                else\r\n                    div.classList.add(`${j % 2 === 0 ? 'light' : 'dark'}`);\r\n                boardContainer.appendChild(div);\r\n            }\r\n        }\r\n        document.querySelector('body').appendChild(boardWrapper).appendChild(numbers);\r\n        boardWrapper.appendChild(boardContainer);\r\n        boardWrapper.appendChild(letters);\r\n    }\r\n}\r\nexports.Board = Board;\r\n\n\n//# sourceURL=webpack://projekt3-chess/./src/js-components/board.js?");

/***/ }),

/***/ "./src/js-components/fillBoard.js":
/*!****************************************!*\
  !*** ./src/js-components/fillBoard.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.fillBoard = void 0;\r\nconst king_1 = __webpack_require__(/*! ./pieces/king */ \"./src/js-components/pieces/king.js\");\r\nconst queen_1 = __webpack_require__(/*! ./pieces/queen */ \"./src/js-components/pieces/queen.js\");\r\nconst bishop_1 = __webpack_require__(/*! ./pieces/bishop */ \"./src/js-components/pieces/bishop.js\");\r\nconst knight_1 = __webpack_require__(/*! ./pieces/knight */ \"./src/js-components/pieces/knight.js\");\r\nconst rook_1 = __webpack_require__(/*! ./pieces/rook */ \"./src/js-components/pieces/rook.js\");\r\nconst pawn_1 = __webpack_require__(/*! ./pieces/pawn */ \"./src/js-components/pieces/pawn.js\");\r\nconst board_1 = __webpack_require__(/*! ./board */ \"./src/js-components/board.js\");\r\nconst fillBoard = () => {\r\n    //whites\r\n    const kingWhite = new king_1.King('white', `${board_1.ID[5]}`, 1);\r\n    const queenWhite = new queen_1.Queen('white', `${board_1.ID[4]}`, 1);\r\n    for (let i = 3; i <= 6; i += 3) {\r\n        const bishopWhite = new bishop_1.Bishop('white', `${board_1.ID[i]}`, 1);\r\n    }\r\n    for (let i = 2; i <= 7; i += 5) {\r\n        const knightWhite = new knight_1.Knight('white', `${board_1.ID[i]}`, 1);\r\n    }\r\n    for (let i = 1; i <= 8; i += 7) {\r\n        const rookWhite = new rook_1.Rook('white', `${board_1.ID[i]}`, 1);\r\n    }\r\n    for (let i = 1; i <= 8; i++) {\r\n        const pawnWhite = new pawn_1.Pawn('white', `${board_1.ID[i]}`, 2);\r\n    }\r\n    //blacks\r\n    const kingBlack = new king_1.King('white', `${board_1.ID[5]}`, 8);\r\n    const queenBlack = new queen_1.Queen('white', `${board_1.ID[4]}`, 8);\r\n    for (let i = 3; i <= 6; i += 3) {\r\n        const bishopBlack = new bishop_1.Bishop('white', `${board_1.ID[i]}`, 8);\r\n    }\r\n    for (let i = 2; i <= 7; i += 5) {\r\n        const knightBlack = new knight_1.Knight('white', `${board_1.ID[i]}`, 8);\r\n    }\r\n    for (let i = 1; i <= 8; i += 7) {\r\n        const rookBlack = new rook_1.Rook('white', `${board_1.ID[i]}`, 8);\r\n    }\r\n    for (let i = 1; i <= 8; i++) {\r\n        const pawnBlack = new pawn_1.Pawn('white', `${board_1.ID[i]}`, 7);\r\n    }\r\n};\r\nexports.fillBoard = fillBoard;\r\n\n\n//# sourceURL=webpack://projekt3-chess/./src/js-components/fillBoard.js?");

/***/ }),

/***/ "./src/js-components/game.js":
/*!***********************************!*\
  !*** ./src/js-components/game.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Game = void 0;\r\nconst board_1 = __webpack_require__(/*! ./board */ \"./src/js-components/board.js\");\r\nconst king_1 = __webpack_require__(/*! ./pieces/king */ \"./src/js-components/pieces/king.js\");\r\nconst knight_1 = __webpack_require__(/*! ./pieces/knight */ \"./src/js-components/pieces/knight.js\");\r\nconst queen_1 = __webpack_require__(/*! ./pieces/queen */ \"./src/js-components/pieces/queen.js\");\r\nconst rook_1 = __webpack_require__(/*! ./pieces/rook */ \"./src/js-components/pieces/rook.js\");\r\nconst pawn_1 = __webpack_require__(/*! ./pieces/pawn */ \"./src/js-components/pieces/pawn.js\");\r\nconst board_2 = __webpack_require__(/*! ./board */ \"./src/js-components/board.js\");\r\nclass Game {\r\n    constructor() {\r\n        //private whoNext:string;\r\n        this.whites = [];\r\n        this.gameBoard = new board_1.Board;\r\n        this.gameBoard.drawBoard();\r\n        this.whites.push(new queen_1.Queen('white', `${board_2.ID[4]}`, 1));\r\n        this.whites.push(new king_1.King('white', `${board_2.ID[5]}`, 1));\r\n        // for(let i = 3; i <= 6; i+=3) {\r\n        //     this.whites.push(new Bishop('white', `${ID[i]}`, 1));\r\n        // }\r\n        for (let i = 2; i <= 7; i += 5) {\r\n            this.whites.push(new knight_1.Knight('white', `${board_2.ID[i]}`, 1));\r\n        }\r\n        for (let i = 1; i <= 8; i += 7) {\r\n            this.whites.push(new rook_1.Rook('white', `${board_2.ID[i]}`, 1));\r\n        }\r\n        for (let i = 1; i <= 8; i++) {\r\n            this.whites.push(new pawn_1.Pawn('white', `${board_2.ID[i]}`, 2));\r\n        }\r\n    }\r\n    startMove(square) {\r\n        const x = square.id.charAt(0);\r\n        const y = parseInt(square.id.charAt(2));\r\n        for (let p of this.whites) {\r\n            if (p.getPositionX() == x && p.getPositionY() == y)\r\n                p.showPossibleMoves();\r\n        }\r\n    }\r\n}\r\nexports.Game = Game;\r\n\n\n//# sourceURL=webpack://projekt3-chess/./src/js-components/game.js?");

/***/ }),

/***/ "./src/js-components/pieces/bishop.js":
/*!********************************************!*\
  !*** ./src/js-components/pieces/bishop.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Bishop = void 0;\r\nconst piece_1 = __webpack_require__(/*! ./piece */ \"./src/js-components/pieces/piece.js\");\r\n//goniec / laufer\r\nclass Bishop extends piece_1.Piece {\r\n    constructor(color, positionX, positionY) {\r\n        super(color, positionX, positionY);\r\n        this.symbol = `../../../static/assets/${this.color}Bishop.png`;\r\n        this.setOnBoard(this.positionX, this.positionY);\r\n    }\r\n    showPossibleMoves() {\r\n        //kod odpowiadający za pokazanie możliwych ruchów\r\n    }\r\n}\r\nexports.Bishop = Bishop;\r\n\n\n//# sourceURL=webpack://projekt3-chess/./src/js-components/pieces/bishop.js?");

/***/ }),

/***/ "./src/js-components/pieces/king.js":
/*!******************************************!*\
  !*** ./src/js-components/pieces/king.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.King = void 0;\r\nconst piece_1 = __webpack_require__(/*! ./piece */ \"./src/js-components/pieces/piece.js\");\r\nclass King extends piece_1.Piece {\r\n    constructor(color, positionX, positionY) {\r\n        super(color, positionX, positionY);\r\n        this.symbol = `../../../static/assets/${this.color}King.png`; //<-- w przyszłości bedzie tu ścieżka do img figury\r\n        this.setOnBoard(this.positionX, this.positionY);\r\n    }\r\n    showPossibleMoves() {\r\n        const arrayOfX = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];\r\n        const indexOfX = arrayOfX.indexOf(this.getPositionX());\r\n        for (let i = -1; i <= 1; i++) {\r\n            for (let j = -1; j <= 1; j++) {\r\n                const square = document.querySelector(`#${arrayOfX[indexOfX + i]}-${this.getPositionY() + j}`);\r\n                if (square != null && square.innerHTML == \"\")\r\n                    square.classList.add('active');\r\n            }\r\n        }\r\n        this.move();\r\n    }\r\n    move() {\r\n        const squares = document.querySelectorAll('.board-container div');\r\n        squares.forEach(square => {\r\n            square.addEventListener('click', () => {\r\n                if (square.classList.contains('active')) {\r\n                    console.log(square);\r\n                    this.setOnBoard(square.id.charAt(0), parseInt(square.id.charAt(2)));\r\n                    squares.forEach(square => square.classList.remove('active'));\r\n                }\r\n            });\r\n        });\r\n    }\r\n}\r\nexports.King = King;\r\n\n\n//# sourceURL=webpack://projekt3-chess/./src/js-components/pieces/king.js?");

/***/ }),

/***/ "./src/js-components/pieces/knight.js":
/*!********************************************!*\
  !*** ./src/js-components/pieces/knight.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Knight = void 0;\r\nconst piece_1 = __webpack_require__(/*! ./piece */ \"./src/js-components/pieces/piece.js\");\r\nconst board_1 = __webpack_require__(/*! ../board */ \"./src/js-components/board.js\");\r\n//skoczek / koń\r\nclass Knight extends piece_1.Piece {\r\n    constructor(color, positionX, positionY) {\r\n        super(color, positionX, positionY);\r\n        this.symbol = `../../../static/assets/${this.color}Knight.png`;\r\n        this.setOnBoard(this.positionX, this.positionY);\r\n    }\r\n    removeClassActive() {\r\n        let elems = document.querySelectorAll('.active');\r\n        for (var i = 0; i < elems.length; i++) {\r\n            elems[i].classList.remove('active');\r\n        }\r\n    }\r\n    showPossibleMoves() {\r\n        this.removeClassActive();\r\n        let possibleMovesIds = [];\r\n        const coordinateX = Object.values(board_1.ID).indexOf(this.positionX) + 1;\r\n        const coordinateY = this.positionY;\r\n        // console.log(coordinateX, coordinateY);\r\n        for (let i = coordinateX - 2; i <= coordinateX + 2; i += 4) {\r\n            if (i >= 1 && i <= 8) {\r\n                for (let j = coordinateY - 1; j <= coordinateY + 1; j += 2) {\r\n                    if (j >= 1 && j <= 8) {\r\n                        possibleMovesIds.push(`${board_1.ID[i]}-${j}`);\r\n                    }\r\n                }\r\n            }\r\n        }\r\n        for (let i = coordinateY - 2; i <= coordinateY + 2; i += 4) {\r\n            if (i >= 1 && i <= 8) {\r\n                for (let j = coordinateX - 1; j <= coordinateX + 1; j += 2) {\r\n                    if (j >= 1 && j <= 8) {\r\n                        possibleMovesIds.push(`${board_1.ID[j]}-${i}`);\r\n                    }\r\n                }\r\n            }\r\n        }\r\n        console.log(possibleMovesIds);\r\n        possibleMovesIds.forEach((id) => {\r\n            if (!(document.querySelector(`#${id}`).classList.contains('pieceInside'))) {\r\n                document.querySelector(`#${id}`).classList.add('active');\r\n            }\r\n        });\r\n        // console.log(this);\r\n        // const moveKnight = (e: HTMLElement) => {\r\n        //     if(e.classList.contains('active')){\r\n        //         const coorX = e.id.charAt(0);\r\n        //         const coorY = parseInt(e.id.charAt(2));\r\n        //         // console.log(coordinateX, coordinateY);\r\n        //         this.setOnBoard(coorX, coorY);\r\n        //         document.querySelectorAll('.active')!.forEach(elem => {\r\n        //             elem.classList.remove('active');\r\n        //         });\r\n        //     }\r\n        // }\r\n        document.querySelectorAll('.active').forEach((possMove) => {\r\n            possMove.addEventListener('click', () => {\r\n                console.log(possMove);\r\n                // console.log(this);\r\n                const coorX = possMove.id.charAt(0);\r\n                const coorY = parseInt(possMove.id.charAt(2));\r\n                if (possMove.classList.contains('active')) {\r\n                    // console.log(coordinateX, coordinateY);\r\n                    this.setOnBoard(coorX, coorY);\r\n                    this.removeClassActive();\r\n                }\r\n            });\r\n        });\r\n    }\r\n}\r\nexports.Knight = Knight;\r\n\n\n//# sourceURL=webpack://projekt3-chess/./src/js-components/pieces/knight.js?");

/***/ }),

/***/ "./src/js-components/pieces/pawn.js":
/*!******************************************!*\
  !*** ./src/js-components/pieces/pawn.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Pawn = void 0;\r\nconst piece_1 = __webpack_require__(/*! ./piece */ \"./src/js-components/pieces/piece.js\");\r\n//pion\r\nclass Pawn extends piece_1.Piece {\r\n    constructor(color, positionX, positionY) {\r\n        super(color, positionX, positionY);\r\n        this.symbol = `../../../static/assets/${this.color}Pawn.png`;\r\n        this.setOnBoard(this.positionX, this.positionY);\r\n        let $self = this;\r\n        // this.parentSquare.addEventListener(\"click\", this.showPossibleMoves.bind(this));\r\n    }\r\n    showPossibleMoves() {\r\n        this.removeClassActive();\r\n        if (this.color === 'white') {\r\n            let positionY1 = this.positionY + 1;\r\n            if (document.getElementById(`${this.positionX}-${positionY1}`).classList.contains('pieceInside')) {\r\n                console.log('no possible moves!');\r\n                return;\r\n            }\r\n            if (this.positionY === 2) {\r\n                for (let i = 3; i < 5; i++) {\r\n                    document.getElementById(`${this.positionX}-${i}`).classList.add('active');\r\n                }\r\n            }\r\n            else {\r\n                document.getElementById(`${this.positionX}-${positionY1}`).classList.add('active');\r\n            }\r\n        }\r\n        else {\r\n            let positionY1 = this.positionY - 1;\r\n            if (this.positionY === 7) {\r\n                for (let i = 6; i > 4; i--) {\r\n                    document.getElementById(`${this.positionX}-${i}`).classList.add('active');\r\n                }\r\n            }\r\n            else {\r\n                document.getElementById(`${this.positionX}-${positionY1}`).classList.add('active');\r\n            }\r\n        }\r\n        document.querySelectorAll('.active').forEach((possibleMove) => {\r\n            possibleMove.addEventListener('click', () => {\r\n                if (possibleMove.classList.contains('active')) {\r\n                    const posX = possibleMove.id.charAt(0);\r\n                    const posY = parseInt(possibleMove.id.charAt(2));\r\n                    this.setOnBoard(posX, posY);\r\n                    this.removeClassActive();\r\n                }\r\n            });\r\n        });\r\n    }\r\n    movePawn(possibleMove) {\r\n        const posX = possibleMove.id.charAt(0);\r\n        const posY = parseInt(possibleMove.id.charAt(2));\r\n        this.setOnBoard(posX, posY);\r\n    }\r\n    removeClassActive() {\r\n        let elems = document.querySelectorAll('.active');\r\n        for (var i = 0; i < elems.length; i++) {\r\n            elems[i].classList.remove('active');\r\n        }\r\n    }\r\n}\r\nexports.Pawn = Pawn;\r\n\n\n//# sourceURL=webpack://projekt3-chess/./src/js-components/pieces/pawn.js?");

/***/ }),

/***/ "./src/js-components/pieces/piece.js":
/*!*******************************************!*\
  !*** ./src/js-components/pieces/piece.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Piece = void 0;\r\nclass Piece {\r\n    //zastanawiam się czy nie zrobić tych wszystkich właściwości private...\r\n    constructor(color, positionX, positionY) {\r\n        this.symbol = ''; //<-- domyślnie ustawiłem puste, bo każda figura ma inny symbol\r\n        this.color = color;\r\n        this.positionX = positionX;\r\n        this.positionY = positionY;\r\n        this.parentSquare = document.getElementById(`${this.positionX}-${this.positionY}`); //<-- parentSquare przechowuje diva, w którym obecnie znajduje się figura\r\n    }\r\n    setOnBoard(pX, pY) {\r\n        this.parentSquare.innerHTML = \"\";\r\n        this.parentSquare.classList.remove('pieceInside');\r\n        const img = document.createElement('img');\r\n        img.classList.add('image');\r\n        img.setAttribute('src', this.symbol);\r\n        this.updatePosition(pX, pY);\r\n        this.parentSquare.appendChild(img);\r\n        const imgContainer = img.parentElement;\r\n        imgContainer.classList.add('pieceInside');\r\n    }\r\n    updatePosition(pX, pY) {\r\n        this.positionX = pX;\r\n        this.positionY = pY;\r\n        this.parentSquare = document.getElementById(`${this.positionX}-${this.positionY}`);\r\n    }\r\n    getPositionX() {\r\n        return this.positionX;\r\n    }\r\n    getPositionY() {\r\n        return this.positionY;\r\n    }\r\n}\r\nexports.Piece = Piece;\r\n\n\n//# sourceURL=webpack://projekt3-chess/./src/js-components/pieces/piece.js?");

/***/ }),

/***/ "./src/js-components/pieces/queen.js":
/*!*******************************************!*\
  !*** ./src/js-components/pieces/queen.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Queen = void 0;\r\nconst board_1 = __webpack_require__(/*! ../board */ \"./src/js-components/board.js\");\r\nconst piece_1 = __webpack_require__(/*! ./piece */ \"./src/js-components/pieces/piece.js\");\r\n//królowa / hetman\r\nclass Queen extends piece_1.Piece {\r\n    constructor(color, positionX, positionY) {\r\n        super(color, positionX, positionY);\r\n        this.symbol = `../../../static/assets/${this.color}Queen.png`;\r\n        // this.symbol = `../../../../Projekt3-chess/static/assets/whiteQueen.png`;\r\n        this.setOnBoard(this.positionX, this.positionY);\r\n    }\r\n    showPossibleMoves() {\r\n        const movesShow = (id) => {\r\n            const movesPossibilities = [...document.querySelectorAll(`#${id}`)];\r\n            movesPossibilities.forEach(el => {\r\n                el.classList.toggle('queenMove');\r\n            });\r\n        };\r\n        this.collectAllPossibleMoves().forEach(id => {\r\n            movesShow(id);\r\n            this.queenMove();\r\n        });\r\n    }\r\n    queenMove() {\r\n        const squares = [...document.querySelectorAll('.board-container div')];\r\n        squares.forEach(square => {\r\n            square.addEventListener('click', () => {\r\n                if ((square).classList.contains('pieceInside'))\r\n                    return;\r\n                console.log('klik1');\r\n                if (!((square).classList.contains('pieceInside')) && (square).classList.contains('queenMove')) {\r\n                    this.setOnBoard((square).id.charAt(0), parseInt((square).id.charAt(2)));\r\n                    this.removeClassActive();\r\n                }\r\n            });\r\n        });\r\n    }\r\n    collectAllPossibleMoves() {\r\n        // console.log(parseInt(this.positionX, 36) - 9); tworzy liczbę z litery/ a=1,b=2 itd\r\n        const moves = [];\r\n        const upDown = () => {\r\n            for (let i = 1; i < 9; i++) {\r\n                if (`${this.positionX}-${i}` !== `${this.positionX}-${this.positionY}`)\r\n                    moves.push(`${this.positionX}-${i}`);\r\n            }\r\n        };\r\n        const leftRight = () => {\r\n            for (let i = 1; i < 9; i++) {\r\n                if (`${board_1.ID[i]}-${this.positionY}` !== `${this.positionX}-${this.positionY}`)\r\n                    moves.push(`${board_1.ID[i]}-${this.positionY}`);\r\n            }\r\n        };\r\n        const diagonal = () => {\r\n            const regexLetters = /[A-H]+/;\r\n            const regexNumbers = /[1-8]+/;\r\n            for (let i = 1; i <= 8; i++) {\r\n                //x+1,y+1\r\n                if (`${board_1.ID[(parseInt(this.positionX, 36) - 9) + i]}-${this.positionY + i}`.match(regexNumbers) &&\r\n                    `${board_1.ID[(parseInt(this.positionX, 36) - 9) + i]}-${this.positionY + i}`.match(regexLetters)) {\r\n                    moves.push(`${board_1.ID[(parseInt(this.positionX, 36) - 9) + i]}-${this.positionY + i}`);\r\n                }\r\n                // x-1,y-1\r\n                if (`${board_1.ID[(parseInt(this.positionX, 36) - 9) - i]}-${this.positionY - i}`.match(regexNumbers) &&\r\n                    `${board_1.ID[(parseInt(this.positionX, 36) - 9) - i]}-${this.positionY - i}`.match(regexLetters)) {\r\n                    moves.push(`${board_1.ID[(parseInt(this.positionX, 36) - 9) - i]}-${this.positionY - i}`);\r\n                }\r\n                //x+1,y-1\r\n                if (`${board_1.ID[(parseInt(this.positionX, 36) - 9) + i]}-${this.positionY - i}`.match(regexNumbers) &&\r\n                    `${board_1.ID[(parseInt(this.positionX, 36) - 9) + i]}-${this.positionY - i}`.match(regexLetters)) {\r\n                    moves.push(`${board_1.ID[(parseInt(this.positionX, 36) - 9) + i]}-${this.positionY - i}`);\r\n                }\r\n                //x-1,y+1\r\n                if (`${board_1.ID[(parseInt(this.positionX, 36) - 9) - i]}-${this.positionY + i}`.match(regexNumbers) &&\r\n                    `${board_1.ID[(parseInt(this.positionX, 36) - 9) - i]}-${this.positionY + i}`.match(regexLetters)) {\r\n                    moves.push(`${board_1.ID[(parseInt(this.positionX, 36) - 9) - i]}-${this.positionY + i}`);\r\n                }\r\n            }\r\n        };\r\n        diagonal();\r\n        upDown();\r\n        leftRight();\r\n        return moves;\r\n    }\r\n    removeClassActive() {\r\n        let elems = [...document.querySelectorAll('.queenMove')];\r\n        for (let i = 0; i < elems.length; i++) {\r\n            elems[i].classList.remove('queenMove');\r\n        }\r\n    }\r\n}\r\nexports.Queen = Queen;\r\n\n\n//# sourceURL=webpack://projekt3-chess/./src/js-components/pieces/queen.js?");

/***/ }),

/***/ "./src/js-components/pieces/rook.js":
/*!******************************************!*\
  !*** ./src/js-components/pieces/rook.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\n\"use stricte\";\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Rook = void 0;\r\nconst piece_1 = __webpack_require__(/*! ./piece */ \"./src/js-components/pieces/piece.js\");\r\n//wieża\r\nclass Rook extends piece_1.Piece {\r\n    constructor(color, positionX, positionY) {\r\n        super(color, positionX, positionY);\r\n        this.symbol = `../../../static/assets/${this.color}Rook.png`;\r\n        this.setOnBoard(this.positionX, this.positionY);\r\n    }\r\n    showPossibleMoves() {\r\n        this.removeClassActive();\r\n        const arrayOfX = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];\r\n        // const indexOfX:number = arrayOfX.indexOf(this.getPositionX());\r\n        const rookLineX = this.getPositionX();\r\n        const rookLineY = this.getPositionY();\r\n        for (let i = -1; i <= 8; i++) {\r\n            const squareY = document.querySelector(`#${rookLineX}-${i}`);\r\n            if (squareY != null)\r\n                squareY.classList.add('active');\r\n            arrayOfX.map((letter) => {\r\n                const squareX = document.querySelector(`#${letter}-${rookLineY}`);\r\n                if (squareX != null)\r\n                    squareX.classList.add('active');\r\n            });\r\n        }\r\n        const squares = document.querySelectorAll('.board-container div');\r\n        squares.forEach(square => {\r\n            square.addEventListener('click', () => {\r\n                if (!(square.classList.contains('pieceInside')) && square.classList.contains('active')) {\r\n                    this.setOnBoard(square.id.charAt(0), parseInt(square.id.charAt(2)));\r\n                    squares.forEach(square => square.classList.remove('active'));\r\n                }\r\n            });\r\n        });\r\n    }\r\n    removeClassActive() {\r\n        let elems = document.querySelectorAll('.active');\r\n        for (var i = 0; i < elems.length; i++) {\r\n            elems[i].classList.remove('active');\r\n        }\r\n    }\r\n}\r\nexports.Rook = Rook;\r\n\n\n//# sourceURL=webpack://projekt3-chess/./src/js-components/pieces/rook.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;