import { useState } from 'react'

import { SearchCountries } from '../container/SearchCountries'
import { CardListCities } from '../components/CardListCities'
import { ChangePage } from '../components/ChangePage'
import { Search } from '../components/Search'

export const Home = () => {
  const [countCities, setCountCities] = useState({ start: 0, final: 50 })
  const [cities, setCities] = useState([])
  const [searchCity, setSearchCity] = useState('')
  let initialCities
  if (!searchCity >= 1) {
    initialCities = cities
  } else {
    initialCities = cities.filter(city => {
      const cityText = city.name.toLowerCase()
      const searchText = searchCity.toLowerCase()
      return cityText.includes(searchText)
    })
  }
  return (
    <>
      <SearchCountries>
        <Search
          cities={cities}
          initialCities={initialCities}
          searchCity={searchCity}
          setSearchCity={setSearchCity}
        />
        <ChangePage countCities={countCities} setCountCities={setCountCities} />
      </SearchCountries>
      <CardListCities
        countCities={countCities}
        initialCities={initialCities}
        setCities={setCities}
      />
    </>
  )
}
