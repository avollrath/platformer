// src/main.js
import Player from "./classes/Player.js";
import Platform from "./classes/Platform.js";
import Coin from "./classes/Coin.js";
import GenericObject from "./classes/GenericObject.js";
import Background from "./classes/Background.js";
import Finish from "./classes/Finish.js";
import Mushroom from "./classes/Mushroom.js";

// =========== DOM ELEMENTS =============
const canvas = document.getElementById("gameCanvas");
const c = canvas.getContext("2d");
const winOverlay = document.getElementById("winOverlay");
const loseOverlay = document.getElementById("loseOverlay");
const nextLevelBtn = document.getElementById("nextLevelBtn");
const restartBtn = document.getElementById("restartBtn");

// =========== AUDIO SETUP (if you want to use native Audio) =============
const bgMusic = new Audio("/src/assets/backgroundMusic.mp3");
bgMusic.loop = true;
bgMusic.volume = 0.6;

const jumpSound = new Audio("/src/assets/jump.mp3");
const walkSound = new Audio("/src/assets/walk.mp3");
const landSound = new Audio("/src/assets/land.mp3");
const dieSound = new Audio("/src/assets/die.mp3");
const coinSound = new Audio("/src/assets/coin.mp3");
coinSound.volume = 0.3;
const winSound = new Audio("/src/assets/win.mp3");
const bounceSound = new Audio("/src/assets/bounce.mp3");

function playSound(sound) {
    const audioClone = sound.cloneNode(); // Clone the audio object
    audioClone.volume = sound.volume; // Ensure the cloned sound retains the original volume
    audioClone.play();
  }

// =========== GAME STATE VARIABLES =============
let player;
let platforms = [];
let coins = [];
let backgrounds = [];
let mushrooms = [];
let genericObjects = [];
let finish;
let scrollOffset = 0;
let score = 0;
let gameState = "PLAYING"; // could be 'PLAYING', 'WIN', 'LOSE'

// Movement keys
const keys = {
  right: { pressed: false },
  left: { pressed: false },
};

// =========== INIT (LOAD ALL ASSETS & SETUP LEVEL) =============
function createImage(src) {
  const img = new Image();
  img.src = src;
  return img;
}

