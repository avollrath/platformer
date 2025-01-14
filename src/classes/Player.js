export default class Player {
  constructor(image, canvasContext, canvas) {
    this.c = canvasContext;
    this.canvas = canvas;
    this.position = { x: 100, y: 100 };
    this.velocity = { x: 0, y: 0 };
    this.image = image;
    this.isOnGround = false;
    
    // Animation properties for an 8-frame sprite sheet
    this.totalFrames = 8;
    this.frameIndex = 0;
    this.frameRate = 100;      // Adjust speed as needed (ms per frame)
    this.lastFrameTime = 0;
    
    // Calculate frame dimensions based on the sprite sheet
    this.frameWidth = image.width / this.totalFrames;
    this.frameHeight = image.height;
    this.width = this.frameWidth;
    this.height = this.frameHeight;
    
    this.facingLeft = false;
    this.invincible = false;
    this.flicker = false;
  
    this.gravity = 1;
  
    // Offsets to shrink collision box
    this.offsetLeft = 50; 
    this.offsetRight = 50; 
    this.offsetTop = 0; 
    this.offsetBottom = 3; 
  }

  draw() {
    if (this.flicker) {
      return;
    }
    const ctx = this.c;
    this.c.save();


    // Determine drawing parameters for facing direction
    if (this.facingLeft) {
      // Flip horizontally: scale(-1,1) and adjust x position
      this.c.scale(-1, 1);
      this.c.drawImage(
        this.image,
        this.frameIndex * this.frameWidth, 0,   // Source X, Y from sprite sheet
        this.frameWidth, this.frameHeight,      // Source width, height
        -this.position.x - this.width,           // Destination X (flipped)
        this.position.y,                         // Destination Y
        this.width, this.height                  // Destination width, height
      );
    } else {
      this.c.drawImage(
        this.image,
        this.frameIndex * this.frameWidth, 0,   // Source X, Y from sprite sheet
        this.frameWidth, this.frameHeight,      // Source width, height
        this.position.x, this.position.y,        // Destination on canvas
        this.width, this.height                  // Destination width, height
      );
    }
    this.c.restore();
  }

  getCollisionBox() {
    return {
      left: this.position.x + this.offsetLeft,
      right: this.position.x + this.width - this.offsetRight,
      top: this.position.y + this.offsetTop,
      bottom: this.position.y + this.height - this.offsetBottom,
    };
  }

  updateAnimation(timestamp) {
    // Loop through frames continuously based on frameRate
    if (timestamp - this.lastFrameTime > this.frameRate) {
      this.frameIndex = (this.frameIndex + 1) % this.totalFrames;
      this.lastFrameTime = timestamp;
    }
  }
  
  update() {
    // update() no longer handles drawing directly since draw is called separately
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  
    // gravity
    if (this.position.y + this.height + this.velocity.y < this.canvas.height) {
      this.velocity.y += this.gravity;
    }
  }
}
