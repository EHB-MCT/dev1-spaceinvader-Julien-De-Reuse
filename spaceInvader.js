"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

drawLine();

function drawLine() {
    //Backgound
    context.fillStyle = 'black';
    context.beginPath();
    context.rect(0,0,300,300);
    context.fill();

    //Bovenbalk
    context.fillStyle = 'rgb(0,255,0)';
    context.beginPath();
    context.rect(25,25,250,50);
    context.fill();

    //Onderbalk Links
    context.fillStyle = 'rgb(0,255,0)';
    context.beginPath();
    context.rect(25,175,50,100);
    context.fill();

    //Onderbalk Midden
    context.fillStyle = 'rgb(0,255,0)';
    context.beginPath();
    context.rect(125,175,50,50);
    context.fill();

    //Onderbalk Rechts
    context.fillStyle = 'rgb(0,255,0)';
    context.beginPath();
    context.rect(225,175,50,100);
    context.fill();

}