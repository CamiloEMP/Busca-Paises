import { Link } from 'react-router-dom'
import { ThemeToggle } from './ThemeToggle'

export const Header = () => {
  return (
    <>
      <header className='w-full py-6 shadow-md dark:text-white dark:shadow-white/40'>
        <div className='flex items-center justify-between'>
          <Link to='/' className='flex items-center pl-10 z-10'>
            <img className='mr-3 w-12 sm:w-16' src="https://i.imgur.com/Es7QO0R.png" alt="image world" />
            <h1 className='text-3xl font-extrabold sm:text-4xl'>Busco Paises</h1>
          </Link>
          <ThemeToggle/>
        </div>
      </header>
    </>
  )
}
