// src/main.js
import Player from "./classes/Player.js";
import Platform from "./classes/Platform.js";
import Coin from "./classes/Coin.js";
import GenericObject from "./classes/GenericObject.js";
import Background from "./classes/Background.js";
import Finish from "./classes/Finish.js";
import Mushroom from "./classes/Mushroom.js";
import Enemy from "./classes/Enemy.js";
import Foreground from "./classes/Foreground.js";


// Import your data
import { levels } from "./levels.js";

const images = {};

const assetsToLoad = [
  // Core game assets
  "/src/assets/char_sprite.png",
  "/src/assets/platform.png",
  "/src/assets/coin_sprite.png",
  "/src/assets/enemy_sprite.png",
  "/src/assets/cloud.png",
  "/src/assets/heart.png",
  "/src/assets/menu_frame.png",
  "/src/assets/fire_sprite.png",
  "/src/assets/jump.mp3",
  "/src/assets/walk.mp3",
  "/src/assets/land.mp3",
  "/src/assets/die.mp3",
  "/src/assets/win.mp3",
  "/src/assets/bounce.mp3",
  "/src/assets/enemy.mp3",

  // Level 1 assets
  "/src/assets/backgroundMusic.mp3",
  "/src/assets/frame.png",
  "/src/assets/background_noClouds.jpg",
  "/src/assets/ground.png",
  "/src/assets/platform_w512.png",
  "/src/assets/big_platform.png",
  "/src/assets/mushroom_sprite.png",
  "/src/assets/skeleton.png",
  "/src/assets/tree.png",
  "/src/assets/pillar.png",
  "/src/assets/finish.png",
  "/src/assets/snail_sprite.png",
  "/src/assets/fire_sprite.png",
  

  // Level 2 assets
  "/src/assets/backgroundMusic2.mp3",
  "/src/assets/background2.jpg",

  // Leve 3 assets
   "/src/assets/backgroundMusic3.mp3",
  "/src/assets/background3.jpg"

];



function preloadAssets(assetUrls) {
  return new Promise((resolve) => {
    let loadedAssets = 0;

    assetUrls.forEach(url => {
      let element;

      if (url.endsWith('.mp3')) {
        element = new Audio();
        element.addEventListener('canplaythrough', assetLoaded, false);
        element.addEventListener('error', () => {
          console.error(`Error loading asset: ${url}`);
          assetLoaded();
        });
      } else {
        element = new Image();
        element.onload = () => {
          images[url] = element;  // Store the loaded image
          assetLoaded();
        };
        element.onerror = () => {
          console.error(`Error loading asset: ${url}`);
          assetLoaded();
        };
      }

      element.src = url;
    });

    function assetLoaded() {
      loadedAssets++;
      const progress = (loadedAssets / assetUrls.length) * 100;
      loadingBar.style.width = progress + "%";

      if (loadedAssets === assetUrls.length) {
        resolve();
      }
    }
  });
}




// =========== DOM ELEMENTS ===========
const canvas = document.getElementById("gameCanvas");
const c = canvas.getContext("2d");
const debugPanel = document.getElementById("debugPanel");
const winOverlay = document.getElementById("winOverlay");
const loseOverlay = document.getElementById("loseOverlay");
const nextLevelBtn = document.getElementById("nextLevelBtn");
const restartBtn = document.getElementById("restartBtn");
const startOverlay = document.getElementById("startOverlay");
const startGameBtn = document.getElementById("startGameBtn");
const loadingBar = document.getElementById("loadingBar");

// =========== AUDIO SETUP ===========
let bgMusicPlayer = null; // Global variable to track the current music

function playBackgroundMusic(musicPath) {
  // Stop any currently playing music
  if (bgMusicPlayer) {
    bgMusicPlayer.pause();
    bgMusicPlayer.currentTime = 0; // Reset to the start
  }

  // Load and play new music
  bgMusicPlayer = new Audio(musicPath);
  bgMusicPlayer.loop = true; // Ensure it loops
  bgMusicPlayer.volume = 0.6;
  bgMusicPlayer.play().catch(err => {
    console.log("Autoplay blocked or error:", err);
  });
}


