import { HistoryResult } from '@/types/types';
import HistoryCard from '@/app/histories/historyCard';
import { cookies } from 'next/headers';

async function fetchData(): Promise<HistoryResult[]> {
  const cookieStore = await cookies(); 
  
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/histories/all`,{
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

export default async function HistoryPage() {
  const data = await fetchData();

  if (!data || data.length === 0) {
    return <div className="text-center p-4">No History data available.</div>;
  }

  return (
    <section className="container mx-auto p-8">
      {data.map((item) => (
         <HistoryCard data={item} />
      ))}
    </section>
  );
}
