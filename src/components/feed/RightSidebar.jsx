"use client";
import Image from "next/image";

const friends = [
  { name: "Steve Jobs", role: "CEO of Apple", img: "/assets/images/people1.png", online: false, time: "5 min ago" },
  { name: "Ryan Roslansky", role: "CEO of Linkedin", img: "/assets/images/people2.png", online: true },
  { name: "Dylan Field", role: "CEO of Figma", img: "/assets/images/people3.png", online: true },
  { name: "Steve Jobs", role: "CEO of Apple", img: "/assets/images/people1.png", online: false, time: "5 min ago" },
  { name: "Ryan Roslansky", role: "CEO of Linkedin", img: "/assets/images/people2.png", online: true },
  { name: "Dylan Field", role: "CEO of Figma", img: "/assets/images/people3.png", online: true },
  { name: "Steve Jobs", role: "CEO of Apple", img: "/assets/images/people1.png", online: false, time: "5 min ago" },
];

export default function RightSidebar() {
  return (
    <div className="flex flex-col pt-4">
      <div className="bg-white rounded pt-4 pb-4 px-4 mb-3 transition-all duration-200">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-medium text-[#212121] m-0 leading-snug">You Might Like</h4>
          <a href="#" className="font-medium text-xs text-[#1890FF] leading-5">See All</a>
        </div>
        <hr className="bg-[#DFDFDF] border-none h-px my-1" />
        <div className="flex items-center my-4 cursor-pointer">
          <div className="mr-4 shrink-0">
            <Image src="/assets/images/Avatar.png" alt="Radovan" width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
          </div>
          <div>
            <h4 className="text-xs font-medium text-[#212121] m-0 leading-snug hover:text-[#1890FF] transition-colors">Radovan SkillArena</h4>
            <p className="text-xs text-[#666] m-0 leading-5">Founder & CEO at Trophy</p>
          </div>
        </div>
        <div className="flex">
          <button className="rounded py-1.5 px-6 border border-[#f1f1f1] bg-transparent font-medium text-xs text-[#959eae] mx-1 transition-all duration-200 hover:bg-[#377DFF] hover:text-white">Ignore</button>
          <button className="rounded py-1.5 px-6 border border-[#f1f1f1] bg-[#377DFF] font-medium text-xs text-white mx-1 transition-all duration-200 hover:bg-[#1890FF]">Follow</button>
        </div>
      </div>

      <div className="bg-white rounded pt-4 pb-1 px-4 mb-3 transition-all duration-200">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-medium text-[#212121] m-0 leading-snug">Your Friends</h4>
          <a href="#" className="font-medium text-xs text-[#1890FF] leading-5">See All</a>
        </div>
        <div className="relative mb-4">
          <svg className="absolute top-2.5 left-3.5" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 17 17">
            <circle cx="7" cy="7" r="6" stroke="#666" />
            <path stroke="#666" strokeLinecap="round" d="M16 16l-3-3" />
          </svg>
          <input
            type="search"
            placeholder="input search text"
            className="bg-[#F5F5F5] border border-[#F5F5F5] rounded-full h-9 pl-10 pr-3 w-full text-sm placeholder:text-black/25 hover:border-[#1890FF] focus:border-[#1890FF] outline-none transition-all duration-200"
          />
        </div>
        {friends.map((friend, i) => (
          <div key={i} className="flex items-center justify-between mb-4 p-1 rounded-lg transition-all duration-200 cursor-pointer hover:bg-[#e4e6e9]">
            <div className="flex items-center">
              <div className="mr-3 shrink-0">
                <Image src={friend.img} alt={friend.name} width={32} height={32} className="w-8 h-8 rounded-full object-cover" />
              </div>
              <div>
                <h4 className="text-xs font-medium text-[#212121] m-0 leading-snug">{friend.name}</h4>
                <p className="text-xs font-light text-[#212121] m-0 leading-snug">{friend.role}</p>
              </div>
            </div>
            <div className="shrink-0">
              {friend.online ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 14 14">
                  <rect width="12" height="12" x="1" y="1" fill="#0ACF83" stroke="#fff" strokeWidth="2" rx="6" />
                </svg>
              ) : (
                <span className="text-xs text-black/50 leading-5">{friend.time}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
