import { useState, useEffect } from 'react'

import { ContainerCities } from '../container/ContainerCities'
import { CardCity } from './CardCity'
import { Spinner } from './Spinner'

import { API_URL } from '../api/config'

export const CardListCities = ({ countCities, initialCities, setCities }) => {
  const [loader, setLoader] = useState(false)
  useEffect(() => {
    setLoader(true)
    fetch(`${API_URL}/all`)
      .then(res => res.json())
      .then(data => {
        setLoader(false)
        setCities(data)
      })
      .catch(err => console.log(err))
  }, [])
  return (
    <>
      {loader
        ? <Spinner/>
        : <ContainerCities>
          {initialCities.slice(countCities.start, countCities.final).map(city => (
            <CardCity key={city.numericCode} city={city}/>
          ))}
        </ContainerCities>
      }
    </>
  )
}
