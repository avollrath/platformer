export default class Foreground {
  constructor({ x, y, image, blurAmount = 0 }, canvasContext) {
    this.c = canvasContext;
    this.position = { x, y };
    this.image = image;
    this.blurAmount = blurAmount;
    this.scaleFactor = 1.02; // Scale up by 102%
  }

  draw(context = this.c) {  // Use passed context or default to this.c
    const scaledWidth = this.image.width * this.scaleFactor;
    const scaledHeight = this.image.height * this.scaleFactor;

    // Center the overlay properly while scaling
    const offsetX = (scaledWidth - this.image.width) / 2;
    const offsetY = (scaledHeight - this.image.height) / 2;

    if (this.blurAmount) {
      context.save();
      context.filter = `blur(${this.blurAmount}px)`;
    }

    // Draw the image with scaling
    context.drawImage(
      this.image,
      this.position.x - offsetX,
      this.position.y - offsetY,
      scaledWidth,
      scaledHeight
    );

    if (this.blurAmount) {
      context.restore();
    }
  }
}
