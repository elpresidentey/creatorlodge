export type Outlet = {
  slug: string;
  name: string;
  area: string;
  address: string;
  tag: string;
  image: string;
  gallery: string[];
  hours: string;
  phone: string;
  amenities: string[];
};

export const outlets: Outlet[] = [
  {
    slug: "vi-dome",
    name: "Victoria Island — The Dome",
    area: "Flagship • 120 seats",
    address: "12a Creator Way, VI, Lagos",
    tag: "Dine • Work • Gym",
    image: "https://images.pexels.com/photos/30987048/pexels-photo-30987048.jpeg?auto=compress&cs=tinysrgb&w=800",
    gallery: [
      "https://images.pexels.com/photos/30987048/pexels-photo-30987048.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/37538487/pexels-photo-37538487.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/37461079/pexels-photo-37461079.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    hours: "8am – 11pm daily",
    phone: "+234 800 111 0001",
    amenities: ["Restaurant", "Bar", "Co-working", "Gym", "Meeting Rooms", "Event Hall"],
  },
  {
    slug: "yaba-foundry",
    name: "Yaba — The Foundry",
    area: "Creative campus • 80 seats",
    address: "9 Herbert Macaulay, Yaba, Lagos",
    tag: "Workspace • Bar",
    image: "https://images.pexels.com/photos/30689114/pexels-photo-30689114.jpeg?auto=compress&cs=tinysrgb&w=800",
    gallery: [
      "https://images.pexels.com/photos/30689114/pexels-photo-30689114.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/30688907/pexels-photo-30688907.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/30677716/pexels-photo-30677716.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    hours: "8am – 10pm daily",
    phone: "+234 800 111 0002",
    amenities: ["Open Workspace", "Bar", "Podcast Booth", "Library"],
  },
  {
    slug: "lekki-garden",
    name: "Lekki — The Garden",
    area: "Outdoor • 60 seats",
    address: "KM 15, Lekki-Epe Expressway, Lagos",
    tag: "Garden • Brunch",
    image: "https://images.pexels.com/photos/17952745/pexels-photo-17952745.jpeg?auto=compress&cs=tinysrgb&w=800",
    gallery: [
      "https://images.pexels.com/photos/17952745/pexels-photo-17952745.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/35415671/pexels-photo-35415671.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/12037023/pexels-photo-12037023.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    hours: "7:30am – 10pm daily",
    phone: "+234 800 111 0003",
    amenities: ["Garden Dining", "Brunch", "Co-working", "Outdoor Events"],
  },
  {
    slug: "festac-lagoon",
    name: "Festac — The Lagoon",
    area: "Lakeside • 70 seats",
    address: "23 21 Road, Festac Town, Lagos",
    tag: "Lakeside • Events",
    image: "https://images.pexels.com/photos/35415671/pexels-photo-35415671.jpeg?auto=compress&cs=tinysrgb&w=800",
    gallery: [
      "https://images.pexels.com/photos/35415671/pexels-photo-35415671.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/33337887/pexels-photo-33337887.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/37461041/pexels-photo-37461041.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    hours: "8am – 10pm daily",
    phone: "+234 800 111 0004",
    amenities: ["Lakeside Dining", "Bar", "Co-working", "Event Deck"],
  },
  {
    slug: "surulere-terrace",
    name: "Surulere — The Terrace",
    area: "Street-level • 80 seats",
    address: "12 Bode Thomas Street, Surulere, Lagos",
    tag: "Workspace • Terrace",
    image: "https://images.pexels.com/photos/18287137/pexels-photo-18287137.jpeg?auto=compress&cs=tinysrgb&w=800",
    gallery: [
      "https://images.pexels.com/photos/18287137/pexels-photo-18287137.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/30688907/pexels-photo-30688907.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/30677716/pexels-photo-30677716.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    hours: "7am – 11pm daily",
    phone: "+234 800 111 0005",
    amenities: ["Terrace Dining", "Co-working", "Meeting Rooms", "Bar"],
  },
  {
    slug: "egbeda-hub",
    name: "Egbeda — The Hub",
    area: "Neighbourhood • 60 seats",
    address: "15 Egbeda-Idimu Road, Egbeda, Lagos",
    tag: "Hub • Gym • Bar",
    image: "https://images.pexels.com/photos/34043577/pexels-photo-34043577.jpeg?auto=compress&cs=tinysrgb&w=800",
    gallery: [
      "https://images.pexels.com/photos/34043577/pexels-photo-34043577.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/30689114/pexels-photo-30689114.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/37461041/pexels-photo-37461041.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    hours: "6am – 10pm daily",
    phone: "+234 800 111 0006",
    amenities: ["Gym", "Co-working", "Bar", "Meeting Rooms", "Community Hall"],
  },
  {
    slug: "ikoyi-atelier",
    name: "Ikoyi — The Atelier",
    area: "Gallery house • 40 seats",
    address: "7 Glover Road, Ikoyi, Lagos",
    tag: "Gallery • Atelier",
    image: "https://images.pexels.com/photos/33962065/pexels-photo-33962065.jpeg?auto=compress&cs=tinysrgb&w=800",
    gallery: [
      "https://images.pexels.com/photos/33962065/pexels-photo-33962065.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/12037023/pexels-photo-12037023.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/33337887/pexels-photo-33337887.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    hours: "9am – 9pm daily",
    phone: "+234 800 111 0007",
    amenities: ["Gallery Walls", "Private Views", "Atelier", "Residency Studio"],
  },
  {
    slug: "abuja-capital",
    name: "Abuja — The Capital",
    area: "Patrons' house • 90 seats",
    address: "12 Usuma Street, Maitama, Abuja",
    tag: "Private • Dining",
    image: "https://images.pexels.com/photos/37320669/pexels-photo-37320669.jpeg?auto=compress&cs=tinysrgb&w=800",
    gallery: [
      "https://images.pexels.com/photos/37320669/pexels-photo-37320669.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/28736724/pexels-photo-28736724.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/36816526/pexels-photo-36816526.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    hours: "8am – 11pm daily",
    phone: "+234 800 111 0008",
    amenities: ["Private Dining", "Catering", "Meeting Rooms", "Event Hall"],
  },
];

export type Space = {
  id: string;
  name: string;
  price: string;
  desc: string;
  capacity: string;
  image: string;
  outletSlugs: string[];
  amenities: string[];
};

export const spaces: Space[] = [
  {
    id: "desk",
    name: "Dedicated Desk",
    price: "₦15,000/day",
    desc: "Fast Wi-Fi, ergonomic chair, locker, unlimited coffee.",
    capacity: "1 guest",
    image: "https://images.pexels.com/photos/30688907/pexels-photo-30688907.jpeg?auto=compress&cs=tinysrgb&w=600",
    outletSlugs: ["vi-dome", "yaba-foundry", "lekki-garden", "festac-lagoon", "surulere-terrace", "egbeda-hub"],
    amenities: ["Wi-Fi 200Mbps", "Locker", "Coffee"],
  },
  {
    id: "office",
    name: "Private Office (2-4)",
    price: "₦45,000/day",
    desc: "Glass suite, whiteboard, privacy for deep work.",
    capacity: "2–4 guests",
    image: "https://images.pexels.com/photos/18287137/pexels-photo-18287137.jpeg?auto=compress&cs=tinysrgb&w=600",
    outletSlugs: ["vi-dome", "yaba-foundry", "surulere-terrace", "festac-lagoon", "egbeda-hub"],
    amenities: ["Whiteboard", "Monitor", "Privacy"],
  },
  {
    id: "meeting",
    name: "Meeting Room",
    price: "₦10,000/hr",
    desc: "AV, boardroom table, 6-8 guests, catering on request.",
    capacity: "6–8 guests",
    image: "https://images.pexels.com/photos/30689114/pexels-photo-30689114.jpeg?auto=compress&cs=tinysrgb&w=600",
    outletSlugs: ["vi-dome", "yaba-foundry", "lekki-garden", "festac-lagoon", "surulere-terrace", "egbeda-hub"],
    amenities: ["AV", "Catering", "Boardroom"],
  },
  {
    id: "studio-podcast",
    name: "Podcast & Content Booth",
    price: "₦12,000/hr",
    desc: "Treated audio, 2 mics, camera, lights.",
    capacity: "1–3 guests",
    image: "https://images.pexels.com/photos/30677716/pexels-photo-30677716.jpeg?auto=compress&cs=tinysrgb&w=600",
    outletSlugs: ["yaba-foundry", "vi-dome"],
    amenities: ["Mics", "Camera", "Acoustic"],
  },
  {
    id: "event",
    name: "Event Hall",
    price: "₦200,000/day",
    desc: "80 guests, bar + kitchen access, AV.",
    capacity: "Up to 80",
    image: "https://images.pexels.com/photos/35415671/pexels-photo-35415671.jpeg?auto=compress&cs=tinysrgb&w=600",
    outletSlugs: ["vi-dome", "lekki-garden", "festac-lagoon", "egbeda-hub"],
    amenities: ["Bar", "Kitchen", "AV"],
  },
  {
    id: "dine",
    name: "Dining Reservation",
    price: "Free",
    desc: "Table for lunch/dinner, pre-order available.",
    capacity: "1–8 guests",
    image: "https://images.pexels.com/photos/37538487/pexels-photo-37538487.jpeg?auto=compress&cs=tinysrgb&w=600",
    outletSlugs: ["vi-dome", "yaba-foundry", "lekki-garden", "festac-lagoon", "surulere-terrace", "egbeda-hub"],
    amenities: ["Fine Dining", "Bar"],
  },
  {
    id: "gym",
    name: "Gym Access — Workouts",
    price: "₦5,000/day",
    desc: "Weights · Cardio · HIIT · Yoga · CrossFit — trainers 6am–10pm. Classes: 7am HIIT, 12pm Mobility, 6pm Strength.",
    capacity: "1 guest",
    image: "https://images.pexels.com/photos/34043577/pexels-photo-34043577.jpeg?auto=compress&cs=tinysrgb&w=600",
    outletSlugs: ["vi-dome", "lekki-garden", "festac-lagoon", "surulere-terrace", "egbeda-hub"],
    amenities: ["Weights", "Cardio", "HIIT", "Yoga", "CrossFit", "Trainer", "Towels", "Showers"],
  },
  {
    id: "gallery-wall",
    name: "Gallery Wall Hire",
    price: "₦25,000/day",
    desc: "White walls, spots & plinths for shows and private views.",
    capacity: "Up to 60",
    image: "https://images.pexels.com/photos/12037023/pexels-photo-12037023.jpeg?auto=compress&cs=tinysrgb&w=600",
    outletSlugs: ["vi-dome", "ikoyi-atelier", "lekki-garden"],
    amenities: ["Hanging", "Lighting", "Vernissage"],
  },
  {
    id: "residency-studio",
    name: "Artist Residency Studio",
    price: "₦30,000/day",
    desc: "Daylight studio, easels, kiln access, critique wall.",
    capacity: "1–4 guests",
    image: "https://images.pexels.com/photos/33337887/pexels-photo-33337887.jpeg?auto=compress&cs=tinysrgb&w=600",
    outletSlugs: ["yaba-foundry", "ikoyi-atelier"],
    amenities: ["Daylight", "Storage", "Critique"],
  },
  {
    id: "fashion-atelier",
    name: "Fashion Atelier & Fitting",
    price: "₦20,000/hr",
    desc: "Runway rail, mirrors, steamer, tailor on call.",
    capacity: "1–6 guests",
    image: "https://images.pexels.com/photos/34061070/pexels-photo-34061070.jpeg?auto=compress&cs=tinysrgb&w=600",
    outletSlugs: ["vi-dome", "ikoyi-atelier"],
    amenities: ["Rail", "Mirrors", "Tailor"],
  },
  {
    id: "celebration-hall",
    name: "Celebration Hall",
    price: "₦120,000/day",
    desc: "Traditional & modern receptions, catering, talking drums on request.",
    capacity: "Up to 120",
    image: "https://images.pexels.com/photos/35730164/pexels-photo-35730164.jpeg?auto=compress&cs=tinysrgb&w=600",
    outletSlugs: ["festac-lagoon", "abuja-capital", "lekki-garden", "vi-dome"],
    amenities: ["Catering", "Stage", "AV"],
  },
];

export type MenuItem = { name: string; price: string; desc: string; tag?: string };
export type MenuSection = { title: string; items: MenuItem[] };

export const menu: MenuSection[] = [
  {
    title: "Small Plates — Naija Bites",
    items: [
      { name: "Suya Arancini", price: "₦6,500", desc: "Smoked beef suya, jollof aioli, yaji dust" },
      { name: "Garden Rolls", price: "₦5,500", desc: "Herb garden, groundnut dip", tag: "V" },
      { name: "Moi Moi Croquettes", price: "₦5,800", desc: "Steamed bean cake, ata din-din, eko crisps" },
      { name: "Pepper Soup Dumplings", price: "₦6,800", desc: "Goat pepper soup broth, utazi oil" },
      { name: "Akara & Tartare", price: "₦6,200", desc: "Black-eyed peas fritters, smoked fish tartare, palm salsa" },
      { name: "Asun Spring Rolls", price: "₦7,000", desc: "Chopped asun, honey-ata, lime" },
    ],
  },
  {
    title: "Mains — Nigerian Classics",
    items: [
      { name: "Wood-Fired Catch", price: "₦14,000", desc: "Line fish, dodo gizzard, mojo verde" },
      { name: "Creator Bowl", price: "₦11,000", desc: "Grains, greens, suya chicken, zobo vinaigrette", tag: "Signature" },
      { name: "Smoky Jollof & Suya", price: "₦13,500", desc: "Party jollof, chicken suya, fried plantain, coleslaw" },
      { name: "Egusi & Pounded Yam Bites", price: "₦12,500", desc: "Egusi, ugu, locust beans, soft pounded yam" },
      { name: "Ofada & Ayamase", price: "₦14,500", desc: "Ofada rice, green pepper stew, assorted meats" },
      { name: "Seafood Okro", price: "₦15,000", desc: "Okro, prawns, crab, fufu crisps" },
      { name: "Nkwobi & Yam Wedges", price: "₦13,000", desc: "Cow foot, palm oil, utazi, yam", tag: "Chef" },
      { name: "Abula Plate", price: "₦12,800", desc: "Amala, gbegiri, ewedu, assorted" },
    ],
  },
  {
    title: "Desserts",
    items: [
      { name: "Puff Puff Beignets", price: "₦5,000", desc: "Warm puff puff, nutmeg sugar, zobo caramel" },
      { name: "Chin Chin Parfait", price: "₦5,500", desc: "Chin chin crumble, vanilla custard, plantain caramel" },
      { name: "Coconut & Agege", price: "₦6,000", desc: "Coconut mousse, Agege crumb, lime" },
      { name: "Zobo Sorbet", price: "₦4,500", desc: "Hibiscus, ginger, clove, shortbread", tag: "V" },
      { name: "Plantain Foster", price: "₦6,200", desc: "Caramelized dodo, palm sugar ice cream, groundnut" },
      { name: "Chocolate & Ewa", price: "₦6,500", desc: "Dark chocolate, sweet bean purée, chin chin" },
    ],
  },
  {
    title: "Cocktails — Lagos Bar",
    items: [
      { name: "Palm & Smoke", price: "₦5,000", desc: "Palm wine, smoked rosemary, yuzu" },
      { name: "Chapman Royale", price: "₦5,500", desc: "Angostura, Grenadine, cucumber, soda, lime" },
      { name: "Zobo Negroni", price: "₦6,500", desc: "Hibiscus gin, campari, vermouth" },
      { name: "Foundry Cold Brew", price: "₦3,500", desc: "Nitro cold brew, oat milk, palm sugar" },
      { name: "Under Bridge", price: "₦6,000", desc: "White rum, coconut, tiger nut, lime" },
      { name: "Lagos Island Iced Tea", price: "₦5,800", desc: "Agidigbo tea, vodka, Chapman bitters" },
      { name: "Pepper & Pine", price: "₦6,200", desc: "Pineapple, ata rodo, gin, basil" },
      { name: "Smoked Chapman", price: "₦5,800", desc: "Chapman, smoked cherry wood" },
      { name: "Tigernut Martini", price: "₦6,000", desc: "Tigernut milk, vodka, palm wine foam" },
    ],
  },
];

export type EventItem = { slug: string; title: string; date: string; time: string; outlet: string; image: string; fee: string };
export const events: EventItem[] = [
  { slug: "founders-dinner", title: "Founders' Table — Dinner", date: "Sep 12", time: "7pm", outlet: "VI Dome", image: "https://images.pexels.com/photos/37461079/pexels-photo-37461079.jpeg?auto=compress&cs=tinysrgb&w=600", fee: "₦20k" },
  { slug: "podcast-jam", title: "Podcast Jam", date: "Sep 18", time: "6pm", outlet: "Yaba Foundry", image: "https://images.pexels.com/photos/30677716/pexels-photo-30677716.jpeg?auto=compress&cs=tinysrgb&w=600", fee: "Free" },
  { slug: "garden-brunch", title: "Garden Brunch & Beats", date: "Sep 21", time: "11am", outlet: "Lekki Garden", image: "https://images.pexels.com/photos/30987048/pexels-photo-30987048.jpeg?auto=compress&cs=tinysrgb&w=600", fee: "₦15k" },
  { slug: "vernissage-gold", title: "Vernissage — Lagos in Gold", date: "Sep 27", time: "5pm", outlet: "Ikoyi Atelier", image: "https://images.pexels.com/photos/12037023/pexels-photo-12037023.jpeg?auto=compress&cs=tinysrgb&w=600", fee: "₦10k" },
  { slug: "fashion-salon", title: "Fashion Salon — Adire & Aso-Ebi", date: "Oct 04", time: "6pm", outlet: "VI Dome", image: "https://images.pexels.com/photos/34061070/pexels-photo-34061070.jpeg?auto=compress&cs=tinysrgb&w=600", fee: "₦15k" },
  { slug: "jazz-gangan", title: "Jazz & Gangan Night", date: "Oct 11", time: "8pm", outlet: "Festac Lagoon", image: "https://images.pexels.com/photos/37572315/pexels-photo-37572315.jpeg?auto=compress&cs=tinysrgb&w=600", fee: "₦12k" },
  { slug: "talking-drums", title: "Talking Drums Circle", date: "Oct 18", time: "4pm", outlet: "Lekki Garden", image: "https://images.pexels.com/photos/36808363/pexels-photo-36808363.jpeg?auto=compress&cs=tinysrgb&w=600", fee: "Free" },
];

export type Tier = { name: string; price: string; period: string; perks: string[]; cta: string; featured?: boolean };
export const tiers: Tier[] = [
  { name: "Pass", price: "₦15,000", period: "/day", perks: ["Day access to workspace", "Coffee & Wi-Fi", "2h meeting credit/mo"], cta: "Day pass" },
  { name: "Creator", price: "₦75,000", period: "/month", perks: ["24/7 access", "10h meeting + 4h studio", "Gym + bar discounts", "Community Slack"], cta: "Join Creator", featured: true },
  { name: "Founders", price: "₦150,000", period: "/month", perks: ["Private office credit", "20h meeting + 8h studio", "Guest passes x4", "Priority events"], cta: "Join Founders" },
];

export type Exhibition = {
  slug: string;
  title: string;
  edition: string;
  dates: string;
  venue: string;
  image: string;
  blurb: string;
  status: "now" | "upcoming" | "past";
  fee: string;
};

export const exhibitions: Exhibition[] = [
  {
    slug: "lagos-in-gold",
    title: "Lagos in Gold",
    edition: "Group show · XII artists",
    dates: "Aug 30 — Oct 12",
    venue: "Ikoyi Atelier",
    image: "https://images.pexels.com/photos/38942545/pexels-photo-38942545.jpeg?auto=compress&cs=tinysrgb&w=800",
    blurb: "Gold leaf, brass and bold colour — twelve Lagos artists on wealth, shine and survival.",
    status: "now",
    fee: "₦5k",
  },
  {
    slug: "adire-futures",
    title: "Adire Futures",
    edition: "Textile & fashion",
    dates: "Oct 19 — Nov 16",
    venue: "VI Dome",
    image: "https://images.pexels.com/photos/34061070/pexels-photo-34061070.jpeg?auto=compress&cs=tinysrgb&w=800",
    blurb: "Indigo-dyed couture on the runway — heritage cloth, future silhouettes.",
    status: "upcoming",
    fee: "₦10k",
  },
  {
    slug: "cloth-and-colour",
    title: "Cloth & Colour",
    edition: "Photography",
    dates: "Nov 23 — Dec 21",
    venue: "Lekki Garden",
    image: "https://images.pexels.com/photos/34584328/pexels-photo-34584328.jpeg?auto=compress&cs=tinysrgb&w=800",
    blurb: "Studio portraits against Ankara backdrops — a love letter to Nigerian fabric.",
    status: "upcoming",
    fee: "Free",
  },
  {
    slug: "her-gaze",
    title: "Her Gaze",
    edition: "Solo · Funmi D.",
    dates: "Jun 07 — Jul 20",
    venue: "Ikoyi Atelier",
    image: "https://images.pexels.com/photos/12037023/pexels-photo-12037023.jpeg?auto=compress&cs=tinysrgb&w=800",
    blurb: "Large-format portraits of Lagos women, painted over two harmattan seasons.",
    status: "past",
    fee: "Sold out",
  },
  {
    slug: "market-modern",
    title: "Market Modern",
    edition: "Craft & design",
    dates: "Apr 12 — May 25",
    venue: "Yaba Foundry",
    image: "https://images.pexels.com/photos/33337887/pexels-photo-33337887.jpeg?auto=compress&cs=tinysrgb&w=800",
    blurb: "Artisans and designers remix market finds into gallery-grade objects.",
    status: "past",
    fee: "Sold out",
  },
  {
    slug: "agbada-studies",
    title: "Agbada Studies",
    edition: "Solo · Emeka O.",
    dates: "Feb 01 — Mar 15",
    venue: "Abuja Capital",
    image: "https://images.pexels.com/photos/37320669/pexels-photo-37320669.jpeg?auto=compress&cs=tinysrgb&w=800",
    blurb: "A photographic census of the agbada — pride, posture and Northern tailoring.",
    status: "past",
    fee: "Sold out",
  },
];

export const creators = [
  { name: "Zainab O.", role: "Filmmaker", outlet: "VI Dome", image: "https://images.pexels.com/photos/37774624/pexels-photo-37774624.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Tunde A.", role: "Designer", outlet: "Yaba Foundry", image: "https://images.pexels.com/photos/14965546/pexels-photo-14965546.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Amara K.", role: "Podcaster", outlet: "Lekki Garden", image: "https://images.pexels.com/photos/33931253/pexels-photo-33931253.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Chidi E.", role: "Founder", outlet: "VI Dome", image: "https://images.pexels.com/photos/34687890/pexels-photo-34687890.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Funmi D.", role: "Painter", outlet: "Ikoyi Atelier", image: "https://images.pexels.com/photos/33962065/pexels-photo-33962065.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Emeka O.", role: "Photographer", outlet: "Yaba Foundry", image: "https://images.pexels.com/photos/37320669/pexels-photo-37320669.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Adaeze N.", role: "Stylist", outlet: "VI Dome", image: "https://images.pexels.com/photos/37997905/pexels-photo-37997905.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Kwame S.", role: "Musician", outlet: "Festac Lagoon", image: "https://images.pexels.com/photos/33993468/pexels-photo-33993468.jpeg?auto=compress&cs=tinysrgb&w=400" },
];