const jumpSound = new Audio("/src/assets/jump.mp3");
const walkSound = new Audio("/src/assets/walk.mp3");
const landSound = new Audio("/src/assets/land.mp3");
const dieSound = new Audio("/src/assets/die.mp3");
const coinSound = new Audio("/src/assets/coin.mp3");
coinSound.volume = 0.1;
const winSound = new Audio("/src/assets/win.mp3");
const bounceSound = new Audio("/src/assets/bounce.mp3");
const enemySound = new Audio("/src/assets/enemy.mp3");

function playSound(sound) {
  const audioClone = sound.cloneNode();
  audioClone.volume = sound.volume;
  audioClone.play();
}

// =========== GAME STATE VARIABLES ===========
let loadedAssets = 0;
const totalAssets = assetsToLoad.length;

let player;
let platforms = [];
let coins = [];
let mushrooms = [];
let genericObjects = [];
let genericObjectsFront = [];
let enemies = [];
let finish;
let movementLocked = false;
let foreground = null;
let background = null;
let clouds = [];

const bgCanvas = document.createElement('canvas');
bgCanvas.width = canvas.width;
bgCanvas.height = canvas.height;
const bgCtx = bgCanvas.getContext('2d');

const fgCanvas = document.createElement('canvas');
fgCanvas.width = canvas.width;
fgCanvas.height = canvas.height;
const fgCtx = fgCanvas.getContext('2d');

let scrollOffset = 0;
let score = 0;
let gameState = "PLAYING"; // 'PLAYING', 'WIN', 'LOSE'

// Multi-level support *****************************************************************************************************************************************************************************
let currentLevelIndex = 1;
const totalLevels = levels.length;

// Player starts with 3 lives
let lives = 3;

// Movement keys
const keys = {
  right: { pressed: false },
  left: { pressed: false },
};

// =========== HELPER FUNCTIONS ===========
function createImage(src) {
  const img = new Image();
  img.src = src;
  return img;
}


// Dynamically generate extra clouds (if desired)
function generateClouds({ startX, endX, spacingRange = [600, 1000], yRange = [50, 300], scrollSpeed = 0.1, moveSpeed = 0.2 }) {
  const cloudImg = createImage("/src/assets/cloud.png");
  cloudImg.onload = () => {
    let currentX = startX;

    while (currentX <= endX) {
      // Randomize the spacing between clouds
      const spacing = Math.random() * (spacingRange[1] - spacingRange[0]) + spacingRange[0];

      // Randomize the vertical position of the clouds
      const randomY = Math.random() * (yRange[1] - yRange[0]) + yRange[0];

      // Create and add the cloud
      const cloud = new GenericObject(
        {
          x: currentX,
          y: randomY,
          image: cloudImg,
          scrollSpeed,
          sway: true,
          swaySpeed: Math.random() * 0.02 + 0.01, // Random sway speed for variation
          swayAmplitude: Math.random() * 3 + 3, // Random sway amplitude for variation
          moveSpeed, // Clouds slowly drift left
        },
        c
      );
      clouds.push(cloud);

      // Move to the next position using the random spacing
      currentX += spacing;
    }

  };
}




