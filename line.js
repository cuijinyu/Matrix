import Word from './word';
export default class Line{
    constructor (level, content, x, maxheght, maxwidth) {
        this.content = content;
        this.x = x;
        this.level = level;
        this.now = 40;
        this.words = [];
        this.maxheght = maxheght;
        this.maxwidth = maxwidth;
        setInterval(() => {
            this.words.push(new Word(this.level, x, this.now, this.content));
            this.draw();
            this.now += 40;
            if (maxheght <= this.now) {
                this.now = 40;
                this.words = [];
            }
        }, (() => {
            let times = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
            return times[Math.floor(Math.random() * 10)]
        })());
    }

    draw () {
        this.words.forEach(ele => {
            ele.draw();
        })
    }
}