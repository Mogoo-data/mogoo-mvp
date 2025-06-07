import Link from "next/link";
import { MogooLogo } from "@/components/icons";

export default function Mogoo() {
  return (
    <Link
      href="https://mogoo-website.vercel.app/"
      target="_blank"
      className="relative my-2 flex flex-col items-center justify-center gap-y-2 px-4 py-4"
    >
      <div className="dot-matrix absolute left-0 top-0 -z-10 h-full w-full" />
      <span className="text-xs text-muted-foreground">Powered by</span>
      <div className="flex items-center space-x-2">
        <MogooLogo size={32} />
        <span className="text-md text-accent-foreground">Mogoo</span>
      </div>
    </Link>
  );
}
