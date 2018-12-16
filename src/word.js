export default class Word {
  constructor (level, x, y, content) {
    this.level = level;
    this.content = content;
    this.position = {
      x,y
    }
    this.word = this.createRandomWord();
  }

  createRandomWord () {
    const wordTable = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    '#', '@', '#', "?", "/", "$", "%", '<', '>'];
    return wordTable[Math.floor(Math.random() * wordTable.length)];
  }

  draw () {
    this.content.fillStyle = "#006621";
    this.content.font = "40px serif";
    this.content.textBaseLine = 'middle';
    this.content.fillText(this.word, this.position.x, this.position.y);
  }

  move (targetX, targetY) {

  }
}