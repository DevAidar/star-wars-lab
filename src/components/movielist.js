import React from 'react';
import { array } from 'prop-types';

import Movie from './movie';

const MovieList = ({ movies }) => {
  //   Add any `console.log` code here before the `return` statement if you want to inspect a variable
  // -------- CODE HERE ----------

  console.log(movies);
  

  // -----------------------------
  return (
    <ul className="row">
      {
        // Create your .map function here
        movies.map(movie => (
          <Movie
          key={ movie.title } // DO NOT EDIT KEY
          // Pass correct props below
          title={ movie.title }
          episodeId={ movie.episode_id }
          releaseDate={ movie.release_date }
          />
        ))
      }
    </ul>
  )
}


MovieList.propTypes = {
  movies: array
}



export default MovieList