// =========== LOAD LEVEL DATA ===========
function loadLevel(levelData) {
  // Clear old arrays
  platforms = [];
  coins = [];
  mushrooms = [];
  genericObjects = [];
  genericObjectsFront = [];
  enemies = [];
  score = 0;
  lives = 3;
  scrollOffset = 0;
  clouds = [];
  
  c.clearRect(0, 0, canvas.width, canvas.height);
  bgCtx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
  fgCtx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
  
  if (levelData.bgMusic) {
    playBackgroundMusic(levelData.bgMusic);
  }

  // Hide overlays
  winOverlay.style.display = "none";
  loseOverlay.style.display = "none";



  if (levelData.background) {
    const bgImage = images[levelData.background.image];
    background = new Background(
      {
        x: 0,
        y: 0,
        image: bgImage,
        blurAmount: levelData.background.blurAmount || 0,
      },
      c
    );
  }

  if (levelData.foreground) {
    const fgImage = images[levelData.foreground.image];
    foreground= new Foreground(
      {
        x: 0,
        y: 0,
        image: fgImage,
        blurAmount: levelData.foreground.blurAmount || 0,
      },
      c
    );
  }

  if (background) {
    background.draw(bgCtx);
  }

  if (foreground) {
    foreground.draw(fgCtx);
  }

  // If you want to generate extra clouds
  generateClouds({
    startX: 800,
    endX: levelData.levelEnd + 10000 || 23000,
    spacingRange: [500, 1200],
    yRange: [10, 100],
    scrollSpeed: 0.1,
  });

  // Load platforms
  levelData.platforms.forEach(({ x, y, image, collisionOffset }) => {
    const img = images[image];
    platforms.push(new Platform({ x, y, image: img, collisionOffset }, c));
  });

  // Load mushrooms
  levelData.mushrooms.forEach(({ x, y, image, bounceStrength }) => {
    const img = images[image];
    mushrooms.push(new Mushroom({ x, y, image: img, bounceStrength }, c));
  });



  // Load generic objects
  levelData.genericObjects.forEach(({ x, y, image, scrollSpeed = 1, scale = 1, totalFrames, frameRate, filter }) => {
    const objImg = images[image];
    
    if (image.includes("fire_sprite.png")) {
      genericObjectsFront.push(
        new GenericObject({ x, y, image: objImg, scrollSpeed, scale, totalFrames, frameRate, filter }, c)
      );
    } else {
      genericObjects.push(
        new GenericObject({ x, y, image: objImg, scrollSpeed, scale, totalFrames, frameRate, filter }, c)
      );
    }
  });

  // Load coins
  const coinImg = images["/src/assets/coin_sprite.png"];
  levelData.coins.forEach(({ x, y }) => {
    coins.push(new Coin(x, y, coinImg, c));
  });

  // Load enemies
  levelData.enemies.forEach(({ x, y, width, height, patrolRange, speed, image, totalFrames, frameRate }) => {
    const enemyImage = images[image];
    enemies.push(new Enemy({ x, y, width, height, patrolRange, speed, image: enemyImage, totalFrames, frameRate }, c));
  });

  // Finish line
  const finishImg = images[levelData.finish.image];
  finish = new Finish({ x: levelData.finish.x, y: levelData.finish.y, image: finishImg }, c);



  // Initialize player
  const playerImg = images["/src/assets/char_sprite.png"];
  player = new Player(playerImg, c, canvas);
  player.position = { x: levelData.playerStart.x, y: levelData.playerStart.y };
  player.velocity = { x: 0, y: 0 };



  gameState = "PLAYING";
}

// =========== INIT (start the current level) ===========
function init() {
  const levelData = levels[currentLevelIndex]; 
  loadLevel(levelData);
}

let playerInitialized = false;





// =========== ANIMATE (GAME LOOP) ============================================================================


let msPrev = window.performance.now();
const targetFPS = 60;
const msPerFrame = 1000 / targetFPS;
let framesThisSecond = 0;
let lastFpsUpdate = window.performance.now();
let fps = 0;

