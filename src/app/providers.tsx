"use client";

import { Provider as JotaiProvider } from "jotai";
import { ChartThemeProvider } from "@/components/providers/chart-theme-provider";
import { ModeThemeProvider } from "@/components/providers/mode-theme-provider";
import { SessionProvider } from "next-auth/react"
import type { Session } from "next-auth";

export function Providers({ children, session }: { children: React.ReactNode, session: Session } ) {
  return (
    <SessionProvider session={session}>

    <JotaiProvider>
      <ModeThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <ChartThemeProvider>{children}</ChartThemeProvider>
      </ModeThemeProvider>
    </JotaiProvider>
    </SessionProvider>
  );
}
