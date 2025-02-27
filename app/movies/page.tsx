"use client";
import { useEffect, useState } from "react";

// Define Movie type
interface Movie {
  id: number;
  title: string; // Ensure this matches your Django model field
}

export default function Movies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch movies from the backend API
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/movies/all/");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: Movie[] = await response.json();
        console.log("API Response:", data);

        if (!Array.isArray(data)) {
          throw new Error("Expected an array but got: " + JSON.stringify(data));
        }

        setMovies(data);
      } catch (error: any) {
        setError(error.message);
        console.error("Error fetching movies:", error); 
      } finally {
        setLoading(false);
      } 
    };

    fetchMovies();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Movies List</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}
