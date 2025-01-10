// src/classes/Coin.js
export default class Coin {
    constructor(x, y, image, canvasContext) {
      this.c = canvasContext;
      this.position = { x, y };
      this.image = image;
      this.width = image.width;
      this.height = image.height;
      this.collected = false;
    }
  
    draw() {
      if (!this.collected) {
        this.c.drawImage(this.image, this.position.x, this.position.y);
      }
    }
  
    checkCollision(player, onCollect) {
      if (this.collected) return;
  
      // Simple AABB collision
      const playerLeft = player.position.x;
      const playerRight = player.position.x + player.width;
      const playerTop = player.position.y;
      const playerBottom = player.position.y + player.height;
  
      const coinLeft = this.position.x;
      const coinRight = this.position.x + this.width;
      const coinTop = this.position.y;
      const coinBottom = this.position.y + this.height;
  
      if (
        playerRight > coinLeft &&
        playerLeft < coinRight &&
        playerBottom > coinTop &&
        playerTop < coinBottom
      ) {
        // Collided!
        this.collected = true;
        onCollect(); // callback to increase score, play sound, etc.
      }
    }
  }
  