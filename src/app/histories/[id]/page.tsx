import { HistoryResult} from '@/types/types';
import BasicCard from '@/components/card-blocks/basicCard';
import ProcurementPieCardList from './ProcurementPieCardList';
import { cookies } from 'next/headers';

async function fetchData(id: string): Promise<HistoryResult> {
  const cookieStore = await cookies(); 
  
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/histories/${id}`,{
    headers: {
      cookie: cookieStore.toString(),
    },
    cache: 'no-store',
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
  }
  return response.json();
}

export default async function HistoryDetailPage({ params }: {
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
      <div className="grid grid-cols-2 gap-4">
        <ProcurementPieCardList data={data} />
      </div>
    </section>
  ) 
}
