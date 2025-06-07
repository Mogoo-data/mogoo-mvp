"use client";
import { Gabarito } from "next/font/google";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import "@/style/globals.css";
import { Providers } from "./providers";
import type { Session } from "next-auth";
import { NavbarWrapper } from "@/components/nav";



const gabarito = Gabarito({ subsets: ["latin"], variable: "--font-gabarito" });

export default function RootLayout({
  children,
  session,
}: Readonly<{
  children: React.ReactNode;
  session: Session;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("bg-background font-sans", gabarito.variable)}>
        <Providers session={session}>
          <div className="flex min-h-[100dvh]">
            <NavbarWrapper />
            <div className="flex-grow overflow-auto">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
