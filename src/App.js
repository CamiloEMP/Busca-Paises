import { ThemeProvider } from './Theme/ThemeContext'
import { Layout } from './container/Layout'
import { Header } from './components/Header'
import { SearchCountries } from './container/SearchCountries'
import { Search } from './components/Search'
import { FilterCities } from './components/FilterCities'
import { CardListCities } from './components/CardListCities'

function App () {
  return (
    <ThemeProvider>
      <Layout>
        <Header/>
        <SearchCountries>
          <Search/>
          <FilterCities/>
        </SearchCountries>
        <CardListCities/>
      </Layout>
    </ThemeProvider>
  )
}

export default App
