export interface Product {
    id: string;
    name: string;
    category: string;
    categorySlug: string;
    price: number;
    image: string;
    featured?: boolean;
    description: string;
    details?: string[];
}

const WORKING_IMG_1 = "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop"; // Jewelry
const WORKING_IMG_2 = "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1000&auto=format&fit=crop"; // Wallet
const WORKING_IMG_3 = "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=1000&auto=format&fit=crop"; // Polaroid

// Accurate Local Images defined by User
const IMG_FRAMES = "/images/hero/Frames.JPG";
const IMG_POLAROIDS = "/images/hero/Polaroid.JPG";
const IMG_HOTBAG = "/images/hero/Hotbag.JPG";
const IMG_WALLET = "/images/hero/Wallet.JPG";
const IMG_HAMPER = "/images/hero/Musalla hamper.JPG";
const IMG_STATIONERY = "https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=1000&auto=format&fit=crop";

export const products: Product[] = [
    // FRAMES GROUP
    {
        id: 'f-a2',
        name: "A2 Classic Frame",
        category: "Frames",
        categorySlug: "frames",
        price: 1550,
        image: IMG_FRAMES,
        description: "Premium large A2 size frame for statement wall art.",
        details: ["Size: A2", "Courier not available (Special Handling)"]
    },
    {
        id: 'f-a3',
        name: "A3 Classic Frame",
        category: "Frames",
        categorySlug: "frames",
        price: 700,
        image: IMG_FRAMES,
        description: "Elegant A3 size frame, perfect for certificates and photos.",
        details: ["Size: A3", "Courier not available (Special Handling)"]
    },
    {
        id: 'f-a4',
        name: "A4 Classic Frame",
        category: "Frames",
        categorySlug: "frames",
        price: 680,
        image: IMG_FRAMES,
        featured: true,
        description: "Standard A4 size frame with premium finish.",
        details: ["Size: A4", "Free Shipping Included"]
    },
    {
        id: 'f-a5',
        name: "A5 Classic Frame",
        category: "Frames",
        categorySlug: "frames",
        price: 490,
        image: IMG_FRAMES,
        description: "Sleek A5 size frame for tabletop or wall display.",
        details: ["Size: A5", "Free Shipping Included"]
    },
    {
        id: 'f-a6',
        name: "A6 Classic Frame",
        category: "Frames",
        categorySlug: "frames",
        price: 430,
        image: IMG_FRAMES,
        description: "Compact A6 size frame for small memories.",
        details: ["Size: A6", "Free Shipping Included"]
    },
    {
        id: 'f-4x4',
        name: "4x4 Mini Frame",
        category: "Frames",
        categorySlug: "frames",
        price: 280,
        image: IMG_FRAMES,
        description: "Cute square mini frame (4x4 inches).",
        details: ["Size: 4x4", "Free Shipping Included"]
    },
    {
        id: 'f-3x3',
        name: "3x3 Mini Frame",
        category: "Frames",
        categorySlug: "frames",
        price: 230,
        image: IMG_FRAMES,
        description: "Tiny 3x3 square frame for mini polaroids.",
        details: ["Size: 3x3", "Free Shipping Included"]
    },
    {
        id: 'f-2x2',
        name: "2x2 Mini Frame",
        category: "Frames",
        categorySlug: "frames",
        price: 190,
        image: IMG_FRAMES,
        description: "Micro 2x2 square frame, perfect as a gift accompaniment.",
        details: ["Size: 2x2", "Free Shipping Included"]
    },
    {
        id: 'f-box',
        name: "Premium Box Frame",
        category: "Frames",
        categorySlug: "frames",
        price: 499,
        image: IMG_FRAMES,
        description: "Deep box frame for 3D memories and keepsakes.",
        details: ["Deep Box Design", "Free Shipping"]
    },

    // JEWELRY GROUP
    {
        id: 'j-eye',
        name: "Customized Eye Pendant",
        category: "Jewelry",
        categorySlug: "jewelry",
        price: 430,
        image: "/images/hero/Customized Eye Pendant.JPG",
        description: "Unique eye pendant featuring your own eye photo.",
        details: ["Front: Eye Pic", "Back: Custom Name/Date", "Premium Quality", "Free Shipping"]
    },
    {
        id: 'j-heart',
        name: "Heart Photo Pendant",
        category: "Jewelry",
        categorySlug: "jewelry",
        price: 445,
        image: "/images/hero/Heart Photo Pendant.JPG",
        description: "Golden heart pendant that opens to reveal two custom photos.",
        details: ["Custom name on top", "2 interior photos", "Free Shipping"]
    },
    {
        id: 'j-name',
        name: "Custom Name Pendant",
        category: "Jewelry",
        categorySlug: "jewelry",
        price: 450,
        image: "/images/hero/Custom Name Pendant.JPG",
        description: "Elegant gold-plated name pendant in your choice of font.",
        details: ["Gold Plated", "Custom Font Options", "Free Shipping"]
    },
    {
        id: 'j-kappu',
        name: "Men Kappu / Kada",
        category: "Jewelry",
        categorySlug: "jewelry",
        price: 690,
        image: "/images/hero/Men Kappu : Kada.JPG",
        description: "Stainless steel personalized kada for men.",
        details: ["Stainless Steel", "Free Shipping"]
    },

    // LIFESTYLE & DECOR
    {
        id: 'l-hotbag',
        name: "Electric Hot Bag",
        category: "Lifestyle",
        categorySlug: "lifestyle",
        price: 799,
        image: IMG_HOTBAG,
        featured: true,
        description: "Comforting heat therapy bag for pain relief.",
        details: ["Electric recharge", "Long lasting heat", "Free Shipping"]
    },
    {
        id: 'l-pain-relief',
        name: "Period Pain Reliefer",
        category: "Lifestyle",
        categorySlug: "lifestyle",
        price: 650,
        image: "/images/hero/Period Pain Reliefer.JPG",
        description: "Innovative gadget for effective period pain relief.",
        details: ["USB Rechargeable", "Portable Design", "Free Shipping"]
    },
    {
        id: 'l-panda',
        name: "Cute Trending Panda Lamp",
        category: "Lifestyle",
        categorySlug: "lifestyle",
        price: 690,
        image: "/images/hero/Cute Trending Panda Lamp.JPG",
        description: "Soft silicone panda lamp with touch-color changing.",
        details: ["USB Rechargeable", "Free Shipping"]
    },
    {
        id: 'l-mug-magic',
        name: "Magic Mug",
        category: "Lifestyle",
        categorySlug: "lifestyle",
        price: 350,
        image: "/images/hero/Magic Mug.JPG",
        description: "Heat-sensitive mug that reveals a photo when hot liquid is added.",
        details: ["Heat Sensitive", "Free Shipping"]
    },
    {
        id: 'l-mug-photo',
        name: "Custom Photo Mug",
        category: "Lifestyle",
        categorySlug: "lifestyle",
        price: 195,
        image: "/images/hero/Custom Photo Mug.JPG",
        description: "High quality ceramic mug with your personalized photo.",
        details: ["Premium Ceramic", "Free Shipping"]
    },
    {
        id: 'l-flask',
        name: "Temperature Flask",
        category: "Lifestyle",
        categorySlug: "lifestyle",
        price: 530,
        image: "/images/hero/Temperature Flask.JPG",
        description: "Smart flask with multi-colour temperature display.",
        details: ["Smart LED Display", "Insulated", "Free Shipping"]
    },
    {
        id: 'l-pillow-heart',
        name: "Customized Heart Pillow",
        category: "Lifestyle",
        categorySlug: "lifestyle",
        price: 499,
        image: "/images/hero/Customized Heart Pillow.JPG",
        description: "Soft heart-shaped pillow featuring your favorite photo.",
        details: ["Soft Material", "Photo Print", "Free Shipping"]
    },
    {
        id: 'l-perfume',
        name: "Bellavita Perfume",
        category: "Lifestyle",
        categorySlug: "lifestyle",
        price: 455,
        image: "/images/hero/Bellavita Perfume.JPG",
        description: "Premium fragrance from Bellavita for everyday elegance.",
        details: ["Luxury Scent", "Long Lasting", "Free Shipping"]
    },
    {
        id: 'l-cat',
        name: "Sleeping Cat Toy",
        category: "Lifestyle",
        categorySlug: "lifestyle",
        price: 299,
        image: "/images/hero/Sleeping Cat Toy.JPG",
        description: "Adorable plush sleeping cat, perfect for decor.",
        details: ["Soft Plush", "Free Shipping"]
    },
    {
        id: 'l-panda-sleep',
        name: "Sleeping Panda Toy",
        category: "Lifestyle",
        categorySlug: "lifestyle",
        price: 299,
        image: "/images/hero/Sleeping Panda Toy.JPG",
        description: "Cuddly plush sleeping panda, a cute gift for all ages.",
        details: ["Soft Plush", "Free Shipping"]
    },
    {
        id: 'l-sipper',
        name: "Kids Customized Sipper",
        category: "Lifestyle",
        categorySlug: "lifestyle",
        price: 480,
        image: "/images/hero/Kids Customized Sipper.JPG",
        description: "Durable sipper for kids with custom name and character prints.",
        details: ["BPA Free", "Custom Name", "Free Shipping"]
    },
    {
        id: 'l-chocolates',
        name: "Personalised Chocolates",
        category: "Lifestyle",
        categorySlug: "lifestyle",
        price: 450,
        image: "/images/hero/Personalised Chocolates.JPG",
        description: "Delicious artisanal chocolates with custom wrappers.",
        details: ["Artisanal Quality", "Custom Wrappers", "Free Shipping"]
    },

    // STATIONERY & TRAVEL
    {
        id: 's-nikkah-book',
        name: "Nikkah Booklet",
        category: "Stationery",
        categorySlug: "stationery",
        price: 750,
        image: "/images/hero/Nikkah Booklet.JPG",
        description: "Personalized wedding booklet for your special day.",
        details: ["Premium Paper", "Custom Cover", "Free Shipping"]
    },
    {
        id: 's-nikkah-pen',
        name: "Nikkah Pen",
        category: "Stationery",
        categorySlug: "stationery",
        price: 250,
        image: "/images/hero/Nikkah Pen.JPG",
        description: "Elegant engraved pen for Nikkah ceremony.",
        details: ["Engraved Name", "Free Shipping"]
    },
    {
        id: 's-dairy',
        name: "Customized Dairy with Pen",
        category: "Stationery",
        categorySlug: "stationery",
        price: 580,
        image: "/images/hero/Customized Dairy with Pen.JPG",
        description: "Personalized A5 dairy with matching engraved pen.",
        details: ["Size: A5", "Includes Pen", "Free Shipping"]
    },
    {
        id: 's-passport',
        name: "Pastel Passport Cover",
        category: "Stationery",
        categorySlug: "stationery",
        price: 650,
        image: "/images/hero/Pastel Passport Cover.JPG",
        description: "Chic pastel passport cover with custom charm.",
        details: ["High Quality", "Custom Charm", "Free Shipping"]
    },
    {
        id: 's-family-passport',
        name: "Family Passport Organizer",
        category: "Stationery",
        categorySlug: "stationery",
        price: 650,
        image: "/images/hero/Family Passport Organizer.JPG",
        description: "Large faux leather organizer for multiple passports.",
        details: ["Multiple Slots", "Faux Leather", "Free Shipping"]
    },

    // POLAROIDS
    {
        id: 'p-polaroid',
        name: "Polaroid Photo Set",
        category: "Polaroids",
        categorySlug: "polaroids",
        price: 499,
        image: IMG_POLAROIDS,
        featured: true,
        description: "Set of high-quality polaroid prints with vintage aesthetic.",
        details: ["Premium Glossy", "Wooden Clips included", "Free Shipping"]
    },

    // WALLETS GROUP
    {
        id: 'c-wallet',
        name: "Unisex 3 Fold Wallet",
        category: "Wallets",
        categorySlug: "wallets",
        price: 650,
        image: "/images/hero/Unisex 3 Fold Wallet.JPG",
        featured: true,
        description: "Versatile 3-fold wallet with custom name branding.",
        details: ["Name Engraving", "Free Shipping"]
    },
    {
        id: 'c-name-wallet',
        name: "Name Wallet",
        category: "Wallets",
        categorySlug: "wallets",
        price: 560,
        image: "/images/hero/Name Wallet.JPG",
        description: "Premium name-branded wallet for men.",
        details: ["Custom Name", "Free Shipping"]
    },
    {
        id: 'c-sketch-wallet',
        name: "Sketch Wallet",
        category: "Wallets",
        categorySlug: "wallets",
        price: 499,
        image: "/images/hero/Sketch Wallet.JPG",
        description: "Unique wallet with your custom sketch or portrait.",
        details: ["Custom Sketch", "Free Shipping"]
    },
    {
        id: 'c-leather-combo',
        name: "Imported Leather Combo",
        category: "Wallets",
        categorySlug: "wallets",
        price: 630,
        image: IMG_WALLET,
        description: "Premium leather wallet and keychain set.",
        details: ["Wallet + Keychain", "Free Shipping"]
    },
    {
        id: 'c-croc-combo',
        name: "Croc Combo",
        category: "Wallets",
        categorySlug: "wallets",
        price: 880,
        image: IMG_WALLET,
        description: "Stylish croc-textured travel set.",
        details: ["Croc Wallet + Passport", "Free Shipping"]
    },

    // HAMPERS
    {
        id: 'f-musalla',
        name: "Padded Musalla Hamper",
        category: "Hampers",
        categorySlug: "hampers",
        price: 2499,
        image: IMG_HAMPER,
        featured: true,
        description: "Premium padded musalla hamper.",
        details: ["High density foam", "Free Shipping"]
    },
    {
        id: 'h-husband',
        name: "Gift Hamper for Husband",
        category: "Hampers",
        categorySlug: "hampers",
        price: 1550,
        image: "/images/hero/Hamper.JPG",
        description: "Carefully curated grooming and lifestyle hamper for him.",
        details: ["Premium Set", "Custom Message", "Free Shipping"]
    },
    {
        id: 'h-choc-tower',
        name: "Chocolate Tower",
        category: "Hampers",
        categorySlug: "hampers",
        price: 1200,
        image: "/images/hero/Chocolate Tower.JPG",
        description: "A decadent tower of assorted premium chocolates.",
        details: ["Assorted Chocolates", "Elegant Packaging", "Free Shipping"]
    },
    {
        id: 's-wedding-card',
        name: "Custom Wedding Card",
        category: "Stationery",
        categorySlug: "stationery",
        price: 150,
        image: "/images/hero/Custom Wedding Card.JPG",
        description: "Beautifully designed custom wedding invitations.",
        details: ["Custom Design", "Premium Paper", "Free Shipping"]
    },
    {
        id: 'l-watches',
        name: "Luxury Couple Watches",
        category: "Lifestyle",
        categorySlug: "lifestyle",
        price: 1800,
        image: "/images/hero/Luxury Couple Watches.JPG",
        description: "Elegant matching watches for couples.",
        details: ["Set of 2", "Premium Packaging", "Free Shipping"]
    },

    // BOUQUETS
    {
        id: 'b-fresh',
        name: "Fresh Flowers",
        category: "Bouquets",
        categorySlug: "bouquets",
        price: 850,
        image: "/images/hero/Fresh Flowers.JPG",
        description: "A beautiful arrangement of fresh seasonal flowers.",
        details: ["Fresh Cut", "Same Day Delivery (Select Areas)"]
    },
    {
        id: 'b-jumka',
        name: "Jumka Bouquet",
        category: "Bouquets",
        categorySlug: "bouquets",
        price: 1200,
        image: "/images/hero/Jumka Bouquet.JPG",
        description: "A unique cultural twist: a bouquet featuring elegant Jumkas.",
        details: ["Includes Jewelry", "Perfect Gift", "Free Shipping"]
    },
    {
        id: 'b-choc',
        name: "Chocolate Bouquet",
        category: "Bouquets",
        categorySlug: "bouquets",
        price: 950,
        image: "/images/hero/Chocolate Bouquet.JPG",
        description: "A sweet arrangement of premium chocolates crafted like a bouquet.",
        details: ["Assorted Premium Chocolates", "Free Shipping"]
    },
    {
        id: 'b-scented',
        name: "Scented Rose Bouquet",
        category: "Bouquets",
        categorySlug: "bouquets",
        price: 650,
        image: "/images/hero/Scented Rose Bouquet.JPG",
        description: "Long-lasting scented artificial roses that fill the room with fragrance.",
        details: ["Scented", "Everlasting", "Free Shipping"]
    },
    {
        id: 'b-ribbon',
        name: "Ribbon Rose Bouquet",
        category: "Bouquets",
        categorySlug: "bouquets",
        price: 550,
        image: "/images/hero/Ribbon Rose Bouquet.JPG",
        description: "Beautifully handcrafted roses made from premium silk ribbons.",
        details: ["Handcrafted", "Everlasting", "Free Shipping"]
    },
    {
        id: 'l-memento',
        name: "Personalized Memento (Momentum)",
        category: "Lifestyle",
        categorySlug: "lifestyle",
        price: 850,
        image: "/images/hero/Personalized Memento (Momentum).JPG",
        description: "Elegant customized memento to celebrate your special achievements and memories.",
        details: ["Custom Engraving", "Premium Material", "Free Shipping"]
    },
    {
        id: 's-calendar',
        name: "Custom Table Top Calendar",
        category: "Stationery",
        categorySlug: "stationery",
        price: 450,
        image: "/images/hero/Custom Table Top Calendar.JPG",
        description: "Personalized desk calendar featuring your favorite photos for every month.",
        details: ["12 Custom Photos", "High Quality Print", "Free Shipping"]
    }
];

export const categories = [
    { name: "Frames", slug: "frames", image: IMG_FRAMES },
    { name: "Polaroids", slug: "polaroids", image: IMG_POLAROIDS },
    { name: "Lifestyle", slug: "lifestyle", image: IMG_HOTBAG },
    { name: "Wallets", slug: "wallets", image: IMG_WALLET },
    { name: "Hampers", slug: "hampers", image: IMG_HAMPER },
    { name: "Jewelry", slug: "jewelry", image: "/images/hero/Heart Photo Pendant.JPG" },
    { name: "Stationery", slug: "stationery", image: "/images/hero/Pastel Passport Cover.JPG" },
    { name: "Bouquets", slug: "bouquets", image: "/images/hero/BOUQUETS.JPG" }
];
