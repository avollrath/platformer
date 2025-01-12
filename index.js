const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 1920;
canvas.height = 1080;

const gravity = 0.5;

function init() {
    // Reset player
    createImage('./img/char.png', (image) => {
      player = new Player(image);
    });
  
    // Reset platforms
    createImage('./img/platform_w512.png', (platformImage) => {
      platforms = [
        new Platform({ x: 0, y: 900, image: platformImage }),
    new Platform({ x: 700, y: 750, image: platformImage }),
    new Platform({ x: 1200, y: 600, image: platformImage }),
    new Platform({ x: 1600, y: 300, image: platformImage }),
    new Platform({ x: 2400, y: 400, image: platformImage }),
    new Platform({ x: 3400, y: 900, image: platformImage }),
    new Platform({ x: 4000, y: 500, image: platformImage }),
      ];
    });
  
    // Reset generic objects
    genericObjects.length = 0; // Clear existing objects
    createImage('./img/background.png', (image) => {
      image.width = 1920;
      image.height = 1080;
      genericObjects.push(new GenericObject({ x: 0, y: 0, image }));
    });
  
    // Reset keys
    keys.right.pressed = false;
    keys.left.pressed = false;
  
    // Reset scroll offset
    scrollOffset = 0;
  }
  


class Player {
  constructor(image) {
    this.position = {
      x: 100,
      y: 100,
    };
    this.velocity = {
      x: 0,
      y: 1,
    };
    this.image = image
    this.width = image.width
    this.height = image.height
    this.facingLeft = false;
  }
  draw() {
    c.save(); // Save the current state of the canvas
    if (this.facingLeft) {
      c.scale(-1, 1); // Flip horizontally
      c.drawImage(
        this.image,
        -this.position.x - this.width, // Flip position for negative scale
        this.position.y,
        this.width,
        this.height
      );
    } else {
      c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
    c.restore(); // Restore the canvas state
  }

  update() {
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    if (this.position.y + this.height + player.velocity.y < canvas.height)
      this.velocity.y += gravity;
  }
}

class Platform {
  constructor({ x, y, image, collisionOffset }) {
    this.position = {
      x: x,
      y: y,
    };
    this.image = image
    this.width = image.width
    this.height = image.height
    this.collisionOffset = collisionOffset;
  
  }
  draw() {
    c.drawImage(this.image, this.position.x, this.position.y)
  }
  getCollisionTop() {
    return this.position.y + this.collisionOffset;
  }
}

class GenericObject {
    constructor({ x, y, image }) {
      this.position = {
        x: x,
        y: y,
      };
      this.image = image
      this.width = image.width
      this.height = image.height
    
    }
    draw() {
      c.drawImage(this.image, this.position.x, this.position.y)
    }
  }

  class Background {
    constructor({ x, y, image }) {
      this.position = {
        x: x,
        y: y,
      };
      this.image = image
      this.width = image.width
      this.height = image.height
    
    }
    draw() {
      c.drawImage(this.image, this.position.x, this.position.y)
    }
  }

function createImage(imageSrc, callback) {
    const image = new Image();
    image.src = imageSrc;
    image.onload = () => {
      callback(image);
    };
  }

  const backgroundImage = [];
  let genericObjects = [];



  createImage('./img/tree.png', (treeImage) => {
    genericObjects = [
    new GenericObject({ x: 0, y: 400, image: treeImage }),
    new GenericObject({ x: 1400, y: 400, image: treeImage }),
    new GenericObject({ x: 2900, y: 400, image: treeImage }),
    ];
  });

  let player;
  createImage('./img/char.png', (image) => {
    player = new Player(image);
  });

  let platforms = [];

