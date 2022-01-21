import React from 'react'

export const Search = ({ searchCity, setSearchCity }) => {
  const handleCity = (e) => {
    setSearchCity(e.target.value)
  }
  return (
    <label className='relative block'>
      <input
        value={searchCity}
        onChange={handleCity}
        className='text-2xl placeholder:italic placeholder:text-gray-400 bg-inherit block border-b-2 border-gray-900 py-2 pl-3 focus:outline-none dark:text-white dark:border-b dark:border-white' type="text" placeholder='Busca un País' />
    </label>
  )
}
