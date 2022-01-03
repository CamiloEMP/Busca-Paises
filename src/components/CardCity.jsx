export const CardCity = ({ city }) => {
  console.log(city)
  return (
    <div className="w-80 shadow-md pb-10 cursor-pointer transition-all hover:scale-105">
      <figure className="flex h-60">
        <img className="object-contain" src={city.flags.png} alt="" />
      </figure>
      <div className="flex flex-col gap-2 pl-5 mt-5">
        <h2 className="text-2xl font-extrabold">{city.name}</h2>
        <p className="font-semibold">Capital: {city.capital}</p>
        <p>Región: {city.region}</p>
        <p>Población: {city.population}</p>
      </div>
    </div>
  )
}
