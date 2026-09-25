import Movie from "./Movie";
import './MovieLists.css';

function MovieLists(props) {
    const { movies = [] } = props;
    
    return (
        <div className="movies">
            {
                movies.length ? movies.map(movie => {
                    return <Movie key={movie.imdbID} {...movie} />
                }) : <h4>Nothing found</h4>
            }
        </div>
    )
}

export default MovieLists;