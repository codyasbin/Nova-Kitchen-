// Mock data for the Nova Kitchen & Interiors website

// Categories
export const getCategories = () => [
  { id: "modular-kitchen", name: "Modular Kitchens" },
  { id: "appliances", name: "Kitchen Appliances" },
  { id: "water-purifier", name: "Water Purifiers" },
  { id: "accessories", name: "Kitchen Accessories" },
  { id: "interior", name: "Interior Solutions" },
  { id: "ac", name: "Air Conditioners" },
];

// Brands
export const getBrands = () => [
  "Nova",
  "Bosch",
  "Samsung",
  "LG",
  "Haier",
  "Faber",
  "Elica",
  "Kent",
  "ZeroB",
  "Hindware",
  "Godrej",
  "Voltas",
];

// Products Data
const products = [
  // Modular Kitchens
  {
    id: "l-shaped-luxury-kitchen",
    name: "L-Shaped Luxury Kitchen",
    brand: "Nova",
    category: "modular-kitchen",
    subcategory: "L-Shaped",
    price: 350000,
    originalPrice: 395000,
    discount: 11,
    bestseller: true,
    images: [
      "https://lsmedia.linker-cdn.net/290030/2022/7817183.jpeg",
      "https://indofurnishing.co.in/wp-content/uploads/2024/02/9.jpeg",
      "https://cdn.alittledelightful.com/wp-content/uploads/2023/07/Stunning-L-Shaped-Kitchen-with-Island-Ideas.jpeg",
      "https://urbandesignco.in/images/kitchen/asset%2030-min.webp",
    ],
    description:
      "A luxury L-shaped kitchen design featuring premium materials, advanced storage solutions, and a sophisticated aesthetic. Perfect for modern homes that prioritize both functionality and style.",
    specifications: [
      "Dimensions: Customizable",
      "Primary Material: High-quality hardwood and marine-grade plywood",
      "Finish: Matte with anti-fingerprint technology",
      "Hardware: Premium soft-close hinges and drawer systems",
      "Countertop: Italian marble or engineered quartz",
      "Backsplash: Designer tiles or glass",
    ],
    features: [
      "Customizable cabinet layouts",
      "Integrated intelligent lighting",
      "Space-optimized corner solutions",
      "Pullout pantry systems",
      "Dedicated appliance housings",
      "Designer handles and knobs",
      "Moisture-resistant construction",
    ],
  },
  {
    id: "modern-parallel-kitchen",
    name: "Modern Parallel Kitchen",
    brand: "Nova",
    category: "modular-kitchen",
    subcategory: "Parallel",
    price: 280000,
    originalPrice: 320000,
    discount: 12,
    bestseller: false,
    images: [
      "https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2020/01/17192210/Parallel-Kitchen-Design-Counter-Space.jpg",
      "https://www.andacademy.com/resources/wp-content/uploads/2024/09/2-8.webp",
      "https://i.pinimg.com/736x/1d/b1/6d/1db16da03b03544aaa6fc789142bda40.jpg",
      "https://bellakitchens.in/wp-content/uploads/2017/02/Parallel-Kitchen-min.jpg",
    ],
    description:
      "This parallel kitchen design maximizes efficiency with two facing work areas, perfect for homes where space utilization is key. Features sleek finishes and optimized workflow placement.",
    specifications: [
      "Dimensions: Customizable",
      "Primary Material: Engineering wood with high-quality MDF",
      "Finish: High-gloss acrylic or laminate",
      "Hardware: Premium German-engineered fittings",
      "Countertop: Engineered stone or granite",
      "Backsplash: Designer tiles or back-painted glass",
    ],
    features: [
      "Efficient workflow design",
      "Maximum storage capacity",
      "Built-in appliance housing",
      "Under-cabinet lighting",
      "Pull-out systems for ease of access",
      "Heat and moisture resistant finishes",
      "Contemporary handle designs",
    ],
  },
  {
    id: "island-kitchen-premium",
    name: "Premium Island Kitchen",
    brand: "Nova",
    category: "modular-kitchen",
    subcategory: "Island",
    price: 480000,
    originalPrice: 520000,
    discount: 8,
    bestseller: true,
    images: [
      "https://www.ederrahomestudio.com/uploaded-files/thumb-cache/island1island-1jnij.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2021/4/GM/RU/EO/12056149/premium-island-modular-kitchen-500x500.jpg",
      "https://st.hzcdn.com/simgs/pictures/kitchens/luxury-modern-twin-island-kitchen-woodys-premium-cabinetry-img~aee1c19f0b9bc04e_4-7239-1-d5f6fc6.jpg",
      "https://st.hzcdn.com/simgs/pictures/kitchens/modern-style-kitchen-island-view-silverwood-kitchens-and-bath-inc-img~1a4102d90a57a3e8_4-4013-1-1d06997.jpg",
    ],
    description:
      "A statement island kitchen that combines functionality with social entertaining space. The centerpiece island provides additional workspace, storage, and seating, perfect for modern open-plan living.",
    specifications: [
      "Dimensions: Customizable with minimum 12ft x 12ft space",
      "Primary Material: Premium hardwood and marine-grade plywood",
      "Finish: Mix of matte and polished surfaces",
      "Hardware: High-end European fittings",
      "Countertop: Premium quartz or granite",
      "Island Features: Integrated sink and cooking options available",
    ],
    features: [
      "Central island with seating",
      "Optional integrated cooktop or sink",
      "Premium task lighting system",
      "Extensive storage solutions",
      "High-end appliance integration",
      "Custom hood and ventilation options",
      "Designated entertaining spaces",
    ],
  },

  // Appliances - Chimneys
  {
    id: "elica-designer-chimney",
    name: "Elica Designer Auto-Clean Chimney",
    brand: "Elica",
    category: "appliances",
    subcategory: "Chimney",
    price: 18999,
    originalPrice: 24999,
    discount: 24,
    bestseller: true,
    images: [
      "https://www.bsshomestore.com/wp-content/uploads/2023/10/Electric-Chimney-Price-in-India.jpg",
      "https://img.drz.lazcdn.com/static/np/p/946804a6fbe61fb898a74e6f017ce31c.jpg_960x960q80.jpg_.webp",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU0PbzKdXpYJsxE2-L5IhdfjsHaGesAjHJRg&s",
      "https://tiimg.tistatic.com/fp/1/007/654/high-quality-stylish-sleek-design-smoke-free-electric-black-kitchen-chimney-281.jpg",
    ],
    description:
      "An elegant, powerful auto-clean chimney with advanced filtration technology, designed to keep your kitchen smoke and odor-free while adding a touch of sophistication to your space.",
    specifications: [
      "Suction Capacity: 1200 m³/hr",
      "Control Type: Touch & Motion Sensor",
      "Size: 90 cm",
      "Filter Type: Baffle Filter",
      "Motor: 250W",
      "Noise Level: <58 dB",
      "Auto-Clean: Yes",
    ],
    features: [
      "Filterless technology",
      "Motion-sensing operation",
      "Touch control panel",
      "LED lighting",
      "Oil collector",
      "5-year motor warranty",
      "Heat-resistant construction",
    ],
  },
  {
    id: "faber-curve-chimney",
    name: "Faber Curved Glass Chimney",
    brand: "Faber",
    category: "appliances",
    subcategory: "Chimney",
    price: 15990,
    originalPrice: 19990,
    discount: 20,
    bestseller: false,
    images: [
      "https://5.imimg.com/data5/CV/UB/AB/SELLER-92276352/faber-60-cm-auto-clean-kitchen-chimney.jpg",
      "https://fabernepal.com/cdn/shop/products/110.0463.766_feel_3d_t2s2_ltw_90_3_1.jpg?v=1681975101",
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/chimney/i/l/s/1500-2022-180-90-hood-primus-plus-energy-in-hcsc-bk-90-1500-original-imagn8k9ekfvvupn.jpeg?q=20&crop=false",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkUJisfPd1M6ERwc9FkbnqugjIgYiuXG9LPQ&s",
    ],
    description:
      "A stylish curved glass chimney that combines powerful suction with elegant aesthetics. The curved design enhances both functionality and visual appeal in modern kitchens.",
    specifications: [
      "Suction Capacity: 1000 m³/hr",
      "Control Type: Touch",
      "Size: 60 cm / 90 cm",
      "Filter Type: Cassette Filter",
      "Motor: 200W",
      "Noise Level: <60 dB",
      "Auto-Clean: No",
    ],
    features: [
      "Curved glass design",
      "Oil collector system",
      "Touch controls",
      "LED lighting",
      "Filter replacement indicator",
      "2-year comprehensive warranty",
      "Easy-clean surfaces",
    ],
  },

  // Appliances - Gas Stoves
  {
    id: "prestige-5-burner-stove",
    name: "Prestige Royale Plus 5-Burner Gas Stove",
    brand: "Prestige",
    category: "appliances",
    subcategory: "Gas Stove",
    price: 12490,
    originalPrice: 15990,
    discount: 22,
    bestseller: true,
    images: [
      "https://shop.ttkprestige.com/media/catalog/product/6/8/6808-40385-P-IMG1.jpg",
      "https://shop.ttkprestige.com/media/catalog/product/3/7/3784-40291-P-IMG1.jpg",
      "https://www.rasoishop.com/cdn/shop/files/8901365403708-7_3.png?v=1713769793",
      "https://www.rasoishop.com/cdn/shop/files/40291-1_1.png?v=1713790464",
    ],
    description:
      "A premium 5-burner gas stove featuring high-efficiency brass burners, toughened glass top, and ergonomic design. Perfect for large families and those who love to cook multiple dishes simultaneously.",
    specifications: [
      "Burners: 5 (2 small, 2 medium, 1 large)",
      "Material: Toughened Glass Top",
      "Burner Material: Brass",
      "Ignition Type: Manual",
      "Dimensions: 90cm x 52cm",
      "Warranty: 2 years",
    ],
    features: [
      "Premium brass burners",
      "Spill-proof design",
      "Heat-resistant body",
      "Individual pan supports",
      "Ergonomic knob placement",
      "Easy-clean surface",
      "Fuel-efficient design",
    ],
  },

  // Water Purifiers
  {
    id: "kent-grand-plus",
    name: "Kent Grand Plus RO Water Purifier",
    brand: "Kent",
    category: "water-purifier",
    subcategory: "RO Purifier",
    price: 18500,
    originalPrice: 20490,
    discount: 10,
    bestseller: true,
    images: [
      "https://5.imimg.com/data5/SELLER/Default/2023/2/DA/ZS/GW/129544566/kent-grand-plus-ro-water-purifier-500x500.png",
      "https://5.imimg.com/data5/SELLER/Default/2022/10/GD/KR/RN/161561115/716qcfriynl-sl1500--500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2023/7/322927302/EQ/LJ/SF/123130989/kent-grand-star-water-purifier.jpg",
      "https://tradenepal.online/public/uploads/all/0j2CqP7TNEOLoFsS0JSGcX5qxQLLJyZWkFj7pYV5.png",
    ],
    description:
      "The Kent Grand Plus offers multiple purification stages including RO, UV, and UF to provide 100% pure water. Its mineral retention technology ensures the water remains healthy and mineral-rich.",
    specifications: [
      "Purification: RO + UV + UF + TDS Control",
      "Capacity: 8L storage tank",
      "Flow Rate: 15-20 liters/hour",
      "Power Consumption: 60W",
      "Input Water TDS: Up to 2000 ppm",
      "Dimensions: 40cm x 26cm x 54cm",
      "Warranty: 1 year comprehensive + 3 years on RO membrane",
    ],
    features: [
      "Multiple purification stages",
      "TDS controller",
      "UV LED indicator",
      "Filter change alarm",
      "Save water technology",
      "Wall-mountable design",
      "Mineral retention technology",
    ],
  },
  {
    id: "zerob-pristine",
    name: "ZeroB Pristine RO+UV+UF Water Purifier",
    brand: "ZeroB",
    category: "water-purifier",
    subcategory: "RO Purifier",
    price: 15990,
    originalPrice: 18990,
    discount: 16,
    bestseller: false,
    images: [
      "https://5.imimg.com/data5/SELLER/Default/2020/11/IT/DO/RO/13196595/zero-b-pristine-ultimate-ro-water-purifier.jpg",
      "https://5.imimg.com/data5/NI/DR/MY-19476047/zerob-wave-ro-water-purifier.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDOBwphXMYgTEI9cT8hapfrm78NJmZF_XgPg&s",
      "https://m.media-amazon.com/images/I/51Y2pNUtUaL._AC_UF1000,1000_QL80_.jpg",
    ],
    description:
      "The ZeroB Pristine offers advanced 6-stage purification with intelligent mineral adjustment to ensure healthy, great-tasting water. Featuring smart indicators and alerts for maintenance.",
    specifications: [
      "Purification: RO + UV + UF + Mineral Enhancer",
      "Capacity: 7L storage tank",
      "Flow Rate: 12-15 liters/hour",
      "Power Consumption: 50W",
      "Input Water TDS: Up to 2000 ppm",
      "Dimensions: 38cm x 24cm x 50cm",
      "Warranty: 1 year comprehensive + 2 years on RO membrane",
    ],
    features: [
      "6-stage purification",
      "Smart alerts system",
      "Low water waste ratio",
      "Intelligent mineral adjustment",
      "Auto-flush system",
      "Child-lock dispensing",
      "Energy-saving mode",
    ],
  },

  // Air Conditioners
  {
    id: "voltas-inverter-ac",
    name: "Voltas Inverter Split AC 1.5 Ton",
    brand: "Voltas",
    category: "ac",
    subcategory: "Split AC",
    price: 35990,
    originalPrice: 45990,
    discount: 22,
    bestseller: true,
    images: [
      "https://arihantelectronics.org/wp-content/uploads/2023/04/183V-Vectra-Prism.jpg",
      "https://i.gadgets360cdn.com/products/1-5-ton-inverter-split-ac-185v-szs-large-96015-166281-1594982970-1.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcxxl_yDDl4G7MC10MjQyFJxp_9-coQ_vEXg&s",
      "https://5.imimg.com/data5/SQ/UV/VJ/SELLER-49052323/voltas-1-5-ton-5-star-adjustable-copper-ac-500x500.jpg",
    ],
    description:
      "The Voltas Inverter Split AC offers efficient cooling with significant energy savings. Features multiple operating modes and smart temperature control for optimal comfort.",
    specifications: [
      "Capacity: 1.5 Ton",
      "Type: Split Inverter AC",
      "Energy Rating: 5 Star",
      "Annual Energy Consumption: 824.97 Units",
      "ISEER Value: 4.67",
      "Refrigerant: R32 (Eco-friendly)",
      "Noise Level: Indoor - 40dB, Outdoor - 55dB",
    ],
    features: [
      "Inverter compressor",
      "Anti-dust filter",
      "Anti-corrosive coating",
      "Sleep mode",
      "Auto restart",
      "Self-diagnosis",
      "Stabilizer-free operation",
      "Copper condenser",
    ],
  },
];

