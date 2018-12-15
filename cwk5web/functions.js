"use strict";

var menus = [
    { name: 'Arrays', link: '/arrays.html' },
    { name: 'Memory Game', link: '/ArrayP/array.html' },
    { name: 'Memory Game - 3 cards to win!', link: 'ComingSoon.html' },
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
    { name: 'Class Project - My Awesome Project!', link: 'ComingSoon.html' }
];

function CreateMenu() {
    var menuDiv = document.getElementById('menuDiv');
    var ul = document.createElement('ul');
    menuDiv.appendChild(ul);
    for (var i = 0; i < menus.length; i++)
    {
        var li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML += "<a href='./Projects/" + menus[i].link + "' target='Project'>" + menus[i].name + "</a>";
    }
}

function LoadFirstMenuOption() {
    var projectFrame = document.getElementById('projectFrame');
    projectFrame.setAttribute("src", './Projects/' + menus[1].link);
}


CreateMenu();
LoadFirstMenuOption();
