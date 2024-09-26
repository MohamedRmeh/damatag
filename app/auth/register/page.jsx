// SignUpPage.js
"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

const SignUpPage = () => {
  const { user, apiRequest } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user, router]);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await apiRequest('register', '', { email, password }); // تمرير البريد الإلكتروني وكلمة المرور
      router.push("/");
    } catch (err) {
      console.error("Error during sign-up:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex justify-center mt-28">
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-2xl font-bold text-slate-800">Create an Account</h2>

        <form className="flex flex-col gap-4 w-[300px]" onSubmit={handleSignUp}>
          <input
            required
            className="forms border border-gray-300 rounded-md p-2"
            placeholder="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            required
            className="forms border border-gray-300 rounded-md p-2"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className={`bg-slate-600 text-white px-4 py-2 rounded-md shadow-md ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-slate-700"
            }`}
            type="submit"
            disabled={loading}
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>
        {error && (
          <div className="bg-red-100 text-red-600 p-3 mt-2 rounded-md">
            {error}
          </div>
        )}
      </div>
    </section>
  );
};

export default SignUpPage;
