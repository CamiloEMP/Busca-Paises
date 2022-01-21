import { useContext } from 'react'
import { ThemeContext } from '../Theme/ThemeContext'

export const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  return (
    <div className='transition duration-500 ease-in-out rounded-full p-2 mr-5 flex gap-5'>
      {theme === 'dark'
        ? (
          <i className="fas fa-sun text-2xl cursor-pointer sm:text-4xl dark:text-white"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}></i>
        )
        : (
          <i className="fas fa-moon text-2xl sm:text-4xl cursor-pointer"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}></i>
        )
      }
      <a href="https://github.com/CamiloEMP/Busca-Paises" target="_blank" rel="noopener noreferrer">
        <i className='fab fa-github text-2xl sm:text-4xl'></i>
      </a>

    </div>
  )
}
