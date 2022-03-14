import React, { useEffect, useRef, useState } from 'react';
import Link from './Link';
import Logo from '../Logo';
import Hamburger from './Hamburger';
import { easeInOutSine } from '../../easings';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const firstUpdate = useRef(true);

  const handleClick = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  useEffect(() => {
    // handling the componentDidMount
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    // handling the componentDidUpdate
    const maxHeight = 120;

    new Promise((resolve, reject) => {
      let percent = 0;

      const step = () => {
        percent += 2.5;

        setHeight(
          maxHeight * easeInOutSine((!isOpen ? 100 - percent : percent) / 100)
        );

        if (percent < 100) window.requestAnimationFrame(step);
      };

      window.requestAnimationFrame(step);

      resolve();
    });
  }, [isOpen]);

  return (
    <div className="navbar">
      <Logo size={32} />
      <Hamburger size="xl" onClick={handleClick} />
      <div className="navbar__break"></div>
      <div className="navbar__menu" style={{ height }}>
        <Link href="/">About us</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
