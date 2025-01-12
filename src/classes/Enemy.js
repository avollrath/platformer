export default class Enemy {
    constructor({ x, y, width, patrolRange, speed, image, totalFrames = 4, frameRate = 200 }, context) {
      this.initialX = x;             
      this.position = { x, y };
      this.width = width;
      this.height = 0;               
      this.patrolRange = patrolRange; 
      this.speed = speed;
      this.context = context;
      this.image = image;
      this.direction = 1;            
      this.state = 'alive';          
      this.vy = 0;                   
      this.toRemove = false;         
  
      // Sprite animation properties for a 4-frame sheet
      this.totalFrames = totalFrames;
      this.frameIndex = 0;
      this.frameRate = frameRate;        // milliseconds between frames
      this.lastFrameTime = 0;
        
      // Once the image loads, compute dimensions and set up sprite dimensions
      if (this.image.complete) {
        this.initializeDimensions();
      } else {
        this.image.onload = () => this.initializeDimensions();
      }
    }
    
    initializeDimensions() {
      this.setHeightBasedOnWidth();
      // For sprite animations:
      // Calculate source frame dimensions based on the sprite sheet.
      this.spriteFrameWidth = this.image.width / this.totalFrames;
      this.spriteFrameHeight = this.image.height;
    }
    
    setHeightBasedOnWidth() {
      // Calculate aspect ratio based on a single frame rather than the entire sheet
      const singleFrameWidth = this.image.naturalWidth / this.totalFrames;
      const aspectRatio = this.image.naturalHeight / singleFrameWidth;
      this.height = this.width * aspectRatio;
      console.log(`Enemy height set to ${this.height} for width ${this.width}`);
    }
    
    updateAnimation(timestamp) {
      if (this.state === 'alive') { 
        if (timestamp - this.lastFrameTime > this.frameRate) {
          this.frameIndex = (this.frameIndex + 1) % this.totalFrames;
          this.lastFrameTime = timestamp;
        }
      }
    }
    
    update(timestamp) {
      if (this.state === 'alive') {
        // Patrol logic
        this.position.x += this.speed * this.direction;
        // Check patrol boundaries relative to initialX
        if (this.position.x > this.initialX + this.patrolRange.right) {
          this.direction = -1; 
        } else if (this.position.x < this.initialX + this.patrolRange.left) {
          this.direction = 1;  
        }
        this.updateAnimation(timestamp);
      } else if (this.state === 'defeated') {
        this.vy += 1;
        this.position.y += this.vy;
        if (this.position.y > this.context.canvas.height) {
          this.toRemove = true;
        }
      }
    }
    
    draw(scrollOffset) {
      const ctx = this.context;
      if (this.state === 'alive') {
        ctx.save();

          
        // Calculate draw position adjusted for scroll
        const drawX = this.position.x - scrollOffset;

   // *** Draw Custom Bottom Shadow with Blur ***
    // Determine the center of the ellipse
    const shadowCenterX = drawX + this.width / 2;
    // Position the shadow slightly overlapping the bottom of the enemy
    const shadowCenterY = this.position.y + this.height * 0.95; 
    // Adjust shadow dimensions for a softer, closer look
    const shadowWidth = this.width * 1.1;   
    const shadowHeight = this.height * 0.2; 

    // Create radial gradient for a soft fade
    const gradient = ctx.createRadialGradient(
      shadowCenterX, shadowCenterY, 0,                       
      shadowCenterX, shadowCenterY, shadowWidth / 2          
    );
    gradient.addColorStop(0, 'rgb(12, 48, 9)');  
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');    

    // Set blur filter for the shadow
    ctx.filter = 'blur(6px)';  
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.ellipse(
      shadowCenterX,
      shadowCenterY,
      shadowWidth / 2,
      shadowHeight / 2,
      0,
      0,
      2 * Math.PI
    );
    ctx.fill();
    // Reset filter so it doesn't affect subsequent drawings
    ctx.filter = 'none';  
    // *** End Drawing Custom Blurred Shadow ***
    
        // For horizontal flipping based on direction
        if (this.direction > 0) {
          ctx.scale(-1, 1);
          // Adjust X position because of horizontal flip
          ctx.drawImage(
            this.image,
            this.frameIndex * this.spriteFrameWidth, 0,  // Source X, Y from sprite sheet
            this.spriteFrameWidth, this.spriteFrameHeight, // Source width, height
            -(drawX + this.width),  // Destination X (flipped)
            this.position.y,        // Destination Y
            this.width,
            this.height
          );
        } else {
          ctx.drawImage(
            this.image,
            this.frameIndex * this.spriteFrameWidth, 0,  // Source X, Y
            this.spriteFrameWidth, this.spriteFrameHeight,
            drawX,
            this.position.y,
            this.width,
            this.height
          );
        }
        ctx.restore();
      } else if (this.state === 'defeated') {
        ctx.save();
        ctx.filter = 'blur(2px)';
        const drawX = this.position.x - scrollOffset;
        ctx.translate(drawX + this.width / 2, this.position.y + this.height / 2);
        ctx.rotate(Math.PI); // 180 degrees rotation
    
        // Draw only one frame of the sprite sheet for the defeated state.
        // Here, we're using the first frame (sourceX = 0).
        ctx.drawImage(
          this.image,
          0,                       // sourceX: start at the beginning of the sprite sheet
          0,                       // sourceY: top of the image
          this.spriteFrameWidth,   // sourceWidth: width of one frame
          this.spriteFrameHeight,  // sourceHeight: height of one frame
          -this.width / 2,         // destinationX: adjusted for rotation
          -this.height / 2,        // destinationY: adjusted for rotation
          this.width,              // destinationWidth
          this.height              // destinationHeight
        );
    
        ctx.filter = 'none';
        ctx.restore();
      }
    }
    
    collidesWith(player, scrollOffset) {
      const adjustedX = this.position.x - scrollOffset;
      return (
        adjustedX < player.position.x + player.width &&
        adjustedX + this.width > player.position.x &&
        this.position.y < player.position.y + player.height &&
        this.position.y + this.height > player.position.y
      );
    }
    
    defeat() {
      this.state = 'defeated';
      this.vy = -15;
    }
  }
  