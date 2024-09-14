import React, { useContext, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../Components/utils/global.context'
import Card from '../Components/Card'

function Home() {
  const { state } = useContext(GlobalContext);

  const dentistCards = useMemo(() => {
    return state.dentists.map(dentist => (
      <Card key={dentist.id} dentist={dentist} />
    ));
  }, [state.dentists]);

  return (
    <div className={`home ${state.theme}`}>
      <h1>Home</h1>
      <div className="card-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '1rem'
      }}>
        {dentistCards}
      </div>
    </div>
  )
}

export default Home