// src/classes/Finish.js
export default class Finish {
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
  
    checkCollision(player, onFinish) {
      const playerLeft = player.position.x;
      const playerRight = player.position.x + player.width;
      const playerTop = player.position.y;
      const playerBottom = player.position.y + player.height;
  
      const offset = 580;
      const finishLeft = this.position.x + offset;
      const finishRight = this.position.x + this.width + offset;
      const finishTop = this.position.y;
      const finishBottom = this.position.y + this.height;
  
      if (
        playerRight > finishLeft &&
        playerLeft < finishRight &&
        playerBottom > finishTop &&
        playerTop < finishBottom
      ) {
        onFinish();
      }
    }
  }
  