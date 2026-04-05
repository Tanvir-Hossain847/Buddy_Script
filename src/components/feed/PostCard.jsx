"use client";
import { useState } from "react";
import Image from "next/image";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

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

export default function PostCard({ post }) {
  const [reacted, setReacted] = useState(false);

  return (
    <div className="bg-white rounded pb-4 pt-4 mb-3 transition-all duration-200">
      <div className="flex justify-between items-center mb-3 px-4">
        <div className="flex items-center cursor-pointer">
          <div className="mr-3 shrink-0">
            <Image src={post.authorImg} alt={post.author} width={36} height={36} className="w-9 h-9 rounded-full transition-all duration-200" />
          </div>
          <div>
            <h4 className="text-sm text-black m-0 leading-tight">{post.author}</h4>
            <p className="text-xs text-black/50 m-0 leading-tight">
              {post.time} · <a href="#" className="text-black/50">Public</a>
            </p>
          </div>
        </div>
        <div className="relative">
          <PostDropdown />
        </div>
      </div>

      <div className="px-4">
        {post.title && <h4 className="text-xs text-black m-0 mb-3 leading-5">{post.title}</h4>}
        {post.image && (
          <div className="mb-4">
            <Image src={post.image} alt="Post" width={600} height={340} className="rounded w-full h-auto" />
          </div>
        )}
      </div>

      <div className="flex justify-between items-center px-4 mb-3">
        <div className="flex cursor-pointer">
          {["/assets/images/react_img1.png", "/assets/images/react_img2.png", "/assets/images/react_img3.png", "/assets/images/react_img4.png", "/assets/images/react_img5.png"].map((src, i) => (
            <Image key={i} src={src} alt="react" width={24} height={24} className={`w-6 h-6 rounded-full border border-white bg-[#C4C4C4] ${i > 0 ? "-ml-3" : ""}`} />
          ))}
          <p className="bg-[#1890FF] border-2 border-white rounded-full flex items-center justify-center w-6 h-6 -ml-3 text-xs text-white m-0">9+</p>
        </div>
        <div className="flex">
          <p className="text-xs text-black/50 m-0 mx-3 leading-tight">
            <a href="#" className="text-black/50"><span className="text-[#212121]">12</span> Comment</a>
          </p>
          <p className="text-xs text-black/50 m-0 leading-tight"><span className="text-[#212121]">122</span> Share</p>
        </div>
      </div>

      <div className="bg-[#FBFCFD] p-2 flex">
        {[
          { key: "haha", label: "Haha", icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 19 19"><path fill="#FFCC4D" d="M9.5 19a9.5 9.5 0 100-19 9.5 9.5 0 000 19z"/><path fill="#664500" d="M9.5 11.083c-1.912 0-3.181-.222-4.75-.527-.358-.07-1.056 0-1.056 1.055 0 2.111 2.425 4.75 5.806 4.75 3.38 0 5.805-2.639 5.805-4.75 0-1.055-.697-1.125-1.055-1.055-1.57.305-2.838.527-4.75.527z"/><path fill="#fff" d="M4.75 11.611s1.583.528 4.75.528 4.75-.528 4.75-.528-1.056 2.111-4.75 2.111-4.75-2.111-4.75-2.11z"/><path fill="#664500" d="M6.333 8.972c.729 0 1.32-.827 1.32-1.847s-.591-1.847-1.32-1.847c-.729 0-1.32.827-1.32 1.847s.591 1.847 1.32 1.847zM12.667 8.972c.729 0 1.32-.827 1.32-1.847s-.591-1.847-1.32-1.847c-.729 0-1.32.827-1.32 1.847s.591 1.847 1.32 1.847z"/></svg> },
          { key: "comment", label: "Comment", icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 21 21"><path stroke="#000" d="M1 10.5c0-.464 0-.696.009-.893A9 9 0 019.607 1.01C9.804 1 10.036 1 10.5 1v0c.464 0 .696 0 .893.009a9 9 0 018.598 8.598c.009.197.009.429.009.893v6.046c0 1.36 0 2.041-.317 2.535a2 2 0 01-.602.602c-.494.317-1.174.317-2.535.317H10.5c-.464 0-.696 0-.893-.009a9 9 0 01-8.598-8.598C1 11.196 1 10.964 1 10.5v0z"/><path stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="M6.938 9.313h7.125M10.5 14.063h3.563"/></svg> },
          { key: "share", label: "Share", icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" fill="none" viewBox="0 0 24 21"><path stroke="#000" strokeLinejoin="round" d="M23 10.5L12.917 1v5.429C3.267 6.429 1 13.258 1 20c2.785-3.52 5.248-5.429 11.917-5.429V20L23 10.5z"/></svg> },
        ].map((btn) => (
          <button
            key={btn.key}
            onClick={() => btn.key === "haha" && setReacted(!reacted)}
            className={`mr-1 flex-1 flex items-center justify-center h-10 border-none rounded transition-all duration-200 cursor-pointer hover:bg-[#e4f1fd] ${btn.key === "haha" && reacted ? "bg-[#e4f1fd]" : "bg-transparent"}`}
          >
            <span className="text-xs text-black leading-tight flex items-center gap-1.5">
              <span className="mr-1.5 flex items-center">{btn.icon}</span>
              {btn.label}
            </span>
          </button>
        ))}
      </div>

      <div className="px-4 pt-3 pb-2">
        <div className="bg-[#F6F6F6] rounded-2xl py-1 px-2">
          <div className="flex items-center flex-wrap">
            <div className="flex items-center w-full flex-1">
              <Image src="/assets/images/comment_img.png" alt="Profile" width={22} height={22} className="w-5 h-5 shrink-0" />
              <textarea className="bg-transparent w-full h-9 border-none p-2 resize-none text-xs outline-none" placeholder="Write a comment" />
            </div>
            <div className="flex">
              {[
                <svg key="mic" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 16 16"><path fill="#000" fillOpacity=".46" fillRule="evenodd" d="M13.167 6.534a.5.5 0 01.5.5c0 3.061-2.35 5.582-5.333 5.837V14.5a.5.5 0 01-1 0v-1.629C4.35 12.616 2 10.096 2 7.034a.5.5 0 011 0c0 2.679 2.168 4.859 4.833 4.859 2.666 0 4.834-2.18 4.834-4.86a.5.5 0 01.5-.5zM7.833.667a3.218 3.218 0 013.208 3.22v3.126c0 1.775-1.439 3.22-3.208 3.22a3.218 3.218 0 01-3.208-3.22V3.887c0-1.776 1.44-3.22 3.208-3.22zm0 1a2.217 2.217 0 00-2.208 2.22v3.126c0 1.223.991 2.22 2.208 2.22a2.217 2.217 0 002.208-2.22V3.887c0-1.224-.99-2.22-2.208-2.22z" clipRule="evenodd"/></svg>,
                <svg key="img" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 16 16"><path fill="#000" fillOpacity=".46" fillRule="evenodd" d="M10.867 1.333c2.257 0 3.774 1.581 3.774 3.933v5.435c0 2.352-1.517 3.932-3.774 3.932H5.101c-2.254 0-3.767-1.58-3.767-3.932V5.266c0-2.352 1.513-3.933 3.767-3.933h5.766zm0 1H5.101c-1.681 0-2.767 1.152-2.767 2.933v5.435c0 1.782 1.086 2.932 2.767 2.932h5.766c1.685 0 2.774-1.15 2.774-2.932V5.266c0-1.781-1.089-2.933-2.774-2.933zM5.706 4.42c.921 0 1.67.75 1.67 1.67 0 .92-.75 1.67-1.67 1.67-.92 0-1.67-.75-1.67-1.67 0-.921.75-1.67 1.67-1.67zm0 1a.67.67 0 10.001 1.34.67.67 0 00-.002-1.34z" clipRule="evenodd"/></svg>,
              ].map((icon, i) => (
                <button key={i} className="border-none bg-transparent mx-1 cursor-pointer">{icon}</button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 pt-3 pb-2">
        <div className="mb-3">
          <button className="text-xs font-semibold text-[#666] leading-tight border-none bg-transparent outline-none cursor-pointer">View 4 previous comments</button>
        </div>
        <div className="flex">
          <div className="mr-2 w-7 h-7 rounded-full overflow-hidden cursor-pointer shrink-0">
            <a href="#"><Image src="/assets/images/txt_img.png" alt="Commenter" width={28} height={28} className="w-7 h-7 object-contain" /></a>
          </div>
          <div className="ml-2 flex-1">
            <div className="bg-[#F6F6F6] p-2.5 rounded-2xl w-full max-w-fit relative mb-10">
              <div className="flex">
                <div className="flex-1 overflow-hidden pr-3">
                  <a href="#"><h4 className="text-xs font-semibold text-[#212121] m-0 leading-snug break-all">Radovan SkillArena</h4></a>
                </div>
              </div>
              <p className="text-[#666] leading-tight text-xs break-all m-0">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              </p>
              <div className="flex items-center absolute right-0 bg-white shadow-[rgba(149,157,165,0.2)_0px_8px_24px] py-0.5 px-2 pl-2.5 rounded-xl cursor-pointer">
                <div className="flex items-center">
                  <span className="-ml-1 block"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1890FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg></span>
                  <span className="-ml-1 block"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="red" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></span>
                </div>
                <span className="text-xs ml-1 font-medium leading-tight text-[#212121]">198</span>
              </div>
              <div className="-bottom-8 absolute">
                <ul className="flex items-center">
                  {["Like.", "Reply.", "Share", ".21m"].map((item) => (
                    <li key={item} className="mx-0.5">
                      <span className={`text-xs font-medium leading-tight cursor-pointer transition-all duration-200 ${item.startsWith(".") ? "text-[#666]" : "text-[#212121]"}`}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-[#F6F6F6] rounded-2xl py-1 px-2">
              <div className="flex items-center flex-wrap">
                <div className="flex items-center w-full flex-1">
                  <Image src="/assets/images/comment_img.png" alt="Profile" width={22} height={22} className="w-5 h-5 shrink-0" />
                  <textarea className="bg-transparent w-full h-9 border-none p-2 resize-none text-xs outline-none" placeholder="Write a comment" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
