import Logo from "./Logo";
import SidebarLinksList from "./SidebarLinksList";

const Sidebar = () => {
  return (
    <>
      <div className="h-full flex flex-col border-r shadow-sm">
        <div className="p-6">
          <Logo />
        </div>
        <SidebarLinksList />
      </div>
    </>
  );
};

export default Sidebar;
