import { foodImages, drinkImages, interiorImages } from "./images";

export type GalleryCategory = "all" | "cuisine" | "ambiance" | "bar";

export const galleryCollection = [
  {
    id: 1,
    src: interiorImages.ambiance1,
    alt: "Evening ambiance at Rosslyn Square",
    title: "The Grand Salon",
    caption: "Soft candlelight and refined interiors — where Nairobi's evenings begin.",
    category: "ambiance" as GalleryCategory,
    span: "col-span-2 row-span-2",
  },
  {
    id: 2,
    src: foodImages.elegantlyfriedfood1,
    alt: "Artfully plated starter",
    title: "Truffle Arancini",
    caption: "Precision on every plate. Delicacy, plated with intention.",
    category: "cuisine" as GalleryCategory,
    span: "col-span-1 row-span-1",
  },
  {
    id: 3,
    src: interiorImages.inside,
    alt: "TAVO main dining room",
    title: "The Dining Room",
    caption: "Intimate tables, generous spacing — the privacy Nairobi's finest expect.",
    category: "ambiance" as GalleryCategory,
    span: "col-span-1 row-span-1",
  },
  {
    id: 4,
    src: foodImages.friedmeatcuisine,
    alt: "Wagyu beef carpaccio",
    title: "Wagyu Carpaccio",
    caption: "Thinly sliced excellence — an opening worthy of the evening ahead.",
    category: "cuisine" as GalleryCategory,
    span: "col-span-1 row-span-1",
  },
  {
    id: 5,
    src: drinkImages.twoglassescombineddrink,
    alt: "Signature cocktails",
    title: "The Bar",
    caption: "Artisan cocktails and curated pours — where conversations deepen.",
    category: "bar" as GalleryCategory,
    span: "col-span-1 row-span-1",
  },
  {
    id: 6,
    src: interiorImages.ambiance2,
    alt: "Luxury table setting",
    title: "Table for Two",
    caption: "Every setting tells a story. Yours begins here.",
    category: "ambiance" as GalleryCategory,
    span: "col-span-1 row-span-1",
  },
  {
    id: 7,
    src: foodImages.seafood,
    alt: "Lobster bisque",
    title: "Lobster Bisque",
    caption: "Silky, rich, unforgettable — a signature opening delicacy.",
    category: "cuisine" as GalleryCategory,
    span: "col-span-1 row-span-1",
  },
  {
    id: 8,
    src: interiorImages.interior,
    alt: "TAVO interior panorama",
    title: "Rosslyn Square",
    caption: "Nairobi's premier address for refined dining.",
    category: "ambiance" as GalleryCategory,
    span: "col-span-2 row-span-1",
  },
  {
    id: 9,
    src: foodImages.elegantlyfriedfood2,
    alt: "Chef's plated creation",
    title: "Chef's Creation",
    caption: "Fusion artistry — global technique, Nairobi soul.",
    category: "cuisine" as GalleryCategory,
    span: "col-span-1 row-span-1",
  },
  {
    id: 10,
    src: drinkImages.chillingdrink,
    alt: "Chilled wine service",
    title: "Wine Service",
    caption: "Sommelier-curated pairings for every course.",
    category: "bar" as GalleryCategory,
    span: "col-span-1 row-span-1",
  },
  {
    id: 11,
    src: interiorImages.carousel,
    alt: "Private dining atmosphere",
    title: "Private Moments",
    caption: "Celebrations, board dinners, and milestones — handled with grace.",
    category: "ambiance" as GalleryCategory,
    span: "col-span-1 row-span-1",
  },
  {
    id: 12,
    src: foodImages.superservedlunch,
    alt: "Truffle risotto",
    title: "Truffle Risotto",
    caption: "Vegetarian prestige — indulgence without compromise.",
    category: "cuisine" as GalleryCategory,
    span: "col-span-1 row-span-1",
  },
];

export const galleryCategories: { id: GalleryCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "cuisine", label: "Cuisine" },
  { id: "ambiance", label: "Ambiance" },
  { id: "bar", label: "Bar & Wine" },
];

export const aboutStory = {
  origin: `TAVO was conceived for a city that knows luxury — Nairobi. In the heart of Rosslyn Square, 
    among the residences and hotels that define Kenya's capital, we set out to create something rare: 
    a restaurant that speaks the language of delicacies with the confidence of a world-class hotel.`,
  philosophy: `Our kitchen draws from global technique and local soul. Every ingredient is chosen with 
    the same care a five-star hotel reserves for its flagship restaurant. Every plate is composed 
    not merely to satisfy, but to linger — in memory, in conversation, in the quiet satisfaction 
    of an evening done right.`,
  promise: `We do not chase trends. We pursue excellence — in flavour, in service, in the unspoken 
    details that separate a good meal from an extraordinary one. At TAVO, you are not a guest at 
  a table. You are the reason we exist.`,
};

export const aboutMilestones = [
  { year: "Vision", title: "Born in Rosslyn", detail: "Conceived as Nairobi's answer to international fine dining." },
  { year: "Craft", title: "Chef-Led Kitchen", detail: "A team united by precision, passion, and plate-by-plate excellence." },
  { year: "Today", title: "A Nairobi Institution", detail: "Trusted by executives, diplomats, and families who expect the finest." },
];

