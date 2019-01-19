
"use strict";

var cardsArray = ['A', 'A', 'A', 'B', 'B', 'B', 'C', 'C', 'C', 'D', 'D', 'D', 'E', 'E', 'E', 'F', 'F', 'F', 'G', 'G', 'G', 'H', 'H', 'H'];

function OnTileClick(card, cardValue) {
   if (card.text === "" && flippedCards.length < 3) {
        card.classList.toggle('flip');
        card.css("background-color", "white");
        card.text = cardValue;
        if (flippedCards.length < 2) {
            flippedCards.push(card);
        }
        else if (flippedCards.length === 2) {
            flippedCards.push(card);
            if (flippedCards[0].text === flippedCards[1].text && flippedCards[1].text === flippedCards[2].text) {
                flippedCardsCount += 3;
                flippedCards = [];
                IsGameOver();
            }
            else {
                setTimeout(FlipCardBack, 700);
            }
        }
    }
}

function FlipCardBack(){
    var card1 = flippedCards[0];
    var card2 = flippedCards[1];
    var card3 = flippedCards[2];
    card1.css("background-color", "lightblue");
    card1.text = "";
    card1.classList.toggle('flip');
    card2.css("background-color", "lightblue");
    card2.text = "";
    card2.classList.toggle('flip');
    card3.css("background-color", "lightblue");
    card3.text = "";
    card3.classList.toggle('flip');
    flippedCards = [];
    
}

var flippedCards = [];
var flippedCardsCount = 0;

Array.prototype.Shuffle = function () {
    for (var i = 0; i < this.length; i++) {
        var j = Math.floor(Math.random() * (this.length - i));
        var swap = this[j];
        this[j] = this[i];
        this[i] = swap;
    }
};

function IsGameOver() {
    if (flippedCardsCount === cardsArray.length) {
        alert("Board cleared...generating new board");
        $('cardBoard').text = "";
        InitBoard();
    }
}

function InitBoard() {
    flippedCardsCount = 0;
    var output = '';
    cardsArray.Shuffle();
    for (var i = 0; i < cardsArray.length; i++) {
        output += '<div class="card" id="tile_' + i + '"onclick = "OnTileClick(this,\'' + cardsArray[i] + '\')" ></div > ';
    }
    document.getElementById('cardBoard').innerHTML = output;
}

InitBoard();
