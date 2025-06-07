"use client"

import { ChevronRight } from 'lucide-react';
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardContent
} from "@/components/ui/card"
import { MarketNews } from "@/types/types";


export default function MarketCard({ data }: { data: MarketNews[] }) {
  return (
    <Card className="@container/card">
      <CardHeader className="relative">
        <CardTitle className="text-2xl font-semibold tabular-nums justify-between flex items-center">
          Market
          <button
            className="text-muted-foreground ml-auto"
            onClick={() => window.location.href = `${window.location.origin}${window.location.pathname}/market`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </CardTitle>
        <CardDescription>Latest related news</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {data.map(({ title, description, piority }, index) => (
            <li key={index} className="flex flex-col ">
                <button
                className="flex justify-between items-start w-full text-left space-x-2"
                onClick={() => window.location.href = "https://mogoo-website.vercel.app/"}
                >
                <div className="w-12 h-12 bg-gray-200 rounded-md flex-shrink-0 self-start"></div>
                <div className="flex-grow text-left text-start">
                  <span className="font-medium">{title}</span>
                  <p className="text-sm text-muted-foreground truncate">{description.length > 50 ? `${description.substring(0, 50)}...` : description}</p>
                </div>
                <Badge variant="outline">{piority}</Badge>
                </button>
            </li>
          ))}
        </ul>
      </CardContent>

    </Card>
  )
}