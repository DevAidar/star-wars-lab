import React from 'react';
import { array } from 'prop-types';

import Character from './character.js'

const CharacterList = ({ characters }) => {
  //   Add any `console.log` code here before the `return` statement if you want to inspect a variable
  // -------- CODE HERE ----------

  console.log(characters);

  // -----------------------------
  return (
    <div className="row">
      {
        // Create your .map function here
        characters.map(person => (
          <Character
            key={ person.name } // DO NOT EDIT
            // Enter the correct props here
            name={ person.name }
            birthYear={ person.birth_year }
            eyeColor={ person.eye_color }
            films={ person.films }
            />
        ))
      }
    </div>
  )
}

CharacterList.propTypes = {
  characters: array
}


export default CharacterList;