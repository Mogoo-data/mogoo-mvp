import { SiteResult } from "@/types/types";

import BasicCard from "../../../components/card-blocks/basicCard";
import CostCard from "./costCard";
import SurplusPowerCard from "./surplusPowerCard";
import ProcurementCard from "./procurementCard";
import CertificateCard from "./certificateCard";
import RiskCard from "./riskCard";
import RecommendationCard from "./recommendationCard";
import ResourceCard from "@/components/card-blocks/resourceCard";

async function fetchData(id: string): Promise<SiteResult> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/site/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
}

export default async function SiteDetailPage({ params }: {
  params: { id: string }
}) {
  const { id } = params;

  const data = await fetchData(id);
  return (
    <section className="container mx-auto p-8 space-y-6">
      <BasicCard data={data.input_data} />
      <CostCard data={data} />
      <SurplusPowerCard data={data} />
      <ProcurementCard data={data} />
      <CertificateCard data={data} />
      <RiskCard data={data} />
      <RecommendationCard data={data} />
      <ResourceCard />
    </section>
  )

}