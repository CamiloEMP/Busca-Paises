import { SearchCountries } from '../container/SearchCountries'
import { Search } from '../components/Search'
import { FilterCities } from '../components/FilterCities'
import { CardListCities } from '../components/CardListCities'

export const Home = () => {
  return (
    <>
      <SearchCountries>
        <Search/>
        <FilterCities/>
      </SearchCountries>
      <CardListCities/>
    </>
  )
}
