// All copy sourced from fcmlindia.com — preserved for information integrity.

export type Image = string;

export const IMAGES = {
  heroBath: "https://images.pexels.com/photos/8082223/pexels-photo-8082223.jpeg?auto=compress&cs=tinysrgb&w=1920",
  bath: [
    "https://images.pexels.com/photos/8082223/pexels-photo-8082223.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/8142049/pexels-photo-8142049.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/6492399/pexels-photo-6492399.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/6587859/pexels-photo-6587859.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/6587852/pexels-photo-6587852.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/6394530/pexels-photo-6394530.jpeg?auto=compress&cs=tinysrgb&w=1200",
  ],
  kitchen: [
    "https://images.pexels.com/photos/7031879/pexels-photo-7031879.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/35021550/pexels-photo-35021550.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/8089079/pexels-photo-8089079.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/7587864/pexels-photo-7587864.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/6587896/pexels-photo-6587896.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/7005291/pexels-photo-7005291.jpeg?auto=compress&cs=tinysrgb&w=1200",
  ],
  surfaces: [
    "https://images.pexels.com/photos/4705853/pexels-photo-4705853.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/6634141/pexels-photo-6634141.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/18624455/pexels-photo-18624455.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/3847501/pexels-photo-3847501.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/6634153/pexels-photo-6634153.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/6769735/pexels-photo-6769735.jpeg?auto=compress&cs=tinysrgb&w=1200",
  ],
  wood: [
    "https://images.pexels.com/photos/8146214/pexels-photo-8146214.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/8141959/pexels-photo-8141959.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/18701384/pexels-photo-18701384.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/12212553/pexels-photo-12212553.jpeg?auto=compress&cs=tinysrgb&w=1200",
  ],
  home: [
    "https://images.pexels.com/photos/8082227/pexels-photo-8082227.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/8082242/pexels-photo-8082242.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/29071945/pexels-photo-29071945.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/8082243/pexels-photo-8082243.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/7174113/pexels-photo-7174113.jpeg?auto=compress&cs=tinysrgb&w=1200",
  ],
  architecture: [
    "https://images.pexels.com/photos/4261617/pexels-photo-4261617.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/2081172/pexels-photo-2081172.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/7031591/pexels-photo-7031591.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/31241138/pexels-photo-31241138.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/2084411/pexels-photo-2084411.jpeg?auto=compress&cs=tinysrgb&w=1200",
  ],
};

export type Division = {
  slug: string;
  name: string;
  kicker: string;
  tagline: string;
  description: string;
  intro: string;
  image: string;
  gallery: string[];
  features: { title: string; text: string }[];
  materials: string[];
};

