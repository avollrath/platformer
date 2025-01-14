// levels.js

export const levels = [
    {
      // Where the player starts
      playerStart: { x: 200, y: 100 },

      bgMusic: "/src/assets/backgroundMusic.mp3",

      foreground: {
        image: "/src/assets/frame.png",
        blurAmount: 5, // Blur intensity for this level
      },

      background: {
        image: "/src/assets/background_noClouds.jpg",
        blurAmount: 20,
      },
  
      // Where this level ends (useful for positioning objects or random generation)
      levelEnd: 23000,
  
      // An array of all platform objects
      platforms: [
        // Ground segments
        { x: 0,     y: 900, image: "/src/assets/ground.png", collisionOffset: 60 },
        { x: 1400,  y: 900, image: "/src/assets/ground.png", collisionOffset: 60 },
        { x: 3000,  y: 900, image: "/src/assets/ground.png", collisionOffset: 60 },
        { x: 5900,  y: 900, image: "/src/assets/ground.png", collisionOffset: 60 },
        { x: 7500,  y: 900, image: "/src/assets/ground.png", collisionOffset: 60 },
        { x: 12000, y: 900, image: "/src/assets/ground.png", collisionOffset: 60 },
        { x: 17700, y: 900, image: "/src/assets/ground.png", collisionOffset: 60 },
        { x: 19300, y: 900, image: "/src/assets/ground.png", collisionOffset: 60 },
        { x: 20800, y: 900, image: "/src/assets/ground.png", collisionOffset: 60 },
        { x: 22550, y: 900, image: "/src/assets/ground.png", collisionOffset: 60 },
  
        // Smaller or big platform segments
        { x: 2600,  y: 550, image: "/src/assets/platform_w512.png", collisionOffset: 30 },
        { x: 4500,  y: 650, image: "/src/assets/big_platform.png", collisionOffset: 30 },
        { x: 4900,  y: 300, image: "/src/assets/platform_w512.png", collisionOffset: 30 },
        { x: 9000,  y: 600, image: "/src/assets/platform_w512.png", collisionOffset: 30 },
        { x: 9800,  y: 400, image: "/src/assets/big_platform.png", collisionOffset: 30 },
        { x: 10700, y: 750, image: "/src/assets/platform_w512.png", collisionOffset: 30 },
        { x: 11300, y: 500, image: "/src/assets/platform_w512.png", collisionOffset: 30 },
        { x: 13500, y: 600, image: "/src/assets/platform_w512.png", collisionOffset: 30 },
        { x: 14300, y: 300, image: "/src/assets/big_platform.png", collisionOffset: 30 },
        { x: 15300, y: 850, image: "/src/assets/platform_w512.png", collisionOffset: 30 },
        { x: 16000, y: 540, image: "/src/assets/big_platform.png", collisionOffset: 30 },
        { x: 16700, y: 200, image: "/src/assets/platform_w512.png", collisionOffset: 30 },
      ],

      enemies: [ 
        {
        x: 3500,
        y: 815,
        width: 220,
        patrolRange: { left: -300, right: 300 }, // relative range for patrol
        speed: 0.6,
        image: "/src/assets/snail_sprite.png",
        totalFrames: 5,
        frameRate: 100
      },
      {
        x: 6450,
        y: 815,
        width: 220,
        patrolRange: { left: -300, right: 300 }, // relative range for patrol
        speed: 0.6,
        image: "/src/assets/snail_sprite.png",
        totalFrames: 5,
        frameRate: 100
      },
      {
        x: 10870,
        y: 645,
        width: 220,
        patrolRange: { left: -100, right: 100 }, // relative range for patrol
        speed: 0.6,
        image: "/src/assets/snail_sprite.png",
        totalFrames: 5,
        frameRate: 100
      },
      {
        x: 18180,
        y: 815,
        width: 220,
        patrolRange: { left: -300, right: 300 }, // relative range for patrol
        speed: 0.6,
        image: "/src/assets/snail_sprite.png",
        totalFrames: 5,
        frameRate: 100
      },
      {
        x: 19832,
        y: 815,
        width: 220,
        patrolRange: { left: -300, right: 300 }, // relative range for patrol
        speed: 0.6,
        image: "/src/assets/snail_sprite.png",
        totalFrames: 5,
        frameRate: 100
      },
      {
        x: 21324,
        y: 815,
        width: 220,
        patrolRange: { left: -300, right: 300 }, // relative range for patrol
        speed: 0.6,
        image: "/src/assets/snail_sprite.png",
        totalFrames: 5,
        frameRate: 100
      },
    ],
  
      // Any special “mushrooms” (bounce pads)
      mushrooms: [
        { x: 21800, y: 790, image: "/src/assets/mushroom_sprite.png", bounceStrength: 38 },
      ],
  
  
      // Generic objects (trees, pillars, skeletons, clouds)
      genericObjects: [
        
        // Example “skeleton”, “tree”, “pillar” objects
        { x: 3100, y: 300, image: "/src/assets/skeleton.png", scrollSpeed: 0.3 },
        { x: 6500, y: 300, image: "/src/assets/skeleton.png", scrollSpeed: 0.3 },
        { x: 300,  y: 50, image: "/src/assets/tree.png",     scrollSpeed: 0.4, scale: 1.4 },
        { x: 2000, y: 400, image: "/src/assets/tree.png",     scrollSpeed: 0.4 },
        { x: 5000, y: 400, image: "/src/assets/tree.png",     scrollSpeed: 0.4 },
        { x: 7300, y: 400, image: "/src/assets/tree.png",     scrollSpeed: 0.4 },
        { x: 2500, y: 200, image: "/src/assets/pillar.png",   scrollSpeed: 0.8 },
        { x: 10300,y: 200, image: "/src/assets/pillar.png",   scrollSpeed: 0.8 },


        { 
          x: 23010, 
          y: 620, 
          image: "/src/assets/fire_sprite.png", 
          scrollspeed: 2, 
          totalFrames: 6,     
          frameRate:140,
          filter: "none",
          scale: 1.8
        },
        { 
          x: 23402, 
          y: 620, 
          image: "/src/assets/fire_sprite.png", 
          scrollspeed: 2, 
          totalFrames: 6,     
          frameRate:130,
          filter: "none",
          scale: 1.8
        },
     
      ],
  
      // Coins (x, y only, image can be used from a single coin sprite)
      coins: [
        { x: 505, y: 565 },
        { x: 605, y: 565 },
        { x: 705, y: 565 },
        { x: 805, y: 565 },
        { x: 505, y: 665 },
        { x: 605, y: 665 },
        { x: 705, y: 665 },
        { x: 805, y: 665 },
        { x: 1243, y: 569 },
        { x: 1243, y: 669 },
        { x: 1984, y: 652 },
        { x: 2084, y: 652 },
        { x: 2184, y: 652 },
        { x: 2624, y: 260 },
        { x: 2724, y: 260 },
        { x: 2824, y: 260 },
        { x: 2924, y: 260 },
        { x: 2624, y: 360 },
        { x: 2724, y: 360 },
        { x: 2824, y: 360 },
        { x: 2924, y: 360 },
        { x: 3844, y: 553 },
        { x: 3944, y: 553 },
        { x: 3844, y: 653 },
        { x: 3944, y: 653 },
        { x: 4629, y: 365 },
        { x: 4729, y: 365 },
        { x: 4629, y: 465 },
        { x: 4729, y: 465 },
        { x: 4981, y: 80 },
        { x: 5081, y: 80 },
        { x: 5181, y: 80 },
        { x: 5981, y: 697 },
        { x: 5822, y: 274 },
        { x: 5922, y: 274 },
        { x: 5822, y: 374 },
        { x: 5922, y: 374 },
        { x: 5822, y: 474 },
        { x: 5922, y: 474 },
        { x: 6640, y: 399 },
        { x: 6740, y: 399 },
        { x: 6640, y: 499 },
        { x: 6740, y: 499 },
        { x: 6640, y: 599 },
        { x: 6740, y: 599 },
        { x: 7226, y: 568 },
        { x: 7326, y: 568 },
        { x: 7226, y: 668 },
        { x: 7326, y: 668 },
        { x: 8018, y: 442 },
        { x: 8118, y: 442 },
        { x: 8218, y: 442 },
        { x: 8018, y: 542 },
        { x: 8118, y: 542 },
        { x: 8218, y: 542 },
        { x: 8018, y: 642 },
        { x: 8118, y: 642 },
        { x: 8218, y: 642 },
        { x: 8018, y: 742 },
        { x: 8118, y: 742 },
        { x: 8218, y: 742 },
        { x: 9055, y: 400 },
        { x: 9155, y: 400 },
        { x: 9255, y: 400 },
        { x: 9355, y: 400 },
        { x: 9845, y: 209 },
        { x: 9945, y: 209 },
        { x: 10045, y: 209 },
        { x: 10145, y: 209 },
        { x: 10761, y: 378 },
        { x: 10861, y: 378 },
        { x: 10961, y: 378 },
        { x: 11061, y: 378 },
        { x: 10761, y: 478 },
        { x: 10861, y: 478 },
        { x: 10961, y: 478 },
        { x: 11061, y: 478 },
        { x: 11358, y: 275 },
        { x: 11458, y: 275 },
        { x: 11558, y: 275 },
        { x: 11658, y: 275 },
        { x: 12337, y: 561 },
        { x: 12437, y: 561 },
        { x: 12537, y: 561 },
        { x: 12637, y: 561 },
        { x: 12737, y: 561 },
        { x: 12837, y: 561 },
        { x: 12337, y: 661 },
        { x: 12437, y: 661 },
        { x: 12537, y: 661 },
        { x: 12637, y: 661 },
        { x: 12737, y: 661 },
        { x: 12837, y: 661 },
        { x: 13578, y: 435 },
        { x: 13678, y: 435 },
        { x: 13778, y: 435 },
        { x: 14387, y: 181 },
        { x: 14487, y: 181 },
        { x: 14587, y: 181 },
        { x: 14687, y: 181 },
        { x: 15252, y: 329 },
        { x: 15352, y: 329 },
        { x: 15452, y: 329 },
        { x: 15252, y: 429 },
        { x: 15352, y: 429 },
        { x: 15452, y: 429 },
        { x: 15252, y: 529 },
        { x: 15352, y: 529 },
        { x: 15452, y: 529 },
        { x: 15252, y: 629 },
        { x: 15352, y: 629 },
        { x: 15452, y: 629 },
        { x: 15252, y: 729 },
        { x: 15352, y: 729 },
        { x: 15452, y: 729 },
        { x: 16157, y: 201 },
        { x: 16257, y: 201 },
        { x: 16157, y: 301 },
        { x: 16257, y: 301 },
        { x: 16157, y: 401 },
        { x: 16257, y: 401 },
        { x: 16792, y: 40 },
        { x: 16892, y: 40 },
        { x: 16992, y: 40 },
        { x: 17693, y: 256 },
        { x: 17793, y: 256 },
        { x: 17693, y: 356 },
        { x: 17793, y: 356 },
        { x: 17693, y: 456 },
        { x: 17793, y: 456 },
        { x: 17693, y: 556 },
        { x: 17793, y: 556 },
        { x: 17693, y: 656 },
        { x: 17793, y: 656 },
        { x: 17693, y: 756 },
        { x: 17793, y: 756 },
        { x: 18425, y: 633 },
        { x: 18525, y: 633 },
        { x: 18625, y: 633 },
        { x: 19005, y: 542 },
        { x: 19105, y: 542 },
        { x: 19005, y: 642 },
        { x: 19105, y: 642 },
        { x: 19005, y: 742 },
        { x: 19105, y: 742 },
        { x: 19056, y: 585 },
        { x: 19056, y: 685 },
        { x: 19056, y: 785 },
        { x: 19856, y: 407 },
        { x: 19956, y: 407 },
        { x: 19856, y: 507 },
        { x: 19956, y: 507 },
        { x: 19856, y: 607 },
        { x: 19956, y: 607 },
        { x: 19856, y: 707 },
        { x: 19956, y: 707 },
        { x: 20605, y: 560 },
        { x: 20605, y: 660 },
        { x: 20605, y: 760 },
        { x: 21033, y: 365 },
        { x: 21133, y: 365 },
        { x: 21233, y: 365 },
        { x: 21333, y: 365 },
        { x: 21033, y: 465 },
        { x: 21133, y: 465 },
        { x: 21233, y: 465 },
        { x: 21333, y: 465 },
        { x: 21033, y: 565 },
        { x: 21133, y: 565 },
        { x: 21233, y: 565 },
        { x: 21333, y: 565 },
        { x: 21033, y: 665 },
        { x: 21133, y: 665 },
        { x: 21233, y: 665 },
        { x: 21333, y: 665 },
        { x: 21033, y: 765 },
        { x: 21133, y: 765 },
        { x: 21233, y: 765 },
        { x: 21333, y: 765 },
        { x: 21906, y: 119 },
        { x: 21906, y: 219 },
        { x: 21906, y: 319 },
        { x: 21906, y: 419 },
        { x: 22590, y: 186 },
        { x: 22690, y: 186 },
        { x: 22590, y: 286 },
        { x: 22690, y: 286 },
        { x: 22590, y: 386 },
        { x: 22690, y: 386 },
        { x: 22590, y: 486 },
        { x: 22690, y: 486 },
        { x: 22590, y: 586 },
        { x: 22690, y: 586 },
        { x: 22590, y: 686 },
        { x: 22690, y: 686 },
        { x: 22590, y: 786 },
        { x: 22690, y: 786 },
        
        
    ],
    
  
      // Finish line / goal
      finish: {
        x: 22750,
        y: -10,
        image: "/src/assets/finish.png",
      },
    },
    {
      // Level 2 ***********************************************************************************************************************************************************************************
      playerStart: { x: 200, y: 700 },

      bgMusic: "/src/assets/backgroundMusic2.mp3",

      foregroundOverlay: {
        image: "/src/assets/frame.png",
        blurAmount: 7, // Blur intensity for this level
      },

      background: {
        image: "/src/assets/background2.jpg",
        blurAmount: 8,
      },
  
      // Level length and end position
      levelEnd: 25000,
  
      // Platforms
      platforms: [
        // Ground segments
        { x: 0, y: 900, image: "/src/assets/ground.png", collisionOffset: 60 },
        { x: 1400, y: 900, image: "/src/assets/ground.png", collisionOffset: 60 },
        { x: 3200, y: 900, image: "/src/assets/ground.png", collisionOffset: 60 },
        { x: 5600, y: 900, image: "/src/assets/ground.png", collisionOffset: 60 },
        { x: 8400, y: 900, image: "/src/assets/ground.png", collisionOffset: 60 },
        { x: 12400, y: 900, image: "/src/assets/ground.png", collisionOffset: 60 },
        { x: 16500, y: 900, image: "/src/assets/ground.png", collisionOffset: 60 },
        { x: 18000, y: 900, image: "/src/assets/ground.png", collisionOffset: 60 },
        { x: 20700, y: 900, image: "/src/assets/ground.png", collisionOffset: 60 },
        { x: 23050, y: 900, image: "/src/assets/ground.png", collisionOffset: 60 },
        { x: 24650, y: 900, image: "/src/assets/ground.png", collisionOffset: 60 },
  
        // Platforms
        { x: 2000, y: 600, image: "/src/assets/platform_w512.png", collisionOffset: 30 },
        { x: 2600, y: 450, image: "/src/assets/big_platform.png", collisionOffset: 30 },
        { x: 3600, y: 700, image: "/src/assets/platform_w512.png", collisionOffset: 30 },
        { x: 4900, y: 400, image: "/src/assets/platform_w512.png", collisionOffset: 30 },
        { x: 6900, y: 400, image: "/src/assets/big_platform.png", collisionOffset: 30 },
        { x: 7600, y: 350, image: "/src/assets/platform_w512.png", collisionOffset: 30 },
        { x: 9800, y: 400, image: "/src/assets/big_platform.png", collisionOffset: 30 },
        { x: 10500, y: 800, image: "/src/assets/platform_w512.png", collisionOffset: 30 },
        { x: 11500, y: 500, image: "/src/assets/big_platform.png", collisionOffset: 30 },
        { x: 13700, y: 450, image: "/src/assets/platform_w512.png", collisionOffset: 30 },
        { x: 14700, y: 750, image: "/src/assets/big_platform.png", collisionOffset: 30 },
        { x: 15700, y: 750, image: "/src/assets/platform_w512.png", collisionOffset: 30 },
        { x: 19800, y: 600, image: "/src/assets/platform_w512.png", collisionOffset: 30 },
        { x: 22200, y: 330, image: "/src/assets/big_platform.png", collisionOffset: 30 },
      ],

      enemies: [
        {
          x: 800,
          y: 820,
          width: 150,
          patrolRange: { left: -200, right: 200 }, // relative range for patrol
          speed: 2,
          image: "/src/assets/enemy_sprite.png",
          frameRate: 200
        },
        {
          x: 1900,
          y: 820,
          width: 150,
          patrolRange: { left: -500, right: 400 }, // relative range for patrol
          speed: 2,
          image: "/src/assets/enemy_sprite.png"
        },
        {
          x: 3840,
          y: 600,
          width: 150,
          patrolRange: { left: -200, right: 100 }, // relative range for patrol
          speed: 2,
          image: "/src/assets/enemy_sprite.png"
        },
        {
          x: 6080,
          y: 820,
          width: 150,
          patrolRange: { left: -480, right: 500 }, // relative range for patrol
          speed: 2,
          image: "/src/assets/enemy_sprite.png"
        },
        {
          x: 8950,
          y: 820,
          width: 150,
          patrolRange: { left: -480, right: 500 }, // relative range for patrol
          speed: 2,
          image: "/src/assets/enemy_sprite.png"
        },
        {
          x: 10030,
          y: 290,
          width: 150,
          patrolRange: { left: -150, right: 100 }, // relative range for patrol
          speed: 2,
          image: "/src/assets/enemy_sprite.png"
        },
        {
          x: 17080,
          y: 820,
          width: 150,
          patrolRange: { left: -480, right: 500 }, // relative range for patrol
          speed: 2,
          image: "/src/assets/enemy_sprite.png"
        },
        {
          x: 20020,
          y: 490,
          width: 150,
          patrolRange: { left: -150, right: 100 }, // relative range for patrol
          speed: 2,
          image: "/src/assets/enemy_sprite.png"
        },
        {
          x: 21280,
          y: 820,
          width: 150,
          patrolRange: { left: -480, right: 500 }, // relative range for patrol
          speed: 2,
          image: "/src/assets/enemy_sprite.png"
        },
        {
          x: 23320,
          y: 820,
          width: 150,
          patrolRange: { left: -180, right: 200 }, // relative range for patrol
          speed: 2,
          image: "/src/assets/enemy_sprite.png"
        },
        {
          x: 23820,
          y: 820,
          width: 150,
          patrolRange: { left: -180, right: 200 }, // relative range for patrol
          speed: 2,
          image: "/src/assets/enemy_sprite.png"
        },
        
      ],
  
      // Mushrooms for bouncing
      mushrooms: [
        { x: 4200, y: 800, image: "/src/assets/mushroom_sprite.png", bounceStrength: 38 },
        { x: 6500, y: 800, image: "/src/assets/mushroom_sprite.png", bounceStrength: 38 },
        { x: 9400, y: 800, image: "/src/assets/mushroom_sprite.png", bounceStrength: 38 },
        { x: 10700, y: 680, image: "/src/assets/mushroom_sprite.png", bounceStrength: 38 },
        { x: 13400, y: 800, image: "/src/assets/mushroom_sprite.png", bounceStrength: 38 },
        { x: 13900, y: 320, image: "/src/assets/mushroom_sprite.png", bounceStrength: 38 },
        { x: 14850, y: 620, image: "/src/assets/mushroom_sprite.png", bounceStrength: 38 },
        { x: 16000, y: 620, image: "/src/assets/mushroom_sprite.png", bounceStrength: 38 },
        { x: 18940, y: 800, image: "/src/assets/mushroom_sprite.png", bounceStrength: 38 },
        { x: 21700, y: 800, image: "/src/assets/mushroom_sprite.png", bounceStrength: 38 },
      ],
  
  
      // Generic objects (clouds, trees, pillars, skeletons)
      genericObjects: [
        // Clouds

  
        // Trees, skeletons, and pillars
        { x: 3000, y: 100, image: "/src/assets/tree.png", scrollSpeed: 0.4, scale: 1.5 },
        { x: 5500, y: 400, image: "/src/assets/tree.png", scrollSpeed: 0.4 },
        { x: 9500, y: 100, image: "/src/assets/tree.png", scrollSpeed: 0.4, scale: 1.3 },
        { x: 10000, y: 300, image: "/src/assets/pillar.png", scrollSpeed: 0.8 },
        { x: 14000, y: 200, image: "/src/assets/pillar.png", scrollSpeed: 0.8 },
        { x: 1000, y: 100, image: "/src/assets/skeleton.png", scrollSpeed: 0.3, scale: 1.3 },
      ],
  
      // Coins (spread out and grouped for rewards)
      coins: [
        { x: 459, y: 597 },
        { x: 581, y: 600 },
        { x: 718, y: 597 },
        { x: 1273, y: 499 },
        { x: 2078, y: 806 },
        { x: 2185, y: 807 },
        { x: 2284, y: 805 },
        { x: 2075, y: 276 },
        { x: 2179, y: 271 },
        { x: 2289, y: 271 },
        { x: 2719, y: 115 },
        { x: 2799, y: 112 },
        { x: 2875, y: 114 },
        { x: 3687, y: 334 },
        { x: 3808, y: 335 },
        { x: 3915, y: 328 },
        { x: 4489, y: 358 },
        { x: 4562, y: 219 },
        { x: 4658, y: 146 },
        { x: 4791, y: 131 },
        { x: 4869, y: 205 },
        { x: 4939, y: 310 },
        { x: 5566, y: 150 },
        { x: 5689, y: 199 },
        { x: 5762, y: 273 },
        { x: 5825, y: 380 },
        { x: 5863, y: 493 },
        { x: 5880, y: 619 },
        { x: 5898, y: 733 },
        { x: 6607, y: 676 },
        { x: 7025, y: 10 },
        { x: 7135, y: 7 },
        { x: 7251, y: 9 },
        { x: 7825, y: 277 },
        { x: 8373, y: 315 },
        { x: 8458, y: 398 },
        { x: 8514, y: 531 },
        { x: 9511, y: 665 },
        { x: 9564, y: 222 },
        { x: 9675, y: 147 },
        { x: 9808, y: 213 },
        { x: 10023, y: 287 },
        { x: 10564, y: 707 },
        { x: 10821, y: 521 },
        { x: 11049, y: 214 },
        { x: 11164, y: 146 },
        { x: 11276, y: 122 },
        { x: 11407, y: 139 },
        { x: 11491, y: 186 },
        { x: 11530, y: 262 },
        { x: 11566, y: 369 },
        { x: 12243, y: 221 },
        { x: 12365, y: 283 },
        { x: 12459, y: 385 },
        { x: 12510, y: 490 },
        { x: 12535, y: 616 },
        { x: 12542, y: 737 },
        { x: 12828, y: 417 },
        { x: 12928, y: 413 },
        { x: 13051, y: 412 },
        { x: 13511, y: 672 },
        { x: 13764, y: 357 },
        { x: 14013, y: 206 },
        { x: 14991, y: 511 },
        { x: 15517, y: 87 },
        { x: 15612, y: 158 },
        { x: 15669, y: 254 },
        { x: 15697, y: 359 },
        { x: 15715, y: 461 },
        { x: 15721, y: 584 },
        { x: 16114, y: 515 },
        { x: 16728, y: 181 },
        { x: 16794, y: 277 },
        { x: 16824, y: 394 },
        { x: 16841, y: 520 },
        { x: 16846, y: 652 },
        { x: 16846, y: 786 },
        { x: 17803, y: 550 },
        { x: 18259, y: 533 },
        { x: 18377, y: 529 },
        { x: 18488, y: 529 },
        { x: 19067, y: 678 },
        { x: 19893, y: 253 },
        { x: 20013, y: 254 },
        { x: 20128, y: 254 },
        { x: 20970, y: 519 },
        { x: 21077, y: 517 },
        { x: 21191, y: 516 },
        { x: 21280, y: 516 },
        { x: 21388, y: 517 },
        { x: 21806, y: 650 },
        { x: 21823, y: 471 },
        { x: 21849, y: 333 },
        { x: 21908, y: 220 },
        { x: 21993, y: 154 },
        { x: 22097, y: 126 },
        { x: 22219, y: 137 },
        { x: 22321, y: 204 },
        { x: 22408, y: 268 },
        { x: 22954, y: 130 },
        { x: 23045, y: 186 },
        { x: 23093, y: 273 },
        { x: 23142, y: 361 },
        { x: 23162, y: 457 },
        { x: 23187, y: 559 },
        { x: 23201, y: 664 },
        { x: 23209, y: 785 },
        { x: 23702, y: 342 },
        { x: 23699, y: 452 },
        { x: 23706, y: 567 },
        { x: 23702, y: 687 },
        { x: 23707, y: 795 },
        { x: 23810, y: 335 },
        { x: 23808, y: 452 },
        { x: 23808, y: 565 },
        { x: 23804, y: 685 },
        { x: 23801, y: 795 },
        { x: 23897, y: 795 },
        { x: 23899, y: 686 },
        { x: 23892, y: 564 },
        { x: 23896, y: 454 },
        { x: 23896, y: 335 },
        { x: 23988, y: 332 },
        { x: 23982, y: 449 },
        { x: 23980, y: 564 },
        { x: 23979, y: 686 },
        { x: 23975, y: 791 },
        { x: 24076, y: 326 },
        { x: 24074, y: 448 },
        { x: 24071, y: 566 },
        { x: 24070, y: 675 },
        { x: 24064, y: 798 },
        { x: 24426, y: 776 },
        { x: 24419, y: 680 },
        { x: 24419, y: 580 },



      ],
  
      // Finish line
      finish: {
        x: 24800,
        y: -10,
        image: "/src/assets/finish.png",
      },
    },
    {
      // LEVEL 3 *******************************************************************************************************************************************************************************************
      playerStart: { x: 200, y: 700 },

      bgMusic: "/src/assets/backgroundMusic3.mp3",

      foreground: {
        image: "/src/assets/frame.png",
        blurAmount: 7, // Blur intensity for this level
      },

      background: {
        image: "/src/assets/background3.jpg",
        blurAmount: 8,
      },
  
      // Level length and end position
      levelEnd: 25000,
  
      // Platforms
      platforms: [
        { x: 0, y: 900, image: "/src/assets/ground.png", collisionOffset: 60 },
        { x: 1341, y: 900, image: "/src/assets/ground.png", collisionOffset: 60 },
        { x: 2782, y: 900, image: "/src/assets/ground.png", collisionOffset: 60 },
        { x: 4323, y: 900, image: "/src/assets/ground.png", collisionOffset: 60 },
        { x: 5964, y: 900, image: "/src/assets/ground.png", collisionOffset: 60 },
        { x: 7705, y: 900, image: "/src/assets/ground.png", collisionOffset: 60 },
        { x: 9546, y: 900, image: "/src/assets/ground.png", collisionOffset: 60 },
        { x: 11487, y: 900, image: "/src/assets/ground.png", collisionOffset: 60 },
        { x: 13528, y: 900, image: "/src/assets/ground.png", collisionOffset: 60 },
        { x: 15669, y: 900, image: "/src/assets/ground.png", collisionOffset: 60 },
        { x: 17910, y: 900, image: "/src/assets/ground.png", collisionOffset: 60 },
        { x: 20251, y: 900, image: "/src/assets/ground.png", collisionOffset: 60 },
        { x: 22692, y: 900, image: "/src/assets/ground.png", collisionOffset: 60 },
        { x: 25233, y: 900, image: "/src/assets/ground.png", collisionOffset: 60 },
        { x: 27874, y: 900, image: "/src/assets/ground.png", collisionOffset: 60 },
        { x: 30615, y: 900, image: "/src/assets/ground.png", collisionOffset: 60 },
        { x: 33456, y: 900, image: "/src/assets/ground.png", collisionOffset: 60 },
        { x: 36397, y: 900, image: "/src/assets/ground.png", collisionOffset: 60 },
        { x: 39438, y: 900, image: "/src/assets/ground.png", collisionOffset: 60 },
        { x: 42579, y: 900, image: "/src/assets/ground.png", collisionOffset: 60 },
        { x: 45820, y: 900, image: "/src/assets/ground.png", collisionOffset: 60 },
        { x: 49161, y: 900, image: "/src/assets/ground.png", collisionOffset: 60 },
        { x: 52602, y: 900, image: "/src/assets/ground.png", collisionOffset: 60 },
        { x: 56143, y: 900, image: "/src/assets/ground.png", collisionOffset: 60 },
        { x: 59784, y: 900, image: "/src/assets/ground.png", collisionOffset: 60 },
        { x: 63525, y: 900, image: "/src/assets/ground.png", collisionOffset: 60 },
        { x: 67366, y: 900, image: "/src/assets/ground.png", collisionOffset: 60 },
        { x: 71307, y: 900, image: "/src/assets/ground.png", collisionOffset: 60 },
        { x: 75348, y: 900, image: "/src/assets/ground.png", collisionOffset: 60 },
        { x: 79489, y: 900, image: "/src/assets/ground.png", collisionOffset: 60 },
    ],
    
    

      enemies: [
      
        
      ],
  
      // Mushrooms for bouncing
      mushrooms: [
    
      ],
  
  
      // Generic objects (clouds, trees, pillars, skeletons)
      genericObjects: [
  
      ],
  
      // Coins (spread out and grouped for rewards)
      coins: [
     

      ],
  
      // Finish line
      finish: {
        x: 24800,
        y: -10,
        image: "/src/assets/finish.png",
      },
    },
  ];
  