"use client";

import { Palette, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

const artistButton = {
  name: "Artist mode",
  href: "/artist/arts",
  Icon: Palette,
};
const marketButton = {
  name: "Market mode",
  href: "/",
  Icon: ShoppingCart,
};

const NavbarLinksList = () => {
  const pathname = usePathname();
  const isArtistPage = pathname.startsWith("/artist");
  const button = isArtistPage ? marketButton : artistButton;
  const { name, href, Icon } = button;
  return (
    <>
      <div className="ml-auto">
        <Link href={href}>
          <Button size={"sm"} variant={"ghost"}>
            <Icon className="w-4 h-4 mr-2" />
            <span>{name}</span>
          </Button>
        </Link>
      </div>
    </>
  );
};

export default NavbarLinksList;
