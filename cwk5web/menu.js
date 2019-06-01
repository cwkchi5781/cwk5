"use strict";

var menus = [
    { name: 'Arrays', link: 'Array/arrays.html' },
    { name: 'Memory Game', link: 'MemoryGame/MemoryGame.html' },
    { name: 'Memory Game - 3 cards to win!', link: 'MemoryGame/MemoryGame3.html' },
    { name: 'Memory Game jQuery', link: 'MemoryGame/MemoryGamejQuery.html' },
    { name: 'Caterpiller', link: 'caterpiller/c.html' },
    { name: 'Bootstrap-HelloWorld', link: 'website-bootstrap.html' },
    { name: 'Bootstrap-Slideshow', link: 'SlideShow/slideshow-v2.html' },
    { name: 'Ping Pong Paddle', link: 'ComingSoon.html' },
    { name: 'Wall Ball', link: 'ComingSoon.html' },
    { name: 'Clock', link: 'ComingSoon.html' },
    { name: 'Snake', link: 'ComingSoon.html' },
    { name: 'Eating Frenzy', link: 'ComingSoon.html' },
    { name: 'Eating Frenzy OOP', link: 'ComingSoon.html' },
    { name: 'Maze Creator / Solver', link: 'ComingSoon.html' },
    { name: 'Checkers', link: 'ComingSoon.html' },
    { name: '2048', link: 'ComingSoon.html' },
    { name: 'Battleship', link: 'ComingSoon.html' },
    { name: 'Picture Puzzle', link: 'ComingSoon.html' },
    { name: 'Pipe Dream', link: 'ComingSoon.html' },
    { name: 'Google Maps', link: 'ComingSoon.html' },
    { name: 'Class Project - My Awesome Project!', link: 'ComingSoon.html' },
    { name: 'Calculator', link: 'simpleCalculator/Calculator.html' }
];

function CreateMenu() {
    var menuDiv = document.getElementById('menuDiv');
    var ul = document.createElement('ul');
    menuDiv.appendChild(ul);
    for (var i = 0; i < menus.length; i++)
    {
        var li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML += "<a href='./Projects/JSProjects/" + menus[i].link + "' target='Project'>" + menus[i].name + "</a>";
    }
}

function LoadFirstMenuOption() {
    var projectFrame = document.getElementById('projectFrame');
    projectFrame.setAttribute("src", './Projects/JSProjects/' + menus[1].link);
}


CreateMenu();
LoadFirstMenuOption();
