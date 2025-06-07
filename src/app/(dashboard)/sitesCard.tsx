"use client"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardContent
} from "@/components/ui/card"
import { SiteResult } from "@/types/types";
import { ChevronRight } from 'lucide-react';
import { Factory } from "lucide-react";


export default function SitesCard({ data }: { data: SiteResult[] }) {
  return (
    <Card className="@container/card sm:col-span-2">
      <CardHeader className="relative">
        <CardTitle className="text-2xl font-semibold tabular-nums justify-between flex items-center">
          Sites
          <button
            className="text-muted-foreground ml-auto"
            onClick={() => window.location.href = `${window.location.origin}${window.location.pathname}/site`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </CardTitle>
        <CardDescription>Users latest 4 sites will be listed here.</CardDescription>

      </CardHeader>
      <CardContent className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-2 space-x-2">
        {data.map(( site, index) => (
            <Card 
            key={index} 
            onClick={() => window.location.href = `${window.location.origin}${window.location.pathname}/site/${site.id}`} 
            className="cursor-pointer"
            >
            <CardHeader>
              <CardTitle className="text-md font-medium flex items-start gap-2">
                <Factory className="w-5 h-5" />
              {site.input_data.company_name}
              </CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
              {site.created_at ? new Date(site.created_at).toLocaleDateString() : 'N/A'}
              </CardDescription>
              <CardDescription className="text-sm text-muted-foreground">
              {site.input_data.country}
              </CardDescription>
            </CardHeader>
            </Card>
        ))}
      </CardContent>
    </Card>
  )
}