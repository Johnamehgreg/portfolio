import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { useAppContext } from '../../contexts/useAppContext'
import { componentLinks } from '../../routers/componentRoutes'

function MainNavBar({ setNav, nav }) {
  const { changeActiveTab, currentTab, toggleShowOtherSideBar } = useAppContext()
  return (
    <div
      name='_navbar_'
      className={`flex justify-between items-center w-full h-20 px-4 text-white dark:bg-gradient-to-r from-cyan-500 to-blue-500 nav`}
    >
      <div className='flex items-center justify-between'>
        <img
          src={
            'https://media.licdn.com/dms/image/v2/D4D03AQFfdRpwXc9uzw/profile-displayphoto-scale_200_200/B4DZe6rXQIGgAY-/0/1751183621322?e=1756944000&v=beta&t=7Cfjwf-t_z039Cg-6n2V8w1DUlhIcBEfCG_l68J0eVo'
          }
          alt='Avatar'
          className='cursor-pointer navbar_avatar'
        />
      </div>

      <ul className='hidden md:flex'>
        {componentLinks.map(({ id, link }) => {
          return (
            <li
              key={id}
              className={
                currentTab === link
                  ? 'nav-links px-4 cursor-pointer capitalize font-medium text-black  hover:scale-105 hover:text-white duration-200 link-underline'
                  : 'nav-links px-4 cursor-pointer capitalize font-medium text-black  scale-105 text-white duration-200 link-underline'
              }
            >
              <Link onClick={() => changeActiveTab(link)} to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          )
        })}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className='z-10 pr-4 text-gray-500 cursor-pointer md:hidden'
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className='absolute top-0 left-0 z-10 flex flex-col items-center justify-center w-full h-screen mt-20 text-gray-500 bg-black'>
          {componentLinks.map(({ id, link }) => (
            <li
              onClick={() => changeActiveTab(link)}
              key={id}
              className='px-4 py-6 text-4xl capitalize cursor-pointer'
            >
              <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default MainNavBar
