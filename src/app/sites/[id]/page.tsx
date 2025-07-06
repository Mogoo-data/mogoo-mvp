import { SiteResult } from "@/types/types";
import BasicCard from "../../../components/card-blocks/basicCard";
import CostCard from "./costCard";
import ProcurementCard from "./procurementCard";
import CertificateCard from "./certificateCard";
import RiskCard from "./riskCard";
import RecommendationCard from "./recommendationCard";
import ResourceCard from "@/components/card-blocks/resourceCard";
import ReRatioCard from "./reRatioCard";
import { cookies } from 'next/headers';

async function fetchData(id: string): Promise<SiteResult> {
  const cookieStore = await cookies(); 
  
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/sites/${id}`,{
    headers: {
      cookie: cookieStore.toString(),
    },
    cache: 'no-store',
  });
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
}

export default async function SiteDetailPage({ params }: {
  params: { id: string }
}) {
  const { id } = await params;
  const data = await fetchData(id);

  if (!data) {
    return <div className="text-center p-4">No data available.</div>;
  }
  return (
    <section className="container mx-auto p-8 space-y-6">
      <BasicCard data={data.input_data} />
      <CostCard data={data} />
      <ReRatioCard data={data} />
      <ProcurementCard data={data} />
      <CertificateCard data={data} />
      <RiskCard data={data} />
      <RecommendationCard data={data} />
      <ResourceCard />
    </section>
  )
}