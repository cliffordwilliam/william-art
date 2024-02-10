import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./MobileSidebar";
import NavbarLinksList from "./NavbarLinksList";

const Navbar = () => {
  return (
    <>
      <div className="p-4 border-b shadow-sm flex items-center gap-x-2 w-full">
        <MobileSidebar />
        <NavbarLinksList />
        <UserButton afterSignOutUrl="/" />
      </div>
    </>
  );
};

export default Navbar;
