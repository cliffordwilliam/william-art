"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const SidebarLinkItem = ({
  name,
  href,
  Icon,
}: {
  name: string;
  href: string;
  Icon: LucideIcon;
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const isActive = pathname === href || pathname?.startsWith(`${href}/`);
  const onClick = () => {
    router.push(href);
  };
  return (
    <>
      <button
        onClick={onClick}
        className={cn(
          "flex items-center gap-x-2 py-4 px-6 hover:bg-slate-300/20",
          isActive &&
            "bg-sky-200/20 hover:bg-sky-200/20 border-r-4 border-sky-700"
        )}
      >
        <span
          className={cn(
            "text-slate-500 text-sm font-[500] hover:text-slate-600",
            isActive && "text-sky-700 hover:text-sky-700"
          )}
        >
          {name}
        </span>
        <Icon
          size={22}
          className={cn("text-slate-500", isActive && "text-sky-700")}
        />
      </button>
    </>
  );
};

export default SidebarLinkItem;
