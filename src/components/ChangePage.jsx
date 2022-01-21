import { handleNextPage, handleBackPage } from '../hooks/useHandlePage'

export const ChangePage = ({ countCities, setCountCities }) => {
  return (
    <div className='flex items-center dark:text-white'>
      <p className='mr-2 text-2xl pb-1'><strong>Pagina:</strong> </p>
      <button
        disabled={countCities.start === 0}
        className="text-5xl pb-2"
        onClick={() => {
          handleBackPage(countCities, setCountCities)
        }}>
        {'<'}
      </button>
      <span className='text-2xl pb-2'>{countCities.start} {' ... '} {countCities.final}</span>
      <button
        className="text-5xl pb-2"
        disabled={countCities.final === 250}
        onClick={() => {
          handleNextPage(countCities, setCountCities)
        }}>
        {'>'}
      </button>
    </div>
  )
}
