// src/classes/GenericObject.js
export default class GenericObject {
  constructor({ x, y, image, scrollSpeed = 1, sway = false, scale = 1, swaySpeed = 0.5, swayAmplitude = 10, moveSpeed = 0 }, canvasContext) {
    this.c = canvasContext;
    this.initialPosition = { x, y }; // Store the initial position
    this.position = { x, y };
    this.image = image;
    this.width = image.width * scale; 
    this.height = image.height * scale;
    this.scrollSpeed = scrollSpeed;
    this.sway = sway; // Only sway if true
    this.swaySpeed = swaySpeed; // How quickly the sway oscillates
    this.swayAmplitude = swayAmplitude; // How far the sway moves
    this.moveSpeed = moveSpeed; // Speed at which the object drifts horizontally
    this.time = 0; // Used to calculate the oscillation
    this.scale = scale;
  }

  update() {
    if (this.sway) {
      this.time += this.swaySpeed; // Increment the time for the oscillation
      this.position.y = this.initialPosition.y + Math.sin(this.time) * this.swayAmplitude; // Apply sway to the y-position
    }
    // Drift to the left over time
    this.position.x -= this.moveSpeed;
  }

  /**
   * Draw the object on the canvas.
   * @param {string|null} filter - Optional CSS filter (e.g., "blur(5px)").
   */
  draw(filter = null) {
    if (filter) {
      this.c.save(); // Save the current canvas state
      this.c.filter = filter; // Apply the filter
    }

    this.c.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,  // Scaled width
      this.height  // Scaled height
    );

    if (filter) {
      this.c.restore(); // Restore the canvas state to remove the filter
    }
  }
}
