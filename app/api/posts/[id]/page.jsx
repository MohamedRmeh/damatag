"use client";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";

const Page = ({ params }) => {
  const { apiRequest } = useAuth();

  const { id } = params;
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPost = async () => {
      try {
        const data = await apiRequest(
          "fetch",
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        setPost(data);
      } catch (err) {
        setError("Error loading post data");
      } finally {
        setLoading(false);
      }
    };

    getPost();
  }, [id]);

  if (loading) return <div className="p-6">Loading..</div>;
  if (error) return <div className="p-6">{error}</div>;

  return (
    <section className="p-3 sm:p-6 flex flex-col gap-4 sm:w-[80%] mt-10">
      <h1 className="text-xl font-semibold">{post.title}</h1>
      <p className="text-lg text-slate-700">{post.body}</p>
    </section>
  );
};

export default Page;
