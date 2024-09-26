"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

const Posts = () => {
  const { apiRequest } = useAuth();

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await apiRequest("posts");
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {loading ? (
        <p className="text-center col-span-3">Loading posts...</p>
      ) : posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id} className="bg-white p-4 shadow-lg rounded-lg">
            <div className="w-full h-[200px] mb-4 relative">
              <Image
                src="/images/7kakxtlt.png"
                alt="Post image"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">
              {post.body.substring(0, 100)}...
            </p>
            <Link href={`/api/posts/${post.id}`}>
              <button className="text-blue-500 hover:underline">
                Read more
              </button>
            </Link>
          </div>
        ))
      ) : (
        <p className="text-center col-span-3">No posts available</p>
      )}
    </div>
  );
};

export default Posts;