function init() {
  score = 0;


  // Hide overlays if shown
  winOverlay.style.display = "none";
  loseOverlay.style.display = "none";
  gameState = "PLAYING";

  // Player
  const playerImg = createImage("/src/assets/char.png");
  player = new Player(playerImg, c, canvas);

  // Platforms
  platforms = [];

  // 1) Load ground image once
  const groundImage = createImage("/src/assets/ground.png");
  // Push ground platforms
  platforms.push(
    new Platform({ x: 0,     y: 900, image: groundImage, collisionOffset: 60 }, c),
    new Platform({ x: 1400,  y: 900, image: groundImage, collisionOffset: 60 }, c),
    new Platform({ x: 3000,  y: 900, image: groundImage, collisionOffset: 60 }, c),
    new Platform({ x: 5900,  y: 900, image: groundImage, collisionOffset: 60 }, c),
    new Platform({ x: 7500,  y: 900, image: groundImage, collisionOffset: 60 }, c),
    new Platform({ x: 12000, y: 900, image: groundImage, collisionOffset: 60 }, c),
    new Platform({ x: 17700, y: 900, image: groundImage, collisionOffset: 60 }, c),
    new Platform({ x: 19300, y: 900, image: groundImage, collisionOffset: 60 }, c),
    new Platform({ x: 20800, y: 900, image: groundImage, collisionOffset: 60 }, c),
    new Platform({ x: 22550, y: 900, image: groundImage, collisionOffset: 60 }, c)
  );
  
  // 2) Load platform image once
  const platformImage = createImage("/src/assets/platform_w512.png");
  const bigPlatformImage = createImage("/src/assets/big_platform.png");
  // Push platform segments
  platforms.push(
    new Platform({ x: 2600,  y: 550, image: platformImage, collisionOffset: 30 }, c),
    new Platform({ x: 4500,  y: 650, image: platformImage, collisionOffset: 30 }, c),
    new Platform({ x: 4900,  y: 300, image: platformImage, collisionOffset: 30 }, c),
    new Platform({ x: 9000,  y: 600, image: platformImage, collisionOffset: 30 }, c),
    new Platform({ x: 9800, y: 400, image: bigPlatformImage, collisionOffset: 30 }, c),
    new Platform({ x: 10700, y: 750, image: platformImage, collisionOffset: 30 }, c),
    new Platform({ x: 11300, y: 500, image: platformImage, collisionOffset: 30 }, c),
    new Platform({ x: 13500, y: 600, image: platformImage, collisionOffset: 30 }, c),
    new Platform({ x: 14300, y: 300, image: bigPlatformImage, collisionOffset: 30 }, c),
    new Platform({ x: 15300, y: 850, image: platformImage, collisionOffset: 30 }, c),
    new Platform({ x: 16000, y: 500, image: platformImage, collisionOffset: 30 }, c),
    new Platform({ x: 16700, y: 200, image: platformImage, collisionOffset: 30 }, c)
  );

  
  mushrooms = [];
  const mushroomImg = createImage("/src/assets/mushroom.png");
  mushrooms.push(
    new Mushroom(
      { x: 21800, y: 790, image: mushroomImg, bounceStrength: 30 },
      c
    ),
)

  // Background / Generic Objects
  backgrounds = [];
  const bgImg = createImage("/src/assets/background.jpg");
  backgrounds.push(new Background({ x: 0, y: 0, image: bgImg }, c));

  genericObjects = [];
  const treeImg = createImage("/src/assets/tree.png");
  const skeletonImg = createImage("/src/assets/skeleton.png");
  const pillarImg = createImage("/src/assets/pillar.png");

  genericObjects.push(new GenericObject({ x: 3100, y: 300, image: skeletonImg, scrollSpeed: 0.3 }, c));
  genericObjects.push(new GenericObject({ x: 6500, y: 300, image: skeletonImg, scrollSpeed: 0.3 }, c));
//   genericObjects.push(new GenericObject({ x: 16600, y: 300, image: skeletonImg, scrollSpeed: 0.5 }, c));

  genericObjects.push(new GenericObject({ x: 300, y: 400, image: treeImg, scrollSpeed: 0.4 }, c));
genericObjects.push(new GenericObject({ x: 2000, y: 400, image: treeImg, scrollSpeed: 0.4 }, c));
genericObjects.push(new GenericObject({ x: 5000, y: 400, image: treeImg, scrollSpeed: 0.4 }, c));
genericObjects.push(new GenericObject({ x: 7300, y: 400, image: treeImg, scrollSpeed: 0.4 }, c));

genericObjects.push(new GenericObject({ x: 2500, y: 200, image: pillarImg, scrollSpeed: 0.8 }, c));
genericObjects.push(new GenericObject({ x: 10300, y: 200, image: pillarImg, scrollSpeed: 0.8 }, c));
  


  // Coins
  coins = [];
  const coinImg = createImage("/src/assets/coin.png"); 
  coins.push(new Coin(1150, 700, coinImg, c));
  coins.push(new Coin(1250, 500, coinImg, c));
  coins.push(new Coin(1400, 700, coinImg, c));
  coins.push(new Coin(2000, 800, coinImg, c));
  coins.push(new Coin(2900, 200, coinImg, c));
  coins.push(new Coin(5800, 200, coinImg, c));
  coins.push(new Coin(7250, 700, coinImg, c));

    coins.push(
        // Group 1 (x ~3000)
        new Coin(3050, 450, coinImg, c),
        new Coin(3100, 400, coinImg, c),
        new Coin(3150, 350, coinImg, c),
        new Coin(3200, 400, coinImg, c),
        new Coin(3250, 450, coinImg, c),
    
        // Group 2 (x ~4500)
        new Coin(4550, 450, coinImg, c),
        new Coin(4600, 400, coinImg, c),
        new Coin(4650, 350, coinImg, c),
        new Coin(4700, 400, coinImg, c),
        new Coin(4750, 450, coinImg, c),
    
        // Group 3 (x ~5900)
        new Coin(5950, 450, coinImg, c),
        new Coin(6000, 400, coinImg, c),
        new Coin(6050, 350, coinImg, c),
        new Coin(6100, 400, coinImg, c),
        new Coin(6150, 450, coinImg, c),
    
        // Group 4 (x ~7500)
        new Coin(7550, 450, coinImg, c),
        new Coin(7600, 400, coinImg, c),
        new Coin(7650, 350, coinImg, c),
        new Coin(7700, 400, coinImg, c),
        new Coin(7750, 450, coinImg, c),
    
        // Group 5 (x ~9000)
        new Coin(9050, 450, coinImg, c),
        new Coin(9100, 400, coinImg, c),
        new Coin(9150, 350, coinImg, c),
        new Coin(9200, 400, coinImg, c),
        new Coin(9250, 450, coinImg, c),
    
        // Group 6 (x ~10700)
        new Coin(10750, 450, coinImg, c),
        new Coin(10800, 400, coinImg, c),
        new Coin(10850, 350, coinImg, c),
        new Coin(10900, 400, coinImg, c),
        new Coin(10950, 450, coinImg, c),
    
        // Group 7 (x ~12000)
        new Coin(12050, 450, coinImg, c),
        new Coin(12100, 400, coinImg, c),
        new Coin(12150, 350, coinImg, c),
        new Coin(12200, 400, coinImg, c),
        new Coin(12250, 450, coinImg, c),
    
        // Group 8 (x ~14300)
        new Coin(14350, 150, coinImg, c),
        new Coin(14400, 100, coinImg, c),
        new Coin(14450, 50, coinImg, c),
        new Coin(14500, 100, coinImg, c),
        new Coin(14550, 150, coinImg, c),
    
        // Group 9 (x ~16700)
        new Coin(17700, 450, coinImg, c),
        new Coin(17750, 400, coinImg, c),
        new Coin(17800, 350, coinImg, c),
        new Coin(17850, 400, coinImg, c),
        new Coin(17900, 450, coinImg, c),
    
        // Group 10 (x ~19300)
        new Coin(19350, 450, coinImg, c),
        new Coin(19400, 400, coinImg, c),
        new Coin(19450, 350, coinImg, c),
        new Coin(19500, 400, coinImg, c),
        new Coin(19550, 450, coinImg, c)
      );
    
      // -- C) We already have 7 + 50 = 57 coins.
      //    Add 43 more coins in 4 new "big" groups of 10 + 1 small group of 3 = 43
      //    => total 100
    
      // Group 11 (x ~21000, 10 coins in an arc)
      coins.push(
        new Coin(21000, 450, coinImg, c),
        new Coin(21050, 400, coinImg, c),
        new Coin(21100, 350, coinImg, c),
        new Coin(21150, 300, coinImg, c),
        new Coin(21200, 350, coinImg, c),
        new Coin(21250, 400, coinImg, c),
        new Coin(21300, 450, coinImg, c),
        new Coin(21350, 400, coinImg, c),
        new Coin(21400, 350, coinImg, c),
        new Coin(21450, 300, coinImg, c)
      );
    
      // Group 12 (x ~21500, 10 coins)
      coins.push(
        new Coin(21500, 450, coinImg, c),
        new Coin(21550, 400, coinImg, c),
        new Coin(21600, 350, coinImg, c),
        new Coin(21650, 300, coinImg, c),
        new Coin(21700, 350, coinImg, c),
        new Coin(21750, 400, coinImg, c),
        new Coin(21800, 450, coinImg, c),
        new Coin(21850, 400, coinImg, c),
        new Coin(21900, 350, coinImg, c),
        new Coin(21950, 300, coinImg, c)
      );
    
      // Group 13 (x ~22000, 10 coins)
      coins.push(
        new Coin(22000, 450, coinImg, c),
        new Coin(22050, 400, coinImg, c),
        new Coin(22100, 350, coinImg, c),
        new Coin(22150, 300, coinImg, c),
        new Coin(22200, 350, coinImg, c),
        new Coin(22250, 400, coinImg, c),
        new Coin(22300, 450, coinImg, c),
        new Coin(22350, 400, coinImg, c),
        new Coin(22400, 350, coinImg, c),
        new Coin(22450, 300, coinImg, c)
      );
    
      // Group 14 (x ~22500, 10 coins)
      coins.push(
        new Coin(22500, 450, coinImg, c),
        new Coin(22550, 400, coinImg, c),
        new Coin(22600, 350, coinImg, c),
        new Coin(22650, 300, coinImg, c),
        new Coin(22700, 350, coinImg, c),
        new Coin(22750, 400, coinImg, c),
        new Coin(22800, 450, coinImg, c),
        new Coin(22850, 400, coinImg, c),
        new Coin(22900, 350, coinImg, c),
        new Coin(22950, 300, coinImg, c)
      );
    
      // Group 15 (x ~23000, 3 coins => total of 43 in these new groups)
      coins.push(
        new Coin(23000, 450, coinImg, c),
        new Coin(23050, 400, coinImg, c),
        new Coin(23100, 350, coinImg, c)
      );

  // Finish
  const finishImg = createImage("/src/assets/finish.png"); // or a flag image, etc.
  finish = new Finish({ x: 22750, y: -10, image: finishImg }, c);

  scrollOffset = 0;
}

