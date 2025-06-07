import { Calculator, Gauge, History, Rss, Factory, Wrench, type LucideIcon, MessagesSquare } from "lucide-react";

export type SiteConfig = typeof siteConfig;
export type Navigation = {
  icon: LucideIcon;
  name: string;
  href: string;
};

export const siteConfig = {
  title: "VisActor Next Template",
  description: "Template for VisActor and Next.js",
};

export const navigations: Navigation[] = [
  {
    icon: Gauge,
    name: "Dashboard",
    href: "/",
  },
  {
    icon: Factory,
    name: "Sites",
    href: "/site",
  },
  {
    icon: Calculator,
    name: "Calculator",
    href: "/calculator",
  },
  {
    icon: History,
    name: "History",
    href: "/history",
  },
  {
    icon: Rss,
    name: "Market News",
    href: "/market",
  },
  {
    icon: Wrench,
    name: "Resources",
    href: "/resource",
  }
];
