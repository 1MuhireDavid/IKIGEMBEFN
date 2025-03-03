import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Input } from "./ui/input";
import { FaGlobe, FaBars, FaTimes } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
    setUser(null);
    router.push("/login");
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 shadow-md transition-all duration-300 ${
        scrolled ? "bg-white text-black" : "bg-black text-white"
      } p-4 flex justify-between items-center`}
    >
      <h1
        className={`text-2xl font-bold ${scrolled ? "text-red-600" : "text-red-400"}`}
      >
        IKIGEMBE
      </h1>
      
      {/* Mobile Menu Toggle */}
      <div className="md:hidden text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6">
        <Link href="/" className="hover:text-red-400">Home</Link>
        <Link href="/movies" className="hover:text-red-400">Movies</Link>
        <Link href="/tv-shows" className="hover:text-red-400">TV Shows</Link>
      </div>
      
      {/* Search and Actions */}
      <div className="hidden md:flex items-center gap-4">
        <Input
          type="text"
          placeholder="Search movies..."
          className={`w-1/3 ${scrolled ? "bg-gray-200 text-black" : "bg-gray-800 text-white"}`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <FaGlobe className="text-xl cursor-pointer" />
        {user ? (
          <button onClick={handleLogout} className="bg-red-600 px-4 py-2 rounded hover:bg-red-700">
            Logout
          </button>
        ): (
        <Link
          href="/login"
          className={`px-4 py-2 rounded-lg transition duration-300 ${
            scrolled ? "bg-red-600 text-white" : "bg-red-400 text-black"
          } hover:bg-red-700`}
        >
          Sign In
        </Link>
        )}
      </div>
      
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center gap-6 py-4 md:hidden">
          <Link href="/" className="hover:text-red-400" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/movies" className="hover:text-red-400" onClick={() => setMenuOpen(false)}>Movies</Link>
          <Link href="/tv-shows" className="hover:text-red-400" onClick={() => setMenuOpen(false)}>TV Shows</Link>
          <Input
            type="text"
            placeholder="Search movies..."
            className="bg-gray-800 text-white w-3/4"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaGlobe className="text-xl cursor-pointer" />
          <Link
            href="/login"
            className="px-4 py-2 rounded-lg bg-red-400 text-black hover:bg-red-700"
            onClick={() => setMenuOpen(false)}
          >
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
