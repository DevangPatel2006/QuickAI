import { Protect, useClerk, useUser } from "@clerk/clerk-react";
import React from "react";
import { NavLink } from "react-router-dom";
import {
  Eraser,
  FileText,
  Hash,
  House,
  Image,
  LogOut,
  Scissors,
  SquarePen,
  Users,
} from "lucide-react";

// Sidebar navigation items
const navItems = [
  { to: "/ai", label: "Dashboard", Icon: House },
  { to: "/ai/write-article", label: "Write Article", Icon: SquarePen },
  { to: "/ai/blog-titles", label: "Blog Titles", Icon: Hash },
  { to: "/ai/generate-images", label: "Generate Images", Icon: Image },
  { to: "/ai/remove-background", label: "Remove Background", Icon: Eraser },
  { to: "/ai/remove-object", label: "Remove Object", Icon: Scissors },
  { to: "/ai/review-resume", label: "Review Resume", Icon: FileText },
 { to: "/ai/community", label: "Community", Icon: Users },

];

const Sidebar = ({ sidebar, setSidebar }) => {
  const { user } = useUser();
  const { signOut, openUserProfile } = useClerk(); // ✅ correctly called

  return (
    <div
      className={`w-60 bg-white border-r border-gray-200 flex flex-col justify-between items-center max-sm:absolute top-14 bottom-0 ${
        sidebar ? "translate-x-0" : "max-sm:-translate-x-full"
      } transition-all duration-300 ease-in-out`}
    >
      <div className="my-7 w-full px-4">
        <img
          src={user?.imageUrl}
          alt="avatar"
          className="w-14 h-14 rounded-full mx-auto"
        />
        <h1 className="mt-2 text-center font-medium text-gray-800">
          {user?.fullName}
        </h1>

        {/* Navigation Items */}
        <div className="mt-6 space-y-2">
          {navItems.map(({ to, label, Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/ai"}
              onClick={() => setSidebar(false)}
              className={({ isActive }) =>
                `px-3.5 py-2.5 flex items-center gap-3 rounded-md text-sm font-medium ${
                  isActive
                    ? "bg-gradient-to-r from-[#3C81F6] to-[#9234EA] text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon className={`w-4 h-4 ${isActive ? "text-white" : ""}`} />{" "}
                  {label}{" "}
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Optional: Add Sign Out Button */}
      <div
        className="w-full border-t border-gray-200 p-4 px-7 flex items-center justify-between"
      >
        <div
          onClick={openUserProfile}
          className="flex gap-2 items-center cursor-pointer"
        >
          <img src={user.imageUrl} className="w-8 rounded-full" alt="" />
          <div>
            <h1 className="text-sm font-medium">{user.fullName}</h1>
            <p className="text-xs text-gray-500"><Protect plan='premium' fallback="Free">Premium</Protect>Plan</p>
          </div>
        </div>
        <LogOut
          onClick={signOut}
          className="w-4.5 text-gray-400 hover:text-gray-700 transition cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Sidebar;
