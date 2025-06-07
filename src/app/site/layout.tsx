import { TopNav } from "@/components/nav";

export default function SitesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>  
      <TopNav title="Sites" />
      <main>{children}</main>
    </>
  );
}
