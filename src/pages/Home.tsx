import './MoviesGrid.css';

import { IMovieProps, MovieCard } from '../components/MovieCard';
import { Pagination } from '../components/Pagination';
import { usePaginatedMovies } from '../hooks/usePaginatedMovies';


export const Home = () => {
    const { movies, totalMovies, moviesPerPage, handlePaginate} = usePaginatedMovies();

    return (
        <div className='container'>
            <div className='movies-container'>
                {movies.length === 0 && <h2>Carregando...</h2>}
                {movies.length > 0 &&
                    movies.map((movie: IMovieProps) => <MovieCard key={movie.id} {...movie} />)}
            </div>
            <Pagination moviesPerPage={moviesPerPage} totalMovies={totalMovies} paginate={handlePaginate} />
        </div>
    );
}
