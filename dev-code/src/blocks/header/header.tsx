import React, {FC} from 'react';
import NavbarHeader from '../navbar-header/navbar-header';
import HeaderInfo from '../header-info/header-info';
import './header.css';

const Header: FC = () => {
  return (
    <header className="header">
      <NavbarHeader/>
      <HeaderInfo/>
      <img src={`${process.env.PUBLIC_URL}/images/background-separator.png`} alt="Separator" className="header__separator header__separator_margin_bottom"/>
    </header>
  );
}

export default Header;