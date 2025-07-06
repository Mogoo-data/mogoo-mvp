'use client';
import ProcurementPieCard from '@/components/card-blocks/procurementPieCard';
import { HistoryResult } from '@/types/types';


export default function ProcurementPieCardList({ data }: { data: HistoryResult }) {
  return (
    <>
      {Array.isArray(data.output_result) &&
        data.output_result.map((_, index) => (
          <ProcurementPieCard key={index} index={index} data={data} />
        ))}
    </>
  );
}