export const DIVISIONS: Division[] = [
  {
    slug: "bathrooms",
    name: "Bathroom Wellness",
    kicker: "FCML Bathroom Wellness",
    tagline: "Superbly orchestrated personal spaces.",
    description:
      "At FCML, you can find a range of absolutely mesmerizing designs adding to your personal space, a total splendor and grandeur. For bathrooms, we have anything and everything. Our product range includes bath design, sanitary ware, faucets, wash basins, furniture, bath tubs, whirlpools and other bathroom accessories.",
    intro:
      "A sanctuary of water, stone and light. We compose bathrooms as deeply personal spaces — where ritual meets architecture and every fitting is choreographed for calm.",
    image: IMAGES.bath[0],
    gallery: IMAGES.bath,
    features: [
      { title: "Sanitary Ware", text: "Sculptural ceramics and concealed cisterns with a flawless, lasting finish." },
      { title: "Faucets & Mixers", text: "Precision-engineered brassware in an array of distinguished finishes." },
      { title: "Wash Basins", text: "Vessel, countertop and free-standing basins as quiet focal points." },
      { title: "Bath Tubs & Whirlpools", text: "Freestanding soaking tubs and hydrotherapy systems for the senses." },
      { title: "Bath Furniture", text: "Vanities and storage tailored in fine veneers and natural stone." },
      { title: "Accessories", text: "Considered hardware that completes the room with restraint." },
    ],
    materials: ["Sanitary Ware", "Faucets", "Wash Basins", "Furniture", "Bath Tubs", "Whirlpools"],
  },
  {
    slug: "kitchens",
    name: "Kitchens",
    kicker: "FCML Kitchens",
    tagline: "Sophisticated & discerning spaces.",
    description:
      "FCML Kitchens specializes in state-of-the-art modular kitchens. Patrons are offered several choices of contemporary and traditional kitchen styles, making FCML stores a comprehensive one-stop solution for living ideas that speak of good taste and refined sensibilities.",
    intro:
      "The kitchen is the heart of the home. We design modular kitchens that are at once architectural and intimate — precise in function, generous in spirit, and effortless to inhabit.",
    image: IMAGES.kitchen[0],
    gallery: IMAGES.kitchen,
    features: [
      { title: "Modular Design", text: "State-of-the-art modular systems, tailored to the way you cook and gather." },
      { title: "Contemporary & Traditional", text: "A full spectrum of styles, from minimal European to timeless classic." },
      { title: "Counters & Slabs", text: "Premium countertops and slabs in stone, quartz and composite." },
      { title: "Kitchen Fittings", text: "Precision hardware and fittings engineered for a lifetime of use." },
      { title: "Complete Kitchen Sets", text: "End-to-end kitchen interiors, conceived and delivered as one." },
      { title: "Acoustic Refinement", text: "Spacious kitchens with the desired acoustic treatment for family life." },
    ],
    materials: ["Modular Systems", "Countertops", "Slabs", "Fittings", "Hardware", "Acoustic Treatment"],
  },
  {
    slug: "surfaces",
    name: "Tiles & Surfaces",
    kicker: "FCML Tiles & Surfaces",
    tagline: "Fusing the natural essence of the product.",
    description:
      "FCML presents an innovation in the ceramic tile industry, a collaboration with India's eminent fashion designers Rajesh Pratap, Peter D'Ascoli, JJ Valaya, Péro by Aneeth Arora, and Abraham & Thakore. Crafted for a diverse and design-forward audience, this collection transforms tiles into canvases of style, heritage, and artistic narrative where fashion meets surfaces and interiors gain a whole new language. Made in India, for its discerning clients.",
    intro:
      "Where fashion meets surface. Our ceramic collections transform the tile into a canvas — a dialogue between India's most celebrated designers and the material beneath our feet.",
    image: IMAGES.surfaces[0],
    gallery: IMAGES.surfaces,
    features: [
      { title: "Designer Collaborations", text: "Collections conceived with India's most eminent fashion houses." },
      { title: "Floor & Ceramic Tiles", text: "A wide vocabulary of ceramic and porcelain floor tiles." },
      { title: "Marble & Granite", text: "Natural marble and granite surfaces with depth and movement." },
      { title: "Mosaic & Inlay", text: "Intricate marble mosaics and inlay work, made by hand." },
      { title: "Eco-Conscious", text: "Sustainably designed, recycled and custom-created in India." },
      { title: "Made in India", text: "Crafted for its discerning clients, right here in India." },
    ],
    materials: ["Ceramic Tiles", "Porcelain", "Marble", "Granite", "Mosaic", "Recycled"],
  },
  {
    slug: "wood-floors",
    name: "Wood Floors",
    kicker: "FCML Wood Floors",
    tagline: "A world of detail, patterning and craftsmanship.",
    description:
      "The wood and laminate floors division under FCML, called FCML Wood Floors, offers a variety of species, finishes, and inlay options in combinations of wood-stone, wood-leather, wood-wood and more.",
    intro:
      "Flooring as a foundation for living. Engineered and laminate floors in a diversity of species and finishes — including rare inlays of wood-stone, wood-leather and wood-wood.",
    image: IMAGES.wood[0],
    gallery: IMAGES.wood,
    features: [
      { title: "Engineered Wood", text: "Stable, refined engineered planks in rare and familiar species." },
      { title: "Laminate Floors", text: "Hard-wearing laminates that mimic the beauty of natural timber." },
      { title: "Species & Finishes", text: "An extensive palette of species, stains and surface finishes." },
      { title: "Wood–Stone Inlay", text: "Bespoke combinations fusing warm timber with cool stone." },
      { title: "Wood–Leather Inlay", text: "Sensual inlay work pairing wood with fine leather." },
      { title: "Wood–Wood Inlay", text: "Geometric patterning in contrasting timbers, by hand." },
    ],
    materials: ["Engineered", "Laminate", "Wood-Stone", "Wood-Leather", "Wood-Wood", "Inlay"],
  },
  {
    slug: "home",
    name: "Home & Décor",
    kicker: "FCML Home",
    tagline: "The acme of luxurious European design.",
    description:
      "FCML Home is the acme of luxurious European designs immaculately crafted to metamorphose home into a scintillating marvel, with an assortment of contemporary, innovative, latest design products of European origin.",
    intro:
      "Objects that complete a home. A curated assortment of contemporary European design — tableware, glassware, lighting and accents that elevate the everyday.",
    image: IMAGES.home[0],
    gallery: IMAGES.home,
    features: [
      { title: "Tableware & Dinnerware", text: "Bone china, porcelain and Perception china for the dressed table." },
      { title: "Glassware & Bar", text: "Crystal-clear glassware, decanters and considered bar tools." },
      { title: "Lighting", text: "Sculptural lighting that defines mood and atmosphere." },
      { title: "Home Accents", text: "Vases, candles, fragrances and art for layered interiors." },
      { title: "Furniture", text: "Chairs, trollies and partitions chosen for character and craft." },
      { title: "European Origin", text: "Contemporary, innovative products of distinguished European origin." },
    ],
    materials: ["Dinnerware", "Glassware", "Lighting", "Accents", "Furniture", "Fragrances"],
  },
];

