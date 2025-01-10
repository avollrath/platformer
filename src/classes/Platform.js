// src/classes/Platform.js
export default class Platform {
    constructor({ x, y, image, collisionOffset = 0 }, canvasContext) {
      this.c = canvasContext;
      this.position = { x, y };
      this.image = image;
      this.width = image.width;
      this.height = image.height;
      this.collisionOffset = collisionOffset; // for custom collision
    }
  
    draw() {
      this.c.drawImage(this.image, this.position.x, this.position.y);
    }
  
    getCollisionTop() {
      return this.position.y + this.collisionOffset;
    }
  }
  