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
        blurAmount: 4,
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
        { x: 21800, y: 790, image: "/src/assets/mushroom_sprite.png", bounceStrength: 30 },
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
        { x: 654, y: 526 },
        { x: 754, y: 526 },
        { x: 754, y: 426 },
        { x: 754, y: 526 },
        { x: 854, y: 526 },
        { x: 1285, y: 702 },
        { x: 1285, y: 602 },
        { x: 1285, y: 702 },
        { x: 1285, y: 602 },
        { x: 1285, y: 502 },
        { x: 1923, y: 578 },
        { x: 2023, y: 578 },
        { x: 2123, y: 578 },
        { x: 2729, y: 159 },
        { x: 2829, y: 159 },
        { x: 2929, y: 159 },
        { x: 3628, y: 662 },
        { x: 3628, y: 562 },
        { x: 3628, y: 462 },
        { x: 4297, y: 634 },
        { x: 4297, y: 534 },
        { x: 4297, y: 434 },
        { x: 4711, y: 368 },
        { x: 4711, y: 268 },
        { x: 4711, y: 168 },
        { x: 5632, y: 249 },
        { x: 5732, y: 249 },
        { x: 5832, y: 249 },
        { x: 5741, y: 342 },
        { x: 5841, y: 342 },
        { x: 5941, y: 342 },
        { x: 5842, y: 441 },
        { x: 5942, y: 441 },
        { x: 6042, y: 441 },
        { x: 5959, y: 557 },
        { x: 6059, y: 557 },
        { x: 6159, y: 557 },
        { x: 6070, y: 660 },
        { x: 6170, y: 660 },
        { x: 6270, y: 660 },
        { x: 7213, y: 785 },
        { x: 7313, y: 785 },
        { x: 7213, y: 785 },
        { x: 7313, y: 785 },
        { x: 7413, y: 785 },
        { x: 7408, y: 693 },
        { x: 7308, y: 693 },
        { x: 7408, y: 693 },
        { x: 7308, y: 693 },
        { x: 7208, y: 693 },
        { x: 7208, y: 593 },
        { x: 7208, y: 693 },
        { x: 7308, y: 693 },
        { x: 7308, y: 593 },
        { x: 7408, y: 593 },
        { x: 7995, y: 714 },
        { x: 8095, y: 714 },
        { x: 8195, y: 714 },
        { x: 8295, y: 714 },
        { x: 8395, y: 714 },
        { x: 8295, y: 714 },
        { x: 8295, y: 614 },
        { x: 8395, y: 614 },
        { x: 8295, y: 614 },
        { x: 8195, y: 614 },
        { x: 8095, y: 614 },
        { x: 7995, y: 614 },
        { x: 8791, y: 686 },
        { x: 8791, y: 586 },
        { x: 8791, y: 486 },
        { x: 9221, y: 464 },
        { x: 9221, y: 364 },
        { x: 9221, y: 264 },
        { x: 9631, y: 377 },
        { x: 9631, y: 277 },
        { x: 9631, y: 177 },
        { x: 10030, y: 304 },
        { x: 10030, y: 204 },
        { x: 10030, y: 104 },
        { x: 10438, y: 301 },
        { x: 10538, y: 301 },
        { x: 10638, y: 301 },
        { x: 10548, y: 402 },
        { x: 10648, y: 402 },
        { x: 10748, y: 402 },
        { x: 10651, y: 485 },
        { x: 10751, y: 485 },
        { x: 10851, y: 485 },
        { x: 11330, y: 370 },
        { x: 11430, y: 370 },
        { x: 11530, y: 370 },
        { x: 11630, y: 370 },
        { x: 11730, y: 370 },
        { x: 11630, y: 370 },
        { x: 11630, y: 270 },
        { x: 11730, y: 270 },
        { x: 11630, y: 270 },
        { x: 11530, y: 270 },
        { x: 11430, y: 270 },
        { x: 11430, y: 370 },
        { x: 11430, y: 270 },
        { x: 11330, y: 270 },
        { x: 12351, y: 770 },
        { x: 12451, y: 770 },
        { x: 12551, y: 770 },
        { x: 12651, y: 770 },
        { x: 12751, y: 770 },
        { x: 12851, y: 770 },
        { x: 12951, y: 770 },
        { x: 12835, y: 682 },
        { x: 12735, y: 682 },
        { x: 12835, y: 682 },
        { x: 12735, y: 682 },
        { x: 12635, y: 682 },
        { x: 12535, y: 682 },
        { x: 12435, y: 682 },
        { x: 12488, y: 601 },
        { x: 12588, y: 601 },
        { x: 12488, y: 601 },
        { x: 12588, y: 601 },
        { x: 12688, y: 601 },
        { x: 12788, y: 601 },
        { x: 12738, y: 529 },
        { x: 12638, y: 529 },
        { x: 12738, y: 529 },
        { x: 12638, y: 529 },
        { x: 12538, y: 529 },
        { x: 12586, y: 457 },
        { x: 12686, y: 457 },
        { x: 12635, y: 386 },
        { x: 13584, y: 483 },
        { x: 13684, y: 483 },
        { x: 13784, y: 483 },
        { x: 13884, y: 483 },
        { x: 13884, y: 383 },
        { x: 13784, y: 383 },
        { x: 13784, y: 283 },
        { x: 13684, y: 283 },
        { x: 13684, y: 383 },
        { x: 13584, y: 383 },
        { x: 13584, y: 283 },
        { x: 13584, y: 383 },
        { x: 13684, y: 383 },
        { x: 13784, y: 383 },
        { x: 13884, y: 383 },
        { x: 13884, y: 283 },
        { x: 14368, y: 179 },
        { x: 14468, y: 179 },
        { x: 14568, y: 179 },
        { x: 14668, y: 179 },
        { x: 15046, y: 317 },
        { x: 15146, y: 317 },
        { x: 15246, y: 317 },
        { x: 15346, y: 317 },
        { x: 15148, y: 411 },
        { x: 15248, y: 411 },
        { x: 15348, y: 411 },
        { x: 15448, y: 411 },
        { x: 15248, y: 517 },
        { x: 15348, y: 517 },
        { x: 15448, y: 517 },
        { x: 15448, y: 417 },
        { x: 15448, y: 517 },
        { x: 15548, y: 517 },
        { x: 16054, y: 426 },
        { x: 16154, y: 426 },
        { x: 16254, y: 426 },
        { x: 16354, y: 426 },
        { x: 16744, y: 76 },
        { x: 16844, y: 76 },
        { x: 16944, y: 76 },
        { x: 17044, y: 76 },
        { x: 17489, y: 237 },
        { x: 17589, y: 237 },
        { x: 17689, y: 237 },
        { x: 17789, y: 237 },
        { x: 17889, y: 237 },
        { x: 17989, y: 237 },
        { x: 17889, y: 237 },
        { x: 17889, y: 337 },
        { x: 17889, y: 237 },
        { x: 17889, y: 337 },
        { x: 17789, y: 337 },
        { x: 17689, y: 337 },
        { x: 17589, y: 337 },
        { x: 17689, y: 337 },
        { x: 17789, y: 337 },
        { x: 17889, y: 337 },
        { x: 17989, y: 337 },
        { x: 18089, y: 337 },
        { x: 17989, y: 337 },
        { x: 18089, y: 337 },
        { x: 18089, y: 437 },
        { x: 18189, y: 437 },
        { x: 18089, y: 437 },
        { x: 17989, y: 437 },
        { x: 17989, y: 537 },
        { x: 17889, y: 537 },
        { x: 17889, y: 437 },
        { x: 17789, y: 437 },
        { x: 17689, y: 437 },
        { x: 17589, y: 437 },
        { x: 17689, y: 437 },
        { x: 17789, y: 437 },
        { x: 17789, y: 537 },
        { x: 17689, y: 537 },
        { x: 17789, y: 537 },
        { x: 17889, y: 537 },
        { x: 17989, y: 537 },
        { x: 18089, y: 537 },
        { x: 18189, y: 537 },
        { x: 18268, y: 538 },
        { x: 18982, y: 747 },
        { x: 19082, y: 747 },
        { x: 19182, y: 747 },
        { x: 19080, y: 638 },
        { x: 19511, y: 771 },
        { x: 19611, y: 771 },
        { x: 19711, y: 771 },
        { x: 19811, y: 771 },
        { x: 19911, y: 771 },
        { x: 20011, y: 771 },
        { x: 20111, y: 771 },
        { x: 20211, y: 771 },
        { x: 20311, y: 771 },
        { x: 20211, y: 771 },
        { x: 20311, y: 771 },
        { x: 20311, y: 671 },
        { x: 20211, y: 671 },
        { x: 20111, y: 671 },
        { x: 20011, y: 671 },
        { x: 19911, y: 671 },
        { x: 19811, y: 671 },
        { x: 19711, y: 671 },
        { x: 19611, y: 671 },
        { x: 19711, y: 671 },
        { x: 19611, y: 671 },
        { x: 19511, y: 671 },
        { x: 19511, y: 571 },
        { x: 19511, y: 671 },
        { x: 19611, y: 671 },
        { x: 19711, y: 671 },
        { x: 19711, y: 571 },
        { x: 19611, y: 571 },
        { x: 19711, y: 571 },
        { x: 19811, y: 571 },
        { x: 19911, y: 571 },
        { x: 20011, y: 571 },
        { x: 20111, y: 571 },
        { x: 20211, y: 571 },
        { x: 20311, y: 571 },
        { x: 20211, y: 571 },
        { x: 20211, y: 471 },
        { x: 20311, y: 471 },
        { x: 20411, y: 471 },
        { x: 20311, y: 471 },
        { x: 20211, y: 471 },
        { x: 20111, y: 471 },
        { x: 20211, y: 471 },
        { x: 20111, y: 471 },
        { x: 20011, y: 471 },
        { x: 19911, y: 471 },
        { x: 19811, y: 471 },
        { x: 19711, y: 471 },
        { x: 19611, y: 471 },
        { x: 19711, y: 471 },
        { x: 19611, y: 471 },
        { x: 19511, y: 471 },
        { x: 19611, y: 471 },
        { x: 19711, y: 471 },
        { x: 19811, y: 471 },
        { x: 19911, y: 471 },
        { x: 20011, y: 471 },
        { x: 20111, y: 471 },
        { x: 20211, y: 471 },
        { x: 20311, y: 471 },
        { x: 20311, y: 571 },
        { x: 20411, y: 571 },
        { x: 20411, y: 471 },
        { x: 20411, y: 571 },
        { x: 20411, y: 671 },
        { x: 20411, y: 771 },
        { x: 21095, y: 720 },
        { x: 21095, y: 620 },
        { x: 21095, y: 520 },
        { x: 21095, y: 420 },
        { x: 21095, y: 320 },
        { x: 21095, y: 220 },
        { x: 21095, y: 120 },
        { x: 21095, y: 220 },
        { x: 21195, y: 220 },
        { x: 21195, y: 120 },
        { x: 21195, y: 220 },
        { x: 21295, y: 220 },
        { x: 21295, y: 120 },
        { x: 21395, y: 120 },
        { x: 21495, y: 120 },
        { x: 21595, y: 120 },
        { x: 21495, y: 120 },
        { x: 21595, y: 120 },
        { x: 21595, y: 220 },
        { x: 21595, y: 120 },
        { x: 21695, y: 120 },
        { x: 21595, y: 120 },
        { x: 21695, y: 120 },
        { x: 21695, y: 220 },
        { x: 21695, y: 320 },
        { x: 21795, y: 320 },
        { x: 21695, y: 320 },
        { x: 21695, y: 420 },
        { x: 21695, y: 520 },
        { x: 21695, y: 620 },
        { x: 21695, y: 720 },
        { x: 21695, y: 620 },
        { x: 21595, y: 620 },
        { x: 21495, y: 620 },
        { x: 21395, y: 620 },
        { x: 21295, y: 620 },
        { x: 21295, y: 720 },
        { x: 21195, y: 720 },
        { x: 21195, y: 820 },
        { x: 21195, y: 720 },
        { x: 21295, y: 720 },
        { x: 21395, y: 720 },
        { x: 21495, y: 720 },
        { x: 21495, y: 820 },
        { x: 21495, y: 720 },
        { x: 21595, y: 720 },
        { x: 21695, y: 720 },
        { x: 21595, y: 720 },
        { x: 21595, y: 820 },
        { x: 21595, y: 720 },
        { x: 21695, y: 720 },
        { x: 21695, y: 820 },
        { x: 21695, y: 720 },
        { x: 21595, y: 720 },
        { x: 21495, y: 720 },
        { x: 21395, y: 720 },
        { x: 21395, y: 820 },
        { x: 21395, y: 720 },
        { x: 21295, y: 720 },
        { x: 21295, y: 820 },
        { x: 21295, y: 720 },
        { x: 21195, y: 720 },
        { x: 21095, y: 720 },
        { x: 21095, y: 820 },
        { x: 21095, y: 720 },
        { x: 21195, y: 720 },
        { x: 21195, y: 620 },
        { x: 21195, y: 520 },
        { x: 21195, y: 420 },
        { x: 21195, y: 320 },
        { x: 21295, y: 320 },
        { x: 21295, y: 420 },
        { x: 21295, y: 520 },
        { x: 21395, y: 520 },
        { x: 21495, y: 520 },
        { x: 21595, y: 520 },
        { x: 21595, y: 420 },
        { x: 21495, y: 420 },
        { x: 21595, y: 420 },
        { x: 21495, y: 420 },
        { x: 21495, y: 320 },
        { x: 21395, y: 320 },
        { x: 21395, y: 220 },
        { x: 21495, y: 220 },
        { x: 21395, y: 220 },
        { x: 21495, y: 220 },
        { x: 21495, y: 320 },
        { x: 21495, y: 420 },
        { x: 21395, y: 420 },
        { x: 21395, y: 520 },
        { x: 21395, y: 420 },
        { x: 21495, y: 420 },
        { x: 21595, y: 420 },
        { x: 21595, y: 320 },
        { x: 21695, y: 320 },
        { x: 21595, y: 320 },
        { x: 21695, y: 320 },
        { x: 21695, y: 220 },
        { x: 21795, y: 220 },
        { x: 21695, y: 220 },
        { x: 21795, y: 220 },
        { x: 21795, y: 120 },
        { x: 21795, y: 220 },
        { x: 21695, y: 220 },
        { x: 21695, y: 320 },
        { x: 21795, y: 320 },
        { x: 21795, y: 420 },
        { x: 21695, y: 420 },
        { x: 21795, y: 420 },
        { x: 21795, y: 520 },
        { x: 21695, y: 520 },
        { x: 21795, y: 520 },
        { x: 21795, y: 620 },
        { x: 21695, y: 620 },
        { x: 21795, y: 620 },
        { x: 21795, y: 720 },
        { x: 21795, y: 620 },
        { x: 21795, y: 720 },
        { x: 21795, y: 820 },
        { x: 22589, y: 101 },
        { x: 22689, y: 101 },
        { x: 22589, y: 101 },
        { x: 22689, y: 101 },
        { x: 22689, y: 201 },
        { x: 22589, y: 201 },
        { x: 22689, y: 201 },
        { x: 22689, y: 301 },
        { x: 22589, y: 301 },
        { x: 22689, y: 301 },
        { x: 22689, y: 401 },
        { x: 22589, y: 401 },
        { x: 22689, y: 401 },
        { x: 22689, y: 501 },
        { x: 22589, y: 501 },
        { x: 22689, y: 501 },
        { x: 22589, y: 501 },
        { x: 22589, y: 601 },
        { x: 22689, y: 601 },
        { x: 22589, y: 601 },
        { x: 22689, y: 601 },
        { x: 22689, y: 701 },
        { x: 22589, y: 701 },
        
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
          image: "/src/assets/enemy_sprite.png"
        },
        {
          x: 1900,
          y: 820,
          width: 150,
          patrolRange: { left: -500, right: 400 }, // relative range for patrol
          speed: 1,
          image: "/src/assets/enemy_sprite.png"
        },
        {
          x: 3840,
          y: 600,
          width: 150,
          patrolRange: { left: -200, right: 100 }, // relative range for patrol
          speed: 1,
          image: "/src/assets/enemy_sprite.png"
        },
        {
          x: 6080,
          y: 820,
          width: 150,
          patrolRange: { left: -480, right: 500 }, // relative range for patrol
          speed: 1,
          image: "/src/assets/enemy_sprite.png"
        },
        {
          x: 8950,
          y: 820,
          width: 150,
          patrolRange: { left: -480, right: 500 }, // relative range for patrol
          speed: 1,
          image: "/src/assets/enemy_sprite.png"
        },
        {
          x: 10030,
          y: 290,
          width: 150,
          patrolRange: { left: -150, right: 100 }, // relative range for patrol
          speed: 1,
          image: "/src/assets/enemy_sprite.png"
        },
        {
          x: 17080,
          y: 820,
          width: 150,
          patrolRange: { left: -480, right: 500 }, // relative range for patrol
          speed: 1,
          image: "/src/assets/enemy_sprite.png"
        },
        {
          x: 20020,
          y: 490,
          width: 150,
          patrolRange: { left: -150, right: 100 }, // relative range for patrol
          speed: 1,
          image: "/src/assets/enemy_sprite.png"
        },
        {
          x: 21280,
          y: 820,
          width: 150,
          patrolRange: { left: -480, right: 500 }, // relative range for patrol
          speed: 1,
          image: "/src/assets/enemy_sprite.png"
        },
        {
          x: 23320,
          y: 820,
          width: 150,
          patrolRange: { left: -180, right: 200 }, // relative range for patrol
          speed: 1,
          image: "/src/assets/enemy_sprite.png"
        },
        {
          x: 23820,
          y: 820,
          width: 150,
          patrolRange: { left: -180, right: 200 }, // relative range for patrol
          speed: 1,
          image: "/src/assets/enemy_sprite.png"
        },
        
      ],
  
      // Mushrooms for bouncing
      mushrooms: [
        { x: 4200, y: 800, image: "/src/assets/mushroom_sprite.png", bounceStrength: 30 },
        { x: 6500, y: 800, image: "/src/assets/mushroom_sprite.png", bounceStrength: 30 },
        { x: 9400, y: 800, image: "/src/assets/mushroom_sprite.png", bounceStrength: 30 },
        { x: 10700, y: 680, image: "/src/assets/mushroom_sprite.png", bounceStrength: 30 },
        { x: 13400, y: 800, image: "/src/assets/mushroom_sprite.png", bounceStrength: 30 },
        { x: 13900, y: 320, image: "/src/assets/mushroom_sprite.png", bounceStrength: 30 },
        { x: 14850, y: 620, image: "/src/assets/mushroom_sprite.png", bounceStrength: 30 },
        { x: 16000, y: 620, image: "/src/assets/mushroom_sprite.png", bounceStrength: 30 },
        { x: 18940, y: 800, image: "/src/assets/mushroom_sprite.png", bounceStrength: 30 },
        { x: 21700, y: 800, image: "/src/assets/mushroom_sprite.png", bounceStrength: 30 },
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
  