import Image from "next/image";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <section className="min-h-screen bg-[#F0F2F5] relative z-0 flex items-center py-8">
      <div className="absolute top-0 left-0 -z-10">
        <Image src="/assets/images/shape1.svg" alt="" width={200} height={200} className="w-auto h-auto" />
      </div>
      <div className="absolute top-0 right-5 -z-10">
        <Image src="/assets/images/shape2.svg" alt="" width={200} height={200} className="w-auto h-auto" />
      </div>
      <div className="absolute bottom-0 right-80 -z-10">
        <Image src="/assets/images/shape3.svg" alt="" width={200} height={200} className="w-auto h-auto" />
      </div>

      <div className="w-full max-w-4xl mx-auto px-4">
        <div className="flex items-center gap-6">
          <div className="flex-2 hidden lg:block">
            <Image src="/assets/images/registration.png" alt="Registration" width={500} height={400} className="w-full h-auto" />
          </div>

          <div className="flex-1 min-w-0">
            <div className="bg-white rounded p-7">
              <div className="mb-4 flex justify-center">
                <Image src="/assets/images/logo.svg" alt="Logo" width={100} height={28} className="w-auto h-auto max-w-24" />
              </div>

              <p className="text-center text-[#2D3748] leading-snug mb-1 text-xs">Get Started Now</p>
              <h4 className="text-center font-medium text-[#212121] mb-6 text-base">Registration</h4>

              <button
                type="button"
                className="w-full border border-[#F0F2F5] bg-white rounded flex items-center justify-center py-2 px-8 mb-5 hover:shadow-md transition-all duration-200"
              >
                <Image src="/assets/images/google.svg" alt="Google" width={16} height={16} className="w-4 h-4 mr-2" />
                <span className="font-medium text-xs text-[#312000]">Register with google</span>
              </button>

              <div className="relative text-center mb-5">
                <span className="relative z-10 bg-white px-2 text-xs text-[#C4C4C4]">Or</span>
                <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-[#E8E8E8]" />
              </div>

              <form>
                <div className="mb-2.5">
                  <label className="block font-medium text-xs text-[#4A5568] mb-1.5">Email</label>
                  <input
                    type="email"
                    className="w-full bg-white border border-[#F5F5F5] rounded h-9 px-3 text-xs text-[#2D3748] focus:outline-none focus:border-[#1890FF] transition-all duration-200"
                  />
                </div>
                <div className="mb-2.5">
                  <label className="block font-medium text-xs text-[#4A5568] mb-1.5">Password</label>
                  <input
                    type="password"
                    className="w-full bg-white border border-[#F5F5F5] rounded h-9 px-3 text-xs text-[#2D3748] focus:outline-none focus:border-[#1890FF] transition-all duration-200"
                  />
                </div>
                <div className="mb-2.5">
                  <label className="block font-medium text-xs text-[#4A5568] mb-1.5">Repeat Password</label>
                  <input
                    type="password"
                    className="w-full bg-white border border-[#F5F5F5] rounded h-9 px-3 text-xs text-[#2D3748] focus:outline-none focus:border-[#1890FF] transition-all duration-200"
                  />
                </div>

                <div className="mb-5">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input type="checkbox" className="w-3 h-3 accent-[#1890FF]" defaultChecked />
                    <span className="text-xs text-[#2D3748]">I agree to terms &amp; conditions</span>
                  </label>
                </div>

                <div className="mb-6">
                  <button
                    type="submit"
                    className="w-full bg-[#1890FF] border border-transparent rounded py-2.5 font-medium text-xs text-white hover:shadow-[rgba(149,157,165,0.2)_0px_8px_24px] transition-all duration-200"
                  >
                    Register now
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
