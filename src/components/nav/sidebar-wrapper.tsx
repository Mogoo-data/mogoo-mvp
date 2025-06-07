"use client";

import { usePathname } from "next/navigation";
import { SideNav } from "@/components/nav";

export default function SidebarWrapper() {
  const pathname = usePathname();
  if (pathname === "/login") return null;
  return <SideNav />;
}
