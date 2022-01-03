import { MobileSidebar } from './MobileSidebar'

export const Nav = ({ sidebar }) => {
  return (
    <>
      <div className='hidden lg:flex lg:gap-x-10 pr-10'>
        <MobileSidebar/>
      </div>
    </>
  )
}