  // Then just push each platform
  createImage('./img/ground.png', (groundImage) => {
    platforms.push(new Platform({ x: 0, y: 900, image: groundImage, collisionOffset: 60 }));
    platforms.push(new Platform({ x: 1400, y: 900, image: groundImage, collisionOffset: 60 }));
    platforms.push(new Platform({ x: 3000, y: 900, image: groundImage, collisionOffset: 60 }));
    platforms.push(new Platform({ x: 5900, y: 900, image: groundImage, collisionOffset: 60 }));
    platforms.push(new Platform({ x: 7500, y: 900, image: groundImage, collisionOffset: 60 }));
    platforms.push(new Platform({ x: 12000, y: 900, image: groundImage, collisionOffset: 60 }));
    platforms.push(new Platform({ x: 17800, y: 900, image: groundImage, collisionOffset: 60 }));
    platforms.push(new Platform({ x: 19500, y: 900, image: groundImage, collisionOffset: 60 }));
  });
  
  createImage('./img/platform_w512.png', (platformImage) => {
    platforms.push(new Platform({ x: 2600,  y: 550, image: platformImage, collisionOffset: 30 }));
    platforms.push(new Platform({ x: 4500, y: 650, image: platformImage, collisionOffset: 30 }));
    platforms.push(new Platform({ x: 4900, y: 300, image: platformImage, collisionOffset: 30 }));
    platforms.push(new Platform({ x: 9100, y: 600, image: platformImage, collisionOffset: 30 }));
    platforms.push(new Platform({ x: 10000, y: 300, image: platformImage, collisionOffset: 30 }));
    platforms.push(new Platform({ x: 10900, y: 700, image: platformImage, collisionOffset: 30 }));
    platforms.push(new Platform({ x: 11800, y: 500, image: platformImage, collisionOffset: 30 }));
    platforms.push(new Platform({ x: 13500, y: 600, image: platformImage, collisionOffset: 30 }));
    platforms.push(new Platform({ x: 14400, y: 300, image: platformImage, collisionOffset: 30 }));
    platforms.push(new Platform({ x: 15400, y: 850, image: platformImage, collisionOffset: 30 }));
    platforms.push(new Platform({ x: 16000, y: 500, image: platformImage, collisionOffset: 30 }));
    platforms.push(new Platform({ x: 16700, y: 200, image: platformImage, collisionOffset: 30 }));
    
    animate();
  });

const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
};

let scrollOffset = 0; 

function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = 'white'
  c.fillRect(0, 0, canvas.width, canvas.height);

  backgroundImage.forEach((genericObject) => {
    genericObject.draw();
  });

  genericObjects.forEach((genericObject) => {
    genericObject.draw();
  });

  platforms.forEach((platform) => {
    platform.draw();
  });
  player.update();

  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = 7;
  } else if (keys.left.pressed && player.position.x > 100)
    player.velocity.x = -7;
  else {
    player.velocity.x *= 0.9;
    if (keys.right.pressed) {
        scrollOffset += 5;
      platforms.forEach((platform) => {
        platform.position.x -= 5;
      });

      genericObjects.forEach((genericObject) => {
        genericObject.position.x -= 3
      });

    } else if (keys.left.pressed) {
        scrollOffset -= 5;

      platforms.forEach((platform) => {
        platform.position.x += 5;
      });

      genericObjects.forEach((genericObject) => {
        genericObject.position.x += 3
      });

    }
  }

  platforms.forEach((platform) => {
    const platformTop = platform.getCollisionTop();
    if (
      player.position.y + player.height <= platformTop  &&
      player.position.y + player.height + player.velocity.y >=
      platformTop &&
      player.position.x + player.width >= platform.position.x &&
      player.position.x <= platform.position.x + platform.width
    ) {
      player.velocity.y = 0;
    }
  });

  if (scrollOffset > 12000) console.log('You win!')

    if (player.position.y > canvas.height) {
       init();
    }
}


window.addEventListener("keydown", ({ code }) => {
  switch (code) {
    case "KeyS":
    case "ArrowDown":
      break;

    case "KeyW":
    case "ArrowUp":
        if (player.velocity.y === 0) {
            player.velocity.y -= 20
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
    case "KeyS":
    case "ArrowDown":
      break;

    case "KeyW":
    case "ArrowUp":
      break;

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
