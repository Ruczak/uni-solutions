import React from 'react';
import Link from './Link';
import Logo from '../Logo';

const Navbar = () => {
  return (
    <div className="navbar">
      <Logo size={64} />
      <Link>About us</Link>
      <Link>Projects</Link>
      <Link>Blog</Link>
      <Link>Contact</Link>
    </div>
  );
};

export default Navbar;