function animate(timestamp) {
  window.requestAnimationFrame(animate);

  const msNow = window.performance.now();
  const msPassed = msNow - msPrev;

  // Skip frame if not enough time has passed for target FPS
  if (msPassed < msPerFrame) return;

  const excessTime = msPassed % msPerFrame;
  msPrev = msNow - excessTime;

  // FPS counter update (optional)
  if (timestamp > lastFpsUpdate + 1000) {
    fps = framesThisSecond;
    framesThisSecond = 0;
    lastFpsUpdate = timestamp;
  }
  framesThisSecond++;

  if (gameState !== "PLAYING") {
    return;
  }


  // Clear canvas
  c.clearRect(0, 0, canvas.width, canvas.height);

  c.drawImage(bgCanvas, 0, 0);

  // Draw and update clouds
  clouds.forEach(cloud => {
    if (cloud.update) cloud.update();
    c.save();
    c.filter = "blur(2px)";
    cloud.draw();
    c.restore();
  });

  // Draw generic objects
  genericObjects.forEach(obj => {
    if (obj.update) obj.update();
    c.save();
    obj.draw(null, timestamp);
    c.restore();
  });

  // Draw finish line and check collision
  finish.draw();
  finish.checkCollision(player, () => {
    gameState = "WIN";
    winOverlay.style.display = "flex";
    playSound(winSound);
  });

  // Draw generic front objects
  genericObjectsFront.forEach(obj => {
    if (obj.update) obj.update();
    c.save();
    obj.draw(null, timestamp);
    c.restore();
  });

  // Update mushrooms
  mushrooms.forEach(mushroom => {
    mushroom.updateAnimation(timestamp);
    mushroom.draw();
    mushroom.checkCollision(player, () => {
      playSound(bounceSound);
    });
  });

  // Draw platforms
  platforms.forEach(platform => platform.draw());

  // Draw coins and check collision
  coins.forEach(coin => {
    coin.draw(timestamp);
    coin.checkCollision(player, () => {
      score += 10;
      playSound(coinSound);
    });
  });

  // Update and draw enemies
  enemies = enemies.filter(enemy => !enemy.toRemove);
  enemies.forEach(enemy => {
    enemy.update(timestamp);
    enemy.draw(scrollOffset);
  });

  if (!playerInitialized) {
    player.draw();
    playerInitialized = true;
    return;
  }

  // Update player
  player.updateAnimation(timestamp);
  player.update();
  player.draw();

  c.drawImage(fgCanvas, 0, 0);

  // UI: Score & Lives
  drawScoreAndLives();
  updateDebugPanel();

  if (isDrawingRectangle) {
    drawRectangle(startX, startY, endX, endY);
  }

  // Draw FPS (optional)
  c.save();
  c.font = "16px Arial";
  c.fillStyle = "white";
  c.fillText(`FPS: ${fps}`, 40, 30);
  c.restore();

  // Horizontal movement logic with deltaTime scaling
  if (!movementLocked) {
    if (keys.right.pressed && player.position.x < 400) {
      player.velocity.x = 2;
    } else if (keys.left.pressed && player.position.x > 350) {
      player.velocity.x = -2;
    } else {
      player.velocity.x *= 0.99;
    }
  } else {
    player.velocity.x *= 0.99;
  }

  // Scrolling logic with deltaTime scaling
  if (!movementLocked) {
    const scrollAmount = 10;
    if (keys.right.pressed) {
      scrollOffset += scrollAmount;
      platforms.forEach(p => { p.position.x -= scrollAmount; });
      genericObjects.forEach(g => { g.position.x -= scrollAmount * g.scrollSpeed; });
      genericObjectsFront.forEach(g => { g.position.x -= scrollAmount * g.scrollSpeed; });
      coins.forEach(coin => { coin.position.x -= scrollAmount; });
      mushrooms.forEach(m => { m.position.x -= scrollAmount; });
      finish.position.x -= scrollAmount;
    } else if (keys.left.pressed) {
      scrollOffset -= scrollAmount;
      platforms.forEach(p => { p.position.x += scrollAmount; });
      genericObjects.forEach(g => { g.position.x += scrollAmount * g.scrollSpeed; });
      genericObjectsFront.forEach(g => { g.position.x += scrollAmount * g.scrollSpeed; });
      coins.forEach(coin => { coin.position.x += scrollAmount; });
      mushrooms.forEach(m => { m.position.x += scrollAmount; });
      finish.position.x += scrollAmount;
    }
  }

  // Collision with platforms
  let grounded = false;
  platforms.forEach(platform => {
    const playerBox = player.getCollisionBox();
    const platformTop = platform.getCollisionTop();

    if (
      playerBox.bottom <= platformTop &&
      playerBox.bottom + player.velocity.y >= platformTop &&
      playerBox.right >= platform.position.x &&
      playerBox.left <= platform.position.x + platform.width
    ) {
      player.velocity.y = 0;
      grounded = true;
    }
  });
  player.isOnGround = grounded;

  if (!player || !playerInitialized) return;
  if (player.position.y > canvas.height + 300) {
    loseLife("fall");
  }

  // Collision with enemies
  enemies.forEach(enemy => {
    if (enemy.state === "alive" && enemy.collidesWith(player, scrollOffset)) {
      const playerBottom = player.position.y + player.height;
      const enemyTop = enemy.position.y;

      if (playerBottom <= enemyTop + 30 && player.velocity.y > 0) {
        console.log("Enemy stomped!");
        enemy.defeat();
        player.velocity.y = -22;
        playSound(enemySound);
        score += 10;
        return;
      }
      if (player.invincible) return;

      movementLocked = true;
      setTimeout(() => {
        movementLocked = false;
      }, 500);

      const playerWorldX = player.position.x + scrollOffset;
      const enemyWorldX = enemy.position.x;
      const isPlayerToLeft = playerWorldX < enemyWorldX;

      if (isPlayerToLeft) {
        player.position.x -= 20;
        player.velocity.x = -15;
      } else {
        player.position.x += 20;
        player.velocity.x = 15;
      }

      player.velocity.y = -10;
      loseLife("enemy");
      playSound(dieSound);
      makePlayerInvincible(2000);
    }
  });
}




