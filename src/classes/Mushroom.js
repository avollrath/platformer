// src/classes/Mushroom.js
export default class Mushroom {
  constructor({ x, y, image, bounceStrength = 30, collisionOffset = 30 }, context) {
    this.c = context;             
    this.position = { x, y };     
    this.image = image;           
    
    // Set up sprite animation assuming 4 frames horizontally
    this.totalFrames = 4; 
    this.frameIndex = 0;
    this.frameRate = 80;       // milliseconds between frames
    this.lastFrameTime = 0;
    this.isBouncing = false;
    
    // Calculate frame dimensions based on the sprite sheet
    this.frameWidth = image.width / this.totalFrames;
    this.frameHeight = image.height;
    
    this.bounceStrength = bounceStrength;
    this.collisionOffset = collisionOffset;
  }

  draw() {
    // Draw the current frame of the sprite sheet
    this.c.drawImage(
      this.image,
      this.frameIndex * this.frameWidth, 0,     // Source x, y (offset for current frame)
      this.frameWidth, this.frameHeight,        // Source width, height
      this.position.x, this.position.y,         // Destination on canvas
      this.frameWidth, this.frameHeight         // Destination width, height
    );
  }

  updateAnimation(timestamp) {
    if (this.isBouncing) {
      // Proceed to the next frame based on frameRate
      if (timestamp - this.lastFrameTime > this.frameRate) {
        this.frameIndex = (this.frameIndex + 1) % this.totalFrames;
        this.lastFrameTime = timestamp;
      }
    } else {
      // Reset to the first frame if not bouncing
      this.frameIndex = 0;
    }
  }

  checkCollision(player, onBounce) {
    // Basic bounding-box check to see if player lands on top of the mushroom
    const playerBottom = player.position.y + player.height;
    const mushroomTop = this.position.y + this.collisionOffset; 
    const mushroomLeft = this.position.x;
    const mushroomRight = this.position.x + this.frameWidth;  // use frameWidth for accurate width
  
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
  
      // Trigger bounce animation and optional sound
      this.isBouncing = true;
      if (onBounce) onBounce();
      
      // Optionally, stop bouncing after a short duration
      setTimeout(() => {
        this.isBouncing = false;
      }, 320);
    }
  }
}
