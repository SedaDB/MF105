import { useContext } from 'react'
import { ThemeContext } from '../../store/MyContext';
import { FaMoon, FaSun } from 'react-icons/fa';
import Container from '../container';
import { Link } from 'react-router';

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className='border-b'>
      <Container designs='flex justify-between'>
        <div className='flex gap-10 items-center'>
          <Link to={"/"} className='font-bold text-xl md:text-2xl'>
            MF105 Hotel Management APP
          </Link>

          <nav className='flex gap-5 items-center'>
            <Link to={"/"} >Hotels</Link>
            <Link to={"/"} className='max-md:hidden'>Popular</Link>
            <Link to={"/create"} >Create</Link>
          </nav>
        </div>

        <div className='flex gap-2 items-center'>
          <button className='rounded-full py-1 px-5 border-blue-500 border max-md:hidden'>
            Sign Up
          </button>
          <button className=' rounded-full py-1 px-5 bg-blue-500 text-white'>
            Sign In
          </button>
          <button onClick={toggleTheme} className=' border-blue-500 rounded-full py-1 px-5 '>
            {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
          </button>
        </div>
      </Container>
    </header>
  )
}
