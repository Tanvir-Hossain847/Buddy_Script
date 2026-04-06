"use client";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { AuthContext } from "@/context/authContext";

export default function RegisterPage() {
  const { createUser, signInWithGoogle, updateUserProfile } = useContext(AuthContext);
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    if (!agreed) {
      setError("You must agree to the terms & conditions.");
      return;
    }
    setLoading(true);
    try {
      await createUser(email, password);
      await updateUserProfile(`${firstName} ${lastName}`, "");
      router.replace("/");
    } catch (err) {
      setError(err.message.replace("Firebase: ", "").replace(/\(auth.*\)\.?/, "").trim());
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogle() {
    setError("");
    setLoading(true);
    try {
      await signInWithGoogle();
      router.replace("/");
    } catch (err) {
      setError(err.message.replace("Firebase: ", "").replace(/\(auth.*\)\.?/, "").trim());
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="min-h-screen bg-[#F0F2F5] relative z-0 flex items-center py-8">
      <div className="absolute top-0 left-0 -z-10">
        <Image src="/assets/images/shape1.svg" alt="" width={200} height={200} className="w-50 " />
      </div>
      <div className="absolute top-0 right-5 -z-10">
        <Image src="/assets/images/shape2.svg" alt="" width={200} height={200} className="w-100 " />
      </div>
      <div className="absolute bottom-0 right-80 -z-10">
        <Image src="/assets/images/shape3.svg" alt="" width={200} height={200} className="w-100 " />
      </div>

      <div className="w-full max-w-4xl mx-auto px-4">
        <div className="flex items-center gap-6">
          <div className="flex-2 hidden lg:block">
            <Image src="/assets/images/registration.png" alt="Registration" width={500} height={400} className="w-5/6 h-auto" />
          </div>

          <div className="w-80">
            <div className="bg-white rounded p-7">
              <div className="mb-4 flex justify-center">
                <Image src="/assets/images/logo.svg" alt="Logo" width={100} height={28} className="w-auto h-auto max-w-24" />
              </div>

              <p className="text-center text-[#2D3748] leading-snug mb-1 text-xs">Get Started Now</p>
              <h4 className="text-center font-medium text-[#212121] mb-6 text-base">Create your account</h4>

              <button
                type="button"
                onClick={handleGoogle}
                disabled={loading}
                className="w-full border border-[#F0F2F5] bg-white rounded flex items-center justify-center py-2 px-8 mb-5 hover:shadow-md transition-all duration-200 disabled:opacity-60"
              >
                <Image src="/assets/images/google.svg" alt="Google" width={16} height={16} className="w-4 h-4 mr-2" />
                <span className="font-medium text-xs text-[#312000]">Register with google</span>
              </button>

              <div className="relative text-center mb-5">
                <span className="relative z-10 bg-white px-2 text-xs text-[#C4C4C4]">Or</span>
                <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-[#E8E8E8]" />
              </div>

              {error && <p className="text-xs text-red-500 mb-3 text-center">{error}</p>}

              <form onSubmit={handleSubmit}>
                <div className="flex gap-2 mb-2.5">
                  <div className="flex-1">
                    <label className="block font-medium text-xs text-[#4A5568] mb-1.5">First Name</label>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                      placeholder="John"
                      className="w-full bg-white border border-[#F5F5F5] rounded h-9 px-3 text-xs text-[#2D3748] focus:outline-none focus:border-[#1890FF] transition-all duration-200"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block font-medium text-xs text-[#4A5568] mb-1.5">Last Name</label>
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                      placeholder="Doe"
                      className="w-full bg-white border border-[#F5F5F5] rounded h-9 px-3 text-xs text-[#2D3748] focus:outline-none focus:border-[#1890FF] transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="mb-2.5">
                  <label className="block font-medium text-xs text-[#4A5568] mb-1.5">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="john@example.com"
                    className="w-full bg-white border border-[#F5F5F5] rounded h-9 px-3 text-xs text-[#2D3748] focus:outline-none focus:border-[#1890FF] transition-all duration-200"
                  />
                </div>

                <div className="mb-2.5">
                  <label className="block font-medium text-xs text-[#4A5568] mb-1.5">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Min. 6 characters"
                    className="w-full bg-white border border-[#F5F5F5] rounded h-9 px-3 text-xs text-[#2D3748] focus:outline-none focus:border-[#1890FF] transition-all duration-200"
                  />
                </div>

                <div className="mb-5">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="w-3 h-3 accent-[#1890FF]"
                    />
                    <span className="text-xs text-[#2D3748]">I agree to terms &amp; conditions</span>
                  </label>
                </div>

                <div className="mb-6">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#1890FF] border border-transparent rounded py-2.5 font-medium text-xs text-white hover:shadow-[rgba(149,157,165,0.2)_0px_8px_24px] transition-all duration-200 disabled:opacity-60"
                  >
                    {loading ? "Creating account..." : "Register now"}
                  </button>
                </div>
              </form>

              <p className="text-center text-xs text-[#2D3748] m-0">
                Already have an account?{" "}
                <Link href="/login" className="text-[#1890FF] hover:underline">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
