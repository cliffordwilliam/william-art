"use client";

import { BarChart, Compass, Layout, List } from "lucide-react";
import SidebarLinkItem from "./SidebarLinkItem";
import { usePathname } from "next/navigation";

const baseRoutes = [
  { name: "Dashboard", href: "/", Icon: Layout },
  { name: "Search", href: "/search", Icon: Compass },
];
const artistRoutes = [
  { name: "Arts", href: "/artist/arts", Icon: List },
  { name: "Analytics", href: "/artist/analytics", Icon: BarChart },
];

const SidebarLinksList = () => {
  const pathname = usePathname();
  const isArtistPage = pathname.startsWith("/artist");
  const routes = isArtistPage ? artistRoutes : baseRoutes;
  return (
    <>
      <div className="flex flex-col">
        {routes.map((route) => (
          <>
            <SidebarLinkItem
              name={route.name}
              href={route.href}
              Icon={route.Icon}
            />
          </>
        ))}
      </div>
    </>
  );
};

export default SidebarLinksList;
