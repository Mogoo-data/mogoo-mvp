import {
  AverageTicketsCreated,
  Conversions,
  CustomerSatisfication,
  Metrics,
  TicketByChannels,
} from "@/components/chart-blocks";
import Container from "@/components/container";

import { SiteResult } from "@/types/types";
import { MarketNews, marketNewsExample } from "@/types/types";
import SummaryCard from '@/app/(dashboard)/summaryCard';
import MarketCard from "./marketCard";
import SitesCard from "./sitesCard";
import ResourceCard from "../../components/card-blocks/resourceCard";

async function fetchData(): Promise<SiteResult[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/site/all`);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
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
    // <div>
    //   <Metrics />
    //   <div className="grid grid-cols-1 divide-y border-b border-border laptop:grid-cols-3 laptop:divide-x laptop:divide-y-0 laptop:divide-border">
    //     <Container className="py-4 laptop:col-span-2">
    //       <AverageTicketsCreated />
    //     </Container>
    //     <Container className="py-4 laptop:col-span-1">
    //       <Conversions />
    //     </Container>
    //   </div>
    //   <div className="grid grid-cols-1 divide-y border-b border-border laptop:grid-cols-2 laptop:divide-x laptop:divide-y-0 laptop:divide-border">
    //     <Container className="py-4 laptop:col-span-1">
    //       <TicketByChannels />
    //     </Container>
    //     <Container className="py-4 laptop:col-span-1">
    //       <CustomerSatisfication />
    //     </Container>
    //   </div>
    // </div>
  );
}
