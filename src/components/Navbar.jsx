"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const notifications = [
  { img: "/assets/images/friend-req.png", name: "Steve Jobs", msg: "posted a link in your timeline.", time: "42 minutes ago" },
  { img: "/assets/images/profile-1.png", name: null, msg: "An admin changed the name of the group Freelacer usa to Freelacer usa", time: "42 minutes ago" },
  { img: "/assets/images/friend-req.png", name: "Steve Jobs", msg: "posted a link in your timeline.", time: "42 minutes ago" },
  { img: "/assets/images/profile-1.png", name: null, msg: "An admin changed the name of the group Freelacer usa to Freelacer usa", time: "42 minutes ago" },
  { img: "/assets/images/friend-req.png", name: "Steve Jobs", msg: "posted a link in your timeline.", time: "42 minutes ago" },
  { img: "/assets/images/profile-1.png", name: null, msg: "An admin changed the name of the group Freelacer usa to Freelacer usa", time: "42 minutes ago" },
];

export default function Navbar() {
  const [notifyOpen, setNotifyOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const notifyRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (notifyRef.current && !notifyRef.current.contains(e.target)) setNotifyOpen(false);
      if (profileRef.current && !profileRef.current.contains(e.target)) setProfileOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <nav className="bg-white fixed top-0 left-0 right-0 z-50 shadow-[0px_4px_16px_#F0F2F5]">
      <div className="max-w-2/3 mx-auto px-3 flex items-center justify-between h-14">
        <div className="flex items-center">
          <Link href="/">
            <Image src="/assets/images/logo.svg" alt="Logo" width={90} height={26} className="w-auto h-auto max-w-24" />
          </Link>
        </div>

        <div className="relative mx-2 flex-1 max-w-80">
          <svg className="absolute top-2 left-3" xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" viewBox="0 0 17 17">
            <circle cx="7" cy="7" r="6" stroke="#666" />
            <path stroke="#666" strokeLinecap="round" d="M16 16l-3-3" />
          </svg>
          <input
            type="search"
            placeholder="input search text"
            className="bg-[#F5F5F5] border border-[#F5F5F5] rounded-full w-full h-7 pl-8 pr-3 text-xs placeholder:text-black/25 hover:border-[#1890FF] focus:border-[#1890FF] outline-none transition-all duration-200"
          />
        </div>

        <div className="flex items-center">
          <ul className="flex items-center mr-1 gap-5">
            <li className="mx-1">
              <Link href="/" className="relative block px-2 pt-3.5 pb-4 border-b-2 border-[#00ACFF] transition-all duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="17" fill="none" viewBox="0 0 18 21">
                  <path stroke="#1890FF" strokeWidth="1.5" d="M1 9.924c0-1.552 0-2.328.314-3.01.313-.682.902-1.187 2.08-2.196l1.143-.98C6.667 1.913 7.732 1 9 1c1.268 0 2.333.913 4.463 2.738l1.142.98c1.179 1.01 1.768 1.514 2.081 2.196.314.682.314 1.458.314 3.01v4.846c0 2.155 0 3.233-.67 3.902-.669.67-1.746.67-3.901.67H5.57c-2.155 0-3.232 0-3.902-.67C1 18.002 1 16.925 1 14.77V9.924z" />
                  <path stroke="#1890FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.857 19.341v-5.857a1 1 0 00-1-1H7.143a1 1 0 00-1 1v5.857" />
                </svg>
              </Link>
            </li>
            <li className="mx-1">
              <Link href="#" className="relative block px-2 pt-3.5 pb-4 border-b-2 border-transparent hover:border-[#00ACFF] transition-all duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" fill="none" viewBox="0 0 26 20">
                  <path fill="#000" fillOpacity=".6" fillRule="evenodd" d="M12.79 12.15h.429c2.268.015 7.45.243 7.45 3.732 0 3.466-5.002 3.692-7.415 3.707h-.894c-2.268-.015-7.452-.243-7.452-3.727 0-3.47 5.184-3.697 7.452-3.711l.297-.001h.132zm0 1.75c-2.792 0-6.12.34-6.12 1.962 0 1.585 3.13 1.955 5.864 1.976l.255.002c2.792 0 6.118-.34 6.118-1.958 0-1.638-3.326-1.982-6.118-1.982zm9.343-2.224c2.846.424 3.444 1.751 3.444 2.79 0 .636-.251 1.794-1.931 2.43a.882.882 0 01-1.137-.506.873.873 0 01.51-1.13c.796-.3.796-.633.796-.793 0-.511-.654-.868-1.944-1.06a.878.878 0 01-.741-.996.886.886 0 011.003-.735zm-17.685.735a.878.878 0 01-.742.997c-1.29.19-1.944.548-1.944 1.059 0 .16 0 .491.798.793a.873.873 0 01-.314 1.693.897.897 0 01-.313-.057C.25 16.259 0 15.1 0 14.466c0-1.037.598-2.366 3.446-2.79.485-.06.929.257 1.002.735zM12.789 0c2.96 0 5.368 2.392 5.368 5.33 0 2.94-2.407 5.331-5.368 5.331h-.031a5.329 5.329 0 01-3.782-1.57 5.253 5.253 0 01-1.553-3.764C7.423 2.392 9.83 0 12.789 0zm0 1.75c-1.987 0-3.604 1.607-3.604 3.58a3.526 3.526 0 001.04 2.527 3.58 3.58 0 002.535 1.054l.03.875v-.875c1.987 0 3.605-1.605 3.605-3.58S14.777 1.75 12.789 1.75zm7.27-.607a4.222 4.222 0 013.566 4.172c-.004 2.094-1.58 3.89-3.665 4.181a.88.88 0 01-.994-.745.875.875 0 01.75-.989 2.494 2.494 0 002.147-2.45 2.473 2.473 0 00-2.09-2.443.876.876 0 01-.726-1.005.881.881 0 011.013-.721zm-13.528.72a.876.876 0 01-.726 1.006 2.474 2.474 0 00-2.09 2.446A2.493 2.493 0 005.86 7.762a.875.875 0 11-.243 1.734c-2.085-.29-3.66-2.087-3.664-4.179 0-2.082 1.5-3.837 3.566-4.174a.876.876 0 011.012.72z" clipRule="evenodd" />
                </svg>
              </Link>
            </li>
            <li className="mx-1 relative" ref={notifyRef}>
              <button onClick={() => setNotifyOpen(!notifyOpen)} className="relative block px-2 pt-3.5 pb-4 border-none bg-transparent cursor-pointer hover:border-b-2 hover:border-[#00ACFF] transition-all duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" fill="none" viewBox="0 0 20 22">
                  <path fill="#000" fillOpacity=".6" fillRule="evenodd" d="M7.547 19.55c.533.59 1.218.915 1.93.915.714 0 1.403-.324 1.938-.916a.777.777 0 011.09-.056c.318.284.344.77.058 1.084-.832.917-1.927 1.423-3.086 1.423h-.002c-1.155-.001-2.248-.506-3.077-1.424a.762.762 0 01.057-1.083.774.774 0 011.092.057zM9.527 0c4.58 0 7.657 3.543 7.657 6.85 0 1.702.436 2.424.899 3.19.457.754.976 1.612.976 3.233-.36 4.14-4.713 4.478-9.531 4.478-4.818 0-9.172-.337-9.528-4.413-.003-1.686.515-2.544.973-3.299l.161-.27c.398-.679.737-1.417.737-2.918C1.871 3.543 4.948 0 9.528 0zm0 1.535c-3.6 0-6.11 2.802-6.11 5.316 0 2.127-.595 3.11-1.12 3.978-.422.697-.755 1.247-.755 2.444.173 1.93 1.455 2.944 7.986 2.944 6.494 0 7.817-1.06 7.988-3.01-.003-1.13-.336-1.681-.757-2.378-.526-.868-1.12-1.851-1.12-3.978 0-2.514-2.51-5.316-6.111-5.316z" clipRule="evenodd" />
                </svg>
                <span className="absolute bg-[#1890FF] border border-white rounded-lg min-w-3.5 h-3.5 text-[9px] text-white top-3 right-2 px-0.5 flex items-center justify-center leading-snug">6</span>
              </button>
              {notifyOpen && (
                <div className="absolute left-[-80px] top-8 bg-white shadow-[rgba(149,157,165,0.2)_0px_8px_24px] rounded w-72 p-3 h-[calc(100vh-90px)] overflow-auto z-50 translate-y-10">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-base font-semibold text-[#212121] leading-tight m-0">Notifications</h4>
                    <div className="flex gap-1">
                      <button className="border border-[#f1f1f1] font-medium text-[#1890FF] h-8 px-2 rounded bg-[#1890ff26] text-sm">All</button>
                      <button className="border border-[#f1f1f1] font-medium text-[#212121] h-8 px-2 rounded text-sm">Unread</button>
                    </div>
                  </div>
                  <div className="mt-4">
                    {notifications.map((n, i) => (
                      <div key={i} className="flex items-center mb-3 cursor-pointer p-1 rounded hover:bg-[#66666621] transition-all duration-200">
                        <div className="shrink-0 mr-2">
                          <Image src={n.img} alt="notify" width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
                        </div>
                        <div>
                          <p className="text-xs font-medium text-[#666] leading-normal m-0">
                            {n.name && <span className="text-[#212121]">{n.name} </span>}
                            {n.msg}
                          </p>
                          <span className="text-[#1890FF] leading-tight font-semibold text-xs">{n.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>
            <li className="mx-1">
              <Link href="#" className="relative block px-2 pt-3.5 pb-4 border-b-2 border-transparent hover:border-[#00ACFF] transition-all duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" fill="none" viewBox="0 0 23 22">
                  <path fill="#000" fillOpacity=".6" fillRule="evenodd" d="M11.43 0c2.96 0 5.743 1.143 7.833 3.22 4.32 4.29 4.32 11.271 0 15.562C17.145 20.886 14.293 22 11.405 22c-1.575 0-3.16-.33-4.643-1.012-.437-.174-.847-.338-1.14-.338-.338.002-.793.158-1.232.308-.9.307-2.022.69-2.852-.131-.826-.822-.445-1.932-.138-2.826.152-.44.307-.895.307-1.239 0-.282-.137-.642-.347-1.161C-.57 11.46.322 6.47 3.596 3.22A11.04 11.04 0 0111.43 0zm0 1.535A9.5 9.5 0 004.69 4.307a9.463 9.463 0 00-1.91 10.686c.241.592.474 1.17.474 1.77 0 .598-.207 1.201-.39 1.733-.15.439-.378 1.1-.231 1.245.143.147.813-.085 1.255-.235.53-.18 1.133-.387 1.73-.391.597 0 1.161.225 1.758.463 3.655 1.679 7.98.915 10.796-1.881 3.716-3.693 3.716-9.7 0-13.391a9.5 9.5 0 00-6.74-2.77zm4.068 8.867c.57 0 1.03.458 1.03 1.024 0 .566-.46 1.023-1.03 1.023a1.023 1.023 0 11-.01-2.047h.01zm-4.131 0c.568 0 1.03.458 1.03 1.024 0 .566-.462 1.023-1.03 1.023a1.03 1.03 0 01-1.035-1.024c0-.566.455-1.023 1.025-1.023h.01zm-4.132 0c.568 0 1.03.458 1.03 1.024 0 .566-.462 1.023-1.03 1.023a1.022 1.022 0 11-.01-2.047h.01z" clipRule="evenodd" />
                </svg>
                <span className="absolute bg-[#1890FF] border border-white rounded-lg min-w-3.5 h-3.5 text-[9px] text-white top-3 right-2 px-0.5 flex items-center justify-center leading-snug">2</span>
              </Link>
            </li>
          </ul>

          <div className="flex items-center relative" ref={profileRef}>
            <div className="mr-2 w-5 shrink-0">
              <Image src="/assets/images/profile.png" alt="Profile" width={20} height={20} className="w-5 h-5 rounded-full object-cover" />
            </div>
            <div className="flex items-center cursor-pointer" onClick={() => setProfileOpen(!profileOpen)}>
              <p className="text-sm text-[#212121] m-0 leading-5">Dylan Field</p>
              <button className="border-transparent bg-transparent mt-[-2px] ml-1 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" fill="none" viewBox="0 0 10 6">
                  <path fill="#112032" d="M5 5l.354.354L5 5.707l-.354-.353L5 5zm4.354-3.646l-4 4-.708-.708 4-4 .708.708zm-4.708 4l-4-4 .708-.708 4 4-.708.708z" />
                </svg>
              </button>
            </div>
            {profileOpen && (
              <div className="absolute right-0 top-0 translate-y-8 bg-white w-56 p-3 shadow-[0px_10px_20px_rgba(0,0,0,0.08)] rounded z-50">
                <div className="flex items-center mb-3">
                  <div className="pr-2">
                    <Image src="/assets/images/profile.png" alt="Profile" width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#212121] m-0 mb-1 leading-tight">Dylan Field</h4>
                    <a href="#" className="text-xs text-[#377DFF] leading-tight">View Profile</a>
                  </div>
                </div>
                <hr className="border-[#DFDFDF] my-2" />
                <ul>
                  {["Settings", "Help & Support", "Log Out"].map((label) => (
                    <li key={label} className="mb-3">
                      <a href="#" className="font-medium text-sm text-[#666] flex justify-between items-center hover:text-[#1890FF] transition-all duration-200">
                        <div className="flex items-center gap-2">
                          <span className="bg-[#ebf2ff] p-2 inline-block rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 18 18"><circle cx="9" cy="9" r="7" stroke="#377DFF" strokeWidth="1.5" /></svg>
                          </span>
                          {label}
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="8" fill="none" viewBox="0 0 6 10">
                          <path fill="#112032" d="M5 5l.354.354L5.707 5l-.353-.354L5 5zM1.354 9.354l4-4-.708-.708-4 4 .708.708zm4-4.708l-4-4-.708.708 4 4 .708-.708z" opacity=".5" />
                        </svg>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
