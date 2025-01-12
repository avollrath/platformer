export default class GenericObject {
  constructor(
    { 
      x, y, image, scrollSpeed = 1, sway = false, scale = 1, 
      swaySpeed = 0.5, swayAmplitude = 10, moveSpeed = 0,
      totalFrames = 1, frameRate = 100,
      filter = "blur(2px)"  // Default filter
    }, 
    canvasContext
  ) {
    this.c = canvasContext;
    this.initialPosition = { x, y };
    this.position = { x, y };
    this.image = image;  
    this.scrollSpeed = scrollSpeed;
    this.sway = sway;
    this.swaySpeed = swaySpeed;
    this.swayAmplitude = swayAmplitude;
    this.moveSpeed = moveSpeed;
    this.time = 0;
    this.scale = scale;

    // Store the filter property
    this.filter = filter; 

    // Animation properties
    this.totalFrames = totalFrames;
    this.frameRate = frameRate;
    this.frameIndex = 0;
    this.lastFrameTime = 0;

    // Set dimensions and calculate frame sizes if needed
    this.width = this.image.width * scale;
    this.height = this.image.height * scale;

    if(this.totalFrames > 1) {
      this.spriteFrameWidth = (this.image.width / this.totalFrames) * scale;
      this.spriteFrameHeight = this.image.height * scale;
      this.width = this.spriteFrameWidth;
      this.height = this.spriteFrameHeight;
    }
  }

  update() {
    if (this.sway) {
      this.time += this.swaySpeed;
      this.position.y = this.initialPosition.y + Math.sin(this.time) * this.swayAmplitude;
    }
    this.position.x -= this.moveSpeed;
  }

  updateAnimation(timestamp) {
    if (this.totalFrames > 1) {
      if (timestamp - this.lastFrameTime > this.frameRate) {
        this.frameIndex = (this.frameIndex + 1) % this.totalFrames;
        this.lastFrameTime = timestamp;
      }
    }
  }

  draw(filterParam = null, timestamp = null) {
    // Use the object's filter or an override passed to draw()
    const effectiveFilter = filterParam !== null ? filterParam : this.filter;

    if(this.totalFrames > 1 && timestamp !== null) {
      this.updateAnimation(timestamp);
    }
    
    if (effectiveFilter) {
      this.c.save();
      this.c.filter = effectiveFilter;
    }

    if(this.totalFrames > 1) {
      this.c.drawImage(
        this.image,
        this.frameIndex * (this.image.width / this.totalFrames), // source x
        0,                                                       // source y
        this.image.width / this.totalFrames,                   // source width
        this.image.height,                                     // source height
        this.position.x,
        this.position.y,
        this.width,
        this.height
      );
    } else {
      this.c.drawImage(
        this.image,
        this.position.x,
        this.position.y,
        this.width,
        this.height
      );
    }

    if (effectiveFilter) {
      this.c.restore();
    }
  }
}
