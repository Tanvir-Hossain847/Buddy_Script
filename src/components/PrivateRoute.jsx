"use client";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { AuthContext } from "@/context/authContext";

export default function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F0F2F5]">
        <div className="w-8 h-8 border-2 border-[#1890FF] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) return null;

  return children;
}
