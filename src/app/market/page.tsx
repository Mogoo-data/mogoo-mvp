import MarketCard from "../(dashboard)/marketCard";
import { MarketNews, marketNewsExample } from "@/types/types";
import NewsCard from "./newsCard";

export default async function Market() {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 lg:p-6">
      {marketNewsExample.map((newsItem: MarketNews, index: number) => (
      <NewsCard key={index} data={newsItem} />
      ))}
    </div>
  );
}