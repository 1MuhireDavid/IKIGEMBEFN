"use client";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowUp,
} from "react-icons/fa";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import MovieCard from "@/components/MovieCard";

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
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
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
      <Navbar/>

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
      </section>

      {/* More to Watch Section */}
      <section className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-white">More to Watch</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {moreMovies.map((movie, index) => (
            <Card
              key={index}
              className="border-0 bg-black rounded-lg overflow-hidden w-[100%] items-center"
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
