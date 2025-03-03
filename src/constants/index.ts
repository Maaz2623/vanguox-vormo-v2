import {
  Building,
  CreditCard,
  GaugeIcon,
  Home,
  Search,
  TicketIcon,
} from "lucide-react";
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
    title: "Tickets",
    url: "/tickets",
    icon: TicketIcon,
  },
  {
    title: "Org Subscriptions",
    url: "/subscriptions",
    icon: CreditCard,
  },
];

export const sidebarPlatformItems = [
  {
    title: "Billing",
    url: "/billing",
    icon: GaugeIcon,
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

export const isSubscribed = false;

export const exo2 = Exo_2({
  subsets: ["latin"],
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

export const rules = [
  "Only registered users can participate",
  "Age 18+ required",
  "Students only",
  "VIP members get priority access",
  "Staff-only section",
  "Verified accounts required",
  "Event participants only",
  "No duplicate registrations allowed",
  "Entry closes 10 minutes before the event",
  "Follow community guidelines",
];

export const tags = [
  "Contingent",
  "Eligible",
  "Restricted",
  "Exclusive",
  "Qualified",
  "Authorized",
  "Permitted",
  "Limited",
  "Approved",
  "Designated",
  "Entitled",
];

export const competitions = [
  {
    label: "Code Clash",
    description:
      "A competitive coding challenge where participants solve algorithmic problems within a time limit.",
    prize: "₹10,000",
    teamSize: 1,
  },
  {
    label: "Tech Quiz Showdown",
    description:
      "A fast-paced quiz competition testing participants' knowledge of technology and programming.",
    prize: "₹5,000",
    teamSize: 2,
  },
  {
    label: "Bug Bounty Hunt",
    description:
      "Participants analyze code snippets to find and fix hidden bugs within a time frame.",
    prize: "₹8,000",
    teamSize: 1,
  },
  {
    label: "AI Bot Battle",
    description:
      "Teams develop AI-powered bots to compete in a strategic game.",
    prize: "₹12,000",
    teamSize: 3,
  },
  {
    label: "Hackathon Sprint",
    description:
      "A 24-hour hackathon where teams build innovative solutions for real-world problems.",
    prize: "₹25,000",
    teamSize: 4,
  },
  {
    label: "Reverse Engineering Challenge",
    description:
      "Decode and break down software or algorithms to understand their logic.",
    prize: "₹7,500",
    teamSize: 2,
  },
  {
    label: "Web Dev Face-Off",
    description:
      "Participants build a web app in a limited time with a surprise theme.",
    prize: "₹15,000",
    teamSize: 3,
  },
  {
    label: "Gaming Tournament",
    description: "Compete in popular e-sports games for glory and prizes.",
    prize: "₹20,000",
    teamSize: 5,
  },
  {
    label: "Cyber Security CTF",
    description:
      "A Capture The Flag event where participants solve security-related challenges.",
    prize: "₹18,000",
    teamSize: 3,
  },
  {
    label: "Design Derby",
    description:
      "UI/UX designers compete to create the most user-friendly and aesthetic interface.",
    prize: "₹10,000",
    teamSize: 2,
  },
];
