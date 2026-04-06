"use client";
import { useState } from "react";
import Image from "next/image";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const CURRENT_USER_ID = "user_101";
const CURRENT_USER_NAME = "Dylan Field";
const CURRENT_USER_PROFILE = "/assets/images/profile.png";
const BASE = process.env.NEXT_PUBLIC_API_URL;

function PostDropdown() {
  const items = ["Save Post", "Turn On Notification", "Hide", "Edit Post", "Delete Post"];
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="block cursor-pointer py-1 px-px border-none bg-transparent outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="4" height="17" fill="none" viewBox="0 0 4 17">
            <circle cx="2" cy="2" r="2" fill="#C4C4C4" />
            <circle cx="2" cy="8" r="2" fill="#C4C4C4" />
            <circle cx="2" cy="15" r="2" fill="#C4C4C4" />
          </svg>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-64 bg-white shadow-[0px_10px_20px_rgba(0,0,0,0.08)] rounded p-3 border-none">
        {items.map((label) => (
          <DropdownMenuItem key={label} className="mb-3 cursor-pointer p-0">
            <a href="#" className="font-medium text-sm text-[#666] flex items-center w-full hover:text-[#1890FF] transition-all duration-200">
              <span className="inline-block bg-[#ebf2ff] p-2 rounded-full mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 18 18">
                  <path stroke="#1890FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M14.25 15.75L9 12l-5.25 3.75v-12a1.5 1.5 0 011.5-1.5h7.5a1.5 1.5 0 011.5 1.5v12z" />
                </svg>
              </span>
              {label}
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default function PostCard({ post: initialPost }) {
  const [post, setPost] = useState(initialPost);
  const [commentText, setCommentText] = useState("");
  const [commentingOn, setCommentingOn] = useState(null);
  const [replyTexts, setReplyTexts] = useState({});

  const postId = post._id;
  const liked = post.likes?.some((l) => l.user_id === CURRENT_USER_ID);

  async function handlePostLike() {
    const wasLiked = liked;
    const optimisticLikes = wasLiked
      ? post.likes.filter((l) => l.user_id !== CURRENT_USER_ID)
      : [...(post.likes || []), { user_id: CURRENT_USER_ID, reaction: "like", liked_at: new Date().toISOString() }];

    setPost((p) => ({ ...p, likes: optimisticLikes }));

    try {
      const res = await fetch(`${BASE}/posts/${postId}/likes`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: CURRENT_USER_ID, reaction: "like" }),
      });
      if (!res.ok) throw new Error();
    } catch {
      setPost((p) => ({ ...p, likes: post.likes }));
    }
  }

  async function handlePostComment(e) {
    e.preventDefault();
    if (!commentText.trim()) return;

    const newComment = {
      comment_id: `cmt_${Date.now()}`,
      user_id: CURRENT_USER_ID,
      user_name: CURRENT_USER_NAME,
      user_profile: CURRENT_USER_PROFILE,
      message: commentText.trim(),
      like: [],
    };

    setPost((p) => ({ ...p, comments: [...(p.comments || []), newComment] }));
    setCommentText("");
    setCommentingOn(null);

    try {
      const res = await fetch(`${BASE}/posts/${postId}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newComment),
      });
      if (!res.ok) throw new Error();
    } catch {
      setPost((p) => ({
        ...p,
        comments: (p.comments || []).filter((c) => c.comment_id !== newComment.comment_id),
      }));
    }
  }

  async function handleCommentLike(commentId) {
    const alreadyLiked = post.comments
      ?.find((c) => c.comment_id === commentId)
      ?.likes?.some((l) => l.user_id === CURRENT_USER_ID);

    setPost((p) => ({
      ...p,
      comments: (p.comments || []).map((c) => {
        if (c.comment_id !== commentId) return c;
        const likes = c.likes || [];
        return {
          ...c,
          likes: alreadyLiked
            ? likes.filter((l) => l.user_id !== CURRENT_USER_ID)
            : [...likes, { user_id: CURRENT_USER_ID, reaction: "like", liked_at: new Date().toISOString() }],
        };
      }),
    }));

    try {
      const res = await fetch(`${BASE}/posts/${postId}/comments/${commentId}/likes`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: CURRENT_USER_ID, reaction: "like" }),
      });
      if (!res.ok) throw new Error();
    } catch {
      setPost(initialPost);
    }
  }

  async function handleCommentReply(e, parentCommentId) {
    e.preventDefault();
    const text = replyTexts[parentCommentId]?.trim();
    if (!text) return;

    const newReply = {
      comment_id: `cmt_${Date.now()}`,
      user_id: CURRENT_USER_ID,
      user_name: CURRENT_USER_NAME,
      user_profile: CURRENT_USER_PROFILE,
      message: text,
      like: [],
    };

    setPost((p) => ({
      ...p,
      comments: (p.comments || []).map((c) =>
        c.comment_id === parentCommentId
          ? { ...c, replies: [...(c.replies || []), newReply] }
          : c
      ),
    }));
    setReplyTexts((prev) => ({ ...prev, [parentCommentId]: "" }));
    setCommentingOn(null);

    try {
      const res = await fetch(`${BASE}/posts/${postId}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...newReply, parent_comment_id: parentCommentId }),
      });
      if (!res.ok) throw new Error();
    } catch {
      setPost(initialPost);
    }
  }

  return (
    <div className="bg-white rounded pb-4 pt-4 mb-3 transition-all duration-200">
      {/* Header */}
      <div className="flex justify-between items-center mb-3 px-4">
        <div className="flex items-center cursor-pointer">
          <div className="mr-3 shrink-0">
            <Image src="/assets/images/post_img.png" alt={post.user_id} width={36} height={36} className="w-9 h-9 rounded-full" />
          </div>
          <div>
            <h4 className="text-sm text-black m-0 leading-tight">{post.user_id}</h4>
            <p className="text-xs text-black/50 m-0 leading-tight">
              {new Date(post.created_at).toLocaleString()} · <span className="capitalize">{post.visibility}</span>
            </p>
          </div>
        </div>
        <PostDropdown />
      </div>

      {/* Content */}
      <div className="px-4">
        {post.content && <p className="text-xs text-black m-0 mb-3 leading-5">{post.content}</p>}
        {post.media_url && (
          <div className="mb-4">
            <img
              src={post.media_url}
              alt="Post media"
              className="rounded w-full h-auto object-cover"
              onError={(e) => { e.target.style.display = "none"; }}
            />
          </div>
        )}
      </div>

      {/* Counts */}
      <div className="flex justify-between items-center px-4 mb-3">
        <span className="text-xs text-[#666]">{post.likes?.length || 0} Likes</span>
        <span className="text-xs text-black/50">{post.comments?.length || 0} Comments</span>
      </div>

      {/* Action buttons */}
      <div className="bg-[#FBFCFD] p-2 flex">
        <button
          onClick={handlePostLike}
          className={`mr-1 flex-1 flex items-center justify-center h-10 border-none rounded transition-all duration-200 cursor-pointer hover:bg-[#e4f1fd] ${liked ? "bg-[#e4f1fd]" : "bg-transparent"}`}
        >
          <span className={`text-xs leading-tight flex items-center ${liked ? "text-[#1890FF]" : "text-black"}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5">
              <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
            </svg>
            Like
          </span>
        </button>

        <button
          onClick={() => setCommentingOn(commentingOn === "post" ? null : "post")}
          className="mr-1 flex-1 flex items-center justify-center h-10 border-none rounded transition-all duration-200 cursor-pointer hover:bg-[#e4f1fd] bg-transparent"
        >
          <span className="text-xs text-black leading-tight flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 21 21" className="mr-1.5">
              <path stroke="#000" d="M1 10.5c0-.464 0-.696.009-.893A9 9 0 019.607 1.01C9.804 1 10.036 1 10.5 1v0c.464 0 .696 0 .893.009a9 9 0 018.598 8.598c.009.197.009.429.009.893v6.046c0 1.36 0 2.041-.317 2.535a2 2 0 01-.602.602c-.494.317-1.174.317-2.535.317H10.5c-.464 0-.696 0-.893-.009a9 9 0 01-8.598-8.598C1 11.196 1 10.964 1 10.5v0z"/>
              <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="M6.938 9.313h7.125M10.5 14.063h3.563"/>
            </svg>
            Comment
          </span>
        </button>

        <button className="flex-1 flex items-center justify-center h-10 border-none rounded transition-all duration-200 cursor-pointer hover:bg-[#e4f1fd] bg-transparent">
          <span className="text-xs text-black leading-tight flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" fill="none" viewBox="0 0 24 21" className="mr-1.5">
              <path stroke="#000" strokeLinejoin="round" d="M23 10.5L12.917 1v5.429C3.267 6.429 1 13.258 1 20c2.785-3.52 5.248-5.429 11.917-5.429V20L23 10.5z"/>
            </svg>
            Share
          </span>
        </button>
      </div>

      {/* Comment input */}
      {commentingOn === "post" && (
        <form onSubmit={handlePostComment} className="px-4 pt-3 pb-1">
          <div className="bg-[#F6F6F6] rounded-2xl py-1 px-2 flex items-center">
            <Image src="/assets/images/comment_img.png" alt="me" width={22} height={22} className="w-5 h-5 shrink-0" />
            <textarea
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              className="bg-transparent w-full h-9 border-none p-2 resize-none text-xs outline-none flex-1"
              placeholder="Write a comment..."
              onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handlePostComment(e); } }}
            />
            <button type="submit" disabled={!commentText.trim()} className="text-xs text-[#1890FF] font-medium px-2 border-none bg-transparent cursor-pointer disabled:opacity-40">
              Post
            </button>
          </div>
        </form>
      )}

      {/* Comments */}
      {post.comments?.length > 0 && (
        <div className="px-4 pt-3 pb-2 flex flex-col gap-3">
          {post.comments.map((comment) => {
            const commentLiked = comment.likes?.some((l) => l.user_id === CURRENT_USER_ID);
            return (
              <div key={comment.comment_id} className="flex gap-2">
                <div className="w-7 h-7 rounded-full overflow-hidden shrink-0">
                  <Image
                    src={comment.user_profile || "/assets/images/txt_img.png"}
                    alt={comment.user_name || comment.user_id}
                    width={28} height={28}
                    className="w-7 h-7 object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="bg-[#F6F6F6] p-2.5 rounded-2xl">
                    <h4 className="text-xs font-semibold text-[#212121] m-0 leading-snug">
                      {comment.user_name || comment.user_id}
                    </h4>
                    <p className="text-xs text-[#666] leading-tight m-0 mt-0.5">
                      {comment.message || comment.text}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 mt-1 ml-1">
                    <button
                      onClick={() => handleCommentLike(comment.comment_id)}
                      className={`text-xs font-medium border-none bg-transparent cursor-pointer transition-all duration-200 ${commentLiked ? "text-[#1890FF]" : "text-[#212121]"}`}
                    >
                      Like{comment.likes?.length > 0 && <span className="text-[#666] ml-1">({comment.likes.length})</span>}
                    </button>
                    <button
                      onClick={() => setCommentingOn(commentingOn === comment.comment_id ? null : comment.comment_id)}
                      className="text-xs font-medium text-[#212121] border-none bg-transparent cursor-pointer hover:text-[#1890FF] transition-all duration-200"
                    >
                      Reply
                    </button>
                    <span className="text-xs text-[#666]">
                      {new Date(comment.created_at).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </span>
                  </div>

                  {commentingOn === comment.comment_id && (
                    <form onSubmit={(e) => handleCommentReply(e, comment.comment_id)} className="mt-2">
                      <div className="bg-[#F6F6F6] rounded-2xl py-1 px-2 flex items-center">
                        <Image src="/assets/images/comment_img.png" alt="me" width={18} height={18} className="w-4 h-4 shrink-0" />
                        <textarea
                          value={replyTexts[comment.comment_id] || ""}
                          onChange={(e) => setReplyTexts((prev) => ({ ...prev, [comment.comment_id]: e.target.value }))}
                          className="bg-transparent w-full h-8 border-none p-1.5 resize-none text-xs outline-none flex-1"
                          placeholder="Write a reply..."
                          onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleCommentReply(e, comment.comment_id); } }}
                        />
                        <button type="submit" disabled={!replyTexts[comment.comment_id]?.trim()} className="text-xs text-[#1890FF] font-medium px-2 border-none bg-transparent cursor-pointer disabled:opacity-40">
                          Reply
                        </button>
                      </div>
                    </form>
                  )}

                  {comment.replies?.length > 0 && (
                    <div className="mt-2 flex flex-col gap-2 pl-2 border-l-2 border-[#F0F2F5]">
                      {comment.replies.map((reply) => (
                        <div key={reply.comment_id} className="flex gap-2">
                          <div className="w-6 h-6 rounded-full overflow-hidden shrink-0">
                            <Image
                              src={reply.user_profile || "/assets/images/txt_img.png"}
                              alt={reply.user_name || reply.user_id}
                              width={24} height={24}
                              className="w-6 h-6 object-cover"
                            />
                          </div>
                          <div className="bg-[#F6F6F6] p-2 rounded-2xl flex-1">
                            <h4 className="text-xs font-semibold text-[#212121] m-0 leading-snug">{reply.user_name || reply.user_id}</h4>
                            <p className="text-xs text-[#666] leading-tight m-0 mt-0.5">{reply.message || reply.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
