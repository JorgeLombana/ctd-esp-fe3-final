import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../Components/utils/global.context'

function Card({ dentist }) {
  const { state, dispatch } = useContext(GlobalContext);

  const isFavorite = state.favorites.some(fav => fav.id === dentist.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch({ type: 'REMOVE_FAVORITE', payload: dentist });
    } else {
      dispatch({ type: 'ADD_FAVORITE', payload: dentist });
    }
  };

  return (
    <div className={`card ${state.theme}`}>
      <h2>{dentist.name}</h2>
      <p>{dentist.username}</p>
      <Link to={`/dentist/${dentist.id}`}>View Details</Link>
      <button onClick={toggleFavorite}>
        {isFavorite ? 'Remove from Favs' : 'ADD FAV'}
      </button>
    </div>
  )
}

export default Card
