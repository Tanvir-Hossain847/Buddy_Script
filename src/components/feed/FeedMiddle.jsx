"use client";
import { useState, useEffect } from "react";
import StoriesCard from "@/components/feed/StoriesCard";
import CreatePost from "@/components/feed/CreatePost";
import PostCard from "@/components/feed/PostCard";

export default function FeedMiddle() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function loadPosts() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, { cache: "no-store" });
      const text = await res.text();

      let data;
      try {
        data = JSON.parse(text);
      } catch {
        throw new Error(`Invalid JSON from API: ${text.slice(0, 100)}`);
      }

      const arr = Array.isArray(data)
        ? data
        : Array.isArray(data?.posts)
        ? data.posts
        : Array.isArray(data?.data)
        ? data.data
        : [];

      setPosts([...arr].sort((a, b) => new Date(b.created_at) - new Date(a.created_at)));
    } catch (err) {
      console.error("Failed to load posts:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadPosts();
  }, []);

  function handlePostCreated(newPost) {
    setPosts((prev) => [newPost, ...prev]);
  }

  return (
    <div className="pt-2 flex flex-col">
      <StoriesCard />
      <CreatePost onPostCreated={handlePostCreated} />

      {loading && (
        <div className="bg-white rounded p-6 mb-3 flex items-center justify-center">
          <span className="text-xs text-[#666]">Loading posts...</span>
        </div>
      )}

      {!loading && error && (
        <div className="bg-white rounded p-4 mb-3 border border-red-100">
          <p className="text-xs text-red-500 m-0 mb-1 font-medium">Could not connect to API</p>
          <p className="text-xs text-[#666] m-0">{error}</p>
          <button
            onClick={loadPosts}
            className="mt-2 text-xs text-[#1890FF] border-none bg-transparent cursor-pointer hover:underline"
          >
            Retry
          </button>
        </div>
      )}

      {!loading && !error && posts.length === 0 && (
        <div className="bg-white rounded p-6 mb-3 text-center">
          <p className="text-xs text-[#666] m-0">No posts yet. Be the first to post!</p>
        </div>
      )}

      {posts.map((post) => (
        <PostCard key={post.post_id || post.id} post={post} />
      ))}
    </div>
  );
}
