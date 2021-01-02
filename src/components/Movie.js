import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";
const { number, string } = PropTypes;

const Movie = ({ year, title, summary, poster, genres }) => (
    <Link className="movie__link"
        to={{
            pathname: "/movie-detail",
            state: { year, title, summary, poster, genres },
        }}
    >
        <div className="movie">
            <img className="movie__img" src={poster} alt={title} title={title} />
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <p className="movie__summary">{summary.slice(0, 180)}...</p>
                <ul className="genres">
                    {genres.map((genre, index) => (
                        <li key={index} className="genres__genre">
                            {genre}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </Link>
);

Movie.propTypes = {
    id: number.isRequired,
    year: number.isRequired,
    title: string.isRequired,
    summary: string.isRequired,
    poster: string.isRequired,
    genres: PropTypes.arrayOf(string).isRequired,
};

export default Movie;