export const aboutValues = [
  {
    title: "Delicacy",
    description: "Every dish composed with restraint and intention — flavours that speak, never shout.",
  },
  {
    title: "Ambience",
    description: "An atmosphere of quiet luxury — intimate lighting, generous space, refined acoustics.",
  },
  {
    title: "Service",
    description: "White-glove hospitality. Anticipatory, discreet, and warm — as Nairobi's finest deserve.",
  },
  {
    title: "Integrity",
    description: "Premium sourcing, honest craft, and standards that never bend for convenience.",
  },
];

export const aboutTestimonials = [
  {
    quote: "At TAVO, we don't just create meals — we craft experiences that linger long after the last bite.",
    name: "Executive Chef",
    role: "TAVO Kitchen",
  },
  {
    quote: "TAVO has redefined what fine dining means in Nairobi. The ambience rivals any international hotel.",
    name: "Robert Johns",
    role: "Regular Patron",
  },
  {
    quote: "From the moment you arrive, every detail whispers luxury. This is Nairobi dining at its finest.",
    name: "Shantel Waigera",
    role: "Frequent Guest",
  },
  {
    quote: "The attention to detail is extraordinary. TAVO understands what discerning Nairobi expects.",
    name: "SK Macharia",
    role: "Valued Guest",
  },
  {
    quote: "Our board dinners at TAVO are always flawless. The private dining experience is unmatched.",
    name: "Corporate Host",
    role: "Rosslyn Square",
  },
];

export const eventOfferings = [
  {
    title: "Private Dining Suites",
    subtitle: "2 – 20 Guests",
    description:
      "Secluded rooms for intimate celebrations and executive dinners. Bespoke menus, dedicated service, and the discretion Nairobi's elite require.",
    highlights: ["Custom menu curation", "Wine pairing by our sommelier", "Private entrance available", "Occasion styling on request"],
    icon: "users" as const,
  },
  {
    title: "Corporate & Board Dinners",
    subtitle: "Business at Its Finest",
    description:
      "Impress clients and colleagues in a setting that speaks success. Presentation-ready spaces, premium cuisine, and service that never interrupts.",
    highlights: ["Executive lunch packages", "AV-friendly private rooms", "Discreet billing options", "Dietary accommodations"],
    icon: "award" as const,
  },
  {
    title: "Celebrations & Milestones",
    subtitle: "Birthdays · Anniversaries · Engagements",
    description:
      "Mark life's finest moments in a room designed for memory-making. From surprise proposals to golden anniversaries — we orchestrate every detail.",
    highlights: ["Celebration menus", "Cake & dessert coordination", "Floral styling referrals", "Photography-friendly setups"],
    icon: "star" as const,
  },
  {
    title: "Wedding Receptions",
    subtitle: "Elegant Beginnings",
    description:
      "Rehearsal dinners and intimate wedding receptions with the elegance Nairobi deserves. Tasting sessions, custom menus, and flawless execution.",
    highlights: ["Menu tasting sessions", "Bridal party packages", "Full-service coordination", "Halal & dietary options"],
    icon: "calendar" as const,
  },
  {
    title: "Off-Site Catering",
    subtitle: "TAVO, Where You Are",
    description:
      "Bring the TAVO experience to your residence, office, or venue. Full-service catering with the same standards as our Rosslyn Square table.",
    highlights: ["On-site chef service", "Premium tableware", "Professional setup & breakdown", "Minimum 20 guests"],
    icon: "map" as const,
  },
  {
    title: "Seasonal & Holiday Events",
    subtitle: "Curated Seasonal Evenings",
    description:
      "Valentine's, festive season, and Nairobi's social calendar — celebrated with themed menus, extended hours, and evenings worth dressing for.",
    highlights: ["Holiday tasting menus", "Group packages", "Gift voucher options", "Early booking recommended"],
    icon: "clock" as const,
  },
];

export const eventProcess = [
  { step: "01", title: "Consult", detail: "Share your vision. We listen first — guest count, occasion, preferences, and budget." },
  { step: "02", title: "Curate", detail: "Our chef designs a bespoke menu. Our events team maps every service detail." },
  { step: "03", title: "Taste", detail: "Sample proposed dishes. Refine until every course feels exactly right." },
  { step: "04", title: "Celebrate", detail: "Flawless execution. You enjoy the evening — we handle everything else." },
];

export const contactMessage = {
  headline: "We'd Love to Hear From You",
  opening: `Whether you're planning an intimate dinner for two, a board meeting that demands excellence, 
    or a celebration that Nairobi will remember — your message lands directly with our team.`,
  body: `At TAVO, every enquiry is treated with the same care we bring to every plate. 
    Reservations, private events, dietary requests, or simply a question about what to order — 
    we respond with warmth, speed, and the discretion you expect from Nairobi's finest.`,
  closing: `Rosslyn Square awaits. Write to us — we'll make sure your evening begins long before you arrive.`,
  signature: "The TAVO Team",
};
