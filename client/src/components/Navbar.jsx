import { ArrowRight } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useUser(); // ✅ FIXED: call the hook
  const { openSignIn } = useClerk();

  return (
    <div className="fixed z-5 w-full backdrop-blur-2x1 flex justify-between items-center py-3 px-4 sm:px-20 xl:px-32">
      <img
        src={assets.logo}
        alt="logo"
        className="w-32 sm:w-44 cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      />
      {user ? (
        <UserButton />
      ) : (
        <button
          className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5"
          onClick={openSignIn}
        >
          Sign In
        </button>
      )}
    </div>
  );
};

export default Navbar;
