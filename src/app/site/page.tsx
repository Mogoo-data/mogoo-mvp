
import { SiteResult } from "@/types/types";
import SiteCard from "./siteCard";

async function fetchData(): Promise<SiteResult[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/site/all`);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
}

export default async function Home() {
  const data = await fetchData();
  if (!data || data.length === 0) {
    return <div className="text-center p-4">No sites available.</div>;
  }

  return (
    <div className="gap-4 p-4 lg:p-6 space-y-4">
      {data.map((site) => (
        <SiteCard data={site} />
      ))}
    </div>
  );
}