export const ABOUT = {
  hero: "In the world of design and lifestyle, FCML is a force to reckon with.",
  lead: "The brand has carved a niche for itself as a pioneer of quintessentially European, luxurious design products for the discerning customer — ever since its retail journey began with a first store in Delhi.",
  paragraphs: [
    "Headquartered in the country's capital city, FCML has created a stronghold as a stellar lifestyle retailer for luxury bathroom designs; beautiful, eco-friendly, recycled tiles; a variety of high-end wood floors; modular kitchens & accessories; and à la mode, elegant home décor products of unparalleled quality.",
    "After a tremendously successful innings in New Delhi and Bangalore — they won the prestigious 'Best Showroom Award' 2011 and 2012 for the New Delhi and Bangalore showrooms respectively at the Cersaie Fair, Bologna, Italy — and Chennai, FCML now extends its philosophy of 'lifestyle with panache' to Mumbai with a sprawling 10,000 sq. ft. two-floor store in the city's emerging design hub: Dr. E. Moses Road, Mahalaxmi.",
    "We are the single largest space devoted to luxury interiors in India. Creating a visually stimulating environment where clients can experience our products, be educated about them at leisure and make inspired, informed choices.",
    "Each of our stores has been a landmark achievement in spatial and experiential design. Our showrooms are a visual treasure trove of the most hallowed lines, objects and ensembles in the world of luxury interiors. Every square inch is inviting, appealing, sensory and done up impeccably.",
    "The FCML approach is a differentiated one and service lies at the heart of it. We are in the business of relationships — of securing trust. That's why those who work with us, do so time and again. It is this level of unwavering loyalty that has bolstered the growth of our divisions: Bath, Kitchens, Wood Floors and Surfaces.",
  ],
  vision:
    "From humble beginnings in 2002, FCML today has a pan-India presence and is a leader in its category. Building a well-loved brand, with a set of values focused on the customer, has always been the vision for the company.",
  mission:
    "At the heart of all we do, lie the aspirations of the customer. We first understand what they seek, then craft an immersive experience for them. Our proposals are always of the highest quality, paired with extensive knowledge and counsel, rounded off end to end with finesse. We go the distance to earn our trust and faith. For some, it is a sale — for others, it's the beginning of a valued relationship.",
  motto:
    "Our motto is never say never, and we continue to strive for perfecting your homes. Through our concerted, loyalty-driven approach, we lead in the sphere of luxury interiors. We got there by changing the way we engage with the luxury interiors customer.",
};

