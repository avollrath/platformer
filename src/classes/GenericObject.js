// src/classes/GenericObject.js
export default class GenericObject {
    constructor({ x, y, image, scrollSpeed = 1 }, canvasContext) {
      this.c = canvasContext;
      this.position = { x, y };
      this.image = image;
      this.width = image.width;
      this.height = image.height;
      this.scrollSpeed = scrollSpeed;
    }
  
    draw() {
      this.c.drawImage(this.image, this.position.x, this.position.y);
    }
  }
  