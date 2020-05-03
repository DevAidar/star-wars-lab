import React from 'react';
import { string, number } from 'prop-types';

const Movie = ({ title, episodeId, releaseDate }) => {
  //   Add any `console.log` code here before the `return` statement if you want to inspect a variable
  // -------- CODE HERE ----------



  // -----------------------------
  return (
    <li>
      <h3>{ title }</h3>
      <h5>Episode { episodeId }</h5>
      <h5>{ releaseDate }</h5>
    </li>
  )
}

Movie.propTypes = {
  title: string,
  episodeId: number,
  releaseDate: string
}

export default Movie;