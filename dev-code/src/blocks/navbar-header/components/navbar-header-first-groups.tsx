import React, {FC} from 'react';

interface NavbarHeaderFirstGroupProps {
  menuMobileButton: boolean;
  handleMenuMobile: (menuMobileStatus: 'open' | 'close') => void;
}

const NavbarHeaderFirstGroup: FC<NavbarHeaderFirstGroupProps> = ({
  menuMobileButton, handleMenuMobile
}) => {
  return (
    <div className="navbar-header__first-group">
      <img className="navbar-header__logo" src={`${process.env.PUBLIC_URL}/images/main-logo.png`} alt="Header Logo"/>
      {menuMobileButton ?
        <button className="navbar-header__menu-mobile-btn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" className="navbar-header__menu-mobile-svg navbar-header__menu-mobile-svg_fill_color" onClick={() => handleMenuMobile('close')}>
            <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/>
          </svg>
        </button>
        :
        <button className="navbar-header__menu-mobile-btn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="navbar-header__menu-mobile-svg" onClick={() => handleMenuMobile('open')}>
            <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"/>
          </svg>
        </button>
      }
    </div>
  );
}

export default NavbarHeaderFirstGroup;