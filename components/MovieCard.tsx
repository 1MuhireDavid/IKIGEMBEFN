"use client";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface Movie {
  title: string;
  image: string;
  year: string;
  duration: string;
  rating: string;
  quality: string;
}

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <Link href={`/movies/${encodeURIComponent(movie.title)}`}>
      <Card className="border-0 bg-black rounded-lg overflow-hidden w-full cursor-pointer hover:opacity-80 transition">
        <CardContent className="p-0">
          <Image
            src={movie.image}
            alt={movie.title}
            className="w-full h-64 object-cover"
            width={300}
            height={400}
          />
          <div className="flex justify-between p-2">
            <div className="text-start text-gray-400 text-sm">
              <CardTitle className="text-white">{movie.title}</CardTitle>
              <span className="text-green-400">{movie.quality}</span>
            </div>
            <div className="text-end text-gray-400 text-sm">
              <p className="text-green-400 font-bold">{movie.year}</p>
              <p>{movie.duration}</p>
              <p className="text-yellow-400">⭐ {movie.rating}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default MovieCard;
