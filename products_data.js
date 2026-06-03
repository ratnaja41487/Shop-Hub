const PRODUCTS_DATA = [
  {
    "id": 1,
    "name": "Jodhpuri Suit",
    "image": "Assets/by1.jpg",
    "price": 3999,
    "mrp": 5000,
    "category": "Boys Wear",
    "source_page": "boys.html",
    "hub_page": "kids.html",
    "sizes": [
      "XXS",
      "XS",
      "S"
    ],
    "description": "Crafted for young explorers \u2014 designed to keep up with every adventure. Comfortable fit, durable fabric, and stylish looks your boy will love."
  },
  {
    "id": 2,
    "name": "Denim Set",
    "image": "Assets/by10.jpg",
    "price": 2999,
    "mrp": 4100,
    "category": "Boys Wear",
    "source_page": "boys.html",
    "hub_page": "kids.html",
    "sizes": [
      "XXS",
      "XS",
      "S"
    ],
    "description": "Crafted for young explorers \u2014 designed to keep up with every adventure. Comfortable fit, durable fabric, and stylish looks your boy will love."
  },
  {
    "id": 3,
    "name": "Hoodie and Jeans",
    "image": "Assets/by11.jpg",
    "price": 1999,
    "mrp": 2500,
    "category": "Boys Wear",
    "source_page": "boys.html",
    "hub_page": "kids.html",
    "sizes": [
      "XXS",
      "XS",
      "S"
    ],
    "description": "Crafted for young explorers \u2014 designed to keep up with every adventure. Comfortable fit, durable fabric, and stylish looks your boy will love."
  },
  {
    "id": 4,
    "name": "Sherwani",
    "image": "Assets/by12.webp",
    "price": 3999,
    "mrp": 5100,
    "category": "Boys Wear",
    "source_page": "boys.html",
    "hub_page": "kids.html",
    "sizes": [
      "XXS",
      "XS",
      "S"
    ],
    "description": "Crafted for young explorers \u2014 designed to keep up with every adventure. Comfortable fit, durable fabric, and stylish looks your boy will love."
  },
  {
    "id": 5,
    "name": "Indo-Western Sherwani",
    "image": "Assets/by13.jpg",
    "price": 999,
    "mrp": 1300,
    "category": "Boys Wear",
    "source_page": "boys.html",
    "hub_page": "kids.html",
    "sizes": [
      "XXS",
      "XS",
      "S"
    ],
    "description": "Crafted for young explorers \u2014 designed to keep up with every adventure. Comfortable fit, durable fabric, and stylish looks your boy will love."
  },
  {
    "id": 6,
    "name": "Kurta with Nehru Jacket",
    "image": "Assets/by2.jpg",
    "price": 999,
    "mrp": 1300,
    "category": "Boys Wear",
    "source_page": "boys.html",
    "hub_page": "kids.html",
    "sizes": [
      "XXS",
      "XS",
      "S"
    ],
    "description": "Crafted for young explorers \u2014 designed to keep up with every adventure. Comfortable fit, durable fabric, and stylish looks your boy will love."
  },
  {
    "id": 7,
    "name": "Linen Waistcoat Set",
    "image": "Assets/by3.webp",
    "price": 999,
    "mrp": 1200,
    "category": "Boys Wear",
    "source_page": "boys.html",
    "hub_page": "kids.html",
    "sizes": [
      "XXS",
      "XS",
      "S"
    ],
    "description": "Crafted for young explorers \u2014 designed to keep up with every adventure. Comfortable fit, durable fabric, and stylish looks your boy will love."
  },
  {
    "id": 8,
    "name": "Double-Breasted Vest Suit",
    "image": "Assets/by4.jpg",
    "price": 999,
    "mrp": 1200,
    "category": "Boys Wear",
    "source_page": "boys.html",
    "hub_page": "kids.html",
    "sizes": [
      "XXS",
      "XS",
      "S"
    ],
    "description": "Crafted for young explorers \u2014 designed to keep up with every adventure. Comfortable fit, durable fabric, and stylish looks your boy will love."
  },
  {
    "id": 9,
    "name": "Suspender Set with Bowtie",
    "image": "Assets/by5.jpg",
    "price": 999,
    "mrp": 1300,
    "category": "Boys Wear",
    "source_page": "boys.html",
    "hub_page": "kids.html",
    "sizes": [
      "XXS",
      "XS",
      "S"
    ],
    "description": "Crafted for young explorers \u2014 designed to keep up with every adventure. Comfortable fit, durable fabric, and stylish looks your boy will love."
  },
  {
    "id": 10,
    "name": "Classic Suspender Outfit",
    "image": "Assets/by6.webp",
    "price": 999,
    "mrp": 1300,
    "category": "Boys Wear",
    "source_page": "boys.html",
    "hub_page": "kids.html",
    "sizes": [
      "XXS",
      "XS",
      "S"
    ],
    "description": "Crafted for young explorers \u2014 designed to keep up with every adventure. Comfortable fit, durable fabric, and stylish looks your boy will love."
  },
  {
    "id": 11,
    "name": "Casual Henley and Shorts",
    "image": "Assets/by7.webp",
    "price": 999,
    "mrp": 1300,
    "category": "Boys Wear",
    "source_page": "boys.html",
    "hub_page": "kids.html",
    "sizes": [
      "XXS",
      "XS",
      "S"
    ],
    "description": "Crafted for young explorers \u2014 designed to keep up with every adventure. Comfortable fit, durable fabric, and stylish looks your boy will love."
  },
  {
    "id": 12,
    "name": "Layered Preppy Look",
    "image": "Assets/by8.webp",
    "price": 999,
    "mrp": 1300,
    "category": "Boys Wear",
    "source_page": "boys.html",
    "hub_page": "kids.html",
    "sizes": [
      "XXS",
      "XS",
      "S"
    ],
    "description": "Crafted for young explorers \u2014 designed to keep up with every adventure. Comfortable fit, durable fabric, and stylish looks your boy will love."
  },
  {
    "id": 13,
    "name": "Green/White Nightgowns",
    "image": "Assets/g1.webp",
    "price": 999,
    "mrp": 1200,
    "category": "Casuals",
    "source_page": "casuals.html",
    "hub_page": "kids.html",
    "sizes": [
      "XXS",
      "XS",
      "S"
    ],
    "description": "Easy-going style for everyday moments. Soft, breathable fabrics that keep you comfortable from morning to night."
  },
  {
    "id": 14,
    "name": "Navy Blue Pajama Sets",
    "image": "Assets/b1.jpg",
    "price": 699,
    "mrp": 800,
    "category": "Casuals",
    "source_page": "casuals.html",
    "hub_page": "kids.html",
    "sizes": [
      "XXS",
      "XS",
      "S"
    ],
    "description": "Easy-going style for everyday moments. Soft, breathable fabrics that keep you comfortable from morning to night."
  },
  {
    "id": 15,
    "name": "Pink Nightgowns",
    "image": "Assets/g2.webp",
    "price": 999,
    "mrp": 1300,
    "category": "Casuals",
    "source_page": "casuals.html",
    "hub_page": "kids.html",
    "sizes": [
      "XXS",
      "XS",
      "S"
    ],
    "description": "Easy-going style for everyday moments. Soft, breathable fabrics that keep you comfortable from morning to night."
  },
  {
    "id": 16,
    "name": "Black Satin Set Pajama Sets",
    "image": "Assets/b2.webp",
    "price": 1000,
    "mrp": 1300,
    "category": "Casuals",
    "source_page": "casuals.html",
    "hub_page": "kids.html",
    "sizes": [
      "XXS",
      "XS",
      "S"
    ],
    "description": "Easy-going style for everyday moments. Soft, breathable fabrics that keep you comfortable from morning to night."
  },
  {
    "id": 17,
    "name": "Mint Green Gown",
    "image": "Assets/g3.jpg",
    "price": 999,
    "mrp": 1300,
    "category": "Casuals",
    "source_page": "casuals.html",
    "hub_page": "kids.html",
    "sizes": [
      "XXS",
      "XS",
      "S"
    ],
    "description": "Easy-going style for everyday moments. Soft, breathable fabrics that keep you comfortable from morning to night."
  },
  {
    "id": 18,
    "name": "Light Blue Striped Set",
    "image": "Assets/b3.jpg",
    "price": 999,
    "mrp": 1200,
    "category": "Casuals",
    "source_page": "casuals.html",
    "hub_page": "kids.html",
    "sizes": [
      "XXS",
      "XS",
      "S"
    ],
    "description": "Easy-going style for everyday moments. Soft, breathable fabrics that keep you comfortable from morning to night."
  },
  {
    "id": 19,
    "name": "White Graphic Gown",
    "image": "Assets/g4.webp",
    "price": 999,
    "mrp": 1300,
    "category": "Casuals",
    "source_page": "casuals.html",
    "hub_page": "kids.html",
    "sizes": [
      "XXS",
      "XS",
      "S"
    ],
    "description": "Easy-going style for everyday moments. Soft, breathable fabrics that keep you comfortable from morning to night."
  },
  {
    "id": 20,
    "name": "Grey Flannel-Style Set",
    "image": "Assets/b4.webp",
    "price": 999,
    "mrp": 1300,
    "category": "Casuals",
    "source_page": "casuals.html",
    "hub_page": "kids.html",
    "sizes": [
      "XXS",
      "XS",
      "S"
    ],
    "description": "Easy-going style for everyday moments. Soft, breathable fabrics that keep you comfortable from morning to night."
  },
  {
    "id": 21,
    "name": "Floral Bloomers Set",
    "image": "Assets/g6.webp",
    "price": 999,
    "mrp": 1200,
    "category": "Casuals",
    "source_page": "casuals.html",
    "hub_page": "kids.html",
    "sizes": [
      "XXS",
      "XS",
      "S"
    ],
    "description": "Easy-going style for everyday moments. Soft, breathable fabrics that keep you comfortable from morning to night."
  },
  {
    "id": 22,
    "name": "Navy Pinstripe Set",
    "image": "Assets/b5.webp",
    "price": 999,
    "mrp": 1300,
    "category": "Casuals",
    "source_page": "casuals.html",
    "hub_page": "kids.html",
    "sizes": [
      "XXS",
      "XS",
      "S"
    ],
    "description": "Easy-going style for everyday moments. Soft, breathable fabrics that keep you comfortable from morning to night."
  },
  {
    "id": 23,
    "name": "Seersucker/Striped Set",
    "image": "Assets/g5.jpg",
    "price": 999,
    "mrp": 1300,
    "category": "Casuals",
    "source_page": "casuals.html",
    "hub_page": "kids.html",
    "sizes": [
      "XXS",
      "XS",
      "S"
    ],
    "description": "Easy-going style for everyday moments. Soft, breathable fabrics that keep you comfortable from morning to night."
  },
  {
    "id": 24,
    "name": "Satin Empire Waist Gown",
    "image": "Assets/b6.jpg",
    "price": 999,
    "mrp": 1300,
    "category": "Casuals",
    "source_page": "casuals.html",
    "hub_page": "kids.html",
    "sizes": [
      "XXS",
      "XS",
      "S"
    ],
    "description": "Easy-going style for everyday moments. Soft, breathable fabrics that keep you comfortable from morning to night."
  },
  {
    "id": 25,
    "name": "Apple AirPods Pro",
    "image": "Assets/ear1.webp",
    "price": 5000,
    "mrp": 6500,
    "category": "Earpods",
    "source_page": "earpods.html",
    "hub_page": "Electronic.html",
     
    "description": "Immersive sound meets sleek design. Crystal-clear audio, long battery life, and a snug fit for all-day listening."
  },
  {
    "id": 26,
    "name": "Over-Ear Headphones",
    "image": "Assets/ear10.jpg",
    "price": 15000,
    "mrp": 20400,
    "category": "Earpods",
    "source_page": "earpods.html",
    "hub_page": "Electronic.html",
     
    "description": "Immersive sound meets sleek design. Crystal-clear audio, long battery life, and a snug fit for all-day listening."
  },
  {
    "id": 27,
    "name": "boAt Airdopes (Black)",
    "image": "Assets/ear11.webp",
    "price": 999,
    "mrp": 1300,
    "category": "Earpods",
    "source_page": "earpods.html",
    "hub_page": "Electronic.html",
    
    "description": "Immersive sound meets sleek design. Crystal-clear audio, long battery life, and a snug fit for all-day listening."
  },
  {
    "id": 28,
    "name": "boAt Airdopes (Light Blue)",
    "image": "Assets/ear12.jpg",
    "price": 1000,
    "mrp": 1200,
    "category": "Earpods",
    "source_page": "earpods.html",
    "hub_page": "Electronic.html",
     
    "description": "Immersive sound meets sleek design. Crystal-clear audio, long battery life, and a snug fit for all-day listening."
  },
  {
    "id": 29,
    "name": "Apple AirPods Pro (Alternative View)",
    "image": "Assets/ear2.webp",
    "price": 4999,
    "mrp": 6600,
    "category": "Earpods",
    "source_page": "earpods.html",
    "hub_page": "Electronic.html",
     
    "description": "Immersive sound meets sleek design. Crystal-clear audio, long battery life, and a snug fit for all-day listening."
  },
  {
    "id": 30,
    "name": "Boult Audio Z40 (Blue)",
    "image": "Assets/ear4.jpg",
    "price": 799,
    "mrp": 1000,
    "category": "Earpods",
    "source_page": "earpods.html",
    "hub_page": "Electronic.html",
     
    "description": "Immersive sound meets sleek design. Crystal-clear audio, long battery life, and a snug fit for all-day listening."
  },
  {
    "id": 31,
    "name": "Boult Audio Z40 (Black)",
    "image": "Assets/ear5.jpg",
    "price": 850,
    "mrp": 1000,
    "category": "Earpods",
    "source_page": "earpods.html",
    "hub_page": "Electronic.html",
     
    "description": "Immersive sound meets sleek design. Crystal-clear audio, long battery life, and a snug fit for all-day listening."
  },
  {
    "id": 32,
    "name": "Apple EarPods",
    "image": "Assets/ear6.jpg",
    "price": 600,
    "mrp": 700,
    "category": "Earpods",
    "source_page": "earpods.html",
    "hub_page": "Electronic.html",
     
    "description": "Immersive sound meets sleek design. Crystal-clear audio, long battery life, and a snug fit for all-day listening."
  },
  {
    "id": 33,
    "name": "Apple AirPods (1st or 2nd Generation)",
    "image": "Assets/ear7.jpg",
    "price": 5000,
    "mrp": 6600,
    "category": "Earpods",
    "source_page": "earpods.html",
    "hub_page": "Electronic.html",
    
    "description": "Immersive sound meets sleek design. Crystal-clear audio, long battery life, and a snug fit for all-day listening."
  },
  {
    "id": 34,
    "name": "Apple AirPods Max (Space Gray)",
    "image": "Assets/ear8.png",
    "price": 15000,
    "mrp": 19900,
    "category": "Earpods",
    "source_page": "earpods.html",
    "hub_page": "Electronic.html",
     
    "description": "Immersive sound meets sleek design. Crystal-clear audio, long battery life, and a snug fit for all-day listening."
  },
  {
    "id": 35,
    "name": "Apple AirPods Max (Silver/White)",
    "image": "Assets/ear9.jpg",
    "price": 10000,
    "mrp": 13300,
    "category": "Earpods",
    "source_page": "earpods.html",
    "hub_page": "Electronic.html",
     
    "description": "Immersive sound meets sleek design. Crystal-clear audio, long battery life, and a snug fit for all-day listening."
  },
  {
    "id": 36,
    "name": "Apple AirPods Pro",
    "image": "Assets/ear3.avif",
    "price": 5000,
    "mrp": 6400,
    "category": "Earpods",
    "source_page": "earpods.html",
    "hub_page": "Electronic.html",
     
    "description": "Immersive sound meets sleek design. Crystal-clear audio, long battery life, and a snug fit for all-day listening."
  },
  {
    "id": 37,
    "name": "Samsung 4-Door French Door Refrigerator (Patterned)",
    "image": "Assets/fd1.jpeg",
    "price": 100000,
    "mrp": 135200,
    "category": "Fridges",
    "source_page": "fridge.html",
    "hub_page": "Electronic.html",
     
    "description": "Keep your food fresh longer with advanced cooling technology. Energy-efficient and spacious, built for modern kitchens."
  },
  {
    "id": 38,
    "name": "Compact Mini Fridge",
    "image": "Assets/fd11.webp",
    "price": 99000,
    "mrp": 133200,
    "category": "Fridges",
    "source_page": "fridge.html",
    "hub_page": "Electronic.html",
     
    "description": "Keep your food fresh longer with advanced cooling technology. Energy-efficient and spacious, built for modern kitchens."
  },
  {
    "id": 39,
    "name": "Ultra-Compact Portable Mini Fridge",
    "image": "Assets/fd12.webp",
    "price": 89000,
    "mrp": 114000,
    "category": "Fridges",
    "source_page": "fridge.html",
    "hub_page": "Electronic.html",
     
    "description": "Keep your food fresh longer with advanced cooling technology. Energy-efficient and spacious, built for modern kitchens."
  },
  {
    "id": 40,
    "name": "Samsung 4-Door French Door Refrigerator (Black Stainless)",
    "image": "Assets/fd2.jpg",
    "price": 150000,
    "mrp": 197800,
    "category": "Fridges",
    "source_page": "fridge.html",
    "hub_page": "Electronic.html",
     
    "description": "Keep your food fresh longer with advanced cooling technology. Energy-efficient and spacious, built for modern kitchens."
  },
  {
    "id": 41,
    "name": "LG Side-by-Side Refrigerator",
    "image": "Assets/fd3.webp",
    "price": 125000,
    "mrp": 163300,
    "category": "Fridges",
    "source_page": "fridge.html",
    "hub_page": "Electronic.html",
     
    "description": "Keep your food fresh longer with advanced cooling technology. Energy-efficient and spacious, built for modern kitchens."
  },
  {
    "id": 42,
    "name": "Samsung French Door Refrigerator (Copper/Rose Gold)",
    "image": "Assets/fd4.jpg",
    "price": 65000,
    "mrp": 87400,
    "category": "Fridges",
    "source_page": "fridge.html",
    "hub_page": "Electronic.html",
     
    "description": "Keep your food fresh longer with advanced cooling technology. Energy-efficient and spacious, built for modern kitchens."
  },
  {
    "id": 43,
    "name": "Double Door Top-Freezer Refrigerator",
    "image": "Assets/fd5.webp",
    "price": 45000,
    "mrp": 56500,
    "category": "Fridges",
    "source_page": "fridge.html",
    "hub_page": "Electronic.html",
    
    "description": "Keep your food fresh longer with advanced cooling technology. Energy-efficient and spacious, built for modern kitchens."
  },
  {
    "id": 44,
    "name": "Samsung French Door Refrigerator (Stainless Steel)",
    "image": "Assets/fd6.jpg",
    "price": 55000,
    "mrp": 72100,
    "category": "Fridges",
    "source_page": "fridge.html",
    "hub_page": "Electronic.html",
     
    "description": "Keep your food fresh longer with advanced cooling technology. Energy-efficient and spacious, built for modern kitchens."
  },
  {
    "id": 45,
    "name": "Two-Door Mini Fridge",
    "image": "Assets/fd7.webp",
    "price": 45000,
    "mrp": 58000,
    "category": "Fridges",
    "source_page": "fridge.html",
    "hub_page": "Electronic.html",
     
    "description": "Keep your food fresh longer with advanced cooling technology. Energy-efficient and spacious, built for modern kitchens."
  },
  {
    "id": 46,
    "name": "Haier Single-Door Refrigerator",
    "image": "Assets/fd8.jpg",
    "price": 45000,
    "mrp": 62200,
    "category": "Fridges",
    "source_page": "fridge.html",
    "hub_page": "Electronic.html",
    
    "description": "Keep your food fresh longer with advanced cooling technology. Energy-efficient and spacious, built for modern kitchens."
  },
  {
    "id": 47,
    "name": "Samsung Single-Door Upright Freezer/Fridge",
    "image": "Assets/fd9.webp",
    "price": 85000,
    "mrp": 110700,
    "category": "Fridges",
    "source_page": "fridge.html",
    "hub_page": "Electronic.html",
     
    "description": "Keep your food fresh longer with advanced cooling technology. Energy-efficient and spacious, built for modern kitchens."
  },
  {
    "id": 48,
    "name": "Samsung Side-by-Side Refrigerator",
    "image": "Assets/fd10.avif",
    "price": 140000,
    "mrp": 186500,
    "category": "Fridges",
    "source_page": "fridge.html",
    "hub_page": "Electronic.html",
     
    "description": "Keep your food fresh longer with advanced cooling technology. Energy-efficient and spacious, built for modern kitchens."
  },
  {
    "id": 49,
    "name": "Tulle Party Dress",
    "image": "Assets/gd1.webp",
    "price": 2999,
    "mrp": 3700,
    "category": "Girls Wear",
    "source_page": "girls.html",
    "hub_page": "kids.html",
    "sizes": [
      "XXS",
      "XS",
      "S"
    ],
    "description": "Bright, playful, and perfectly sized for little fashionistas. Made to move and made to shine."
  },
  {
    "id": 50,
    "name": "Gingham Sundress",
    "image": "Assets/gd10.jpg",
    "price": 1999,
    "mrp": 2600,
    "category": "Girls Wear",
    "source_page": "girls.html",
    "hub_page": "kids.html",
    "sizes": [
      "XXS",
      "XS",
      "S"
    ],
    "description": "Bright, playful, and perfectly sized for little fashionistas. Made to move and made to shine."
  },
  {
    "id": 51,
    "name": "Bodycon Pearl Dress",
    "image": "Assets/gd11.webp",
    "price": 3999,
    "mrp": 5100,
    "category": "Girls Wear",
    "source_page": "girls.html",
    "hub_page": "kids.html",
    "sizes": [
      "XXS",
      "XS",
      "S"
    ],
    "description": "Bright, playful, and perfectly sized for little fashionistas. Made to move and made to shine."
  },
  {
    "id": 52,
    "name": "Skirt Set",
    "image": "Assets/gd12.webp",
    "price": 2999,
    "mrp": 4100,
    "category": "Girls Wear",
    "source_page": "girls.html",
    "hub_page": "kids.html",
    "sizes": [
      "XXS",
      "XS",
      "S"
    ],
    "description": "Bright, playful, and perfectly sized for little fashionistas. Made to move and made to shine."
  },
  {
    "id": 53,
    "name": "Lace Communion Gown",
    "image": "Assets/gd2.webp",
    "price": 999,
    "mrp": 1300,
    "category": "Girls Wear",
    "source_page": "girls.html",
    "hub_page": "kids.html",
    "sizes": [
      "XXS",
      "XS",
      "S"
    ],
    "description": "Bright, playful, and perfectly sized for little fashionistas. Made to move and made to shine."
  },
  {
    "id": 54,
    "name": "Sequin Ballgown",
    "image": "Assets/gd3.jpeg",
    "price": 999,
    "mrp": 1300,
    "category": "Girls Wear",
    "source_page": "girls.html",
    "hub_page": "kids.html",
    "sizes": [
      "XXS",
      "XS",
      "S"
    ],
    "description": "Bright, playful, and perfectly sized for little fashionistas. Made to move and made to shine."
  },
  {
    "id": 55,
    "name": "High-Low Sequin Dress",
    "image": "Assets/gd4.webp",
    "price": 999,
    "mrp": 1200,
    "category": "Girls Wear",
    "source_page": "girls.html",
    "hub_page": "kids.html",
    "sizes": [
      "XXS",
      "XS",
      "S"
    ],
    "description": "Bright, playful, and perfectly sized for little fashionistas. Made to move and made to shine."
  },
  {
    "id": 56,
    "name": "Shimmer Party Dress",
    "image": "Assets/gd5.webp",
    "price": 999,
    "mrp": 1300,
    "category": "Girls Wear",
    "source_page": "girls.html",
    "hub_page": "kids.html",
    "sizes": [
      "XXS",
      "XS",
      "S"
    ],
    "description": "Bright, playful, and perfectly sized for little fashionistas. Made to move and made to shine."
  },
  {
    "id": 57,
    "name": "Knit Dress",
    "image": "Assets/gd6.jpg",
    "price": 999,
    "mrp": 1200,
    "category": "Girls Wear",
    "source_page": "girls.html",
    "hub_page": "kids.html",
    "sizes": [
      "XXS",
      "XS",
      "S"
    ],
    "description": "Bright, playful, and perfectly sized for little fashionistas. Made to move and made to shine."
  },
  {
    "id": 58,
    "name": "Floral Sundress",
    "image": "Assets/gd7.webp",
    "price": 999,
    "mrp": 1300,
    "category": "Girls Wear",
    "source_page": "girls.html",
    "hub_page": "kids.html",
    "sizes": [
      "XXS",
      "XS",
      "S"
    ],
    "description": "Bright, playful, and perfectly sized for little fashionistas. Made to move and made to shine."
  },
  {
    "id": 59,
    "name": "Skirt Set",
    "image": "Assets/gd8.png",
    "price": 999,
    "mrp": 1200,
    "category": "Girls Wear",
    "source_page": "girls.html",
    "hub_page": "kids.html",
    "sizes": [
      "XXS",
      "XS",
      "S"
    ],
    "description": "Bright, playful, and perfectly sized for little fashionistas. Made to move and made to shine."
  },
  {
    "id": 60,
    "name": "Gingham Jumpsuit",
    "image": "Assets/gd9.jpg",
    "price": 999,
    "mrp": 1200,
    "category": "Girls Wear",
    "source_page": "girls.html",
    "hub_page": "kids.html",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Bright, playful, and perfectly sized for little fashionistas. Made to move and made to shine."
  },
  {
    "id": 61,
    "name": "Statement Set",
    "image": "Assets/jewellery1.jpg",
    "price": 6999,
    "mrp": 9200,
    "category": "Jewellery",
    "source_page": "Jewellery.html",
    "hub_page": "women.html",
    
    "description": "Elevate every look with handcrafted elegance. Each piece is designed to complement your unique style."
  },
  {
    "id": 62,
    "name": "Rings",
    "image": "Assets/jewellery_ring.jpg",
    "price": 999,
    "mrp": 1300,
    "category": "Jewellery",
    "source_page": "Jewellery.html",
    "hub_page": "women.html",
    "sizes": [
      "3",
      "3.5",
      "4",
      "4.5"
    ],
    "description": "Elevate every look with handcrafted elegance. Each piece is designed to complement your unique style."
  },
  {
    "id": 63,
    "name": "Chandbalis",
    "image": "Assets/jewellery11.webp",
    "price": 499,
    "mrp": 600,
    "category": "Jewellery",
    "source_page": "Jewellery.html",
    "hub_page": "women.html",
    
    "description": "Elevate every look with handcrafted elegance. Each piece is designed to complement your unique style."
  },
  {
    "id": 64,
    "name": "Layered Necklace",
    "image": "Assets/jewellery2.jpg",
    "price": 5999,
    "mrp": 7900,
    "category": "Jewellery",
    "source_page": "Jewellery.html",
    "hub_page": "women.html",
    
    "description": "Elevate every look with handcrafted elegance. Each piece is designed to complement your unique style."
  },
  {
    "id": 65,
    "name": "Temple Set",
    "image": "Assets/jewellery3.webp",
    "price": 7999,
    "mrp": 10400,
    "category": "Jewellery",
    "source_page": "Jewellery.html",
    "hub_page": "women.html",
    
    "description": "Elevate every look with handcrafted elegance. Each piece is designed to complement your unique style."
  },
  {
    "id": 66,
    "name": "Choker",
    "image": "Assets/jewellery4.webp",
    "price": 999,
    "mrp": 1200,
    "category": "Jewellery",
    "source_page": "Jewellery.html",
    "hub_page": "women.html",
    
    "description": "Elevate every look with handcrafted elegance. Each piece is designed to complement your unique style."
  },
  {
    "id": 67,
    "name": "Ear Chains",
    "image": "Assets/jewellery10.webp",
    "price": 699,
    "mrp": 800,
    "category": "Jewellery",
    "source_page": "Jewellery.html",
    "hub_page": "women.html",
    
    "description": "Elevate every look with handcrafted elegance. Each piece is designed to complement your unique style."
  },
  {
    "id": 68,
    "name": "Pendant",
    "image": "Assets/jewellery6.jpg",
    "price": 399,
    "mrp": 500,
    "category": "Jewellery",
    "source_page": "Jewellery.html",
    "hub_page": "women.html",
    
    "description": "Elevate every look with handcrafted elegance. Each piece is designed to complement your unique style."
  },
  {
    "id": 69,
    "name": "Hoops",
    "image": "Assets/jewellery7.jpeg",
    "price": 399,
    "mrp": 500,
    "category": "Jewellery",
    "source_page": "Jewellery.html",
    "hub_page": "women.html",
   
    "description": "Elevate every look with handcrafted elegance. Each piece is designed to complement your unique style."
  },
  {
    "id": 70,
    "name": "Jhumkas",
    "image": "Assets/jewellery9.jpg",
    "price": 499,
    "mrp": 600,
    "category": "Jewellery",
    "source_page": "Jewellery.html",
    "hub_page": "women.html",
   
    "description": "Elevate every look with handcrafted elegance. Each piece is designed to complement your unique style."
  },
  {
    "id": 71,
    "name": "Chandbalis",
    "image": "Assets/jewellery10.avif",
    "price": 599,
    "mrp": 700,
    "category": "Jewellery",
    "source_page": "Jewellery.html",
    "hub_page": "women.html",
   
    "description": "Elevate every look with handcrafted elegance. Each piece is designed to complement your unique style."
  },
  {
    "id": 72,
    "name": "Jhumkas",
    "image": "Assets/jewellery12.avif",
    "price": 699,
    "mrp": 800,
    "category": "Jewellery",
    "source_page": "Jewellery.html",
    "hub_page": "women.html",
    
    "description": "Elevate every look with handcrafted elegance. Each piece is designed to complement your unique style."
  },
  {
    "id": 73,
    "name": "MacBook Air (M2/M3 chip)",
    "image": "Assets/laptop1.webp",
    "price": 100000,
    "mrp": 129100,
    "category": "Laptops",
    "source_page": "laptop.html",
    "hub_page": "Electronic.html",
   
    "description": "Powerful performance meets ultra-portable design. Built for work, creativity, and everything in between."
  },
  {
    "id": 74,
    "name": "MacBook Air (Silver/Starlight)",
    "image": "Assets/laptop1.webp",
    "price": 150000,
    "mrp": 206800,
    "category": "Laptops",
    "source_page": "laptop.html",
    "hub_page": "Electronic.html",
    
    "description": "Powerful performance meets ultra-portable design. Built for work, creativity, and everything in between."
  },
  {
    "id": 75,
    "name": "Lenovo Ideapad/V-Series",
    "image": "Assets/laptop11.webp",
    "price": 99000,
    "mrp": 130400,
    "category": "Laptops",
    "source_page": "laptop.html",
    "hub_page": "Electronic.html",
    
    "description": "Powerful performance meets ultra-portable design. Built for work, creativity, and everything in between."
  },
  {
    "id": 76,
    "name": "ASUS Zenbook Flip",
    "image": "Assets/laptop12.png",
    "price": 120000,
    "mrp": 156600,
    "category": "Laptops",
    "source_page": "laptop.html",
    "hub_page": "Electronic.html",
   
    "description": "Powerful performance meets ultra-portable design. Built for work, creativity, and everything in between."
  },
  {
    "id": 77,
    "name": "HP Laptop (likely Pavilion or 15s)",
    "image": "Assets/laptop2.jpg",
    "price": 75000,
    "mrp": 102700,
    "category": "Laptops",
    "source_page": "laptop.html",
    "hub_page": "Electronic.html",
    
    "description": "Powerful performance meets ultra-portable design. Built for work, creativity, and everything in between."
  },
  {
    "id": 78,
    "name": "Dell XPS 13/15",
    "image": "Assets/laptop3.jpg",
    "price": 175000,
    "mrp": 240100,
    "category": "Laptops",
    "source_page": "laptop.html",
    "hub_page": "Electronic.html",
   
    "description": "Powerful performance meets ultra-portable design. Built for work, creativity, and everything in between."
  },
  {
    "id": 79,
    "name": "ASUS ROG Zephyrus",
    "image": "Assets/laptop4.webp",
    "price": 145000,
    "mrp": 184400,
    "category": "Laptops",
    "source_page": "laptop.html",
    "hub_page": "Electronic.html",
   
    "description": "Powerful performance meets ultra-portable design. Built for work, creativity, and everything in between."
  },
  {
    "id": 80,
    "name": "MacBook Air (M2/M3 chip)",
    "image": "Assets/laptop5.jpg",
    "price": 185000,
    "mrp": 238700,
    "category": "Laptops",
    "source_page": "laptop.html",
    "hub_page": "Electronic.html",
    
    "description": "Powerful performance meets ultra-portable design. Built for work, creativity, and everything in between."
  },
  {
    "id": 81,
    "name": "Acer Aspire 3 / Aspire 5",
    "image": "Assets/laptop6.webp",
    "price": 75000,
    "mrp": 99400,
    "category": "Laptops",
    "source_page": "laptop.html",
    "hub_page": "Electronic.html",
    
    "description": "Powerful performance meets ultra-portable design. Built for work, creativity, and everything in between."
  },
  {
    "id": 82,
    "name": "Dell G15 Gaming",
    "image": "Assets/laptop7.jpg",
    "price": 99000,
    "mrp": 125800,
    "category": "Laptops",
    "source_page": "laptop.html",
    "hub_page": "Electronic.html",
    
    "description": "Powerful performance meets ultra-portable design. Built for work, creativity, and everything in between."
  },
  {
    "id": 83,
    "name": "ASUS TUF Gaming (2024/2025 model)",
    "image": "Assets/laptop8.jpg",
    "price": 85000,
    "mrp": 112500,
    "category": "Laptops",
    "source_page": "laptop.html",
    "hub_page": "Electronic.html",
   
    "description": "Powerful performance meets ultra-portable design. Built for work, creativity, and everything in between."
  },
  {
    "id": 84,
    "name": "HP OMEN 16",
    "image": "Assets/laptop9.webp",
    "price": 140000,
    "mrp": 190300,
    "category": "Laptops",
    "source_page": "laptop.html",
    "hub_page": "Electronic.html",
    
    "description": "Powerful performance meets ultra-portable design. Built for work, creativity, and everything in between."
  },
  {
    "id": 85,
    "name": "iPhone 15 Pro / 16 Pro",
    "image": "Assets/mob1.jpg",
    "price": 100000,
    "mrp": 127900,
    "category": "Mobiles",
    "source_page": "mobile.html",
    "hub_page": "Electronic.html",
   
    "description": "Stay connected with cutting-edge technology. Fast processor, stunning display, and a camera that captures every moment."
  },
  {
    "id": 86,
    "name": "Oppo Find X7 Ultra",
    "image": "Assets/mob11.jpg",
    "price": 99000,
    "mrp": 135500,
    "category": "Mobiles",
    "source_page": "mobile.html",
    "hub_page": "Electronic.html",
    
    "description": "Stay connected with cutting-edge technology. Fast processor, stunning display, and a camera that captures every moment."
  },
  {
    "id": 87,
    "name": "Oppo Reno 12 Pro",
    "image": "Assets/mob19.webp",
    "price": 89000,
    "mrp": 113100,
    "category": "Mobiles",
    "source_page": "mobile.html",
    "hub_page": "Electronic.html",
   
    "description": "Stay connected with cutting-edge technology. Fast processor, stunning display, and a camera that captures every moment."
  },
  {
    "id": 88,
    "name": "iPhone 15/16 (Pro Max Concept/Case)",
    "image": "Assets/mob2.webp",
    "price": 150000,
    "mrp": 196400,
    "category": "Mobiles",
    "source_page": "mobile.html",
    "hub_page": "Electronic.html",
    
    "description": "Stay connected with cutting-edge technology. Fast processor, stunning display, and a camera that captures every moment."
  },
  {
    "id": 89,
    "name": "iPhone 15 / 15 Plus",
    "image": "Assets/mob3.webp",
    "price": 125000,
    "mrp": 157700,
    "category": "Mobiles",
    "source_page": "mobile.html",
    "hub_page": "Electronic.html",
  
    "description": "Stay connected with cutting-edge technology. Fast processor, stunning display, and a camera that captures every moment."
  },
  {
    "id": 90,
    "name": "Samsung Galaxy S23 Ultra",
    "image": "Assets/mob4.webp",
    "price": 65000,
    "mrp": 83200,
    "category": "Mobiles",
    "source_page": "mobile.html",
    "hub_page": "Electronic.html",
    
    "description": "Stay connected with cutting-edge technology. Fast processor, stunning display, and a camera that captures every moment."
  },
  {
    "id": 91,
    "name": "Redmi 12 5G",
    "image": "Assets/mob5.jpg",
    "price": 45000,
    "mrp": 56800,
    "category": "Mobiles",
    "source_page": "mobile.html",
    "hub_page": "Electronic.html",
     
    "description": "Stay connected with cutting-edge technology. Fast processor, stunning display, and a camera that captures every moment."
  },
  {
    "id": 92,
    "name": "Realme 12 Pro",
    "image": "Assets/mob6.jpg",
    "price": 55000,
    "mrp": 72200,
    "category": "Mobiles",
    "source_page": "mobile.html",
    "hub_page": "Electronic.html",
    
    "description": "Stay connected with cutting-edge technology. Fast processor, stunning display, and a camera that captures every moment."
  },
  {
    "id": 93,
    "name": "Realme 11 Pro+ / 12 Pro+",
    "image": "Assets/mob7.jpeg",
    "price": 45000,
    "mrp": 62400,
    "category": "Mobiles",
    "source_page": "mobile.html",
    "hub_page": "Electronic.html",
     
    "description": "Stay connected with cutting-edge technology. Fast processor, stunning display, and a camera that captures every moment."
  },
  {
    "id": 94,
    "name": "Realme C55 / C67",
    "image": "Assets/mob8.webp",
    "price": 45000,
    "mrp": 59900,
    "category": "Mobiles",
    "source_page": "mobile.html",
    "hub_page": "Electronic.html",
     
    "description": "Stay connected with cutting-edge technology. Fast processor, stunning display, and a camera that captures every moment."
  },
  {
    "id": 95,
    "name": "Oppo F1s / A-Series",
    "image": "Assets/mob9.webp",
    "price": 85000,
    "mrp": 115900,
    "category": "Mobiles",
    "source_page": "mobile.html",
    "hub_page": "Electronic.html",
     
    "description": "Stay connected with cutting-edge technology. Fast processor, stunning display, and a camera that captures every moment."
  },
  {
    "id": 96,
    "name": "Google Pixel 8 Pro",
    "image": "Assets/mob12.avif",
    "price": 140000,
    "mrp": 182700,
    "category": "Mobiles",
    "source_page": "mobile.html",
    "hub_page": "Electronic.html",
    
    "description": "Stay connected with cutting-edge technology. Fast processor, stunning display, and a camera that captures every moment."
  },
  {
    "id": 97,
    "name": "Light Wash Utility Jeans",
    "image": "Assets/pant9.jpg",
    "price": 999,
    "mrp": 1200,
    "category": "Pants",
    "source_page": "pant.html",
    "hub_page": "Men.html",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "The perfect fit for every occasion \u2014 tailored for comfort, styled for confidence."
  },
  {
    "id": 98,
    "name": "Slate Grey Dress Slacks",
    "image": "Assets/pant1.webp",
    "price": 899,
    "mrp": 1100,
    "category": "Pants",
    "source_page": "pant.html",
    "hub_page": "Men.html",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "The perfect fit for every occasion \u2014 tailored for comfort, styled for confidence."
  },
  {
    "id": 99,
    "name": "Navy Textured Chinos",
    "image": "Assets/pant10.webp",
    "price": 799,
    "mrp": 1000,
    "category": "Pants",
    "source_page": "pant.html",
    "hub_page": "Men.html",
    "sizes": [
      "S",
      "M"
    ],
    "description": "The perfect fit for every occasion \u2014 tailored for comfort, styled for confidence."
  },
  {
    "id": 100,
    "name": "Distressed Light Blue Joggers",
    "image": "Assets/pant11.jpg",
    "price": 999,
    "mrp": 1200,
    "category": "Pants",
    "source_page": "pant.html",
    "hub_page": "Men.html",
    "sizes": [
      "S",
      "M"
    ],
    "description": "The perfect fit for every occasion \u2014 tailored for comfort, styled for confidence."
  },
  {
    "id": 101,
    "name": "Faded Black Distressed Jeans",
    "image": "Assets/pant12.jpg",
    "price": 999,
    "mrp": 1300,
    "category": "Pants",
    "source_page": "pant.html",
    "hub_page": "Men.html",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "The perfect fit for every occasion \u2014 tailored for comfort, styled for confidence."
  },
  {
    "id": 102,
    "name": "Medium Grey Slim-Fit Trousers",
    "image": "Assets/pant2.webp",
    "price": 999,
    "mrp": 1200,
    "category": "Pants",
    "source_page": "pant.html",
    "hub_page": "Men.html",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "The perfect fit for every occasion \u2014 tailored for comfort, styled for confidence."
  },
  {
    "id": 103,
    "name": "White Casual Slacks",
    "image": "Assets/pant3.webp",
    "price": 999,
    "mrp": 1300,
    "category": "Pants",
    "source_page": "pant.html",
    "hub_page": "Men.html",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "The perfect fit for every occasion \u2014 tailored for comfort, styled for confidence."
  },
  {
    "id": 104,
    "name": "Brown High-Waisted Gurkha Trousers",
    "image": "Assets/pant4.avif",
    "price": 999,
    "mrp": 1300,
    "category": "Pants",
    "source_page": "pant.html",
    "hub_page": "Men.html",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "The perfect fit for every occasion \u2014 tailored for comfort, styled for confidence."
  },
  {
    "id": 105,
    "name": "Black Cargo Pants",
    "image": "Assets/pant5.webp",
    "price": 999,
    "mrp": 1300,
    "category": "Pants",
    "source_page": "pant.html",
    "hub_page": "Men.html",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "The perfect fit for every occasion \u2014 tailored for comfort, styled for confidence."
  },
  {
    "id": 106,
    "name": "Cream Sporty Joggers",
    "image": "Assets/pant6.jpeg",
    "price": 999,
    "mrp": 1300,
    "category": "Pants",
    "source_page": "pant.html",
    "hub_page": "Men.html",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "The perfect fit for every occasion \u2014 tailored for comfort, styled for confidence."
  },
  {
    "id": 107,
    "name": "Classic Black Pleated Trousers",
    "image": "Assets/pant7.webp",
    "price": 999,
    "mrp": 1200,
    "category": "Pants",
    "source_page": "pant.html",
    "hub_page": "Men.html",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "The perfect fit for every occasion \u2014 tailored for comfort, styled for confidence."
  },
  {
    "id": 108,
    "name": "Traditional White Dhoti/Pants",
    "image": "Assets/pant8.6630_12-01-2024-15-48_650x900",
    "price": 999,
    "mrp": 1200,
    "category": "Pants",
    "source_page": "pant.html",
    "hub_page": "Men.html",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "The perfect fit for every occasion \u2014 tailored for comfort, styled for confidence."
  },
  {
    "id": 109,
    "name": "Tan Cross-Strap Sandals",
    "image": "Assets/sandles1.webp",
    "price": 699,
    "mrp": 900,
    "category": "Sandals",
    "source_page": "Sandles.html",
    "hub_page": "women.html",
    "sizes": [
      "6",
      "7",
      "8",
      "9"
    ],
    "description": "Step out in style and comfort. Lightweight, breathable, and built for all-day wear."
  },
  {
    "id": 110,
    "name": "Cognac Block-Heel Strappy Sandals",
    "image": "Assets/sandles10.jpg",
    "price": 2999,
    "mrp": 4100,
    "category": "Sandals",
    "source_page": "Sandles.html",
    "hub_page": "women.html",
    "sizes": [
      "6",
      "7",
      "8",
      "9"
    ],
    "description": "Step out in style and comfort. Lightweight, breathable, and built for all-day wear."
  },
  {
    "id": 111,
    "name": "Burgundy Pointed-Toe Slingbacks",
    "image": "Assets/sandles11.jpg",
    "price": 3999,
    "mrp": 5400,
    "category": "Sandals",
    "source_page": "Sandles.html",
    "hub_page": "women.html",
    "sizes": [
      "6",
      "7",
      "8",
      "9"
    ],
    "description": "Step out in style and comfort. Lightweight, breathable, and built for all-day wear."
  },
  {
    "id": 112,
    "name": "Brown Perforated Slip-On Flats",
    "image": "Assets/sandles12.png",
    "price": 1999,
    "mrp": 2600,
    "category": "Sandals",
    "source_page": "Sandles.html",
    "hub_page": "women.html",
    "sizes": [
      "6",
      "7",
      "8",
      "9"
    ],
    "description": "Step out in style and comfort. Lightweight, breathable, and built for all-day wear."
  },
  {
    "id": 113,
    "name": "Brown Gladiator Sandals",
    "image": "Assets/sandles2.jpg",
    "price": 999,
    "mrp": 1200,
    "category": "Sandals",
    "source_page": "Sandles.html",
    "hub_page": "women.html",
    "sizes": [
      "6",
      "7",
      "8",
      "9"
    ],
    "description": "Step out in style and comfort. Lightweight, breathable, and built for all-day wear."
  },
  {
    "id": 114,
    "name": "Blue Eyelet Embroidered Slides",
    "image": "Assets/sandles3.webp",
    "price": 999,
    "mrp": 1200,
    "category": "Sandals",
    "source_page": "Sandles.html",
    "hub_page": "women.html",
    "sizes": [
      "6",
      "7",
      "8",
      "9"
    ],
    "description": "Step out in style and comfort. Lightweight, breathable, and built for all-day wear."
  },
  {
    "id": 115,
    "name": "Black Ankle-Cuff Stiletto Sandals",
    "image": "Assets/sandles4.webp",
    "price": 999,
    "mrp": 1300,
    "category": "Sandals",
    "source_page": "Sandles.html",
    "hub_page": "women.html",
    "sizes": [
      "6",
      "7",
      "8",
      "9"
    ],
    "description": "Step out in style and comfort. Lightweight, breathable, and built for all-day wear."
  },
  {
    "id": 116,
    "name": "Tan Leather Wingtip Brogues",
    "image": "Assets/sandles5.webp",
    "price": 999,
    "mrp": 1300,
    "category": "Sandals",
    "source_page": "Sandles.html",
    "hub_page": "women.html",
    "sizes": [
      "6",
      "7",
      "8",
      "9"
    ],
    "description": "Step out in style and comfort. Lightweight, breathable, and built for all-day wear."
  },
  {
    "id": 117,
    "name": "Woven Straw Block Heels",
    "image": "Assets/sandles7.jpeg",
    "price": 999,
    "mrp": 1200,
    "category": "Sandals",
    "source_page": "Sandles.html",
    "hub_page": "women.html",
    "sizes": [
      "6",
      "7",
      "8",
      "9"
    ],
    "description": "Step out in style and comfort. Lightweight, breathable, and built for all-day wear."
  },
  {
    "id": 118,
    "name": "Beige Strappy Square-Toe Flats",
    "image": "Assets/sandles8.jpg",
    "price": 999,
    "mrp": 1300,
    "category": "Sandals",
    "source_page": "Sandles.html",
    "hub_page": "women.html",
    "sizes": [
      "6",
      "7",
      "8",
      "9"
    ],
    "description": "Step out in style and comfort. Lightweight, breathable, and built for all-day wear."
  },
  {
    "id": 119,
    "name": "Tan Cut-Out Stiletto Sandals",
    "image": "Assets/sandles9.webp",
    "price": 999,
    "mrp": 1300,
    "category": "Sandals",
    "source_page": "Sandles.html",
    "hub_page": "women.html",
    "sizes": [
      "6",
      "7",
      "8",
      "9"
    ],
    "description": "Step out in style and comfort. Lightweight, breathable, and built for all-day wear."
  },
  {
    "id": 120,
    "name": "White Performance Athletic Sneakers",
    "image": "Assets/sandles13.avif",
    "price": 999,
    "mrp": 1300,
    "category": "Sandals",
    "source_page": "Sandles.html",
    "hub_page": "women.html",
    "sizes": [
      "6",
      "7",
      "8",
      "9"
    ],
    "description": "Step out in style and comfort. Lightweight, breathable, and built for all-day wear."
  },
  {
    "id": 121,
    "name": "Beige Shirt",
    "image": "Assets/shirt1.webp",
    "price": 799,
    "mrp": 1000,
    "category": "Shirts",
    "source_page": "shirts.html",
    "hub_page": "Men.html",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Classic cuts and premium fabrics. A wardrobe staple that takes you from casual to formal with ease."
  },
  {
    "id": 122,
    "name": "Classic White Shirt",
    "image": "Assets/shirt10.webp",
    "price": 699,
    "mrp": 900,
    "category": "Shirts",
    "source_page": "shirts.html",
    "hub_page": "Men.html",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Classic cuts and premium fabrics. A wardrobe staple that takes you from casual to formal with ease."
  },
  {
    "id": 123,
    "name": "Black with Detail Party Shirt",
    "image": "Assets/shirt11.webp",
    "price": 999,
    "mrp": 1200,
    "category": "Shirts",
    "source_page": "shirts.html",
    "hub_page": "Men.html",
    "sizes": [
      "S",
      "M"
    ],
    "description": "Classic cuts and premium fabrics. A wardrobe staple that takes you from casual to formal with ease."
  },
  {
    "id": 124,
    "name": "Black and White Flannel",
    "image": "Assets/shirt12.webp",
    "price": 599,
    "mrp": 800,
    "category": "Shirts",
    "source_page": "shirts.html",
    "hub_page": "Men.html",
    "sizes": [
      "S",
      "M"
    ],
    "description": "Classic cuts and premium fabrics. A wardrobe staple that takes you from casual to formal with ease."
  },
  {
    "id": 125,
    "name": "Blue Striped Dress Shirt",
    "image": "Assets/shirt6.jpg",
    "price": 999,
    "mrp": 1300,
    "category": "Shirts",
    "source_page": "shirts.html",
    "hub_page": "Men.html",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Classic cuts and premium fabrics. A wardrobe staple that takes you from casual to formal with ease."
  },
  {
    "id": 126,
    "name": "White Linen/Cotton Overshirt",
    "image": "Assets/shirt4.jpg",
    "price": 999,
    "mrp": 1300,
    "category": "Shirts",
    "source_page": "shirts.html",
    "hub_page": "Men.html",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Classic cuts and premium fabrics. A wardrobe staple that takes you from casual to formal with ease."
  },
  {
    "id": 127,
    "name": "Pastel Pink Summer Shirt",
    "image": "Assets/shirt8.webp",
    "price": 999,
    "mrp": 1200,
    "category": "Shirts",
    "source_page": "shirts.html",
    "hub_page": "Men.html",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Classic cuts and premium fabrics. A wardrobe staple that takes you from casual to formal with ease."
  },
  {
    "id": 128,
    "name": "Mustard & Cream Knit Polo",
    "image": "Assets/shirt9.jpg",
    "price": 999,
    "mrp": 1300,
    "category": "Shirts",
    "source_page": "shirts.html",
    "hub_page": "Men.html",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Classic cuts and premium fabrics. A wardrobe staple that takes you from casual to formal with ease."
  },
  {
    "id": 129,
    "name": "Batik Print Panel Shirt",
    "image": "Assets/shirt13.webp",
    "price": 999,
    "mrp": 1300,
    "category": "Shirts",
    "source_page": "shirts.html",
    "hub_page": "Men.html",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Classic cuts and premium fabrics. A wardrobe staple that takes you from casual to formal with ease."
  },
  {
    "id": 130,
    "name": "Midnight Navy Formal Shirt",
    "image": "Assets/shirt2.jpg",
    "price": 999,
    "mrp": 1300,
    "category": "Shirts",
    "source_page": "shirts.html",
    "hub_page": "Men.html",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Classic cuts and premium fabrics. A wardrobe staple that takes you from casual to formal with ease."
  },
  {
    "id": 131,
    "name": "Navy Floral Print Shirt",
    "image": "Assets/shirt7.webp",
    "price": 999,
    "mrp": 1200,
    "category": "Shirts",
    "source_page": "shirts.html",
    "hub_page": "Men.html",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Classic cuts and premium fabrics. A wardrobe staple that takes you from casual to formal with ease."
  },
  {
    "id": 132,
    "name": "Burgundy Crewneck over White Shirt",
    "image": "Assets/shirt5.webp",
    "price": 999,
    "mrp": 1300,
    "category": "Shirts",
    "source_page": "shirts.html",
    "hub_page": "Men.html",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Classic cuts and premium fabrics. A wardrobe staple that takes you from casual to formal with ease."
  },
  {
    "id": 133,
    "name": "Rugged Brown Derby",
    "image": "Assets/shoe1.jpg",
    "price": 4999,
    "mrp": 6600,
    "category": "Shoes",
    "source_page": "shoes.html",
    "hub_page": "Men.html",
    "sizes": [
      "6",
      "7",
      "8",
      "9"
    ],
    "description": "Walk with confidence. Engineered for comfort and designed for lasting style, mile after mile."
  },
  {
    "id": 134,
    "name": "Classic Tan Oxford",
    "image": "Assets/shoe2.jpg",
    "price": 3999,
    "mrp": 5200,
    "category": "Shoes",
    "source_page": "shoes.html",
    "hub_page": "Men.html",
    "sizes": [
      "6",
      "7",
      "8",
      "9"
    ],
    "description": "Walk with confidence. Engineered for comfort and designed for lasting style, mile after mile."
  },
  {
    "id": 135,
    "name": "Navy Casual Sneaker",
    "image": "Assets/shoe3.webp",
    "price": 3499,
    "mrp": 4700,
    "category": "Shoes",
    "source_page": "shoes.html",
    "hub_page": "Men.html",
    "sizes": [
      "6",
      "7",
      "8",
      "9"
    ],
    "description": "Walk with confidence. Engineered for comfort and designed for lasting style, mile after mile."
  },
  {
    "id": 136,
    "name": "Textured Dark Brown Loafer",
    "image": "Assets/shoe4.jpg",
    "price": 3999,
    "mrp": 5300,
    "category": "Shoes",
    "source_page": "shoes.html",
    "hub_page": "Men.html",
    "sizes": [
      "6",
      "7",
      "8",
      "9"
    ],
    "description": "Walk with confidence. Engineered for comfort and designed for lasting style, mile after mile."
  },
  {
    "id": 137,
    "name": "Leather Combat Boots",
    "image": "Assets/shoe6.webp",
    "price": 999,
    "mrp": 1200,
    "category": "Shoes",
    "source_page": "shoes.html",
    "hub_page": "Men.html",
    "sizes": [
      "6",
      "7",
      "8",
      "9"
    ],
    "description": "Walk with confidence. Engineered for comfort and designed for lasting style, mile after mile."
  },
  {
    "id": 138,
    "name": "Tan Casual Lace-Up",
    "image": "Assets/shoe5.avif",
    "price": 999,
    "mrp": 1200,
    "category": "Shoes",
    "source_page": "shoes.html",
    "hub_page": "Men.html",
    "sizes": [
      "6",
      "7",
      "8",
      "9"
    ],
    "description": "Walk with confidence. Engineered for comfort and designed for lasting style, mile after mile."
  },
  {
    "id": 139,
    "name": "Classic Chelsea Boots",
    "image": "Assets/shoe7.jpg",
    "price": 999,
    "mrp": 1200,
    "category": "Shoes",
    "source_page": "shoes.html",
    "hub_page": "Men.html",
    "sizes": [
      "6",
      "7",
      "8",
      "9"
    ],
    "description": "Walk with confidence. Engineered for comfort and designed for lasting style, mile after mile."
  },
  {
    "id": 140,
    "name": "Navy Suede Sport Shoes",
    "image": "Assets/shoe9.jpeg",
    "price": 999,
    "mrp": 1300,
    "category": "Shoes",
    "source_page": "shoes.html",
    "hub_page": "Men.html",
    "sizes": [
      "6",
      "7",
      "8",
      "9"
    ],
    "description": "Walk with confidence. Engineered for comfort and designed for lasting style, mile after mile."
  },
  {
    "id": 141,
    "name": "Two-Tone Formal Loafers",
    "image": "Assets/shoe11.webp",
    "price": 999,
    "mrp": 1300,
    "category": "Shoes",
    "source_page": "shoes.html",
    "hub_page": "Men.html",
    "sizes": [
      "6",
      "7",
      "8",
      "9"
    ],
    "description": "Walk with confidence. Engineered for comfort and designed for lasting style, mile after mile."
  },
  {
    "id": 142,
    "name": "Rugged Leather Lace-Up Boots",
    "image": "Assets/main_shoes2.webp",
    "price": 999,
    "mrp": 1300,
    "category": "Shoes",
    "source_page": "shoes.html",
    "hub_page": "Men.html",
    "sizes": [
      "6",
      "7",
      "8",
      "9"
    ],
    "description": "Walk with confidence. Engineered for comfort and designed for lasting style, mile after mile."
  },
  {
    "id": 143,
    "name": "Suede Lifestyle Sneakers",
    "image": "Assets/shoe14.jpeg",
    "price": 999,
    "mrp": 1300,
    "category": "Shoes",
    "source_page": "shoes.html",
    "hub_page": "Men.html",
    "sizes": [
      "6",
      "7",
      "8",
      "9"
    ],
    "description": "Walk with confidence. Engineered for comfort and designed for lasting style, mile after mile."
  },
  {
    "id": 144,
    "name": "Polished Black Oxfords",
    "image": "Assets/shoe13.webp",
    "price": 999,
    "mrp": 1300,
    "category": "Shoes",
    "source_page": "shoes.html",
    "hub_page": "Men.html",
    "sizes": [
      "6",
      "7",
      "8",
      "9"
    ],
    "description": "Walk with confidence. Engineered for comfort and designed for lasting style, mile after mile."
  },
  {
    "id": 145,
    "name": "Lightning McQueen Ride-On",
    "image": "Assets/t1.jpg",
    "price": 899,
    "mrp": 1200,
    "category": "Toys",
    "source_page": "toys.html",
    "hub_page": "kids.html",
     
    "description": "Spark imagination and endless fun. Safe, durable toys designed to bring joy and learning together."
  },
  {
    "id": 146,
    "name": "2-in-1 Xylophone Piano",
    "image": "Assets/t10.jpg",
    "price": 450,
    "mrp": 500,
    "category": "Toys",
    "source_page": "toys.html",
    "hub_page": "kids.html",
     
    "description": "Spark imagination and endless fun. Safe, durable toys designed to bring joy and learning together."
  },
  {
    "id": 147,
    "name": "Kids' Electric Toy Guitar",
    "image": "Assets/t12.jpg",
    "price": 600,
    "mrp": 800,
    "category": "Toys",
    "source_page": "toys.html",
    "hub_page": "kids.html",
     
    "description": "Spark imagination and endless fun. Safe, durable toys designed to bring joy and learning together."
  },
  {
    "id": 148,
    "name": "Plush Unicorn",
    "image": "Assets/t2.webp",
    "price": 500,
    "mrp": 600,
    "category": "Toys",
    "source_page": "toys.html",
    "hub_page": "kids.html",
     
    "description": "Spark imagination and endless fun. Safe, durable toys designed to bring joy and learning together."
  },
  {
    "id": 149,
    "name": "Plush Teddy Bear",
    "image": "Assets/t3.webp",
    "price": 750,
    "mrp": 900,
    "category": "Toys",
    "source_page": "toys.html",
    "hub_page": "kids.html",
    
    "description": "Spark imagination and endless fun. Safe, durable toys designed to bring joy and learning together."
  },
  {
    "id": 150,
    "name": "Transformer / RC Robot Car",
    "image": "Assets/t4.webp",
    "price": 1000,
    "mrp": 1300,
    "category": "Toys",
    "source_page": "toys.html",
    "hub_page": "kids.html",
     
    "description": "Spark imagination and endless fun. Safe, durable toys designed to bring joy and learning together."
  },
  {
    "id": 151,
    "name": "Wooden Animal Puzzles",
    "image": "Assets/t5.webp",
    "price": 600,
    "mrp": 800,
    "category": "Toys",
    "source_page": "toys.html",
    "hub_page": "kids.html",
     
    "description": "Spark imagination and endless fun. Safe, durable toys designed to bring joy and learning together."
  },
  {
    "id": 152,
    "name": "Modeling Clay / Play Dough Kit",
    "image": "Assets/t6.webp",
    "price": 500,
    "mrp": 600,
    "category": "Toys",
    "source_page": "toys.html",
    "hub_page": "kids.html",
     
    "description": "Spark imagination and endless fun. Safe, durable toys designed to bring joy and learning together."
  },
  {
    "id": 153,
    "name": "Inflatable Sports Balls",
    "image": "Assets/t7.webp",
    "price": 100,
    "mrp": 100,
    "category": "Toys",
    "source_page": "toys.html",
    "hub_page": "kids.html",
     
    "description": "Spark imagination and endless fun. Safe, durable toys designed to bring joy and learning together."
  },
  {
    "id": 154,
    "name": "Kids' Cricket Set",
    "image": "Assets/t8.jpg",
    "price": 700,
    "mrp": 800,
    "category": "Toys",
    "source_page": "toys.html",
    "hub_page": "kids.html",
     
    "description": "Spark imagination and endless fun. Safe, durable toys designed to bring joy and learning together."
  },
  {
    "id": 155,
    "name": "Electric Gear Train Track",
    "image": "Assets/t9.webp",
    "price": 500,
    "mrp": 600,
    "category": "Toys",
    "source_page": "toys.html",
    "hub_page": "kids.html",
     
    "description": "Spark imagination and endless fun. Safe, durable toys designed to bring joy and learning together."
  },
  {
    "id": 156,
    "name": "Toy Foam Blaster",
    "image": "Assets/t11.jpg",
    "price": 1000,
    "mrp": 1300,
    "category": "Toys",
    "source_page": "toys.html",
    "hub_page": "kids.html",
   
    "description": "Spark imagination and endless fun. Safe, durable toys designed to bring joy and learning together."
  },
  {
    "id": 157,
    "name": "Mustard & Pink Banarasi Saree",
    "image": "Assets/trade1.webp",
    "price": 20000,
    "mrp": 26800,
    "category": "Traditional Dress",
    "source_page": "Traditionaldress.html",
    "hub_page": "women.html",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Celebrate heritage in stunning style. Rich fabrics and intricate detailing that honor tradition beautifully."
  },
  {
    "id": 158,
    "name": "Royal Blue Embroidered Anarkali",
    "image": "Assets/trade10.jpg",
    "price": 9000,
    "mrp": 12100,
    "category": "Traditional Dress",
    "source_page": "Traditionaldress.html",
    "hub_page": "women.html",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Celebrate heritage in stunning style. Rich fabrics and intricate detailing that honor tradition beautifully."
  },
  {
    "id": 159,
    "name": "Sky Blue Sequined Gown",
    "image": "Assets/trade11.webp",
    "price": 8000,
    "mrp": 10400,
    "category": "Traditional Dress",
    "source_page": "Traditionaldress.html",
    "hub_page": "women.html",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Celebrate heritage in stunning style. Rich fabrics and intricate detailing that honor tradition beautifully."
  },
  {
    "id": 160,
    "name": "Off-White & Gold Festive Lehenga",
    "image": "Assets/trade9.jpg",
    "price": 8000,
    "mrp": 10100,
    "category": "Traditional Dress",
    "source_page": "Traditionaldress.html",
    "hub_page": "women.html",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Celebrate heritage in stunning style. Rich fabrics and intricate detailing that honor tradition beautifully."
  },
  {
    "id": 161,
    "name": "Pink Embroidered Lehenga Choli",
    "image": "Assets/trade13.jpg",
    "price": 999,
    "mrp": 1300,
    "category": "Traditional Dress",
    "source_page": "Traditionaldress.html",
    "hub_page": "women.html",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Celebrate heritage in stunning style. Rich fabrics and intricate detailing that honor tradition beautifully."
  },
  {
    "id": 162,
    "name": "Patola Silk Saree",
    "image": "Assets/trade2.webp",
    "price": 999,
    "mrp": 1200,
    "category": "Traditional Dress",
    "source_page": "Traditionaldress.html",
    "hub_page": "women.html",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Celebrate heritage in stunning style. Rich fabrics and intricate detailing that honor tradition beautifully."
  },
  {
    "id": 163,
    "name": "Silver Embellished Anarkali or Floor-Length Lehenga",
    "image": "Assets/trade3.webp",
    "price": 999,
    "mrp": 1300,
    "category": "Traditional Dress",
    "source_page": "Traditionaldress.html",
    "hub_page": "women.html",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Celebrate heritage in stunning style. Rich fabrics and intricate detailing that honor tradition beautifully."
  },
  {
    "id": 164,
    "name": "Navy Blue Printed Lehenga",
    "image": "Assets/trade4.webp",
    "price": 999,
    "mrp": 1200,
    "category": "Traditional Dress",
    "source_page": "Traditionaldress.html",
    "hub_page": "women.html",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Celebrate heritage in stunning style. Rich fabrics and intricate detailing that honor tradition beautifully."
  },
  {
    "id": 165,
    "name": "Teal and Lavender Lehenga Choli",
    "image": "Assets/trade5.webp",
    "price": 999,
    "mrp": 1200,
    "category": "Traditional Dress",
    "source_page": "Traditionaldress.html",
    "hub_page": "women.html",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Celebrate heritage in stunning style. Rich fabrics and intricate detailing that honor tradition beautifully."
  },
  {
    "id": 166,
    "name": "Powder Blue Sharara Set",
    "image": "Assets/trade6.webp",
    "price": 999,
    "mrp": 1200,
    "category": "Traditional Dress",
    "source_page": "Traditionaldress.html",
    "hub_page": "women.html",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Celebrate heritage in stunning style. Rich fabrics and intricate detailing that honor tradition beautifully."
  },
  {
    "id": 167,
    "name": "Off-White Gharara Set",
    "image": "Assets/trade7.jpg",
    "price": 999,
    "mrp": 1200,
    "category": "Traditional Dress",
    "source_page": "Traditionaldress.html",
    "hub_page": "women.html",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Celebrate heritage in stunning style. Rich fabrics and intricate detailing that honor tradition beautifully."
  },
  {
    "id": 168,
    "name": "Maroon Anarkali Gown",
    "image": "Assets/trade8.jpg",
    "price": 999,
    "mrp": 1300,
    "category": "Traditional Dress",
    "source_page": "Traditionaldress.html",
    "hub_page": "women.html",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Celebrate heritage in stunning style. Rich fabrics and intricate detailing that honor tradition beautifully."
  },
  {
    "id": 169,
    "name": "Samsung Crystal UHD",
    "image": "Assets/tv1.webp",
    "price": 100000,
    "mrp": 128800,
    "category": "TVs",
    "source_page": "tv.html",
    "hub_page": "Electronic.html",
     
    "description": "Cinematic visuals from the comfort of your home. Stunning resolution and vivid colors for an immersive viewing experience."
  },
  {
    "id": 170,
    "name": "Samsung Curved UHD TV",
    "image": "Assets/tv11.webp",
    "price": 99000,
    "mrp": 135400,
    "category": "TVs",
    "source_page": "tv.html",
    "hub_page": "Electronic.html",
     
    "description": "Cinematic visuals from the comfort of your home. Stunning resolution and vivid colors for an immersive viewing experience."
  },
  {
    "id": 171,
    "name": "Samsung Curved UHD TV (Marketing Board)",
    "image": "Assets/tv12.jpeg",
    "price": 89000,
    "mrp": 121600,
    "category": "TVs",
    "source_page": "tv.html",
    "hub_page": "Electronic.html",
     
    "description": "Cinematic visuals from the comfort of your home. Stunning resolution and vivid colors for an immersive viewing experience."
  },
  {
    "id": 172,
    "name": "Sony BRAVIA 4K HDR",
    "image": "Assets/tv5.jpeg",
    "price": 150000,
    "mrp": 195400,
    "category": "TVs",
    "source_page": "tv.html",
    "hub_page": "Electronic.html",
    
    "description": "Cinematic visuals from the comfort of your home. Stunning resolution and vivid colors for an immersive viewing experience."
  },
  {
    "id": 173,
    "name": "Sony BRAVIA XR (In-Store Display)",
    "image": "Assets/tv6.jpg",
    "price": 125000,
    "mrp": 162300,
    "category": "TVs",
    "source_page": "tv.html",
    "hub_page": "Electronic.html",
     
    "description": "Cinematic visuals from the comfort of your home. Stunning resolution and vivid colors for an immersive viewing experience."
  },
  {
    "id": 174,
    "name": "Sony BRAVIA (Startup Screen)",
    "image": "Assets/tv7.jpg",
    "price": 65000,
    "mrp": 89000,
    "category": "TVs",
    "source_page": "tv.html",
    "hub_page": "Electronic.html",
    
    "description": "Cinematic visuals from the comfort of your home. Stunning resolution and vivid colors for an immersive viewing experience."
  },
  {
    "id": 175,
    "name": "Sony BRAVIA Google TV",
    "image": "Assets/tv8.jpg",
    "price": 45000,
    "mrp": 59200,
    "category": "TVs",
    "source_page": "tv.html",
    "hub_page": "Electronic.html",
     
    "description": "Cinematic visuals from the comfort of your home. Stunning resolution and vivid colors for an immersive viewing experience."
  },
  {
    "id": 176,
    "name": "LG OLED evo",
    "image": "Assets/tv9.jpg",
    "price": 55000,
    "mrp": 68900,
    "category": "TVs",
    "source_page": "tv.html",
    "hub_page": "Electronic.html",
     
    "description": "Cinematic visuals from the comfort of your home. Stunning resolution and vivid colors for an immersive viewing experience."
  },
  {
    "id": 177,
    "name": "LG OLED evo",
    "image": "Assets/tv9.jpg",
    "price": 45000,
    "mrp": 62700,
    "category": "TVs",
    "source_page": "tv.html",
    "hub_page": "Electronic.html",
     
    "description": "Cinematic visuals from the comfort of your home. Stunning resolution and vivid colors for an immersive viewing experience."
  },
  {
    "id": 178,
    "name": "LG UHD AI ThinQ",
    "image": "Assets/tv10.avif",
    "price": 45000,
    "mrp": 62600,
    "category": "TVs",
    "source_page": "tv.html",
    "hub_page": "Electronic.html",
     
    "description": "Cinematic visuals from the comfort of your home. Stunning resolution and vivid colors for an immersive viewing experience."
  },
  {
    "id": 179,
    "name": "Generic 4K UHD LED TV",
    "image": "Assets/tv_new1.png",
    "price": 85000,
    "mrp": 117700,
    "category": "TVs",
    "source_page": "tv.html",
    "hub_page": "Electronic.html",
     
    "description": "Cinematic visuals from the comfort of your home. Stunning resolution and vivid colors for an immersive viewing experience."
  },
  {
    "id": 180,
    "name": "Smart 4K UHD TV (Living Room Setup)",
    "image": "Assets/tv_new2.webp",
    "price": 140000,
    "mrp": 178000,
    "category": "TVs",
    "source_page": "tv.html",
    "hub_page": "Electronic.html",
     
    "description": "Cinematic visuals from the comfort of your home. Stunning resolution and vivid colors for an immersive viewing experience."
  },
  {
    "id": 181,
    "name": "Lupai Luxury Women's Watch",
    "image": "Assets/waht10.webp",
    "price": 100000,
    "mrp": 133700,
    "category": "Watches",
    "source_page": "watches.html",
    "hub_page": "Electronic.html",
    "sizes": [
      "5",
      "6",
      "7",
      "8"
    ],
    "description": "More than timekeeping \u2014 a statement of refined taste. Precision craftsmanship on your wrist."
  },
  {
    "id": 182,
    "name": "Vintage Field/Pilot Watch",
    "image": "Assets/watch_main.jpg",
    "price": 20000,
    "mrp": 26300,
    "category": "Watches",
    "source_page": "watches.html",
    "hub_page": "Electronic.html",
    "sizes": [
      "5",
      "6",
      "7",
      "8"
    ],
    "description": "More than timekeeping \u2014 a statement of refined taste. Precision craftsmanship on your wrist."
  },
  {
    "id": 183,
    "name": "Apple Watch (Space Gray/Black)",
    "image": "Assets/wat10.jpg",
    "price": 49999,
    "mrp": 63300,
    "category": "Watches",
    "source_page": "watches.html",
    "hub_page": "Electronic.html",
    "sizes": [
      "5",
      "6",
      "7",
      "8"
    ],
    "description": "More than timekeeping \u2014 a statement of refined taste. Precision craftsmanship on your wrist."
  },
  {
    "id": 184,
    "name": "Apple Watch Edition (Rose Gold)",
    "image": "Assets/wat11.jpg",
    "price": 50000,
    "mrp": 64500,
    "category": "Watches",
    "source_page": "watches.html",
    "hub_page": "Electronic.html",
    "sizes": [
      "5",
      "6",
      "7",
      "8"
    ],
    "description": "More than timekeeping \u2014 a statement of refined taste. Precision craftsmanship on your wrist."
  },
  {
    "id": 185,
    "name": "Apple Watch (Series 4/5/6)",
    "image": "Assets/wat12.jpg",
    "price": 45000,
    "mrp": 62300,
    "category": "Watches",
    "source_page": "watches.html",
    "hub_page": "Electronic.html",
    "sizes": [
      "5",
      "6",
      "7",
      "8"
    ],
    "description": "More than timekeeping \u2014 a statement of refined taste. Precision craftsmanship on your wrist."
  },
  {
    "id": 186,
    "name": "Holzkern / Wood-Style Chronograph",
    "image": "Assets/wat2.webp",
    "price": 9000,
    "mrp": 11700,
    "category": "Watches",
    "source_page": "watches.html",
    "hub_page": "Electronic.html",
    "sizes": [
      "5",
      "6",
      "7",
      "8"
    ],
    "description": "More than timekeeping \u2014 a statement of refined taste. Precision craftsmanship on your wrist."
  },
  {
    "id": 187,
    "name": "Benyar Chronograph",
    "image": "Assets/wat3.jpg",
    "price": 4500,
    "mrp": 5800,
    "category": "Watches",
    "source_page": "watches.html",
    "hub_page": "Electronic.html",
    "sizes": [
      "5",
      "6",
      "7",
      "8"
    ],
    "description": "More than timekeeping \u2014 a statement of refined taste. Precision craftsmanship on your wrist."
  },
  {
    "id": 188,
    "name": "Rolex GMT-Master II \"Root Beer\"(copy)",
    "image": "Assets/wat4.webp",
    "price": 9500,
    "mrp": 13000,
    "category": "Watches",
    "source_page": "watches.html",
    "hub_page": "Electronic.html",
    "sizes": [
      "5",
      "6",
      "7",
      "8"
    ],
    "description": "More than timekeeping \u2014 a statement of refined taste. Precision craftsmanship on your wrist."
  },
  {
    "id": 189,
    "name": "Prisma Signature (Women's)",
    "image": "Assets/wat5.jpg",
    "price": 7000,
    "mrp": 9200,
    "category": "Watches",
    "source_page": "watches.html",
    "hub_page": "Electronic.html",
    "sizes": [
      "5",
      "6",
      "7",
      "8"
    ],
    "description": "More than timekeeping \u2014 a statement of refined taste. Precision craftsmanship on your wrist."
  },
  {
    "id": 190,
    "name": "Citizen Eco-Drive (Men's)",
    "image": "Assets/wat6.jpeg",
    "price": 45000,
    "mrp": 56700,
    "category": "Watches",
    "source_page": "watches.html",
    "hub_page": "Electronic.html",
    "sizes": [
      "5",
      "6",
      "7",
      "8"
    ],
    "description": "More than timekeeping \u2014 a statement of refined taste. Precision craftsmanship on your wrist."
  },
  {
    "id": 191,
    "name": "Titan Raga Viva (Gold)",
    "image": "Assets/wat7.jpg",
    "price": 8000,
    "mrp": 10900,
    "category": "Watches",
    "source_page": "watches.html",
    "hub_page": "Electronic.html",
    "sizes": [
      "5",
      "6",
      "7",
      "8"
    ],
    "description": "More than timekeeping \u2014 a statement of refined taste. Precision craftsmanship on your wrist."
  },
  {
    "id": 192,
    "name": "Titan Raga (Rose Gold)",
    "image": "Assets/wat8.webp",
    "price": 10000,
    "mrp": 13000,
    "category": "Watches",
    "source_page": "watches.html",
    "hub_page": "Electronic.html",
    "sizes": [
     "5",
      "6",
      "7",
      "8"
    ],
    "description": "More than timekeeping \u2014 a statement of refined taste. Precision craftsmanship on your wrist."
  },
  {
    "id": 193,
    "name": "Classic White Shirt",
    "image": "Assets/dress10.1971",
    "price": 2000,
    "mrp": 2600,
    "category": "Western Dress",
    "source_page": "westrendress.html",
    "hub_page": "women.html",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Modern silhouettes with a bold twist. Fashion-forward designs that make every entry unforgettable."
  },
  {
    "id": 194,
    "name": "Light Blue Shirt",
    "image": "Assets/dress1.webp",
    "price": 3000,
    "mrp": 4100,
    "category": "Western Dress",
    "source_page": "westrendress.html",
    "hub_page": "women.html",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Modern silhouettes with a bold twist. Fashion-forward designs that make every entry unforgettable."
  },
  {
    "id": 195,
    "name": "Beige Shirt",
    "image": "Assets/dress11.webp",
    "price": 1999,
    "mrp": 2600,
    "category": "Western Dress",
    "source_page": "westrendress.html",
    "hub_page": "women.html",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Modern silhouettes with a bold twist. Fashion-forward designs that make every entry unforgettable."
  },
  {
    "id": 196,
    "name": "Navy Blue Shirt",
    "image": "Assets/dress13.jpg",
    "price": 4999,
    "mrp": 6700,
    "category": "Western Dress",
    "source_page": "westrendress.html",
    "hub_page": "women.html",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Modern silhouettes with a bold twist. Fashion-forward designs that make every entry unforgettable."
  },
  {
    "id": 197,
    "name": "Beige Shirt",
    "image": "Assets/dress2.webp",
    "price": 999,
    "mrp": 1300,
    "category": "Western Dress",
    "source_page": "westrendress.html",
    "hub_page": "women.html",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Modern silhouettes with a bold twist. Fashion-forward designs that make every entry unforgettable."
  },
  {
    "id": 198,
    "name": "Navy Blue Shirt",
    "image": "Assets/dress3.jpg",
    "price": 999,
    "mrp": 1200,
    "category": "Western Dress",
    "source_page": "westrendress.html",
    "hub_page": "women.html",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Modern silhouettes with a bold twist. Fashion-forward designs that make every entry unforgettable."
  },
  {
    "id": 199,
    "name": "Beige Shirt",
    "image": "Assets/dress5.jpg",
    "price": 999,
    "mrp": 1300,
    "category": "Western Dress",
    "source_page": "westrendress.html",
    "hub_page": "women.html",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Modern silhouettes with a bold twist. Fashion-forward designs that make every entry unforgettable."
  },
  {
    "id": 200,
    "name": "Navy Blue Shirt",
    "image": "Assets/dress4.avif",
    "price": 999,
    "mrp": 1200,
    "category": "Western Dress",
    "source_page": "westrendress.html",
    "hub_page": "women.html",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Modern silhouettes with a bold twist. Fashion-forward designs that make every entry unforgettable."
  },
  {
    "id": 201,
    "name": "Beige Shirt",
    "image": "Assets/dress6.jpeg",
    "price": 999,
    "mrp": 1200,
    "category": "Western Dress",
    "source_page": "westrendress.html",
    "hub_page": "women.html",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Modern silhouettes with a bold twist. Fashion-forward designs that make every entry unforgettable."
  },
  {
    "id": 202,
    "name": "Navy Blue Shirt",
    "image": "Assets/dress7.jpg",
    "price": 999,
    "mrp": 1300,
    "category": "Western Dress",
    "source_page": "westrendress.html",
    "hub_page": "women.html",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Modern silhouettes with a bold twist. Fashion-forward designs that make every entry unforgettable."
  },
  {
    "id": 203,
    "name": "Navy Blue Shirt",
    "image": "Assets/dress8.webp",
    "price": 999,
    "mrp": 1200,
    "category": "Western Dress",
    "source_page": "westrendress.html",
    "hub_page": "women.html",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Modern silhouettes with a bold twist. Fashion-forward designs that make every entry unforgettable."
  },
  {
    "id": 204,
    "name": "Navy Blue Shirt",
    "image": "Assets/dress12.webp",
    "price": 999,
    "mrp": 1300,
    "category": "Western Dress",
    "source_page": "westrendress.html",
    "hub_page": "women.html",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Modern silhouettes with a bold twist. Fashion-forward designs that make every entry unforgettable."
  },
  {
    "id": 205,
    "name": "Classic Light Wash Denim Jacket",
    "image": "Assets/jacket1.jpg",
    "price": 999,
    "mrp": 1300,
    "category": "Jackets",
    "source_page": "jackets.html",
    "hub_page": "Men.html",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Layer up in style. Versatile jackets that blend warmth with effortless cool for every season."
  },
  {
    "id": 206,
    "name": "Navy Lightweight Bomber Jacket",
    "image": "Assets/jacket10.webp",
    "price": 899,
    "mrp": 1100,
    "category": "Jackets",
    "source_page": "jackets.html",
    "hub_page": "Men.html",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Layer up in style. Versatile jackets that blend warmth with effortless cool for every season."
  },
  {
    "id": 207,
    "name": "Textured Varsity Cardigan/Jacket",
    "image": "Assets/jacket11.webp",
    "price": 999,
    "mrp": 1300,
    "category": "Jackets",
    "source_page": "jackets.html",
    "hub_page": "Men.html",
    "sizes": [
      "S",
      "M"
    ],
    "description": "Layer up in style. Versatile jackets that blend warmth with effortless cool for every season."
  },
  {
    "id": 208,
    "name": "Monogram Print Bomber Jacket",
    "image": "Assets/jacket12.webp",
    "price": 15000,
    "mrp": 19300,
    "category": "Jackets",
    "source_page": "jackets.html",
    "hub_page": "Men.html",
    "sizes": [
      "S",
      "M"
    ],
    "description": "Layer up in style. Versatile jackets that blend warmth with effortless cool for every season."
  },
  {
    "id": 209,
    "name": "Dark Wash Denim Trucker Jacket",
    "image": "Assets/jacket2.jpg",
    "price": 999,
    "mrp": 1300,
    "category": "Jackets",
    "source_page": "jackets.html",
    "hub_page": "Men.html",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Layer up in style. Versatile jackets that blend warmth with effortless cool for every season."
  }
];