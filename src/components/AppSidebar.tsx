import { Home, FileText, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { useState } from "react";
import { motion } from "framer-motion";

const menuItems = [
  { title: "Home", icon: <Home className="h-4 w-4" />, path: "/" },
  { title: "Create Article", icon: <FileText className="h-4 w-4" />, path: "/create" },
  { title: "Settings", icon: <Settings className="h-4 w-4" />, path: "/settings" },
];

export function AppSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <Sidebar open={open} setOpen={setOpen}>
      <SidebarBody className="justify-between gap-10">
        <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <Logo />
          <div className="mt-8 flex flex-col gap-2">
            {menuItems.map((item) => (
              <SidebarLink
                key={item.title}
                link={{
                  label: item.title,
                  href: item.path,
                  icon: item.icon,
                }}
              />
            ))}
          </div>
        </div>
      </SidebarBody>
    </Sidebar>
  );
}

const Logo = () => {
  return (
    <Link
      to="/"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        OmniThink
      </motion.span>
    </Link>
  );
};