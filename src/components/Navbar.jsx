import React, {useState} from 'react';
import { Link } from 'react-scroll';
import { CgMaximize,CgMinimize } from 'react-icons/cg';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    const handleClose =()=> setNav(!nav)

  return (
    // <div className='w-screen h-[60px] z-10 bg-zinc-300 fixed bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 drop-shadow-2xl'>
    <div className='w-screen h-[60px] z-10 fixed bg-gradient-to-b from-white/60 to-white/30 text-[#040000] backdrop-blur-[.5em] border-[1px] border-solid border-white border-opacity-10 shadow-black/50 shadow-2xl hover:shadow-black/75 hover:backdrop-blur-[1em] transition'>
      <div className='flex items-center justify-between w-full h-full px-2'>
        <div className='flex items-center'>
          <h1 className='mr-4 text-3xl font-bold sm:text-4xl'>HostingerX</h1>
          <ul className='hidden md:flex gap-2'>
          <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
          <li><Link to="support" smooth={true} offset={-50} duration={500}>Support</Link></li>
          <li><Link to="platforms" smooth={true} offset={-100} duration={500}>Platforms</Link></li>
          <li><Link to="pricing" smooth={true} offset={-50} duration={500}>Pricing</Link></li>
          </ul>
        </div>
        <div className='hidden pr-4 md:flex'>
          <button className='mr-4 text-black bg-transparent border-none'>
            Sign In
          </button>
          <button className='px-8 py-3'>Sign Up</button>
        </div>
        <div className='mr-4 md:hidden' onClick={handleClick}>
            {!nav ? <CgMaximize className='w-5 text-3xl' /> : <CgMinimize className='w-5 text-3xl' />}
          
        </div>
      </div>

      {/* <ul className={!nav ? 'hidden' : 'absolute w-full px-8 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-[10px]'}> */}
      <ul className={!nav ? 'hidden' : 'absolute z-5 w-full px-8 bg-gradient-to-b from-white/30 to-white/10 text-[#000000] backdrop-filter backdrop backdrop-blur-3xl border-b-[1px] shadow-black/50 shadow-2xl hover:shadow-black/75 hover:backdrop-blur-[10em] transition'}>
      <Link onClick={handleClose} to="home" smooth={true} duration={500}><li className='w-full border-b-2 border-zinc-300'>Home</li></Link>
      <Link onClick={handleClose} to="about" smooth={true} offset={100} duration={500}><li className='w-full border-b-2 border-zinc-300'>About</li></Link>
      <Link onClick={handleClose} to="register" smooth={true} offset={-50} duration={500}><li className='w-full border-b-2 border-zinc-300'>Support</li></Link>
      <Link onClick={handleClose} to="platforms" smooth={true} offset={-100} duration={500}><li className='w-full border-b-2 border-zinc-300'>Platforms</li></Link>
      <Link onClick={handleClose} to="pricing" smooth={true} offset={-50} duration={500}><li className='w-full border-b-2 border-zinc-300'>Pricing</li></Link>

        <div className='flex flex-col my-4'>

        <button type="button" class="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 mb-3">Sign In</button>

        <button type="button" class="inline-block px-6 py-2.5 bg-blue-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg">Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;