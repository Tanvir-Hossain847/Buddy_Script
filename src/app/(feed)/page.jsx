import LeftSidebar from "@/components/feed/LeftSidebar";
import RightSidebar from "@/components/feed/RightSidebar";
import FeedMiddle from "@/components/feed/FeedMiddle";

export default function Home() {
  return (
    <div className="bg-[#F0F2F5] h-screen overflow-hidden pt-[58px]">
      <div className="max-w-2/3 mx-auto px-3 h-full">
        <div className="flex h-full">

          <div className="w-[25%] shrink-0 pr-3 h-[calc(100vh-62px)] overflow-y-auto overflow-x-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <LeftSidebar />
          </div>

          <div className="w-[50%] shrink-0 px-[6px] h-[calc(100vh-62px)] overflow-y-auto overflow-x-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <FeedMiddle />
          </div>

          <div className="w-[25%] shrink-0 pl-3 h-[calc(100vh-62px)] overflow-y-auto overflow-x-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <RightSidebar />
          </div>

        </div>
      </div>
    </div>
  );
}
