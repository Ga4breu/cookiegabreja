import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.ga} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#about">O nosso cookie</a></li>
        <li className="p__opensans"><a href="#menu">Menu</a></li>
        <li className="p__opensans"><a href="#sobre">Sobre</a></li>
      </ul>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>O nosso cookie</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li><a href="#sobre" onClick={() => setToggleMenu(false)}>Sobre</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
