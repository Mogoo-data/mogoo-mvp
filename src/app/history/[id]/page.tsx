
import { HistoryResult} from '@/types/types';
import BasicCard from '@/components/card-blocks/basicCard';
import ProcurementPieCard from '@/components/card-blocks/procurementPieCard';

async function fetchData(id: string): Promise<HistoryResult> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/data/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
}

export default async function HistoryDetailPage({ params }: {
  params: { id: string }
}) {
  const { id } = params;

  const data = await fetchData(id);

  return (
    <section className="container mx-auto p-8 space-y-6">
      <BasicCard data={data.input_data} />
      <div className="grid grid-cols-2 gap-4">
        {data.output_result.map((result, index) => (
        <ProcurementPieCard key={index} data={result} />
        ))}
      </div>
    </section>
  ) 
}
