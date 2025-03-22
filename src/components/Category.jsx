import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MovieCard from "./Card";
import { dataMovie } from "./Data"; // Ensure correct import

const Category = ({ categoryId }) => {  // Accepts category ID as prop
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    // Find the category object based on the given categoryId
    const category = dataMovie.find(cat => cat.id === categoryId);

    useEffect(() => {
        if (!category || !category.titles) return; // Ensure category exists

        const fetchMovies = async () => {
            try {
                const moviePromises = category.titles.map(async (titleObj) => {
                    const response = await axios.get(`https://api.tvmaze.com/singlesearch/shows?q=${titleObj.name}`);
                    return { ...response.data, trailerUrl: titleObj.url }; // Add trailer URL
                });

                const movieData = await Promise.all(moviePromises);
                setMovies(movieData);
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };

        fetchMovies();
    }, [category]); // Refetch if category changes

    return (
        <>
            <h1>{category?.id}</h1> {/* Display category name */}
            <div className="slide-container bg-dark">
                <div className="card-container">
                    {movies.map((movie) => (
                        <MovieCard
                            key={movie.id} // Unique key
                            url={movie.image?.medium} // Ensure image exists
                            title={movie.name}
                            onClick={() => navigate(`/${movie.name}`)}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Category;
