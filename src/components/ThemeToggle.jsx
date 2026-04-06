"use client";
import { useTheme } from "@/components/ThemeProvider";

export default function ThemeToggle() {
  const { dark, toggle } = useTheme();

  return (
    <div className="fixed top-1/2 -translate-y-1/2 right-5 z-50">
      <button
        type="button"
        onClick={toggle}
        aria-label="Toggle dark mode"
        className="flex items-center relative outline-none cursor-pointer transition-all duration-200 border-none"
        style={{
          background: "#1890FF",
          borderRadius: 40,
          width: 44,
          height: 22,
          transform: "rotate(90deg)",
        }}
      >
        <div
          className="absolute transition-all duration-200 rounded-full"
          style={{
            width: 14,
            height: 14,
            background: "#fff",
            top: "50%",
            transform: "translateY(-50%)",
            left: dark ? "calc(100% - 17px)" : 4,
          }}
        />

        <div
          className="absolute transition-all duration-200"
          style={{
            right: 5,
            transform: "rotate(-90deg)",
            opacity: dark ? 0 : 1,
            visibility: dark ? "hidden" : "visible",
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="11" fill="none" viewBox="0 0 11 16">
            <path fill="#fff" d="M2.727 14.977l.04-.498-.04.498zm-1.72-.49l.489-.11-.489.11zM3.232 1.212L3.514.8l-.282.413zM9.792 8a6.5 6.5 0 00-6.5-6.5v-1a7.5 7.5 0 017.5 7.5h-1zm-6.5 6.5a6.5 6.5 0 006.5-6.5h1a7.5 7.5 0 01-7.5 7.5v-1zm-.525-.02c.173.013.348.02.525.02v1c-.204 0-.405-.008-.605-.024l.08-.997zm-.261-1.83A6.498 6.498 0 005.792 7h1a7.498 7.498 0 01-3.791 6.52l-.495-.87zM5.792 7a6.493 6.493 0 00-2.841-5.374L3.514.8A7.493 7.493 0 016.792 7h-1zm-3.105 8.476c-.528-.042-.985-.077-1.314-.155-.316-.075-.746-.242-.854-.726l.977-.217c-.028-.124-.145-.09.106-.03.237.056.6.086 1.165.131l-.08.997zm.314-1.956c-.622.354-1.045.596-1.31.792a.967.967 0 00-.204.185c-.01.013.027-.038.009-.12l-.977.218a.836.836 0 01.144-.666c.112-.162.27-.3.433-.42.324-.24.814-.519 1.41-.858L3 13.52zM3.292 1.5a.391.391 0 00.374-.285A.382.382 0 003.514.8l-.563.826A.618.618 0 012.702.95a.609.609 0 01.59-.45v1z"/>
          </svg>
        </div>

        <div
          className="absolute transition-all duration-200"
          style={{
            left: 4,
            transform: "rotate(-90deg)",
            opacity: dark ? 1 : 0,
            visibility: dark ? "visible" : "hidden",
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="4.389" stroke="#fff" transform="rotate(-90 12 12)"/>
            <path stroke="#fff" strokeLinecap="round" d="M3.444 12H1M23 12h-2.444M5.95 5.95L4.222 4.22M19.778 19.779L18.05 18.05M12 3.444V1M12 23v-2.445M18.05 5.95l1.728-1.729M4.222 19.779L5.95 18.05"/>
          </svg>
        </div>
      </button>
    </div>
  );
}
