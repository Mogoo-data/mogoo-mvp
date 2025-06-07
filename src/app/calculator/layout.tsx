"use client";

import { TopNav } from "@/components/nav";

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopNav title="Caculator" />
      <main>{children}</main>
    </>
  );
}