function makePlayerInvincible(duration) {
  player.invincible = true;
  const flickerInterval = setInterval(() => {
    player.flicker = !player.flicker;
  }, 100);

  setTimeout(() => {
    clearInterval(flickerInterval);
    player.invincible = false;
    player.flicker = false;
  }, duration);
}

// =========== Draw Score & Lives ===========
function drawScoreAndLives() {
  // Score
  const scoreText = `Score: ${score}`;
  const textX = canvas.width - 200;
  const textY = 100;

  c.save();
  c.shadowColor = "rgba(0, 0, 0, 0.8)";
  c.shadowBlur = 3;
  c.shadowOffsetX = 4;
  c.shadowOffsetY = 4;
  c.font = "56px Gorditas";
  c.fillStyle = "yellow";
  c.textAlign = "center";
  c.fillText(scoreText, textX, textY);
  c.restore();

  // Lives (hearts)
  const heartImg = createImage("/src/assets/heart.png");
  const heartSize = 70;
  // Place them side by side
  for (let i = 0; i < lives; i++) {
    const heartX = textX - 120 + i * (heartSize + 5); // shift each heart
    const heartY = textY + 30;
    c.drawImage(heartImg, heartX, heartY, heartSize, heartSize);
  }
}

// =========== Lose Life Logic ===========
function loseLife(cause) {
  if (!player || !player.position) {
    console.error("Player not initialized! Skipping lose life logic.");
    return;
  }

  lives--;

  if (lives > 0) {
    if (cause === "fall") {
      playSound(dieSound);
      // Reset the level when falling off
      console.log("Player fell off. Resetting level.");
      const levelData = levels[currentLevelIndex];
      player.position = { x: levelData.playerStart.x, y: levelData.playerStart.y };
      player.velocity = { x: 0, y: 0 };

      // Reset scrollOffset logic
      const scrollAdjustment = scrollOffset;
      scrollOffset = 0;
      platforms.forEach(platform => platform.position.x += scrollAdjustment);
      genericObjects.forEach(obj => obj.position.x += scrollAdjustment * obj.scrollSpeed);
      genericObjectsFront.forEach(obj => obj.position.x += scrollAdjustment * obj.scrollSpeed);
      coins.forEach(coin => coin.position.x += scrollAdjustment);
      mushrooms.forEach(mushroom => mushroom.position.x += scrollAdjustment);
      finish.position.x += scrollAdjustment;
    } else if (cause === "enemy") {
      console.log("Player hit by an enemy.");
      // Enemy hit logic remains handled in the `enemies.forEach` loop
    }
  } else {
    // No lives left -> game over
    gameState = "LOSE";
    loseOverlay.style.display = "flex";
    document.getElementById("restartBtn").focus();
    playSound(dieSound);
  }

}




// =========== EVENT LISTENERS ===========
window.addEventListener("keydown", ({ code }) => {
  if (gameState !== "PLAYING") return;

  switch (code) {
    case "KeyW":
    case "ArrowUp":
      if (player.velocity.y === 0) {
        player.velocity.y = -28;
        playSound(jumpSound);
      }
      break;
    case "KeyA":
    case "ArrowLeft":
      keys.left.pressed = true;
      player.facingLeft = true;
      break;
    case "KeyD":
    case "ArrowRight":
      keys.right.pressed = true;
      player.facingLeft = false;
      break;
  }
});

window.addEventListener("keyup", ({ code }) => {
  switch (code) {
    case "KeyA":
    case "ArrowLeft":
      keys.left.pressed = false;
      break;
    case "KeyD":
    case "ArrowRight":
      keys.right.pressed = false;
      break;
  }
});

