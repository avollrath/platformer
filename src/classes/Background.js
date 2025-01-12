export default class Background {
  constructor({ x, y, image, blurAmount = 0 }, canvasContext) {
    this.c = canvasContext;
    this.position = { x, y };
    this.image = image;
    this.blurAmount = blurAmount; 
    // Store original image dimensions for scaling
    this.originalWidth = image.width;
    this.originalHeight = image.height;
  }

  draw(scrollOffset = 0) {
    const ctx = this.c;
    
    // Save canvas state and apply blur if needed
    ctx.save();
    if (this.blurAmount > 0) {
      ctx.filter = `blur(${this.blurAmount}px)`;
    }

    // Scaling factor for 120% size
    const scale = 1.2;
    const scaledWidth = this.originalWidth * scale;
    const scaledHeight = this.originalHeight * scale;

    // Align the bottom of the background image with the bottom of the canvas
    const canvasHeight = ctx.canvas.height;
    const alignedY = canvasHeight - scaledHeight;

    // Draw the background with scaling and parallax scroll offset
    ctx.drawImage(
      this.image,
      this.position.x - scrollOffset,  // Adjust x-position by scroll offset
      alignedY,                          // Align bottom of image with canvas bottom
      scaledWidth,
      scaledHeight
    );

    ctx.restore();
  }
}
