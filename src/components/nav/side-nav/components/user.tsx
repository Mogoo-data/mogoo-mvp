"use client"
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function User() {
  const { data: session, status } = useSession()
  const router = useRouter();

  return (  
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex h-16 items-center border-b border-border px-2">
          <div className="flex w-full items-center justify-between rounded-md px-2 py-1 hover:bg-slate-200 dark:hover:bg-slate-800">
            <div className="flex items-center">
              <Image
                src={session?.user?.image || "/avatar.png"}
                alt="User"
                className="mr-2 rounded-full"
                width={36}
                height={36}
                priority // 確保圖片優先加載
              />
              <div className="flex flex-col">
                <span className="text-sm font-medium">{session?.user?.name || "Guest"}</span>
                <span className="text-xs text-muted-foreground">{session?.user?.email?.split("@")[0] || ""}</span>
              </div>
            </div>
            <ChevronDown size={16} />
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
        <DropdownMenuItem onClick={() => signOut()} className="focus:bg-gray-200 dark:focus:bg-gray-700">Sign Out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

  );
}
