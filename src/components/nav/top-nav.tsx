"use client";

import { ThemeToggle } from "../theme-toggle";
import { usePathname, useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react';


export default function TopNav({ title }: { title: string }) {
  const pathname = usePathname();
  const router = useRouter()

  const segments = pathname.split('/').filter(Boolean) // 避免空字串
  const parentPath = '/' + segments.slice(0, -1).join('/')

  return (
    <div className="flex h-16 items-center justify-between border-b border-border p-8">
      <div className="flex items-center space-x-4">
        {pathname !== "/" && (
          <button onClick={() => router.push(parentPath)} className="text-muted-foreground">
            <ArrowLeft className="w-5 h-5" />
          </button>
        )}
        <div className="flex flex-col items-start">
          <h1 className="text-xl font-medium">{title}</h1>
          <span className="text-sm text-muted-foreground">{pathname}</span>
        </div>
      </div>
      <ThemeToggle />
    </div>
  );
}
