import { foodImages, drinkImages, interiorImages } from "./images";

export const luxuryStandards = [
  "Sommelier-Curated Wines",
  "Private Dining Suites",
  "Chef's Table Experience",
  "Valet at Rosslyn Square",
  "Artisan Cocktails",
  "White-Glove Service",
  "Seasonal Tasting Menus",
  "Nairobi's Finest Address",
];

export const featuredDelicacies = [
  {
    id: "wagyu",
    name: "Wagyu Beef Tenderloin",
    tagline: "Signature Main",
    description:
      "Hand-selected wagyu, flame-seared and finished with truffle jus — a centrepiece worthy of Nairobi's most discerning tables.",
    price: "KES 3,500",
    image: foodImages.driedmeatcuisine,
    note: "Chef's Recommendation",
  },
  {
    id: "lobster",
    name: "Lobster Bisque",
    tagline: "Opening Delicacy",
    description:
      "Silky bisque enriched with cognac and fresh herbs — the kind of opening act expected at a five-star Nairobi evening.",
    price: "KES 1,500",
    image: foodImages.seafood,
    note: "Guest Favourite",
  },
  {
    id: "truffle",
    name: "Truffle Risotto",
    tagline: "Vegetarian Prestige",
    description:
      "Creamy arborio kissed with black truffle and wild mushrooms — indulgence without compromise.",
    price: "KES 2,200",
    image: foodImages.superservedlunch,
    note: "Seasonal Highlight",
  },
  {
    id: "cocktails",
    name: "Signature Cocktails",
    tagline: "Bar & Lounge",
    description:
      "Crafted by our mixologist — bold, balanced, and designed to complement every course of your evening.",
    price: "From KES 1,200",
    image: drinkImages.twoglassescombineddrink,
    note: "House Special",
  },
];

export const experiences = [
  {
    title: "Private Dining",
    subtitle: "Intimate. Exclusive. Unforgettable.",
    description:
      "Secluded suites for board dinners, anniversaries, and celebrations — with bespoke menus and dedicated service, as expected at Nairobi's finest hotels.",
    icon: "crown" as const,
  },
  {
    title: "Wine & Spirits",
    subtitle: "A cellar worth the journey",
    description:
      "International vintages and rare pours, curated to pair with our fusion menu — the standard Nairobi's luxury diners demand.",
    icon: "wine" as const,
  },
  {
    title: "Chef's Table",
    subtitle: "Front-row to the kitchen",
    description:
      "Watch artistry unfold. A multi-course journey narrated by our executive chef — limited seats, extraordinary evenings.",
    icon: "chef" as const,
  },
];

export const ambianceDisplays = [
  {
    src: interiorImages.ambiance1,
    alt: "TAVO evening ambiance at Rosslyn Square",
    span: "col-span-2 row-span-2",
  },
  {
    src: foodImages.elegantlyfriedfood1,
    alt: "Artfully plated delicacy",
    span: "col-span-1 row-span-1",
  },
  {
    src: interiorImages.inside,
    alt: "TAVO interior dining room",
    span: "col-span-1 row-span-1",
  },
  {
    src: drinkImages.chillingdrink,
    alt: "Premium chilled beverages",
    span: "col-span-1 row-span-1",
  },
  {
    src: interiorImages.ambiance2,
    alt: "Luxury table setting",
    span: "col-span-1 row-span-1",
  },
];

export const guestTestimonials = [
  {
    quote:
      "TAVO sets the bar for fine dining in Nairobi. The attention to detail rivals any international five-star hotel I've visited.",
    name: "Executive Guest",
    title: "Regular Patron, Rosslyn",
  },
  {
    quote:
      "From the first amuse-bouche to the final pour — every moment felt curated. This is what luxury dining in Kenya should be.",
    name: "Diplomatic Circle",
    title: "Private Dining Guest",
  },
  {
    quote:
      "The ambience, the service, the flavours — TAVO understands what Nairobi's elite expect. Simply exceptional.",
    name: "SK Macharia",
    title: "Valued Guest",
  },
];
