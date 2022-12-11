import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
<div className="navbar mb-12">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link className='text-2xl' to='/'>Home</Link></li>
        <li><HashLink className='text-2xl' smooth to='/#my-projects'>My Projects</HashLink></li>
        <li><HashLink className='text-2xl' smooth to='/#my-skills'>My Skills</HashLink></li>
        <li><Link className='text-2xl'  to='/blogs'>My Blogs</Link></li>
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-2xl hidden lg:flex lg:ml-8">Maruf Mozumder</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><HashLink className='text-2xl' smooth to='/#my-projects'>My Projects</HashLink></li>
      <li><HashLink className='text-2xl' smooth to='/#my-skills'>My Skills</HashLink></li>
      <li><Link className='text-2xl'  to='/blogs'>My Blogs</Link></li>
    </ul>
  </div>
  <div className="navbar-end text-3xl">
    <HashLink smooth to='/#contact-me' className="btn">Contact Me Now</HashLink>
  </div>
</div>
    );
};

export default Header;