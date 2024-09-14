import React, { createContext, useReducer, useEffect } from 'react';

export const GlobalContext = createContext();

const initialState = {
  theme: 'light',
  dentists: [],
  favorites: JSON.parse(localStorage.getItem('favorites')) || [],
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    case 'SET_DENTISTS':
      return { ...state, dentists: action.payload };
    case 'ADD_FAVORITE':
      if (state.favorites.some(fav => fav.id === action.payload.id)) {
        return state;
      }
      const newFavorites = [...state.favorites, action.payload];
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      return { ...state, favorites: newFavorites };
    case 'REMOVE_FAVORITE':
      const updatedFavorites = state.favorites.filter(fav => fav.id !== action.payload.id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      return { ...state, favorites: updatedFavorites };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => dispatch({ type: 'SET_DENTISTS', payload: data }))
      .catch(error => {
        console.error('Error fetching dentists:', error);
        dispatch({ type: 'SET_ERROR', payload: 'Failed to fetch dentists' });
      });
  }, []);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};