// levels.js

export const levels = [
    {
      // Where the player starts
      playerStart: { x: 200, y: 100 },

      bgMusic: "/src/assets/backgroundMusic.mp3",

      foregroundOverlay: {
        image: "/src/assets/frame.png",
        blurAmount: 5, // Blur intensity for this level
      },

      background: {
        image: "/src/assets/background_noClouds.jpg",
        blurAmount: 8,
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

      enemies: [],
  
      // Any special “mushrooms” (bounce pads)
      mushrooms: [
        { x: 21800, y: 790, image: "/src/assets/mushroom.png", bounceStrength: 30 },
      ],
  
      // Background(s)
      backgrounds: [
        { x: 0, y: 0, image: "/src/assets/background_noClouds.jpg" },
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
        // If you want to auto-generate more clouds, do it in your main code using levelEnd
      ],
  
      // Coins (x, y only, image can be used from a single coin sprite)
      coins: [
        { x: 593, y: 405 },
        { x: 702, y: 404 },
        { x: 820, y: 404 },
        { x: 1273, y: 510 },
        { x: 1271, y: 614 },
        { x: 1974, y: 776 },
        { x: 2105, y: 770 },
        { x: 2235, y: 773 },
        { x: 2714, y: 404 },
        { x: 2821, y: 410 },
        { x: 2949, y: 408 },
        { x: 3573, y: 817 },
        { x: 3707, y: 817 },
        { x: 3808, y: 810 },
        { x: 4280, y: 691 },
        { x: 4606, y: 539 },
        { x: 4727, y: 537 },
        { x: 4831, y: 535 },
        { x: 4990, y: 193 },
        { x: 5092, y: 195 },
        { x: 5220, y: 200 },
        { x: 5672, y: 195 },
        { x: 5784, y: 256 },
        { x: 5851, y: 352 },
        { x: 5896, y: 442 },
        { x: 5926, y: 536 },
        { x: 5950, y: 644 },
        { x: 5967, y: 765 },
        { x: 6578, y: 810 },
        { x: 6716, y: 810 },
        { x: 6822, y: 804 },
        { x: 7273, y: 747 },
        { x: 7259, y: 616 },
        { x: 7984, y: 810 },
        { x: 8114, y: 798 },
        { x: 8266, y: 804 },
        { x: 8804, y: 572 },
        { x: 9092, y: 489 },
        { x: 9197, y: 489 },
        { x: 9304, y: 487 },
        { x: 9903, y: 299 },
        { x: 10027, y: 299 },
        { x: 10131, y: 292 },
        { x: 9632, y: 379 },
        { x: 10504, y: 306 },
        { x: 10657, y: 357 },
        { x: 10736, y: 464 },
        { x: 10754, y: 599 },
        { x: 11393, y: 381 },
        { x: 11524, y: 386 },
        { x: 11627, y: 378 },
        { x: 12317, y: 807 },
        { x: 12465, y: 782 },
        { x: 12576, y: 800 },
        { x: 12709, y: 787 },
        { x: 12824, y: 790 },
        { x: 12319, y: 679 },
        { x: 12444, y: 673 },
        { x: 12559, y: 674 },
        { x: 12685, y: 671 },
        { x: 12818, y: 668 },
        { x: 12814, y: 566 },
        { x: 12670, y: 567 },
        { x: 12542, y: 555 },
        { x: 12427, y: 558 },
        { x: 12325, y: 559 },
        { x: 13286, y: 653 },
        { x: 13569, y: 463 },
        { x: 13682, y: 456 },
        { x: 13813, y: 462 },
        { x: 14092, y: 282 },
        { x: 14403, y: 197 },
        { x: 14521, y: 193 },
        { x: 14630, y: 194 },
        { x: 15092, y: 168 },
        { x: 15222, y: 225 },
        { x: 15266, y: 319 },
        { x: 15304, y: 425 },
        { x: 15317, y: 527 },
        { x: 15336, y: 639 },
        { x: 15336, y: 744 },
        { x: 15837, y: 528 },
        { x: 16127, y: 426 },
        { x: 16206, y: 426 },
        { x: 16300, y: 426 },
        { x: 16545, y: 234 },
        { x: 16804, y: 105 },
        { x: 16914, y: 101 },
        { x: 17008, y: 103 },
        { x: 17436, y: 49 },
        { x: 17542, y: 94 },
        { x: 17599, y: 156 },
        { x: 17639, y: 243 },
        { x: 17668, y: 340 },
        { x: 17697, y: 417 },
        { x: 17714, y: 519 },
        { x: 17726, y: 611 },
        { x: 17738, y: 723 },
        { x: 17752, y: 809 },
        { x: 18121, y: 831 },
        { x: 18260, y: 827 },
        { x: 18404, y: 824 },
        { x: 19095, y: 812 },
        { x: 19089, y: 727 },
        { x: 19085, y: 631 },
        { x: 19689, y: 826 },
        { x: 19781, y: 824 },
        { x: 19879, y: 812 },
        { x: 20641, y: 732 },
        { x: 20638, y: 632 },
        { x: 20636, y: 536 },
        { x: 21234, y: 842 },
        { x: 21360, y: 831 },
        { x: 21465, y: 830 },
        { x: 21852, y: -10 },
        { x: 21929, y: -8 },
        { x: 21993, y: -7 },
        { x: 21846, y: 74 },
        { x: 21917, y: 74 },
        { x: 21986, y: 76 },
        { x: 21836, y: 156 },
        { x: 21837, y: 235 },
        { x: 21838, y: 316 },
        { x: 21842, y: 401 },
        { x: 21837, y: 493 },
        { x: 21840, y: 576 },
        { x: 21836, y: 648 },
        { x: 21835, y: 718 },
        { x: 21907, y: 151 },
        { x: 21909, y: 231 },
        { x: 21908, y: 311 },
        { x: 21907, y: 389 },
        { x: 21897, y: 487 },
        { x: 21905, y: 568 },
        { x: 21900, y: 641 },
        { x: 21902, y: 713 },
        { x: 21985, y: 151 },
        { x: 21978, y: 222 },
        { x: 21976, y: 303 },
        { x: 21980, y: 387 },
        { x: 21972, y: 468 },
        { x: 21965, y: 545 },
        { x: 21965, y: 614 },
        { x: 21959, y: 684 },
        { x: 22258, y: 60 },
        { x: 22330, y: 98 },
        { x: 22395, y: 146 },
        { x: 22454, y: 214 },
        { x: 22493, y: 284 },
        { x: 22523, y: 350 },
        { x: 22553, y: 429 },
        { x: 22575, y: 516 },
        { x: 22590, y: 590 },
        { x: 22607, y: 680 },
        { x: 22616, y: 745 },
        { x: 22619, y: 835 },
        
      ],
  
      // Finish line / goal
      finish: {
        x: 22750,
        y: -10,
        image: "/src/assets/finish.png",
      },
    },
    {
      // New Level
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
          speed: 1,
          image: "/src/assets/enemy.png"
        },
        {
          x: 1900,
          y: 820,
          width: 150,
          patrolRange: { left: -500, right: 400 }, // relative range for patrol
          speed: 1,
          image: "/src/assets/enemy.png"
        },
        {
          x: 3840,
          y: 600,
          width: 150,
          patrolRange: { left: -200, right: 100 }, // relative range for patrol
          speed: 1,
          image: "/src/assets/enemy.png"
        },
        {
          x: 6080,
          y: 820,
          width: 150,
          patrolRange: { left: -480, right: 500 }, // relative range for patrol
          speed: 1,
          image: "/src/assets/enemy.png"
        },
        {
          x: 8950,
          y: 820,
          width: 150,
          patrolRange: { left: -480, right: 500 }, // relative range for patrol
          speed: 1,
          image: "/src/assets/enemy.png"
        },
        {
          x: 10030,
          y: 290,
          width: 150,
          patrolRange: { left: -150, right: 100 }, // relative range for patrol
          speed: 1,
          image: "/src/assets/enemy.png"
        },
        {
          x: 17080,
          y: 820,
          width: 150,
          patrolRange: { left: -480, right: 500 }, // relative range for patrol
          speed: 1,
          image: "/src/assets/enemy.png"
        },
        {
          x: 20020,
          y: 490,
          width: 150,
          patrolRange: { left: -150, right: 100 }, // relative range for patrol
          speed: 1,
          image: "/src/assets/enemy.png"
        },
        {
          x: 21280,
          y: 820,
          width: 150,
          patrolRange: { left: -480, right: 500 }, // relative range for patrol
          speed: 1,
          image: "/src/assets/enemy.png"
        },
        {
          x: 23320,
          y: 820,
          width: 150,
          patrolRange: { left: -180, right: 200 }, // relative range for patrol
          speed: 1,
          image: "/src/assets/enemy.png"
        },
        {
          x: 23820,
          y: 820,
          width: 150,
          patrolRange: { left: -180, right: 200 }, // relative range for patrol
          speed: 1,
          image: "/src/assets/enemy.png"
        },
        
      ],
  
      // Mushrooms for bouncing
      mushrooms: [
        { x: 4200, y: 800, image: "/src/assets/mushroom.png", bounceStrength: 30 },
        { x: 6500, y: 800, image: "/src/assets/mushroom.png", bounceStrength: 30 },
        { x: 9400, y: 800, image: "/src/assets/mushroom.png", bounceStrength: 30 },
        { x: 10700, y: 680, image: "/src/assets/mushroom.png", bounceStrength: 30 },
        { x: 13400, y: 800, image: "/src/assets/mushroom.png", bounceStrength: 30 },
        { x: 13900, y: 320, image: "/src/assets/mushroom.png", bounceStrength: 30 },
        { x: 14850, y: 620, image: "/src/assets/mushroom.png", bounceStrength: 30 },
        { x: 16000, y: 620, image: "/src/assets/mushroom.png", bounceStrength: 30 },
        { x: 18940, y: 800, image: "/src/assets/mushroom.png", bounceStrength: 30 },
        { x: 18940, y: 800, image: "/src/assets/mushroom.png", bounceStrength: 30 },
        { x: 21700, y: 800, image: "/src/assets/mushroom.png", bounceStrength: 30 },
      ],
  
      // Background(s)
      backgrounds: [
        { x: 0, y: 0, image: "/src/assets/background_noClouds.jpg" },
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
  ];
  