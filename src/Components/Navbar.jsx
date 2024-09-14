import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

function Navbar() {
  const { state, dispatch } = useContext(GlobalContext);

  return (
    <nav className={state.theme}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/favs">Favs</Link></li>
      </ul>
      <button 
        onClick={() => dispatch({ type: 'TOGGLE_THEME' })}
        style={{ padding: '10px', fontSize: '16px', fontWeight: 'bold' }}
      >
        Toggle Theme
      </button>
    </nav>
  )
}

export default Navbar