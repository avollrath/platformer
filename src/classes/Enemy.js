// Enemy.js
export default class Enemy {
    constructor({ x, y, width, patrolRange, speed, image }, context) {
      this.initialX = x;             // Starting position
      this.position = { x, y };
      this.width = width;
      this.height = 0;               // Will compute based on width and image aspect ratio
      this.patrolRange = patrolRange; 
      this.speed = speed;
      this.context = context;
      this.image = image;
      this.direction = 1;            // 1 for right, -1 for left
      this.state = 'alive';          // 'alive' or 'defeated'
      this.vy = 0;                   // Vertical velocity for falling after defeat
      this.toRemove = false;         // Flag for removal off canvas
  
      // Compute height based on width once the image loads
      if (this.image.complete) {
        this.setHeightBasedOnWidth();
      } else {
        this.image.onload = () => this.setHeightBasedOnWidth();
      }
    }
  
    setHeightBasedOnWidth() {
      const aspectRatio = this.image.naturalHeight / this.image.naturalWidth;
      this.height = this.width * aspectRatio;
      console.log(`Enemy height set to ${this.height} for width ${this.width}`);
    }
  
    update() {
      if (this.state === 'alive') {
        // Patrol logic
        this.position.x += this.speed * this.direction;
        // Check patrol boundaries relative to initialX
        if (this.position.x > this.initialX + this.patrolRange.right) {
          this.direction = -1; // Change direction to left
        } else if (this.position.x < this.initialX + this.patrolRange.left) {
          this.direction = 1;  // Change direction to right
        }
      } else if (this.state === 'defeated') {
        this.vy += 1;
        this.position.y += this.vy;
        // Remove enemy if off canvas (e.g., below canvas height)
        if (this.position.y > this.context.canvas.height) {
          this.toRemove = true;
        }
      }
    }
  
    draw(scrollOffset) {
        if (this.state === 'alive') {
          this.context.save();
      
          // Adjust drawing position based on scroll offset
          const drawX = this.position.x - scrollOffset;
      
          if (this.direction > 0) {
            // Flip the image horizontally if moving left
            this.context.scale(-1, 1);
            this.context.drawImage(
              this.image,
              -(drawX + this.width),
              this.position.y,
              this.width,
              this.height
            );
          } else {
            this.context.drawImage(
              this.image,
              drawX,
              this.position.y,
              this.width,
              this.height
            );
          }
      
          this.context.restore();
        } else if (this.state === 'defeated') {
          // Draw defeated enemy rotated 180 degrees
          this.context.save();
          const drawX = this.position.x - scrollOffset;
          this.context.translate(drawX + this.width / 2, this.position.y + this.height / 2);
          this.context.rotate(Math.PI); // 180 degrees
          this.context.drawImage(this.image, -this.width / 2, -this.height / 2, this.width, this.height);
          this.context.restore();
        }
      }
      
  
    // Simple collision check with player (rectangular)
    collidesWith(player, scrollOffset) {
        const adjustedX = this.position.x - scrollOffset;
        
        return (
          adjustedX < player.position.x + player.width &&
          adjustedX + this.width > player.position.x &&
          this.position.y < player.position.y + player.height &&
          this.position.y + this.height > player.position.y
        );
      }
  
    // Call when player stomps enemy
    defeat() {
      this.state = 'defeated';
      this.vy = -15; // give an upward bounce initially
    }
  }
  