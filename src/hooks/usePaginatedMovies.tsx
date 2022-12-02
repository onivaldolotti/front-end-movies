import { useEffect, useState } from 'react';

const moviesURL = import.meta.env.VITE_BASE_URL;

export const usePaginatedMovies = () => {
    const [movies, setMovies] = useState([]);
    const [totalMovies, setTotalMovies] = useState(0);
    const [moviesPerPage] = useState(10);

    const getMovies = async (url: string, skip = 0) => {
        const res = await fetch(`${url}/movies?take=10&skip=${skip}`);
        const data = await res.json();

        setMovies(data.data);
        setTotalMovies(data.count);
    }

    useEffect(() => {
        getMovies(moviesURL);
    }, []);

    const handlePaginate = (page: number) => {
        getMovies(moviesURL, page)
    }

    return { movies, totalMovies, moviesPerPage, handlePaginate }
}