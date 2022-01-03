import React from 'react'

export const Search = () => {
  return (
    <label className='relative block lg:scale-105'>
      <span className='absolute inset-y-0 left-2 flex items-center'>
        <svg className='h-5 w-5 fill-gray-600' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" ><path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"/></svg>
      </span>
      <input className='placeholder:italic placeholder:text-gray-400 block bg-white border border-gray-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:ring-gray-500 focus:ring-1 sm:text-sm' type="text" placeholder='Busca un País' />
    </label>
  )
}
