import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <div className="footer">
      <Logo />
      <div className="footer__caption">UNI SOLUTIONS</div>
      <div className="footer__copyright">&copy; UNI SOLUTIONS 2022</div>
    </div>
  );
};

export default Footer;
