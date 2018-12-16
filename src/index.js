import Line from './line';
let ctx = document.getElementById('canvas'),
    content = ctx.getContext('2d'),
    WIDTH = document.documentElement.clientWidth,
    HEIGHT = document.documentElement.clientHeight;

    ctx.width = WIDTH;
    ctx.height = HEIGHT;
let maxLineNumber = Math.ceil(WIDTH / 40);
let lines = [];

for (let i = 0; i < maxLineNumber; i++) {
    lines.push(new Line(1, content, 40 * i, HEIGHT, WIDTH));
}

setInterval(() => {
    content.clearRect(0, 0, WIDTH, HEIGHT);
    lines.forEach(line => {
        line.draw();
    })
}, 300);
