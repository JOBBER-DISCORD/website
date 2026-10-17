export type Company = {
  name: string;
  logo: string;
  locations: string[];
};

export const cardCompanies: Company[] = [
  {
    name: "Stripe",
    logo: "/logos/stripe.png",
    locations: ["San Francisco", "Toronto · Hybrid", "Remote · US"],
  },
  {
    name: "Notion",
    logo: "/logos/notion.png",
    locations: ["San Francisco", "New York"],
  },
  {
    name: "Figma",
    logo: "/logos/figma.png",
    locations: ["San Francisco", "New York", "London"],
  },
  {
    name: "Spotify",
    logo: "/logos/spotify-icon.png",
    locations: ["New York", "Toronto · Hybrid", "Stockholm"],
  },
  {
    name: "Airbnb",
    logo: "/logos/airbnb.png",
    locations: ["Remote · US", "San Francisco"],
  },
  {
    name: "Linear",
    logo: "/logos/linear.png",
    locations: ["Remote", "Remote · Canada"],
  },
  {
    name: "Discord",
    logo: "/logos/discord-icon.png",
    locations: ["San Francisco", "Remote · US"],
  },
  {
    name: "Duolingo",
    logo: "/logos/duolingo.png",
    locations: ["Pittsburgh", "New York"],
  },
];

export type Brand = {
  name: string;
  logo: string;
};

export const brands: Brand[] = [
  { name: "Shopify", logo: "/logos/shopify.svg" },
  { name: "HubSpot", logo: "/logos/hubspot.png" },
  { name: "Ramp", logo: "/logos/ramp.png" },
  { name: "Chess.com", logo: "/logos/chess-icon.png" },
  { name: "Tesla", logo: "/logos/tesla.png" },
  { name: "Vercel", logo: "/logos/vercel.png" },
  { name: "Jane Street", logo: "/logos/janestreet-dark.svg" },
  { name: "Google", logo: "/logos/google.png" },
  { name: "Apple", logo: "/logos/apple.svg" },
];
