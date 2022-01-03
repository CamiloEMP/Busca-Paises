import { CardListCities } from './components/CardListCities'
import { FilterCities } from './components/FilterCities'
import { Header } from './components/Header'
import { Search } from './components/Search'
import { SearchCountries } from './container/SearchCountries'

function App () {
  return (
    <>
      <Header/>
      <SearchCountries>
        <Search/>
        <FilterCities/>
      </SearchCountries>
      <CardListCities/>
    </>
  )
}

export default App
