import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

function SearchForm({ setMovies, setIsSearch }) {
    const [searchValue, setSearchValue] = useState("");
    const [isFormHovered, setIsFormHovered] = useState(false);

    useEffect(() => {
        if (searchValue.trim() === "") {
            setMovies([]); // Clear movies when input is empty
            setIsSearch(false);
            return;
        }

        const fetchMovies = async () => {
            // setLoading(true);

            try {
                const response = await fetch(
                    `https://api.tvmaze.com/search/shows?q=${searchValue}`
                );
                const data = await response.json();

                const formattedMovies = data.map((item) => ({
                    name: item.show.name,
                    url: item.show.url,
                    image: item.show.image
                        ? item.show.image.medium
                        : "https://via.placeholder.com/150", // Default image if missing
                }));

                setMovies(formattedMovies);
                setIsSearch(true);
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
            // setLoading(false);
        };

        const timeoutId = setTimeout(fetchMovies, 500); // Add debounce

        return () => clearTimeout(timeoutId);
    }, [searchValue, setMovies, setIsSearch]);


    const handleChange = (e) => {
        setSearchValue(e.target.value);
    };


    return (
        <>
            {/* <h1>Search Movies</h1> */}
            <Form
                className="d-flex"
                id="form_button"
                onMouseOver={() => setIsFormHovered(true)}
                onMouseOut={() => setIsFormHovered(false)}
            // onSubmit={handleSearchSubmit} // Handle form submission
            >
                <Form.Control
                    id="form_search"
                    style={{ display: isFormHovered ? "block" : "none" }}
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    value={searchValue} // Bind value to state
                    onChange={handleChange} // Update state on change
                />

                <Button
                    id="button"
                    style={{ outline: "none", border: "none" }}
                    variant="outline-light"
                    type="submit" // Make button submit the form
                >
                    <i className="bi bi-search"></i>
                </Button>
            </Form>
        </>
    );
}

export default SearchForm;

