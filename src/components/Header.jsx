import { useState } from 'react'
import { Nav } from './Nav'
import { darkTheme, lightTheme, arrowDown } from '../assets/icons'
export const Header = () => {
  const [sidebar, setSidebar] = useState(false)

  return (
    <>
      <header className='w-full py-6 shadow-md '>
        <div className='flex items-center justify-between'>
          <a href="#" className='flex items-center pl-10 cursor-pointer z-10'>
            <img className='mr-3' width={50} src="https://i.imgur.com/Es7QO0R.png" alt="image world" />
            <h1 className='text-3xl font-extrabold'>Busco Paises</h1>
          </a>
          <nav>
            <svg onClick={() => setSidebar(!sidebar)}
              className='lg:hidden mr-5 z-20' fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="40px" height="40px">
              <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"/>
            </svg>
          </nav>
          <Nav sidebar={sidebar}/>
        </div>
      </header>
      {sidebar && (
        <section className='text-xl absolute top-30 right-2 flex flex-col w-3/5 h-20 bg-slate-100 z-10'>
          <a href="#">Sobre mí</a>
          <a href="#">Contactame</a>
          <div>
            <p>Cambiar tema</p>
            <select name="" id="">
              <option value="Claro">Claro</option>
              <option value="Oscuro">Oscuro</option>
            </select>
          </div>
        </section>
      )}
    </>
  )
}
