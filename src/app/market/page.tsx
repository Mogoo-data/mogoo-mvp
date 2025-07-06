import MarketCard from "../(dashboard)/marketCard";
import { MarketNews, marketNewsExample } from "@/types/types";
import NewsCard from "./newsCard";

export default async function Market() {

  return (
    <div className="p-8 space-y-4">
      {marketNewsExample.map((newsItem: MarketNews, index: number) => (
      <NewsCard key={index} data={newsItem} />
      ))}
    </div>
  );
}