import { Route, Routes } from 'react-router-dom'

import { ThemeProvider } from './Theme/ThemeContext'
import { Layout } from './container/Layout'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { City } from './pages/City'
import { NotFound } from './pages/404'

function App () {
  return (
    <ThemeProvider>
      <Layout>
        <Header/>
        <Routes>
          <Route path='/'
            element={<Home/>} />
          <Route path='/city/:code' element={<City/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </Layout>
    </ThemeProvider>
  )
}

export default App
