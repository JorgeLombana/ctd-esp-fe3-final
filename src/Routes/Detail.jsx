import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../Components/utils/global.context'

function Detail() {
  const { id } = useParams()
  const { state } = useContext(GlobalContext);
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data => setDentist(data));
  }, [id]);

  if (!dentist) return <div>Loading...</div>;

  return (
    <div className={`detail ${state.theme}`}>
      <h1>Dentist Detail</h1>
      <p>Name: {dentist.name}</p>
      <p>Email: {dentist.email}</p>
      <p>Phone: {dentist.phone}</p>
      <p>Website: {dentist.website}</p>
    </div>
  )
}

export default Detail