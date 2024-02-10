import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="h-full md:flex">
        {/* left */}
        <div className="hidden md:block">
          <Sidebar />
        </div>
        {/* right */}
        <div className="flex flex-col flex-1">
          {/* top */}
          <Navbar />
          {/* bottom */}
          <main className="flex-1">{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
