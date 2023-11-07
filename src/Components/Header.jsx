import {FaSearch} from 'react-icons/Fa'
import { Link } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import SignIn from '../Pages/SignIn'
export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
    <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/Home'>
    <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
    <span className='text-slate-500'>Front</span>
    <span className='text-slate-700'>Gate</span>
    </h1>
    </Link>
    <form className='bg-slate-100 p-2 rounded-lg flex items-center'>
     <input type='text' placeholder='Search...' className='bg-transparent focus:outline-none wn-24 sm:wn-64'></input>
     <FaSearch className='text-slate-600'></FaSearch>
    </form>
    <ul className='flex gap-4'>
    <Link to='/Home'>
        <li className='hidden hover:underline sm:inline text-slate-700'>Home</li>
    </Link>
    <Link to='/About'>
        <li className='hover:underline sm:inline text-slate-700'>About</li>
    </Link>
    <Link to='/SignIn'>
        <li className='hover:underline sm:inline text-slate-700'>SignIn</li>
    </Link>
    </ul>
    </div>
    </header>
  )
}
