import {Movie} from "../shared/value-objects/movie";

addEventListener('message', ({data}) => {
  const response = {movies: groupByYear(data.movies)}
  postMessage(response);
});
function groupByYear(movies: Movie[]): Array<Movie> {
  if (!!movies) {
    return movies.sort((firstMovie: Movie, secondMovie: Movie) => (firstMovie.Year < secondMovie.Year) ? 1 : -1)
  }
  return movies;
}

