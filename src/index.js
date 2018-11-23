import Word from './word.js';
let ctx = document.getElementById('canvas'),
    content = ctx.getContext('2d'),
    WIDTH = document.documentElement.clientWidth,
    HEIGHT = document.documentElement.clientHeight;

    ctx.width = WIDTH;
    ctx.height = HEIGHT;

let wordTest = new Word();
console.log(wordTest);