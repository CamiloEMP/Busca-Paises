import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_URL } from '../api/config'

export const City = () => {
  const [city, setCity] = useState({})
  const { code } = useParams()

  useEffect(() => {
    fetch(`${API_URL}/alpha/${code}`)
      .then(res => res.json())
      .then(data => setCity(data))
      .catch(err => console.log(err))
  }, [])

  return (
    <section className="w-full h-full flex justify-center">
      <div className="w-full">
        <h2>{city.name}</h2>
        <img src={city.flag} alt={`bandera ${city.name}`}/>
      </div>
    </section>
  )
}
