import { useContext } from 'react'
import { ThemeContext } from '../Theme/ThemeContext'

export const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  return (
    <div className='transition duration-500 ease-in-out rounded-full p-2 mr-5'>
      {theme === 'dark'
        ? (
          <i className="fas fa-sun text-2xl cursor-pointer dark:text-white"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}></i>
        )
        : (
          <i className="fas fa-moon text-2xl cursor-pointer"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}></i>
        )
      }
    </div>
  )
}
