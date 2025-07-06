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


export default function NewsCard({ data }: { data: MarketNews }) {
  return (
    <Card
      className="@container/card cursor-pointer hover:bg-gray-100 transition-colors"
      onClick={() => window.location.href = "https://mogoo-website.vercel.app/"}
    >
      <CardHeader className="flex flex-row gap-4 items-start">
      <div className="w-24 h-24 bg-gray-200 rounded-md flex-shrink-0"></div>
      <div className="flex-1">
        <CardTitle className="text-2xl font-semibold tabular-nums flex items-start justify-between">
        {data.title}
        </CardTitle>
        <CardDescription>{data.time}</CardDescription>
        <p className="text-sm text-muted-foreground">{data.description}</p>
      </div>
      </CardHeader>
    </Card>
  )
}