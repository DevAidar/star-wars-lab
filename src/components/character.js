import React from 'react';
import { string, array } from 'prop-types';

import MovieList from './movielist';

const Character = ({ name, birthYear, eyeColor, films }) => {
  //   Add any `console.log` code here before the `return` statement if you want to inspect a variable
  // -------- CODE HERE ----------

  

  // -----------------------------
  return (
    <div className="col-4 border border-primary" style={{}}>
      <h2>{ name }</h2>
      <h4>year born: { birthYear }</h4>
      <h4>eye color: <span style={{ color: eyeColor }}>{ eyeColor }</span></h4>
      {/* Remove these comments when you finish handling the code above (you can see name, birth_year, eye_color on page)      */}

      <MovieList
        // Add your props here!
        movies={ films }
      />
    </div>
  )
}

Character.propTypes = {
  name: string,
  birthYear: string,
  eyeColor: string,
  films: array
}

export default Character;