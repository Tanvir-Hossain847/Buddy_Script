import LeftSidebar from "@/components/feed/LeftSidebar";
import RightSidebar from "@/components/feed/RightSidebar";
import CreatePost from "@/components/feed/CreatePost";
import PostCard from "@/components/feed/PostCard";
import StoriesCard from "@/components/feed/StoriesCard";

const posts = [
  {
    author: "Karim Saif",
    authorImg: "/assets/images/post_img.png",
    time: "5 minutes ago",
    title: "-Healthy Tracking App",
    image: "/assets/images/timeline_img.png",
  },
  {
    author: "Karim Saif",
    authorImg: "/assets/images/post_img.png",
    time: "5 minutes ago",
    title: "-Healthy Tracking App",
    image: "/assets/images/timeline_img.png",
  },
];

export default function Home() {
  return (
    <div className="bg-[#F0F2F5] h-screen overflow-hidden pt-[58px]">
      <div className="max-w-2/3 mx-auto px-3 h-full">
        <div className="flex h-full">

          {/* Left sidebar — scrolls independently */}
          <div className="w-[25%] shrink-0 pr-3 h-[calc(100vh-62px)] overflow-y-auto overflow-x-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <LeftSidebar />
          </div>

          {/* Middle feed — scrolls independently */}
          <div className="w-[50%] shrink-0 px-[6px] h-[calc(100vh-62px)] overflow-y-auto overflow-x-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="pt-[8px] flex flex-col">
              <StoriesCard />
              <CreatePost />
              {posts.map((post, i) => (
                <PostCard key={i} post={post} />
              ))}
            </div>
          </div>

          {/* Right sidebar — scrolls independently */}
          <div className="w-[25%] shrink-0 pl-3 h-[calc(100vh-62px)] overflow-y-auto overflow-x-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <RightSidebar />
          </div>

        </div>
      </div>
    </div>
  );
}
