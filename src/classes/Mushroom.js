// src/classes/Mushroom.js
export default class Mushroom {
    constructor({ x, y, image, bounceStrength = 30, collisionOffset = 30 }, context) {
      this.c = context;             // the canvas context
      this.position = { x, y };     // mushroom’s position
      this.image = image;           // sprite for the mushroom
      this.width = image.width;
      this.height = image.height;
      this.bounceStrength = bounceStrength;
      this.collisionOffset = collisionOffset; // how many px to shift the "top" collision line
    }
  
    draw() {
      this.c.drawImage(this.image, this.position.x, this.position.y);
    }
  
    checkCollision(player, onBounce) {
      // Basic bounding-box check to see if player lands on top of the mushroom
      const playerBottom = player.position.y + player.height;
      
      // SHIFT the "top" of the collision down by collisionOffset
      const mushroomTop = this.position.y + this.collisionOffset; 
      const mushroomLeft = this.position.x;
      const mushroomRight = this.position.x + this.width;
  
      const playerRight = player.position.x + player.width;
      const playerLeft = player.position.x;
  
      // Check if player is directly above the mushroom and about to land on it
      if (
        playerBottom <= mushroomTop &&
        playerBottom + player.velocity.y >= mushroomTop && // next frame
        playerRight > mushroomLeft &&
        playerLeft < mushroomRight
      ) {
        // Player landed on the mushroom
        player.velocity.y = -this.bounceStrength;
  
        // Optionally play a bounce sound
        if (onBounce) onBounce();
      }
    }
  }
  