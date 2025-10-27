export type MenuCategory = "starters" | "mains" | "desserts" | "drinks";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  image?: string;
  isVegetarian?: boolean;
  isVegan?: boolean;
  spiceLevel?: "mild" | "medium" | "hot";
  allergens?: string[];
}

export interface Reservation {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  specialRequests?: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
