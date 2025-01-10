export default class Player {
    constructor(image, canvasContext, canvas) {
      this.c = canvasContext;
      this.canvas = canvas;
      this.position = { x: 100, y: 100 };
      this.velocity = { x: 0, y: 1 };
      this.image = image;
      this.width = image.width;
      this.height = image.height;
      this.facingLeft = false;
  
      this.gravity = 0.5;
  
      // Offsets to shrink collision box
      this.offsetLeft = 50; // Adjust as needed
      this.offsetRight = 50; // Adjust as needed
      this.offsetTop = 0; // Optional, if needed
      this.offsetBottom = 0; // Optional, if needed
    }
  
    draw() {
      this.c.save();
      if (this.facingLeft) {
        this.c.scale(-1, 1);
        this.c.drawImage(
          this.image,
          -this.position.x - this.width, 
          this.position.y,
          this.width,
          this.height
        );
      } else {
        this.c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
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
  
    update() {
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
  
      // gravity
      if (this.position.y + this.height + this.velocity.y < this.canvas.height) {
        this.velocity.y += this.gravity;
      }
    }
  }
  