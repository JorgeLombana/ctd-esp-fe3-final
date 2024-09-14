import React, { useContext } from 'react'
import { GlobalContext } from '../Components/utils/global.context'

function Footer() {
  const { state } = useContext(GlobalContext);
  
  return (
    <footer className={state.theme}>
      <p>Powered by</p>
      <img src="/images/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
