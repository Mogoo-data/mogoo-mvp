import { TopNav } from "@/components/nav";

export default function ResourceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>  
      <TopNav title="Market News" />
      <main>{children}</main>
    </>
  );
}
