import Navbar from "@/components/Navbar";
import ThemeToggle from "@/components/ThemeToggle";
import PrivateRoute from "@/components/PrivateRoute";

export default function FeedLayout({ children }) {
  return (
    <PrivateRoute>
      <Navbar />
      <ThemeToggle />
      {children}
    </PrivateRoute>
  );
}
