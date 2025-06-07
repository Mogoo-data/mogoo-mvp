"use client";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardContent
} from "@/components/ui/card"
import { SiteResult } from "@/types/types"; 
import { ChevronRight } from 'lucide-react';
import CostCard from "./[id]/costCard";
import SurplusPowerCard from "./[id]/surplusPowerCard";
import CertificateCard from "./[id]/certificateCard";


export default function SiteCard({ data } : { data: SiteResult }) {

  return (
    <Card className="@container/card">
    <CardHeader className="relative">
      <CardTitle className="text-2xl font-semibold tabular-nums flex justify-between items-start">
        {data.input_data.company_name}
        <button
            className="text-muted-foreground ml-auto"
            onClick={() => window.location.href = `${window.location.origin}${window.location.pathname}/${data.id}`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
      </CardTitle>
    </CardHeader>
    <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <CostCard data={data} />
      <SurplusPowerCard data={data} />
      <CertificateCard data={data} />
    </CardContent>
  </Card>
  )
}