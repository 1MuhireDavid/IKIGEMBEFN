"use client";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowUp,
  FaGlobe,
} from "react-icons/fa";
import Footer from "@/components/Footer";

const movies = [
  {
    title: "Rocky",
    image: "/assets/movie.jpg",
    year: "2023",
    duration: "130 min",
    rating: "7.0",
    quality: "HD",
  },
  {
    title: "Gladiator",
    image: "/assets/movie.jpg",
    year: "2023",
    duration: "130 min",
    rating: "6.0",
    quality: "HD",
  },
  {
    title: "Inception",
    image: "/assets/movie.jpg",
    year: "2023",
    duration: "130 min",
    rating: "8.5",
    quality: "HD",
  },
  {
    title: "The Prestige",
    image: "/assets/movie.jpg",
    year: "2023",
    duration: "130 min",
    rating: "7.5",
    quality: "4K",
  },
];

const moreMovies = [
  { title: "The Last of Us", image: "/assets/Fast_One_Poster.webp" },
  { title: "Eric", image: "/assets/fast furious.webp" },
  { title: "Hitman", image: "/assets/jumanji.avif" },
  { title: "Godzilla Minus One", image: "/assets/movie2.jpg" },
  { title: "3 Body Problem", image: "/assets/movie3.jpg" },
  { title: "Severance", image: "/assets/fast furious.webp" },
  { title: "Black Mirror", image: "/assets/fast furious.webp" },
  { title: "Dexter", image: "/assets/movie2.jpg" },
  { title: "Silo", image: "/assets/jumanji.avif" },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollButton(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-black text-white min-h-screen relative">
      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 shadow-md transition-all duration-300 ${
          scrolled ? "bg-white text-black" : "bg-black text-white"
        } p-4 flex justify-between items-center`}
      >
        <h1
          className={`text-2xl font-bold ${
            scrolled ? "text-red-600" : "text-red-400"
          }`}
        >
          IKIGEMBE
        </h1>
        <div className="flex gap-6">
          <Link href="/" className="hover:text-red-400">
            Home
          </Link>
          <Link href="/movies" className="hover:text-red-400">
            Movies
          </Link>
          <Link href="/tv-shows" className="hover:text-red-400">
            TV Shows
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Input
            type="text"
            placeholder="Search movies..."
            className={`w-1/3 ${
              scrolled ? "bg-gray-200 text-black" : "bg-gray-800 text-white"
            }`}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaGlobe className="text-xl cursor-pointer" />
          <Link
            href="/login"
            className={`px-4 py-2 rounded-lg transition duration-300 ${
              scrolled ? "bg-red-600 text-white" : "bg-red-400 text-black"
            } hover:bg-red-700`}
          >
            Sign In
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header
        className="relative h-96 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/assets/01.webp')" }}
      >
        <div className="bg-black bg-opacity-80 p-6 rounded-lg text-center">
          <h2 className="text-4xl font-bold text-white">
            Explore the Best Movies
          </h2>
          <p className="mt-2 text-gray-300">
            Find trending and top-rated movies all in one place
          </p>
          <Link
            href="/explore"
            className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition duration-300 inline-block"
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* Trending Movies Section */}
      <section className="p-6 mt-16">
        <h2 className="text-2xl font-bold mb-4 text-white">Upcoming Movies</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
          {movies.map((movie, index) => (
            <Card
              key={index}
              className="border-0 bg-black rounded-lg overflow-hidden w-[80%]"
            >
              <CardContent className="p-0">
                <Image
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-64 object-cover"
                  width={300}
                  height={400}
                />
                <div className="flex justify-between">
                  <div className="text-start p-2 text-gray-400 text-sm">
                    <CardTitle className="mt-2 text-start text-white">
                      {movie.title}
                    </CardTitle>
                    <span className="text-green-400">{movie.quality}</span>
                  </div>
                  <div className="">
                    <div className="text-end text-gray-400 text-sm p-2">
                      <p className="text-green-400 font-bold">{movie.year}</p>
                      <p className="text-gray-400 text-sm">{movie.duration}</p>
                      <p className="text-yellow-400 text-sm">
                        ⭐ {movie.rating}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* More to Watch Section */}
      <section className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-white">More to Watch</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {moreMovies.map((movie, index) => (
            <Card
              key={index}
              className="border-0 bg-black rounded-lg overflow-hidden w-[80%]"
            >
              <CardContent className="p-0">
                <Image
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-64 object-cover"
                  width={300}
                  height={400}
                />
                <CardTitle className="mt-2 text-center text-white p-2">
                  {movie.title}
                </CardTitle>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollButton && (
        <button
          className="fixed bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-md transition duration-300"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <FaArrowUp size={20} />
        </button>
      )}
      <Footer/>
    </div>
  );
}