export const STATS = [
  { value: "2002", label: "Established" },
  { value: "7+", label: "Design Hubs Across India" },
  { value: "10,000", label: "sq. ft. Flagship, Mumbai" },
  { value: "5", label: "Distinct Divisions" },
];

export const BRANDS = [
  "Bisazza",
  "Emil Ceramica",
  "Ikigai",
  "Inkiostro",
  "Ispira",
  "Mozart",
  "Neotra",
  "Nexion",
  "Palladio",
  "Piccolo",
  "Simpolo",
  "Somany",
];

export const DESIGNERS = [
  "Rajesh Pratap",
  "Peter D'Ascoli",
  "JJ Valaya",
  "Péro by Aneeth Arora",
  "Abraham & Thakore",
];

export type Location = {
  city: string;
  area: string;
  note: string;
};

export const LOCATIONS: Location[] = [
  { city: "New Delhi", area: "A-217, Okhla Industrial Area", note: "Headquarters" },
  { city: "Mumbai", area: "Dr. E. Moses Road, Mahalaxmi", note: "10,000 sq. ft. flagship" },
  { city: "Bangalore", area: "Design hub", note: "Best Showroom Award" },
  { city: "Chennai", area: "Design hub", note: "CRC Design Center, Sultanpur Chowk" },
  { city: "Coimbatore", area: "Design hub", note: "FCML Coimbatore" },
  { city: "Pune", area: "Design hub", note: "Pan-India presence" },
  { city: "Surat", area: "Design hub", note: "Pan-India presence" },
];

// Shop categories from product-category-landing.php
export type Category = { group: string; items: string[] };

export const CATEGORIES: Category[] = [
  {
    group: "Bar",
    items: ["Ashtrays", "Bar Tools & Accessories", "Decanters & Carafes", "Glassware", "Ice Buckets"],
  },
  {
    group: "Bath",
    items: ["Bath Accessories — Wall Mounted", "Bathroom Mirrors", "Hair Dryers", "Tissue & Napkin Holder"],
  },
  {
    group: "Candles & Votives",
    items: ["Candles, Holders & Votives", "Flowers & Plants", "Fragrances & Diffusers", "Home Accents", "Wall Decor"],
  },
  {
    group: "Dinnerware",
    items: ["Assorted Dinnerware", "Bone China", "Perception China", "Porcelain"],
  },
  {
    group: "Furniture",
    items: ["Chairs & Stool", "Partitions / Room Divider", "Trollies"],
  },
  {
    group: "Glassware",
    items: ["Beer Glasses", "Champagne Glasses", "Cocktail Glasses", "Dessert Glasses / Bowls", "Double Wall & Polycarbonate", "Jugs, Pitchers & Bottles", "Liquor Glasses", "Tumblers", "Whisky Glasses", "Wine Glasses"],
  },
  {
    group: "Kitchen",
    items: ["Appliances", "Kitchen Organising", "Kitchen Tools", "Salt & Pepper Mill", "Tea & Coffee"],
  },
  {
    group: "Lights",
    items: ["Lights"],
  },
  {
    group: "Miscellaneous Crockery",
    items: ["Assorted Crockery", "Bowls", "Plates", "Platters", "Tea & Coffee Accessories"],
  },
  {
    group: "Photo Frames",
    items: ["Collage Frames", "Table Frames", "Wall Frames"],
  },
  {
    group: "Tableware",
    items: ["Coasters", "Flatware", "Napkin Holder", "Serveware", "Table Mats"],
  },
  {
    group: "Tea & Coffee",
    items: ["Coffee Press / Coffee Pot", "Cups and Mugs", "Tea / Coffee Accessories", "Tea Press / Tea Pot"],
  },
  {
    group: "Vases",
    items: ["Vases"],
  },
  {
    group: "Art",
    items: ["Art Prints"],
  },
  {
    group: "Kids",
    items: ["Decor", "Money Banks"],
  },
];
