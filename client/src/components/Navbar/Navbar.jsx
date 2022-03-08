import React, { useEffect, useState } from 'react';
import Link from './Link';
import Logo from '../Logo';
import Hamburger from './Hamburger';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  // useEffect(() => console.log(isOpen), [isOpen]);

  return (
    <div className="navbar">
      <Logo size={64} />
      <Hamburger size="xl" onClick={handleClick} />
      <div className="navbar__break"></div>
      <div
        className="navbar__menu"
        style={{ display: isOpen ? 'flex' : 'none' }}
      >
        <Link>About us</Link>
        <Link>Projects</Link>
        <Link>Blog</Link>
        <Link>Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
