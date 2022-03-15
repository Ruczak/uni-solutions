import React, { useEffect, useRef, useState } from 'react';
import Link from './Link';
import Logo from '../Logo';
import Hamburger from './Hamburger';
import { easeInOutSine } from '../../easings';
import { useResize } from '../../hooks/useResize';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const [windowWidth] = useResize();
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

  useEffect(() => {
    if (windowWidth >= 1080) {
      setHeight('inherit');
    }
  }, [windowWidth]);

  return (
    <div className="navbar">
      {windowWidth < 1080 ? (
        <React.Fragment>
          <Logo size={32} />
          <Hamburger size="xl" onClick={handleClick} />
          <div className="navbar__menu" style={{ height }}>
            <Link href="/">About us</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Link href="/">About us</Link>
          <Link href="/projects">Projects</Link>
          <Logo size={32} />
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </React.Fragment>
      )}
    </div>
  );
};

export default Navbar;
