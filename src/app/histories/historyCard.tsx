'use client';

import { ChevronRight } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HistoryResult, OutputResult, SiteResult } from '@/types/types';
import BasicCard from "@/components/card-blocks/basicCard";
import ProcurementPieCard from "@/components/card-blocks/procurementPieCard";

export default function HistoryCard({ data }: { data: HistoryResult }) {
  return (
    <Card key={data.id} className="mb-4 p-4">
      <CardHeader >
        <CardTitle className="flex justify-between items-center">
          History Record {data.id}
          <button
            className="text-muted-foreground ml-auto"
            onClick={() => window.location.href = `${window.location.origin}${window.location.pathname}/${data.id}`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          Created at: {data.created_at ? new Date(data.created_at).toLocaleString() : 'Unknown'}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <BasicCard data={data.input_data} />
        <div className="grid grid-cols-2 gap-4">
          {Array.isArray(data.output_result) && data.output_result.map((_, index) => (
            <ProcurementPieCard key={index} index={index} data={data} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}