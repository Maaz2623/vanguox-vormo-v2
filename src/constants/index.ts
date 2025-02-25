import { Building, CreditCard, Home, Search } from "lucide-react";
import { Exo_2, Poppins } from "next/font/google";

// Menu items.
export const sidebarGeneralItems = [
  {
    title: "Home",
    url: "/events",
    icon: Home,
  },
  {
    title: "Search",
    url: "/search",
    icon: Search,
  },
];

export const sidebarPrivateItems = [
  {
    title: "Organizations",
    url: "/organizations",
    icon: Building,
  },
  {
    title: "Subscriptions",
    url: "/subscriptions",
    icon: CreditCard,
  },
];

export const ORGANIZATION_FETCH_LIMIT = 5;
export const EVENTS_FETCH_LIMIT = 5;

export enum EventType {
  PUBLIC = "PUBLIC",
  PRIVATE = "PRIVATE",
}

export const organizations = [
  {
    id: "org-123",
    name: "Tech Innovators",
    slug: "tech-innovators",
    ownerEmail: "admin@techinnovators.com",
    active: true,
    createdAt: new Date("2024-01-15"),
  },
  {
    id: "org-456",
    name: "Code Masters",
    slug: "code-masters",
    ownerEmail: "owner@codemasters.com",
    active: false,
    createdAt: new Date("2023-11-10"),
  },
  {
    id: "org-789",
    name: "AI Pioneers",
    slug: "ai-pioneers",
    ownerEmail: "founder@aipioneers.com",
    active: true,
    createdAt: new Date("2024-02-05"),
  },
];

export const events = [
  {
    id: "org-123",
    name: "Tech Innovators",
    slug: "tech-innovators",
  },
  {
    id: "org-456",
    name: "Code Masters",
    slug: "code-masters",
  },
  {
    id: "org-789",
    name: "AI Pioneers",
    slug: "ai-pioneers",
  },
];

export const eventTags = ["contingent", "individual"];

export const isOwner = true;

export const exo2 = Exo_2({
  subsets: ["latin"],
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});
