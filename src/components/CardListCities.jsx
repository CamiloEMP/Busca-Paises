import { useState, useEffect } from 'react'
import { API_URL } from '../api/config'
import { CardCity } from './CardCity'
import { Spinners } from './Spinners'

export const CardListCities = () => {
  const [cities, setCities] = useState([])
  const [loader, setLoader] = useState(false)
  useEffect(() => {
    setLoader(true)
    fetch(`${API_URL}all`)
      .then(res => res.json())
      .then(data => {
        setCities(data.slice(0, 20))
        setLoader(false)
      })
  }, [])

  return (
    <>
      {loader
        ? <Spinners/>
        : <section className='container mx-auto justify-center flex flex-wrap gap-20'>
          {cities.map(city => (
            <CardCity key={city.numericCode} city={city}/>
          ))}
        </section>
      }
    </>
  )
}
