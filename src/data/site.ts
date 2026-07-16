// All copy sourced from fcmlindia.com — preserved for information integrity.

export type Image = string;

import homeHero from "../assets/images/home_hero.png";
import heroBath from "../assets/images/div_hero_bathrooms.png";
import bath1 from "../assets/images/div_feat_bathrooms_1.png";
import bath2 from "../assets/images/div_feat_bathrooms_2.png";
import bath3 from "../assets/images/div_feat_bathrooms_3.png";
import bath4 from "../assets/images/div_feat_bathrooms_4.png";
import bath5 from "../assets/images/div_feat_bathrooms_5.png";
import bath6 from "../assets/images/div_quote_bathrooms.png";
import kitchen1 from "../assets/images/div_feat_kitchens_1.png";
import kitchen2 from "../assets/images/div_feat_kitchens_2.png";
import kitchen3 from "../assets/images/div_feat_kitchens_3.png";
import kitchen4 from "../assets/images/div_feat_kitchens_4.png";
import kitchen5 from "../assets/images/div_feat_kitchens_5.png";
import kitchen6 from "../assets/images/div_quote_kitchens.png";
import surface1 from "../assets/images/div_feat_surfaces_1.png";
import surface2 from "../assets/images/div_feat_surfaces_2.png";
import surface3 from "../assets/images/div_feat_surfaces_3.png";
import surface4 from "../assets/images/div_feat_surfaces_4.png";
import surface5 from "../assets/images/div_feat_surfaces_5.png";
import surface6 from "../assets/images/div_quote_surfaces.png";
import wood1 from "../assets/images/div_feat_wood_1.png";
import wood2 from "../assets/images/div_feat_wood_2.png";
import wood3 from "../assets/images/div_feat_wood_3.png";
import wood4 from "../assets/images/div_feat_wood_4.png";
import home1 from "../assets/images/div_feat_home_1.png";
import home2 from "../assets/images/div_feat_home_2.png";
import home3 from "../assets/images/div_feat_home_3.png";
import home4 from "../assets/images/div_feat_home_4.png";
import home5 from "../assets/images/div_feat_home_5.png";
import home6 from "../assets/images/div_quote_home.png";
import arch1 from "../assets/images/arch_1.png";
import arch2 from "../assets/images/arch_2.png";
import arch3 from "../assets/images/arch_3.png";
import arch4 from "../assets/images/about_mission.png";
import arch5 from "../assets/images/about_vision.png";

import shopArt from "../assets/images/shop_art.png";
import shopBar from "../assets/images/shop_bar.png";
import shopBathAcc from "../assets/images/shop_bath_acc.png";
import shopCandles from "../assets/images/shop_candles.png";
import shopCrockery from "../assets/images/shop_crockery.png";
import shopDinnerware from "../assets/images/shop_dinnerware.png";
import shopFurniture from "../assets/images/shop_furniture.png";
import shopGlassware from "../assets/images/shop_glassware.png";
import shopKids from "../assets/images/shop_kids.png";
import shopKitchenTools from "../assets/images/shop_kitchen_tools.png";
import shopLights from "../assets/images/shop_lights.png";
import shopPhotoFrames from "../assets/images/shop_photo_frames.png";
import shopTableware from "../assets/images/shop_tableware.png";
import shopTeaCoffee from "../assets/images/shop_tea_coffee.png";
import shopVases from "../assets/images/shop_vases.png";

export const IMAGES = {
  homeHero,
  heroBath,
  bath: [bath1, bath2, bath3, bath4, bath5, bath6],
  kitchen: [kitchen1, kitchen2, kitchen3, kitchen4, kitchen5, kitchen6],
  surfaces: [surface1, surface2, surface3, surface4, surface5, surface6],
  wood: [wood1, wood2, wood3, wood4],
  home: [home1, home2, home3, home4, home5, home6],
  architecture: [arch1, arch2, arch3, arch4, arch5],
  shop: [
    shopArt, shopBar, shopBathAcc, shopCandles, shopCrockery, 
    shopDinnerware, shopFurniture, shopGlassware, shopKids, 
    shopKitchenTools, shopLights, shopPhotoFrames, shopTableware, 
    shopTeaCoffee, shopVases
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
  images: {
    vision: IMAGES.architecture[3],
    mission: IMAGES.architecture[4],
  }
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
