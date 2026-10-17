export type Role = {
  title: string;
  /** Base pay from the company's own job postings (Shopify: Levels.fyi, it doesn't post ranges). */
  pay: string;
  locations: string[];
};

export type Company = {
  name: string;
  logo: string;
  roles: Role[];
};

export const cardCompanies: Company[] = [
  {
    name: "Stripe",
    logo: "/logos/stripe.png",
    roles: [
      { title: "New Grad SWE", pay: "$122–134k", locations: ["San Francisco", "Seattle", "New York"] },
      { title: "New Grad SWE", pay: "CA$106–160k", locations: ["Toronto · Hybrid"] },
    ],
  },
  {
    name: "Notion",
    logo: "/logos/notion.png",
    roles: [
      { title: "Software Engineer", pay: "$126–180k", locations: ["San Francisco", "New York"] },
      { title: "Senior Software Engineer", pay: "$230–320k", locations: ["San Francisco", "New York"] },
      { title: "Software Engineer, AI", pay: "$272–320k", locations: ["San Francisco"] },
    ],
  },
  {
    name: "Figma",
    logo: "/logos/figma.png",
    roles: [
      { title: "Product Designer", pay: "$150–200k", locations: ["San Francisco", "New York"] },
      { title: "Senior Product Designer", pay: "$164–294k", locations: ["San Francisco", "New York"] },
      { title: "Software Engineer", pay: "$149–350k", locations: ["San Francisco", "New York"] },
    ],
  },
  {
    name: "Spotify",
    logo: "/logos/spotify-icon.png",
    roles: [
      { title: "Backend Engineer", pay: "$160–229k", locations: ["New York"] },
      { title: "Senior Backend Engineer", pay: "$164–235k", locations: ["New York", "Los Angeles"] },
      { title: "Data Scientist II", pay: "$110–157k", locations: ["New York"] },
    ],
  },
  {
    name: "Airbnb",
    logo: "/logos/airbnb.png",
    roles: [
      { title: "Data Scientist", pay: "$151–175k", locations: ["Remote · US"] },
      { title: "Senior Data Scientist", pay: "$179–210k", locations: ["Remote · US", "San Francisco"] },
      { title: "Staff Data Scientist", pay: "$194–240k", locations: ["Remote · US", "San Francisco"] },
    ],
  },
  {
    name: "Discord",
    logo: "/logos/discord-icon.png",
    roles: [
      { title: "Software Engineer", pay: "$160–180k", locations: ["San Francisco", "Remote · US"] },
      { title: "Senior Software Engineer", pay: "$196–221k", locations: ["San Francisco"] },
    ],
  },
  {
    name: "Duolingo",
    logo: "/logos/duolingo.png",
    roles: [
      { title: "New Grad SWE", pay: "$123–167k", locations: ["Pittsburgh", "New York"] },
      { title: "Software Engineer II", pay: "$153–207k", locations: ["Pittsburgh"] },
      { title: "Senior iOS Engineer", pay: "$178–240k", locations: ["Pittsburgh"] },
    ],
  },
  {
    name: "Google",
    logo: "/logos/google.png",
    roles: [
      { title: "Software Engineer III", pay: "$147–211k", locations: ["Mountain View", "New York", "Seattle"] },
      { title: "Product Manager", pay: "$138–198k", locations: ["Mountain View"] },
      { title: "Associate PM", pay: "$113–161k", locations: ["Mountain View", "San Francisco"] },
      { title: "Software Developer", pay: "CA$126–129k", locations: ["Waterloo", "Montreal"] },
    ],
  },
  {
    name: "Tesla",
    logo: "/logos/tesla.png",
    roles: [
      { title: "AI Inference Engineer", pay: "$118–390k", locations: ["Palo Alto"] },
      { title: "System Software Engineer", pay: "$140–360k", locations: ["Palo Alto"] },
    ],
  },
  {
    name: "Shopify",
    logo: "/logos/shopify.svg",
    roles: [
      { title: "Developer", pay: "CA$123–172k", locations: ["Remote · Canada"] },
      { title: "Staff Developer", pay: "CA$220–235k", locations: ["Remote · Canada"] },
    ],
  },
  {
    name: "Jane Street",
    logo: "/logos/janestreet-dark.svg",
    roles: [
      { title: "Quantitative Researcher", pay: "$300k", locations: ["New York", "London"] },
      { title: "Software Engineer", pay: "$300k", locations: ["New York", "London"] },
    ],
  },
  {
    name: "Amazon",
    logo: "/logos/amazon.png",
    roles: [
      { title: "Software Dev Engineer", pay: "$129–224k", locations: ["Seattle", "New York", "Arlington"] },
      { title: "SDE II", pay: "$144–194k", locations: ["Seattle"] },
    ],
  },
  {
    name: "Ramp",
    logo: "/logos/ramp.png",
    roles: [
      { title: "New Grad SWE", pay: "$142–175k", locations: ["New York"] },
      { title: "Senior Software Engineer", pay: "$200–300k", locations: ["New York"] },
    ],
  },
  {
    name: "Datadog",
    logo: "/logos/datadog.png",
    roles: [
      { title: "Senior Software Engineer", pay: "$187–240k", locations: ["New York"] },
      { title: "Staff Software Engineer", pay: "$234–300k", locations: ["New York"] },
    ],
  },
  {
    name: "Apple",
    logo: "/logos/apple.svg",
    roles: [
      { title: "Software Engineer", pay: "$147–221k", locations: ["Cupertino"] },
      { title: "Senior iOS Engineer", pay: "$181–318k", locations: ["Cupertino"] },
    ],
  },
  {
    name: "Vercel",
    logo: "/logos/vercel.png",
    roles: [
      { title: "Software Engineer", pay: "$200–240k", locations: ["San Francisco"] },
      { title: "Software Engineer", pay: "$156–270k", locations: ["New York"] },
    ],
  },
  {
    name: "Netflix",
    logo: "/logos/netflix.png",
    roles: [{ title: "Senior Software Engineer", pay: "$250–413k", locations: ["Los Gatos"] }],
  },
  {
    name: "Coinbase",
    logo: "/logos/coinbase.png",
    roles: [
      { title: "Software Engineer", pay: "$129–152k", locations: ["Remote · US"] },
      { title: "Backend Engineer", pay: "$152–179k", locations: ["Remote · US"] },
    ],
  },
  {
    name: "Uber",
    logo: "/logos/uber.png",
    roles: [
      { title: "Software Engineer II", pay: "$214–256k", locations: ["San Francisco"] },
      { title: "Software Engineer II", pay: "$198–209k", locations: ["Sunnyvale"] },
    ],
  },
  {
    name: "Robinhood",
    logo: "/logos/robinhood.png",
    roles: [
      { title: "Software Engineer", pay: "$162–195k", locations: ["Menlo Park"] },
      { title: "Senior Software Engineer", pay: "$187–220k", locations: ["Menlo Park", "New York"] },
    ],
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
