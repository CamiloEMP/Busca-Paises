import { ThemeToggle } from './ThemeToggle'

export const Header = () => {
  return (
    <>
      <header className='w-full py-6 shadow-md dark:text-white'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center pl-10 z-10'>
            <img className='mr-3' width={50} src="https://i.imgur.com/Es7QO0R.png" alt="image world" />
            <h1 className='text-3xl font-extrabold'>Busco Paises</h1>
          </div>
          <ThemeToggle/>
        </div>
      </header>
    </>
  )
}
