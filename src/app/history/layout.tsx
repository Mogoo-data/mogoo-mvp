import { TopNav } from "@/components/nav";

export default function HistoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>  
      <TopNav title="History" />
      <main>{children}</main>
    </>
  );
}
