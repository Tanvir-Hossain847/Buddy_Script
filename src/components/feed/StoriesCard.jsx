"use client";
import Image from "next/image";

const stories = [
  { img: "/assets/images/card_ppl2.png", name: "Ryan Roslansky", mini: "/assets/images/mini_pic.png" },
  { img: "/assets/images/card_ppl3.png", name: "Dylan Field", mini: "/assets/images/mini_pic.png" },
  { img: "/assets/images/card_ppl4.png", name: "Karim Saif", mini: "/assets/images/mini_pic.png" },
];

export default function StoriesCard() {
  return (
    <div className="relative mb-3">
      <div className="absolute top-1/2 -translate-y-1/2 right-[-10px] z-20">
        <button className="bg-[#1890FF] border border-[#F0F2F5] rounded-full w-6 h-6 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" fill="none" viewBox="0 0 9 8">
            <path fill="#fff" d="M8 4l.366-.341.318.341-.318.341L8 4zm-7 .5a.5.5 0 010-1v1zM5.566.659l2.8 3-.732.682-2.8-3L5.566.66zm2.8 3.682l-2.8 3-.732-.682 2.8-3 .732.682zM8 4.5H1v-1h7v1z" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-4 gap-2">
        <div className="cursor-pointer transition-all duration-200">
          <div className="relative rounded overflow-hidden">
            <Image src="/assets/images/card_ppl1.png" alt="Your Story" width={200} height={220} className="w-full object-cover rounded" style={{ height: 130 }} />
            <div className="absolute inset-0 bg-black/50 rounded" />
            <div className="absolute bottom-0 left-0 right-0 bg-[#112032] rounded-[25.5px_25.5px_6px_6px] pt-7 pb-2 z-10">
              <div className="-top-3 absolute left-1/2 -translate-x-1/2">
                <button className="bg-[#1890FF] border-2 border-[#112032] rounded-full w-8 h-8 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                    <path stroke="#fff" strokeLinecap="round" d="M.5 4.884h9M4.884 9.5v-9" />
                  </svg>
                </button>
              </div>
              <p className="text-center text-white text-xs mb-2 leading-5 font-medium">Your Story</p>
            </div>
          </div>
        </div>

        {stories.map((story, i) => (
          <div key={i} className="cursor-pointer transition-all duration-200 group">
            <div className="relative rounded overflow-hidden">
              <Image src={story.img} alt={story.name} width={200} height={220} className="w-full object-cover rounded transition-all duration-200" style={{ height: 130 }} />
              <div className="absolute inset-0 bg-black/50 rounded group-hover:bg-black/30 transition-all duration-200" />
              <div className="absolute bottom-0 left-0 right-0 z-10 pb-2">
                <p className="text-center text-white text-xs leading-5 font-medium">{story.name}</p>
              </div>
              <div className="absolute top-3 right-3 z-10">
                <Image src={story.mini} alt="mini" width={28} height={28} className="w-7 h-7 rounded-full bg-[#C4C4C4] border-2 border-white" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
