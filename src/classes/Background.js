// src/classes/Background.js
export default class Background {
    constructor({ x, y, image }, canvasContext) {
      this.c = canvasContext;
      this.position = { x, y };
      this.image = image;
      this.width = image.width;
      this.height = image.height;
    }
  
    draw() {
      this.c.drawImage(this.image, this.position.x, this.position.y);
    }
  }
  