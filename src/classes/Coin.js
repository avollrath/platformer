export default class Coin {
  constructor(x, y, spriteSheet, canvasContext, frameCount = 8, frameDuration = 80, pauseFrameIndex = 0, pauseDuration = 600) {
    this.c = canvasContext;
    this.position = { x, y };
    this.spriteSheet = spriteSheet;
    this.frameCount = frameCount; // Total frames in the sprite sheet
    this.frameDuration = frameDuration; // Duration for each frame (default)
    this.pauseFrameIndex = pauseFrameIndex; // The index of the frame to pause on
    this.pauseDuration = pauseDuration; // How long to pause on the specific frame
    this.currentFrame = 0; // Current frame index
    this.frameWidth = spriteSheet.width / frameCount; // Width of each frame
    this.frameHeight = spriteSheet.height; // Height of the sprite sheet
    this.collected = false;
    this.lastFrameUpdate = 0; // Timestamp of the last frame update
    this.isPaused = false; // Tracks if the animation is currently paused
  }

  draw(timestamp) {
    if (!this.collected) {
      // Update the frame index based on time
      if (!this.isPaused && timestamp - this.lastFrameUpdate >= this.frameDuration) {
        // Increment the frame
        this.currentFrame = (this.currentFrame + 1) % this.frameCount;

        // Check if we need to pause at the pauseFrameIndex
        if (this.currentFrame === this.pauseFrameIndex) {
          this.isPaused = true;
          this.lastFrameUpdate = timestamp; // Reset timer for the pause
        } else {
          this.lastFrameUpdate = timestamp; // Reset timer for normal frames
        }
      }

      // If paused, check if the pause duration has elapsed
      if (this.isPaused && timestamp - this.lastFrameUpdate >= this.pauseDuration) {
        this.isPaused = false; // Resume animation
        this.lastFrameUpdate = timestamp; // Reset timer after pause
      }

      // Calculate the x-coordinate of the current frame in the sprite sheet
      const frameX = this.currentFrame * this.frameWidth;

      // Draw the current frame
      this.c.drawImage(
        this.spriteSheet,
        frameX, 0, // Source x and y (start of the current frame)
        this.frameWidth, this.frameHeight, // Source width and height (one frame)
        this.position.x, this.position.y, // Destination x and y
        this.frameWidth, this.frameHeight // Destination width and height
      );
    }
  }

  checkCollision(player, onCollect) {
    if (this.collected) return;

    // Simple AABB collision
    const playerLeft = player.position.x;
    const playerRight = player.position.x + player.width;
    const playerTop = player.position.y;
    const playerBottom = player.position.y + player.height;

    const coinLeft = this.position.x;
    const coinRight = this.position.x + this.frameWidth;
    const coinTop = this.position.y;
    const coinBottom = this.position.y + this.frameHeight;

    if (
      playerRight > coinLeft &&
      playerLeft < coinRight &&
      playerBottom > coinTop &&
      playerTop < coinBottom
    ) {
      // Collided!
      this.collected = true;
      onCollect(); // callback to increase score, play sound, etc.
    }
  }
}
