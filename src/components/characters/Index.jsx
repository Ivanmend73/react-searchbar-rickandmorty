import React from 'react'
import "./styles.scss"

const Characters = ({ characters }) => {
  return (
    <div className='casa'>
      {
        characters ? (
          <div className='characters'>
          {
            characters?.map((character) => (
              <div key={character.id}>
                    <div className='character'>
                      <img src={character.image} alt={character.name} />
                      <p>{character.name}</p>
                    </div>
              </div>
            ))
          }
          </div>
        ):(<div className='error'>No se encontraron los personajes.....</div>)
        }
    </div>
  )
}



export default Characters