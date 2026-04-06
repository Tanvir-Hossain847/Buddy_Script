"use client";
import Image from "next/image";

const exploreItems = [
  { label: "Learning", badge: "New", icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 20 20"><path fill="#666" d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0zm0 1.395a8.605 8.605 0 100 17.21 8.605 8.605 0 000-17.21zm-1.233 4.65l.104.01c.188.028.443.113.668.203 1.026.398 3.033 1.746 3.8 2.563l.223.239.08.092a1.16 1.16 0 01.025 1.405c-.04.053-.086.105-.19.215l-.269.28c-.812.794-2.57 1.971-3.569 2.391-.277.117-.675.25-.865.253a1.167 1.167 0 01-1.07-.629c-.053-.104-.12-.353-.171-.586l-.051-.262c-.093-.57-.143-1.437-.142-2.347l.001-.288c.01-.858.063-1.64.157-2.147.037-.207.12-.563.167-.678.104-.25.291-.45.523-.575a1.15 1.15 0 01.58-.14zm.14 1.467l-.027.126-.034.198c-.07.483-.112 1.233-.111 2.036l.001.279c.009.737.053 1.414.123 1.841l.048.235.192-.07c.883-.372 2.636-1.56 3.23-2.2l.08-.087-.212-.218c-.711-.682-2.38-1.79-3.167-2.095l-.124-.045z"/></svg> },
  { label: "Insights", icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" fill="none" viewBox="0 0 22 24"><path fill="#666" d="M14.96 2c3.101 0 5.159 2.417 5.159 5.893v8.214c0 3.476-2.058 5.893-5.16 5.893H6.989c-3.101 0-5.159-2.417-5.159-5.893V7.893C1.83 4.42 3.892 2 6.988 2h7.972zm0 1.395H6.988c-2.37 0-3.883 1.774-3.883 4.498v8.214c0 2.727 1.507 4.498 3.883 4.498h7.972c2.375 0 3.883-1.77 3.883-4.498V7.893c0-2.727-1.508-4.498-3.883-4.498zM7.036 9.63c.323 0 .59.263.633.604l.005.094v6.382c0 .385-.285.697-.638.697-.323 0-.59-.262-.632-.603l-.006-.094v-6.382c0-.385.286-.697.638-.697zm3.97-3.053c.323 0 .59.262.632.603l.006.095v9.435c0 .385-.285.697-.638.697-.323 0-.59-.262-.632-.603l-.006-.094V7.274c0-.386.286-.698.638-.698zm3.905 6.426c.323 0 .59.262.632.603l.006.094v3.01c0 .385-.285.697-.638.697-.323 0-.59-.262-.632-.603l-.006-.094v-3.01c0-.385.286-.697.638-.697z"/></svg> },
  { label: "Find friends", icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" fill="none" viewBox="0 0 22 24"><path fill="#666" d="M9.032 14.456l.297.002c4.404.041 6.907 1.03 6.907 3.678 0 2.586-2.383 3.573-6.615 3.654l-.589.005c-4.588 0-7.203-.972-7.203-3.68 0-2.704 2.604-3.659 7.203-3.659zm0 1.5l-.308.002c-3.645.038-5.523.764-5.523 2.157 0 1.44 1.99 2.18 5.831 2.18 3.847 0 5.832-.728 5.832-2.159 0-1.44-1.99-2.18-5.832-2.18zm8.53-8.037c.347 0 .634.282.679.648l.006.102v1.255h1.185c.38 0 .686.336.686.75 0 .38-.258.694-.593.743l-.093.007h-1.185v1.255c0 .414-.307.75-.686.75-.347 0-.634-.282-.68-.648l-.005-.102-.001-1.255h-1.183c-.379 0-.686-.336-.686-.75 0-.38.258-.694.593-.743l.093-.007h1.183V8.669c0-.414.308-.75.686-.75zM9.031 2c2.698 0 4.864 2.369 4.864 5.319 0 2.95-2.166 5.318-4.864 5.318-2.697 0-4.863-2.369-4.863-5.318C4.17 4.368 6.335 2 9.032 2zm0 1.5c-1.94 0-3.491 1.697-3.491 3.819 0 2.12 1.552 3.818 3.491 3.818 1.94 0 3.492-1.697 3.492-3.818 0-2.122-1.551-3.818-3.492-3.818z"/></svg> },
  { label: "Bookmarks", icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" fill="none" viewBox="0 0 22 24"><path fill="#666" d="M13.704 2c2.8 0 4.585 1.435 4.585 4.258V20.33c0 .443-.157.867-.436 1.18-.279.313-.658.489-1.063.489a1.456 1.456 0 01-.708-.203l-5.132-3.134-5.112 3.14c-.615.36-1.361.194-1.829-.405l-.09-.126-.085-.155a1.913 1.913 0 01-.176-.786V6.434C3.658 3.5 5.404 2 8.243 2h5.46zm0 1.448h-5.46c-2.191 0-3.295.948-3.295 2.986V20.32l.034.063c.059.09.17.12.247.074l5.11-3.138c.38-.23.84-.23 1.222.001l5.124 3.128a.252.252 0 00.114.035.188.188 0 00.14-.064.236.236 0 00.058-.157V6.258c0-1.9-1.132-2.81-3.294-2.81zm.386 4.869c.357 0 .646.324.646.723 0 .367-.243.67-.559.718l-.087.006H7.81c-.357 0-.646-.324-.646-.723 0-.367.243-.67.558-.718l.088-.006h6.28z"/></svg> },
  { label: "Group", icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
  { label: "Gaming", badge: "New", icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" fill="none" viewBox="0 0 22 24"><path fill="#666" d="M7.625 2c.315-.015.642.306.645.69.003.309.234.558.515.558h.928c1.317 0 2.402 1.169 2.419 2.616v.24h2.604c2.911-.026 5.255 2.337 5.377 5.414.005.12.006.245.004.368v4.31c.062 3.108-2.21 5.704-5.064 5.773-.117.003-.228 0-.34-.005a199.325 199.325 0 01-7.516 0c-2.816.132-5.238-2.292-5.363-5.411a6.262 6.262 0 01-.004-.371V11.87c-.03-1.497.48-2.931 1.438-4.024.956-1.094 2.245-1.714 3.629-1.746a3.28 3.28 0 01.342.005l3.617-.001v-.231c-.008-.676-.522-1.23-1.147-1.23h-.93c-.973 0-1.774-.866-1.785-1.937-.003-.386.28-.701.631-.705zm-.614 5.494h-.084C5.88 7.52 4.91 7.987 4.19 8.812c-.723.823-1.107 1.904-1.084 3.045v4.34c-.002.108 0 .202.003.294.094 2.353 1.903 4.193 4.07 4.08 2.487.046 5.013.046 7.55-.001.124.006.212.007.3.004 2.147-.05 3.86-2.007 3.812-4.361V11.87a5.027 5.027 0 00-.002-.291c-.093-2.338-1.82-4.082-4.029-4.082l-.07.002H7.209a4.032 4.032 0 00-.281-.004l.084-.001zm1.292 4.091c.341 0 .623.273.667.626l.007.098-.001 1.016h.946c.372 0 .673.325.673.725 0 .366-.253.669-.582.717l-.091.006h-.946v1.017c0 .4-.3.724-.673.724-.34 0-.622-.273-.667-.626l-.006-.098v-1.017h-.945c-.372 0-.674-.324-.674-.723 0-.367.254-.67.582-.718l.092-.006h.945v-1.017c0-.4.301-.724.673-.724zm7.058 3.428c.372 0 .674.324.674.724 0 .366-.254.67-.582.717l-.091.007h-.09c-.373 0-.674-.324-.674-.724 0-.367.253-.67.582-.717l.091-.007h.09zm-1.536-3.322c.372 0 .673.324.673.724 0 .367-.253.67-.582.718l-.091.006h-.09c-.372 0-.674-.324-.674-.724 0-.366.254-.67.582-.717l.092-.007h.09z"/></svg> },
  { label: "Settings", icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg> },
  { label: "Save post", icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 22 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg> },
];

const events = [
  { date: "10", month: "Jul", title: "No more terrorism no more cry", going: "17 People Going" },
  { date: "10", month: "Jul", title: "No more terrorism no more cry", going: "17 People Going" },
];

const suggestedPeople = [
  { name: "Radovan SkillArena", role: "Founder & CEO", img: "/assets/images/card_ppl1.png" },
  { name: "Ryan Roslansky", role: "CEO of Linkedin", img: "/assets/images/card_ppl2.png" },
  { name: "Dylan Field", role: "CEO of Figma", img: "/assets/images/card_ppl3.png" },
];

export default function LeftSidebar() {
  return (
    <div className="flex flex-col pt-3.5">
      <div className="bg-white rounded pt-4 pb-1 px-4 mb-3 transition-all duration-200">
        <h4 className="text-sm font-medium text-[#212121] m-0 mb-4 leading-snug">Explore</h4>
        <ul className="mt-4">
          {exploreItems.map((item) => (
            <li key={item.label} className="mb-4 flex items-center justify-between relative">
              <a href="#" className="font-medium text-xs text-[#666] flex items-center w-full hover:text-[#1890FF] transition-all duration-200 no-underline">
                <span className="mr-2.5 flex items-center">{item.icon}</span>
                {item.label}
              </a>
              {item.badge && (
                <span className="text-xs text-white bg-[#0ACF83] border-2 border-white rounded-lg w-8 h-5 flex items-center justify-center absolute right-0 shrink-0 leading-snug">
                  {item.badge}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded pt-4 pb-1 px-4 mb-3 transition-all duration-200">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-medium text-[#212121] m-0 leading-snug">Suggested People</h4>
          <a href="#" className="font-medium text-xs text-[#1890FF] leading-5">See All</a>
        </div>
        {suggestedPeople.map((person) => (
          <div key={person.name} className="flex items-center justify-between mb-4 flex-wrap">
            <div className="flex items-center flex-1 gap-3">
              <div className="shrink-0">
                <Image src={person.img} alt={person.name} width={28} height={28} className="w-7 h-7 rounded-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-xs font-medium text-[#212121] m-0 leading-tight truncate">{person.name}</h4>
                <p className="text-xs font-light text-[#212121] m-0 leading-snug">{person.role}</p>
              </div>
            </div>
            <a href="#" className="bg-white border border-[#DCDFE4] rounded-sm font-medium text-xs text-[#959EAE] p-1 block transition-all duration-200 hover:text-[#F3F9FF] hover:bg-[#1890FF] hover:border-[#1890FF]">
              Follow
            </a>
          </div>
        ))}
      </div>

      <div className="bg-white rounded pt-4 pb-1 px-4 mb-3 transition-all duration-200">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-medium text-[#212121] m-0 leading-snug">Events</h4>
          <a href="#" className="font-medium text-xs text-[#1890FF] leading-5 block cursor-pointer py-1 px-px">See all</a>
        </div>
        {events.map((ev, i) => (
          <div key={i} className="block mb-3 cursor-pointer">
            <div className="bg-white shadow-[0px_4px_8px_rgba(0,0,0,0.08)] rounded mb-3">
              <div className="rounded overflow-hidden">
                <Image src="/assets/images/feed_event1.png" alt="Event" width={300} height={120} className="w-full h-auto rounded" />
              </div>
              <div className="px-3 pt-3 pb-2 flex items-center">
                <div className="bg-[#0ACF83] rounded-sm w-fit px-1.5 py-1.5 text-center shrink-0">
                  <p className="text-sm font-bold text-white m-0 leading-tight">{ev.date}</p>
                  <p className="text-sm text-white m-0 leading-tight">{ev.month}</p>
                </div>
                <div className="pl-2">
                  <h4 className="text-xs font-medium text-black m-0 leading-snug">{ev.title}</h4>
                </div>
              </div>
              <hr className="bg-[#DFDFDF] border-none h-px mx-0 my-1" />
              <div className="flex items-center justify-between px-3 pt-0.5 pb-2">
                <p className="text-xs font-medium text-[#8A8A8A] m-0 leading-5 opacity-70">{ev.going}</p>
                <a href="#" className="font-medium text-xs text-[#1890FF] block bg-[#F3F9FF] border border-[#1890FF] rounded-sm py-0.5 px-2.5 transition-all duration-200 hover:text-[#F3F9FF] hover:bg-[#1890FF]">Going</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
