import { TopNav } from "@/components/nav";

export default function ResourceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>  
      <TopNav title="Resource" />
      <main>{children}</main>
    </>
  );
}