// Get all products
export const getAllProducts = () => {
  return products;
};

// Get product by ID
export const getProductById = (id: string) => {
  return products.find((product) => product.id === id);
};

// Get featured products
export const getFeaturedProducts = () => {
  return products
    .filter((product) => product.bestseller || Math.random() > 0.5)
    .slice(0, 8);
};

// Get related products (same category, excluding current)
export const getRelatedProducts = (
  categoryId: string,
  currentProductId: string
) => {
  return products
    .filter(
      (product) =>
        product.category === categoryId && product.id !== currentProductId
    )
    .slice(0, 6);
};

// Get product variants
export const getProductVariants = (productId: string) => {
  // This is mock data, in a real app this would come from a database
  const variantsMockData: Record<string, any[]> = {
    "elica-designer-chimney": [
      {
        id: "elica-60cm",
        model: "60 cm",
        price: 17999,
        originalPrice: 22999,
        discount: 22,
        images: [
          "https://cgelectronics.com.np/images/product/Elica/jRTjtL_1630898697.jpg",
          "https://smartdoko.com/storage/products/thumb/1741504280_1801.jpg",
        ],
      },
      {
        id: "elica-90cm",
        model: "90 cm",
        price: 18999,
        originalPrice: 24999,
        discount: 24,
        images: [
          "https://smartdoko.com/storage/products/resized/1741332204_3405.jpg",
          "https://www.cgdigital.com.np/api/images/products/E7h5IQ_1698833692-TFL%20900%20SLIM%20HAC%20MS%20NERO.jpg",
        ],
      },
    ],
    "voltas-inverter-ac": [
      {
        id: "voltas-1ton",
        model: "1 Ton",
        price: 32990,
        originalPrice: 41990,
        discount: 21,
        images: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdOSZT6gtWZETpcD5oW1zhCKfsUTF2lwJx0A&s",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdOSZT6gtWZETpcD5oW1zhCKfsUTF2lwJx0A&s",
        ],
      },
      {
        id: "voltas-1.5ton",
        model: "1.5 Ton",
        price: 35990,
        originalPrice: 45990,
        discount: 22,
        images: [
          "https://tradenepal.online/public/uploads/all/me0uAwflVM1CX4GocKajsoCHEpFPPCSeD87XrIC5.jpg",
          "https://tradenepal.online/public/uploads/all/me0uAwflVM1CX4GocKajsoCHEpFPPCSeD87XrIC5.jpg",
        ],
      },
      {
        id: "voltas-2ton",
        model: "2 Ton",
        price: 45990,
        originalPrice: 56990,
        discount: 19,
        images: [
          "https://m.media-amazon.com/images/I/310X-ZF35wL._AC_UF1000,1000_QL80_.jpg",
          "https://m.media-amazon.com/images/I/310X-ZF35wL._AC_UF1000,1000_QL80_.jpg",
        ],
      },
    ],
  };

  return variantsMockData[productId] || [];
};

