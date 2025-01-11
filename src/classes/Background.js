export default class Background {
  constructor({ x, y, image, blurAmount = 0 }, canvasContext) {
    this.c = canvasContext;
    this.position = { x, y };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
    this.blurAmount = blurAmount; // Store blur amount
  }

  draw() {
    if (this.blurAmount > 0) {
      this.c.save(); // Save the current state
      this.c.filter = `blur(${this.blurAmount}px)`; // Apply blur
    }

    this.c.drawImage(this.image, this.position.x, this.position.y);

    if (this.blurAmount > 0) {
      this.c.restore(); // Restore the canvas state
    }
  }
}
