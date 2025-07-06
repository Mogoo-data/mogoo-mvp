import { SiteResult } from "@/types/types";
import { MarketNews, marketNewsExample } from "@/types/types";
import SummaryCard from '@/app/(dashboard)/summaryCard';
import MarketCard from "./marketCard";
import SitesCard from "./sitesCard";
import ResourceCard from "../../components/card-blocks/resourceCard";
import { cookies } from 'next/headers';

async function fetchData(): Promise<SiteResult[]> {
  const cookieStore = await cookies(); 
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/sites/all`, {
    headers: {
      cookie: cookieStore.toString(),
    },
    cache: 'no-store',
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.status} ${await response.json()}`);
  }
  return response.json();
}

export default async function Home() {
  const data = await fetchData();

  return (
    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:p-6">
      <SummaryCard data={data} ></SummaryCard>
      <MarketCard data={marketNewsExample}></MarketCard>
      <SitesCard data={data}></SitesCard>
      <ResourceCard></ResourceCard>
    </div>
  );
}