// Gallery Projects
export const getGalleryProjects = () => {
  return [
    {
      id: 1,
      name: "Modern Luxury Kitchen",
      category: "modular",
      location: "Kathmandu",
      images: [
        "https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg",
        "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg",
        "https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg",
      ],
    },
    {
      id: 2,
      name: "Contemporary Urban Kitchen",
      category: "modular",
      location: "Pokhara",
      images: [
        "https://images.pexels.com/photos/6758515/pexels-photo-6758515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/8089264/pexels-photo-8089264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/2089696/pexels-photo-2089696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      ],
    },
    {
      id: 3,
      name: "Modern Apartment Interior",
      category: "interiors",
      location: "Bharatpur, Chitwan",
      images: [
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
        "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
        "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg",
      ],
    },
    {
      id: 4,
      name: "Restaurant Kitchen Design",
      category: "commercial",
      location: "Lalitpur",
      images: [
        "https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg",
        "https://images.pexels.com/photos/3201921/pexels-photo-3201921.jpeg",
        "https://images.pexels.com/photos/3201920/pexels-photo-3201920.jpeg",
      ],
    },
    {
      id: 5,
      name: "Minimalist Kitchen Design",
      category: "modular",
      location: "Ratnanagar, Chitwan",
      images: [
        "https://images.pexels.com/photos/27065116/pexels-photo-27065116/free-photo-of-wooden-furniture-in-a-kitchen.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/6297088/pexels-photo-6297088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/3505699/pexels-photo-3505699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      ],
    },
    {
      id: 6,
      name: "Luxury Villa Interior",
      category: "interiors",
      location: "Bhaktapur",
      images: [
        "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
        "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg",
      ],
    },
  ];
};

// Testimonials Data
export const getTestimonials = () => {
  return [
    {
      id: 1,
      name: "Aarav Sharma",
      location: "Kathmandu",
      image:
        "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 5,
      text: "Nova Kitchen transformed our outdated kitchen into a modern, functional space that has become the heart of our home. Their attention to detail and quality craftsmanship exceeded our expectations.",
    },
    {
      id: 2,
      name: "Priya Thapa",
      location: "Pokhara",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 5,
      text: "From design to installation, the team at Nova showed exceptional professionalism. They understood our requirements perfectly and delivered a kitchen that perfectly balances aesthetics and functionality.",
    },
    {
      id: 3,
      name: "Rohan Gurung",
      location: "Bharatpur",
      image:
        "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 4,
      text: "We were impressed by the range of options available and the expert guidance provided. Our modular kitchen is not just beautiful but designed for maximum efficiency. Couldn't be happier!",
    },
    {
      id: 4,
      name: "Sita Poudel",
      location: "Lalitpur",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 5,
      text: "The quality of materials and attention to detail is outstanding. Nova Kitchen & Interiors helped us create a kitchen that is both stylish and practical. Their after-sales service is excellent too.",
    },
    {
      id: 5,
      name: "Anish Maharjan",
      location: "Bhaktapur",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 5,
      text: "I was hesitant about renovating my kitchen, but Nova Kitchen made the process seamless. Their team was professional, and the end result exceeded my expectations. Highly recommended!",
    },
    {
      id: 6,
      name: "Nirmala KC",
      location: "Butwal",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 4,
      text: "The Nova Kitchen team was patient with our many design changes and delivered a beautiful kitchen within our budget. Their after-sales service has been prompt and reliable.",
    },
  ];
};

export type Product = {
  id: string;
  name: string;
  brand: string;
  category: string;
  subcategory: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  bestseller?: boolean;
  images: string[];
  description: string;
  specifications?: string[];
  features?: string[];
};

export type Testimonial = {
  id: number;
  name: string;
  location: string;
  image: string;
  rating: number;
  text: string;
};
