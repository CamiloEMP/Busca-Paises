import { Link } from 'react-router-dom'
import { formatNumber } from '../utils'

export const CardCity = ({ city }) => {
  return (
    <Link to={`city/${city.alpha3Code}`} className="w-80 shadow-md  dark:shadow-white/10 pb-10 cursor-pointer transition-all hover:scale-105 ">
      <figure className="flex h-60 items-start">
        <img className="h-52" src={city.flags.png} alt={`bandera de ${city.name}`} loading='lazy'/>
      </figure>
      <div className="flex flex-col gap-2 pl-5 mt-5">
        <h2 className="text-2xl font-extrabold">{city.name}</h2>
        <p className="font-semibold">Capital: {city.capital}</p>
        <p>Región: {city.region}</p>
        <p>Población: {formatNumber(city.population)} habitantes</p>
      </div>
    </Link>
  )
}
