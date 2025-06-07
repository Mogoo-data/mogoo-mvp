import { HistoryResult } from '@/types/types';
import HistoryCard from '@/app/history/historyCard';

async function fetchData(): Promise<HistoryResult[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/data/all`);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
}

export default async function HistoryPage() {
  const data = await fetchData();

  return (
    <section className="container mx-auto p-8">
      {data.map((item) => (
        <HistoryCard data={item} />
      ))}
    </section>
  );
}
