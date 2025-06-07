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
      className="@container/card cursor-pointer" 
      onClick={() => window.location.href = "https://mogoo-website.vercel.app/"}
    >
      <CardHeader className="relative">
      <div className="w-full h-48 bg-gray-200 rounded-md mb-2"></div>
      <CardTitle className="text-2xl font-semibold tabular-nums justify-between flex items-start">
        {data.title}
      </CardTitle>
      <CardDescription>{data.time}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{data.description}</p>
      </CardContent>
    </Card>
  )
}