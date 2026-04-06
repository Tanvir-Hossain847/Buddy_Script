import Navbar from "@/components/Navbar";

export default function FeedLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
