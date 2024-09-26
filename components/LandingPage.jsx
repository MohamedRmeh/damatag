"use client";
import { useAuth } from "@/context/AuthContext";
import Posts from "./Posts";
const LandingPage = () => {
  const { user } = useAuth();

  return (
    <section className="p-2 sm:p-6 min-h-screen mt-8">
      {user && (
        <p className="text-xl text-slate-800 mb-10 font-semibold">
          Hello, thanks for logging in
        </p>
      )}
      <h1 className="text-2xl font-bold mb-6 text-center">Latest Posts</h1>
      <Posts />
    </section>
  );
};

export default LandingPage;
