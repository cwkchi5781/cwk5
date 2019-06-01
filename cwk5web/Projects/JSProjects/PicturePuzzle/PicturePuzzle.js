"use strict";

var imgWidth = 25;
var imgHeight = 20;
var rows = 4;
var columns = 5;
var imgSrc = "https://wallpaper.wiki/wp-content/uploads/2017/05/wallpaper.wiki-Pretty-Background-Tumblr-Download-Free-PIC-WPE001558.jpg";

function randomize(puzzle){
    for(var i = puzzle.length - 1; i > 0; i--){
        var idx = Math.floor(Math.random() * i);
        var temp = puzzle[idx];
        puzzle[idx] = puzzle[idx];
        puzzle[i] = temp;
    }
}

function init(){
    $("h1").html("Solve the Puzzle!");
    var total = rows * columns;
    var count = 0;
    $("final").hide();
    $("difficulty").hide();
    var puzzle = [];
    for(var i = 0; i < rows; i++){
        
        for(var j = 0; j < columns; j++){
            puzzle.push("<div class='" + ( i * columns + j) + " imgContainer'>" + 
            "<img src=" + imgSrc + " style='margin-left: - " + (j * imgWidth / columns) + "rem;" +
            "margin-top: -" + (i * imgHeight / rows) + "rem;></img></div>");
        }
    }
    
}