init();

// =========== GAME LOOP =============
function animate() {
  requestAnimationFrame(animate);

  if (gameState !== "PLAYING") {
    // If we're in WIN or LOSE state, skip updates
    return;
  }

  c.clearRect(0, 0, canvas.width, canvas.height);

  
  // Draw background
  backgrounds.forEach(bg => bg.draw());

  // Draw & update generic objects
  genericObjects.forEach(obj => obj.draw());

    // Draw finish
    finish.draw();
    finish.checkCollision(player, () => {
      // Player reached the finish
      gameState = "WIN";
      winOverlay.style.display = "flex";
      winSound.play();
    });

    mushrooms.forEach((mushroom) => {
        mushroom.draw();
        mushroom.checkCollision(player, () => {
            playSound(bounceSound); 
          });
      });

  // Draw platforms
  platforms.forEach(plat => plat.draw());

  // Update and draw coins
  coins.forEach(coin => {
    coin.draw();
    coin.checkCollision(player, () => {
      score += 10;
      playSound(coinSound);
    });
  });

 

  // Update player
  player.update();

// Draw the score with a background and drop shadow
const scoreText = `Score: ${score}`;
const textX = canvas.width - 200; // Center horizontally
const textY = 100; // Position near the top

c.shadowColor = "rgba(0, 0, 0, 0.8)";
  c.shadowBlur = 3;
  c.shadowOffsetX = 4;
  c.shadowOffsetY = 4;

  // Draw the score text
  c.font = "56px Gorditas";
  c.fillStyle = "yellow";
  c.textAlign = "center";
  c.fillText(scoreText, textX, textY);

  c.shadowColor = "rgba(0, 0, 0, 0)";
  c.shadowBlur = 0;
  c.shadowOffsetX = 0;
  c.shadowOffsetY = 0;

// Draw the player position
c.font = "20px Gorditas";
c.fillStyle = "white";
c.textAlign = "left";
c.fillText(`X Position: ${Math.round(player.position.x + scrollOffset)}`, 10, 30);

  // Horizontal movement logic
  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = 7;
  } else if (keys.left.pressed && player.position.x > 100) {
    player.velocity.x = -7;
  } else {
    // Damping if no key pressed
    player.velocity.x *= 0.9;
    // Scrolling
    if (keys.right.pressed) {
      scrollOffset += 5;
      platforms.forEach(p => p.position.x -= 5);
      genericObjects.forEach(g => g.position.x -= 5 * g.scrollSpeed);
      coins.forEach(coin => (coin.position.x -= 5));
      mushrooms.forEach(m => {
        m.position.x -= 5;
      });
      finish.position.x -= 5;
    } else if (keys.left.pressed) {
      scrollOffset -= 5;
      platforms.forEach(p => p.position.x += 5);
      genericObjects.forEach(g => g.position.x += 5 * g.scrollSpeed);
      coins.forEach(coin => (coin.position.x += 5));
      mushrooms.forEach(m => {
        m.position.x += 5;
      });
      finish.position.x += 5;
    }
  }

  
  // Collision detection with platforms
  platforms.forEach((platform) => {
    const playerBox = player.getCollisionBox();
    const platformTop = platform.getCollisionTop();
    
    if (
      playerBox.bottom <= platformTop &&
      playerBox.bottom + player.velocity.y >= platformTop &&
      playerBox.right >= platform.position.x &&
      playerBox.left <= platform.position.x + platform.width
    ) {
      // Collision detected
      player.velocity.y = 0;
    }
  });

  // Check if player fell out of the world
  if (player.position.y > canvas.height) {
    // Player died
    gameState = "LOSE";
    loseOverlay.style.display = "flex";
    dieSound.play();
  }
}

animate();

function drawRoundedRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
    ctx.fill();
  }

// =========== EVENT LISTENERS =============
window.addEventListener("keydown", ({ code }) => {
  if (gameState !== "PLAYING") return;

  switch (code) {
    case "KeyW":
    case "ArrowUp":
      if (player.velocity.y === 0) {
        player.velocity.y = -20;
        playSound(jumpSound);
      }
      break;
    case "KeyA":
    case "ArrowLeft":
      keys.left.pressed = true;
      player.facingLeft = true;
      // Optionally play walkSound if you want continuous footstep SFX
      break;
    case "KeyD":
    case "ArrowRight":
      keys.right.pressed = true;
      player.facingLeft = false;
      // Same note about footstep SFX
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
  // For now, just restart same level or load next.
  init();
});

restartBtn.addEventListener("click", () => {
  init();
});

// =========== START BACKGROUND MUSIC (optional) ===========
bgMusic.play().catch((err) => {
  console.log("Autoplay might be blocked. User interaction required.", err);
});
