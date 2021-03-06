﻿/// <reference path="typings/easeljs/easeljs.d.ts" />

/*
// Difference of using the functions var init = function (). It is creating an anonymous function
var init = function () {
} 
*/

var stage: createjs.Stage; 
var canvas = document.getElementById("canvas"); //creates a reference

function init() {
    stage = new createjs.Stage(canvas);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.on("tick", gameLoop);

    main();
}

function gameLoop() {

    stage.update();
}

function main() {
    console.log("Game is running...");

    var helloText: createjs.Text = new createjs.Text("Hello World!", "40px Consolas", "#FFFF00"); 

    helloText.x = 30;
    helloText.y = 200;

    stage.addChild(helloText);
}

