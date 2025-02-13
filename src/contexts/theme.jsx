import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { BiMoon, BiSun } from "react-icons/bi";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme("dark");

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  function isDark() {
    return theme === "dark";
  }

  return (
    <div className="utilities-pallet">
        <button
        className="focus:outline-none"
        onClick={() => setTheme(isDark() ? "light" : "dark")}
        aria-label="Theme toggle"
        >
        {isDark() ? <BiSun size={30} /> : <BiMoon size={30} />}
        </button>
    </div>
  );
}