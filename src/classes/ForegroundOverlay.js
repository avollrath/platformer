export default class ForegroundOverlay {
  constructor({ x, y, image, blurAmount = 0 }, canvasContext) {
    this.c = canvasContext;
    this.position = { x, y };
    this.image = image;
    this.blurAmount = blurAmount;
    this.scaleFactor = 1.02; // Scale up by 110%
  }

  draw() {
    const scaledWidth = this.image.width * this.scaleFactor;
    const scaledHeight = this.image.height * this.scaleFactor;

    // Center the overlay properly while scaling
    const offsetX = (scaledWidth - this.image.width) / 2;
    const offsetY = (scaledHeight - this.image.height) / 2;

    if (this.blurAmount) {
      this.c.save();
      this.c.filter = `blur(${this.blurAmount}px)`;
    }

    // Draw the image with scaling
    this.c.drawImage(
      this.image,
      this.position.x - offsetX, // Shift left to account for scaling
      this.position.y - offsetY, // Shift up to account for scaling
      scaledWidth, // Increased width
      scaledHeight // Increased height
    );

    if (this.blurAmount) {
      this.c.restore();
    }
  }
}