// Buttons
nextLevelBtn.addEventListener("click", () => {
  // Advance to next level
  currentLevelIndex++;
  if (currentLevelIndex < totalLevels) {
    init(); // load next level
  } else {
    // No more levels => for now just reload the last level or do something else
    currentLevelIndex = 0;
    init();
  }
});

restartBtn.addEventListener("click", () => { 
  init();
});

let allCoinsText = "";
let isDragging = false;
let isDrawingRectangle = false;
let startX = 0;
let startY = 0;
let endX = 0;
let endY = 0;
const coinSpacing = 100; // Spacing between coins
const totalFrames = 8; // Total frames in the sprite
const animationSpeed = 100; // Milliseconds per frame
let dragTimeout = null; // Timeout to distinguish between click and rectangle draw

// Event Listeners
canvas.addEventListener("mousedown", (event) => {
  const rect = canvas.getBoundingClientRect();
  startX = event.clientX - rect.left;
  startY = event.clientY - rect.top;
  isDragging = false;
  isDrawingRectangle = false;

  // Set a timeout to detect a potential drag
  dragTimeout = setTimeout(() => {
    isDragging = true;
    isDrawingRectangle = true; // Enter rectangle drawing mode
  }, 150); // Threshold to distinguish between click and drag
});

canvas.addEventListener("mousemove", (event) => {
  if (isDrawingRectangle) {
    const rect = canvas.getBoundingClientRect();
    endX = event.clientX - rect.left;
    endY = event.clientY - rect.top;

    // Visual feedback for the rectangle
    drawRectangle(startX, startY, endX, endY);
  }
});

canvas.addEventListener("mouseup", (event) => {
  clearTimeout(dragTimeout);

  if (isDrawingRectangle) {
    const rect = canvas.getBoundingClientRect();
    endX = event.clientX - rect.left;
    endY = event.clientY - rect.top;

    // Fill the rectangle with coins
    fillRectangleWithCoins(startX, startY, endX, endY);
  } else if (!isDragging) {
    // Single-click functionality
    const rect = canvas.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const clickY = event.clientY - rect.top;
    placeCoin(clickX, clickY);
  }

  isDragging = false;
  isDrawingRectangle = false;
});

// Draw the Helper Rectangle
function drawRectangle(x1, y1, x2, y2) {
  c.save();
  c.strokeStyle = "rgba(0, 0, 255, 0.5)"; // Semi-transparent blue
  c.lineWidth = 2;
  c.setLineDash([6]); // Dashed lines for the rectangle
  c.strokeRect(
    Math.min(x1, x2),
    Math.min(y1, y2),
    Math.abs(x2 - x1),
    Math.abs(y2 - y1)
  );
  c.restore();
}

// Fill Rectangle with Coins
function fillRectangleWithCoins(x1, y1, x2, y2) {
  const startX = Math.min(x1, x2);
  const startY = Math.min(y1, y2);
  const width = Math.abs(x2 - x1);
  const height = Math.abs(y2 - y1);

  const coinImg = createImage("/src/assets/coin_sprite.png");
  coinImg.onload = () => {
    const frameWidth = coinImg.width / totalFrames; // Width of one frame
    const frameHeight = coinImg.height; // Height of the sprite

    // Adjust for coin centering
    const adjustedStartX = startX + frameWidth / 2;
    const adjustedStartY = startY + frameHeight / 2;
    const adjustedWidth = width - frameWidth;
    const adjustedHeight = height - frameHeight;

    // Place coins inside the adjusted rectangle
    for (let y = adjustedStartY; y <= adjustedStartY + adjustedHeight; y += coinSpacing) {
      for (let x = adjustedStartX; x <= adjustedStartX + adjustedWidth; x += coinSpacing) {
        placeCoin(x, y, coinImg, frameWidth, frameHeight);
      }
    }
  };
}

