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
    image: "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=800",
    gallery: [
      "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/704971/pexels-photo-704971.jpeg?auto=compress&cs=tinysrgb&w=800",
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
    image: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800",
    gallery: [
      "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=800",
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
    image: "https://images.pexels.com/photos/704971/pexels-photo-704971.jpeg?auto=compress&cs=tinysrgb&w=800",
    gallery: [
      "https://images.pexels.com/photos/704971/pexels-photo-704971.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    hours: "7:30am – 10pm daily",
    phone: "+234 800 111 0003",
    amenities: ["Garden Dining", "Brunch", "Co-working", "Outdoor Events"],
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
    image: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=600",
    outletSlugs: ["vi-dome", "yaba-foundry", "lekki-garden"],
    amenities: ["Wi-Fi 200Mbps", "Locker", "Coffee"],
  },
  {
    id: "office",
    name: "Private Office (2-4)",
    price: "₦45,000/day",
    desc: "Glass suite, whiteboard, privacy for deep work.",
    capacity: "2–4 guests",
    image: "https://images.pexels.com/photos/260689/pexels-photo-260689.jpeg?auto=compress&cs=tinysrgb&w=600",
    outletSlugs: ["vi-dome", "yaba-foundry"],
    amenities: ["Whiteboard", "Monitor", "Privacy"],
  },
  {
    id: "meeting",
    name: "Meeting Room",
    price: "₦10,000/hr",
    desc: "AV, boardroom table, 6-8 guests, catering on request.",
    capacity: "6–8 guests",
    image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600",
    outletSlugs: ["vi-dome", "yaba-foundry", "lekki-garden"],
    amenities: ["AV", "Catering", "Boardroom"],
  },
  {
    id: "studio-podcast",
    name: "Podcast & Content Booth",
    price: "₦12,000/hr",
    desc: "Treated audio, 2 mics, camera, lights.",
    capacity: "1–3 guests",
    image: "https://images.pexels.com/photos/342520/pexels-photo-342520.jpeg?auto=compress&cs=tinysrgb&w=600",
    outletSlugs: ["yaba-foundry", "vi-dome"],
    amenities: ["Mics", "Camera", "Acoustic"],
  },
  {
    id: "event",
    name: "Event Hall",
    price: "₦200,000/day",
    desc: "80 guests, bar + kitchen access, AV.",
    capacity: "Up to 80",
    image: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=600",
    outletSlugs: ["vi-dome", "lekki-garden"],
    amenities: ["Bar", "Kitchen", "AV"],
  },
  {
    id: "dine",
    name: "Dining Reservation",
    price: "Free",
    desc: "Table for lunch/dinner, pre-order available.",
    capacity: "1–8 guests",
    image: "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=600",
    outletSlugs: ["vi-dome", "yaba-foundry", "lekki-garden"],
    amenities: ["Fine Dining", "Bar"],
  },
  {
    id: "gym",
    name: "Gym Access",
    price: "₦5,000/day",
    desc: "Weights, cardio, HIIT & mobility — trainers on floor 6am–10pm.",
    capacity: "1 guest",
    image: "https://images.pexels.com/photos/4464780/pexels-photo-4464780.jpeg?auto=compress&cs=tinysrgb&w=600",
    outletSlugs: ["vi-dome", "lekki-garden"],
    amenities: ["Weights", "Cardio", "HIIT", "Trainer", "Towels"],
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
  { slug: "founders-dinner", title: "Founders' Table — Dinner", date: "Sep 12", time: "7pm", outlet: "VI Dome", image: "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=600", fee: "₦20k" },
  { slug: "podcast-jam", title: "Podcast Jam", date: "Sep 18", time: "6pm", outlet: "Yaba Foundry", image: "https://images.pexels.com/photos/342520/pexels-photo-342520.jpeg?auto=compress&cs=tinysrgb&w=600", fee: "Free" },
  { slug: "garden-brunch", title: "Garden Brunch & Beats", date: "Sep 21", time: "11am", outlet: "Lekki Garden", image: "https://images.pexels.com/photos/704971/pexels-photo-704971.jpeg?auto=compress&cs=tinysrgb&w=600", fee: "₦15k" },
];

export type Tier = { name: string; price: string; period: string; perks: string[]; cta: string; featured?: boolean };
export const tiers: Tier[] = [
  { name: "Pass", price: "₦15,000", period: "/day", perks: ["Day access to workspace", "Coffee & Wi-Fi", "2h meeting credit/mo"], cta: "Day pass" },
  { name: "Creator", price: "₦75,000", period: "/month", perks: ["24/7 access", "10h meeting + 4h studio", "Gym + bar discounts", "Community Slack"], cta: "Join Creator", featured: true },
  { name: "Founders", price: "₦150,000", period: "/month", perks: ["Private office credit", "20h meeting + 8h studio", "Guest passes x4", "Priority events"], cta: "Join Founders" },
];

export const creators = [
  { name: "Zainab O.", role: "Filmmaker", outlet: "VI Dome", image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Tunde A.", role: "Designer", outlet: "Yaba Foundry", image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Amara K.", role: "Podcaster", outlet: "Lekki Garden", image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Chidi E.", role: "Founder", outlet: "VI Dome", image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400" },
];
