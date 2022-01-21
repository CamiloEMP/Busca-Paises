import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { API_URL } from '../api/config'
import { formatNumber } from '../utils'

export const City = () => {
  const [city, setCity] = useState({})
  const { code } = useParams()

  useEffect(() => {
    fetch(`${API_URL}/alpha/${code}`)
      .then(res => res.json())
      .then(data => setCity(data))
      .catch(err => console.log(err))
  }, [code])

  return (
    <section className="w-full h-max grid grid-rows-1 place-items-center mt-14 pl-10 lg:w-3/4 lg:mx-auto dark:text-slate-50">
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-6">{city.name}</h2>
        <img
          className="mb-14 w-80 sm:w-96 border-2 dark:border-none"
          src={city.flag}
          alt={`bandera ${city.name}`}
        />
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xl sm:text-2xl">
        <li className="min-w-min">
          <strong className="text-blue-500">Capital: </strong> {city.capital}
        </li>
        <li>
          <strong className="text-blue-500">Región: </strong> {city.subregion}
        </li>
        <li>
          <strong className="text-blue-500">Idioma Nativo: </strong>
          {city.translations?.es}
        </li>
        <li>
          <strong className="text-blue-500">Población: </strong>
          {formatNumber(city.population)} de habitantes
        </li>
        <li>
          <strong className="text-blue-500">Lenguas: </strong>
          {city.languages?.map(language => (
            <p className="inline mr-2" key={language.iso639_1}>
              {language.name}
            </p>
          ))}
        </li>
        <li>
          <strong className="text-blue-500">Moneda: </strong>
          {city.currencies?.map((currencie, index) => (
            <p className="inline mr-2" key={index}>
              ({currencie.symbol}) {currencie.name}
            </p>
          ))}
        </li>
        {city.area && (
          <li>
            <strong className="text-blue-500">Superficie: </strong>
            {formatNumber(city.area)} km²
          </li>
        )}
        {city.borders && (
          <li className="flex flex-wrap gap-x-2">
            <strong className="text-blue-500">Tiene fronteras con: </strong>
            {city.borders.map(border => (
              <Link
                className="mr-2 hover:text-blue-500 underline"
                to={`/city/${border}`}
                key={border}
              >
                {border}
              </Link>
            ))}
          </li>
        )}
      </ul>
      <Link
        className="mt-16 text-xl underline py-2 px-3"
        to='/' >Ver todos los países</Link>
    </section>
  )
}
