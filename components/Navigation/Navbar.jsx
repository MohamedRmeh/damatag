'use client';
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { auth } from "@/services/firebase";

const Navbar = () => {
  const { user, handleLogout } = useAuth(); // الحصول على المستخدم من السياق



  return (
    <nav className="p-3 sm:p-7 flex items-center justify-between border-b border-b-slate-300">
      <Link href="/" className="text-xl font-semibold text-slate-800">
        Damtag Task
      </Link>
      {!user ? (
        <div className="flex gap-3 sm:gap-5 items-center">
          <Link
            href="/auth/login"
            className="bg-slate-600 text-white px-2 py-1 sm:px-4 sm:py-1.5 rounded-sm shadow-lg"
          >
            Login
          </Link>
          <Link
            href="/auth/register"
            className="bg-slate-800 text-white px-2 py-1 sm:px-4 sm:py-1.5 rounded-sm shadow-lg"
          >
            Register
          </Link>
        </div>
      ) : (
        <button
          onClick={handleLogout}
          className="bg-slate-800 text-white px-4 py-1.5 rounded-sm shadow-lg"
        >
          Logout
        </button>
      )}
    </nav>
  );
};

export default Navbar;