// Place a Single Coin
function placeCoin(clickX, clickY, coinImg = null, frameWidth = null, frameHeight = null) {
  const currentScrollOffset = scrollOffset;

  if (!coinImg) {
    coinImg = createImage("/src/assets/coin_sprite.png");
    coinImg.onload = () => {
      const frameWidth = coinImg.width / totalFrames;
      const frameHeight = coinImg.height;
      placeCoin(clickX, clickY, coinImg, frameWidth, frameHeight);
    };
    return;
  }

  const visualX = clickX - frameWidth / 2;
  const visualY = clickY - frameHeight / 2;

  // Push the coin to the visual array
  coins.push(new Coin(visualX, visualY, coinImg, c));

  // Calculate and store world coordinates for clipboard
  const worldX = Math.round(clickX + currentScrollOffset - frameWidth / 2);
  const worldY = Math.round(clickY - frameHeight / 2);

  const coinData = `{ x: ${worldX}, y: ${worldY} },\n`;
  allCoinsText += coinData;

  navigator.clipboard.writeText(allCoinsText)
    .then(() => console.log("Updated clipboard with:\n", allCoinsText))
    .catch(err => console.error("Clipboard update failed:", err));

  // Optional visual feedback at click location
  c.fillStyle = "red";
  c.beginPath();
  c.arc(clickX, clickY, 10, 0, Math.PI * 2);
  c.fill();
}






function teleportPlayerTo(xPosition) {
  const levelData = levels[currentLevelIndex];
  
  // Adjust scroll offset and all objects such that player's x-coordinate becomes xPosition
  const delta = xPosition - (player.position.x + scrollOffset);
  scrollOffset += delta;
  
  platforms.forEach(platform => { platform.position.x -= delta; });
  genericObjects.forEach(obj => { obj.position.x -= delta * obj.scrollSpeed; });
  genericObjectsFront.forEach(obj => { obj.position.x -= delta * obj.scrollSpeed; });
  coins.forEach(coin => { coin.position.x -= delta; });
  mushrooms.forEach(mushroom => { mushroom.position.x -= delta; });
  finish.position.x -= delta;
  player.position.y = 0;
  
  console.log(`Teleported player to x: ${xPosition}`);
}

function updateDebugPanel() {
  // Update player X and Y values dynamically
  const playerX = Math.round(player.position.x + scrollOffset);
  const playerY = Math.round(player.position.y);

  document.getElementById("playerX").textContent = playerX; // Update Player X
  document.getElementById("playerY").textContent = playerY; // Update Player Y
}

// Attach the Jump button functionality once during initialization
document.getElementById("jumpBtn").addEventListener("click", () => {
  const targetX = parseInt(document.getElementById("jumpX").value, 10);
  if (!isNaN(targetX)) {
    teleportPlayerTo(targetX);
  }
});

window.addEventListener("keydown", (event) => {
  if (event.code === "KeyY") { // Toggle debug panel with 'd' key
    debugPanel.style.display = debugPanel.style.display === "none" ? "block" : "none";
  }
});

let gameStarted = false;
// Start Overlay 
startGameBtn.addEventListener("click", async () => {
  startOverlay.style.display = "none";

  gameStarted = true;
  animate();
});

const loadingMessages = [
  "Digging up dinosaurs...",
  "Brushing off fossils...",
  "Assembling the T-Rex...",
  "Searching for triceratops footprints...",
  "Feeding the velociraptors...",
  "Calibrating the time machine...",
  "Polishing dinosaur bones...",
  "Adjusting the pterodactyl wings...",
  "Mixing lava for volcano effects...",
  "Sharpening prehistoric tools..."
];



function updateLoadingText() {
  const loadingTextElement = document.querySelector("#loadingOverlay .loading-text");
  // Select a random message from the array
  const randomIndex = Math.floor(Math.random() * loadingMessages.length);
  loadingTextElement.textContent = loadingMessages[randomIndex];
}

document.addEventListener("DOMContentLoaded", async () => {
  startOverlay.style.display = "none";
  // Optionally show the overlay right away
  document.getElementById("loadingOverlay").style.display = "flex";
  updateLoadingText();
  let loadingTextInterval = setInterval(updateLoadingText, 2000);

  // Start preloading assets
  await preloadAssets(assetsToLoad); 
  init();
  clearInterval(loadingTextInterval);

  // Hide the loading overlay once all assets are preloaded
  document.getElementById("loadingOverlay").style.display = "none";
  startOverlay.style.display = "flex";
  canvas.style.display = "block";
});




