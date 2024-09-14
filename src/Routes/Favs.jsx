import React, { useContext } from "react";
import { GlobalContext } from '../Components/utils/global.context'
import Card from '../Components/Card'

const Favs = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const handleResetFavorites = () => {
    dispatch({ type: 'RESET_FAVORITES' });
  };

  const handleRemoveFavorite = (dentist) => {
    dispatch({ type: 'REMOVE_FAVORITE', payload: dentist });
  };

  return (
    <div className={`favs ${state.theme}`}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {state.favorites.map(dentist => (
          <div key={dentist.id}>
            <Card dentist={dentist} />
            <button onClick={() => handleRemoveFavorite(dentist)}>Remove from Favs</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favs;
