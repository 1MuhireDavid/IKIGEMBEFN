import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// Dummy Data (Replace with real API data if needed)
const movies = [
  {
    title: "Rocky",
    image: "/assets/movie.jpg",
    year: "2023",
    duration: "130 min",
    rating: "7.0",
    quality: "HD",
    description:
      "A story of an underdog boxer who gets a shot at the world heavyweight championship.",
  },
  {
    title: "Gladiator",
    image: "/assets/movie.jpg",
    year: "2023",
    duration: "130 min",
    rating: "6.0",
    quality: "HD",
    description:
      "A Roman general seeks revenge against the corrupt emperor who murdered his family.",
  },
  {
    title: "Inception",
    image: "/assets/movie.jpg",
    year: "2010",
    duration: "148 min",
    rating: "8.8",
    quality: "4K",
    description:
      "A skilled thief enters dreams to steal secrets, but his mission turns into a fight for survival.",
  },
  {
    title: "The Prestige",
    image: "/assets/movie.jpg",
    year: "2006",
    duration: "130 min",
    rating: "8.5",
    quality: "HD",
    description:
      "Two rival magicians battle for supremacy in a thrilling tale of illusion and deception.",
  },
];

interface MovieDetailsProps {
  params: { slug: string };
}

export default function MovieDetails({ params }: MovieDetailsProps) {
  const movie = movies.find((m) => m.title === decodeURIComponent(params.slug));

  if (!movie) return notFound();

  // Filter out the current movie and randomly select recommended ones
  const recommendedMovies = movies.filter((m) => m.title !== movie.title).slice(0, 3);

  return (
    <div className="bg-black text-white min-h-screen p-6">
      <div>
        <Link href="/" className="text-red-500">
          ← Back to Home
        </Link>
      </div>

      {/* Movie Details Section */}
      <div className="mt-6 flex flex-col lg:flex-row items-center">
        <Image
          src={movie.image}
          alt={movie.title}
          width={400}
          height={600}
          className="rounded-lg"
        />
        <div className="lg:ml-6 mt-6 lg:mt-0">
          <h1 className="text-4xl font-bold">{movie.title}</h1>
          <p className="mt-2 text-gray-400">{movie.description}</p>
          <p className="mt-4 text-lg">
            <span className="font-semibold">Year:</span> {movie.year}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Duration:</span> {movie.duration}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Rating:</span> ⭐ {movie.rating}
          </p>
        </div>
      </div>

      {/* Recommended Movies Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Recommended Movies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recommendedMovies.map((recMovie, index) => (
            <Link key={index} href={`/movies/${encodeURIComponent(recMovie.title)}`}>
              <div className="bg-gray-800 rounded-lg p-4 hover:opacity-80 transition cursor-pointer">
                <Image
                  src={recMovie.image}
                  alt={recMovie.title}
                  width={300}
                  height={400}
                  className="rounded-lg"
                />
                <div className="mt-2">
                  <h3 className="text-white text-lg font-semibold">{recMovie.title}</h3>
                  <p className="text-gray-400">{recMovie.year} | {recMovie.duration}</p>
                  <p className="text-yellow-400">⭐ {recMovie.rating}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
