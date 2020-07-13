import React, {FC, useContext} from 'react';
import {subMenuState, subMenuDispatch} from '../navbar-header'

interface NavbarHeaderSubMenuItemProps {
  text: string;
  navbarHeaderSubMenuItem?: string;
}

const NavbarHeaderSubMenuItem: FC<NavbarHeaderSubMenuItemProps> = ({
  text, navbarHeaderSubMenuItem
}) => {
  const navbarHeaderSubMenuItemClass = navbarHeaderSubMenuItem
    ? navbarHeaderSubMenuItem
    : 'navbar-header__submenu-link'

  return (
    <li className='navbar-header__submenu-item'>
      <a href="#link" className={navbarHeaderSubMenuItemClass}>
        {text}
      </a>
    </li>
  );
}

interface NavbarHeaderSubMenuProps {
  viewportWidth: number;
  mobileWidth: number;
}

const NavbarHeaderSubMenu: FC<NavbarHeaderSubMenuProps> = ({
  viewportWidth, mobileWidth
}) => {
  const multiBariSubMenu = useContext(subMenuState).multiBariSubMenu;
  const dispatchSubMenuMultiBari = useContext(subMenuDispatch)!;
  let navbarHeaderSubMenuTitleClass = 'navbar-header__submenu-title';
  let NavbarHeaderProductSubMenuItemsContainer:unknown = '';
  let navbarHeaderMultiBariSubmenuClass = 'navbar-header__submenu';

  if(viewportWidth < mobileWidth && multiBariSubMenu) {
    navbarHeaderSubMenuTitleClass = 'navbar-header__submenu-title text-blue';
  } else if(viewportWidth < mobileWidth && multiBariSubMenu === false) {
    navbarHeaderSubMenuTitleClass = 'navbar-header__submenu-title navbar-header__submenu-title_border_none';
  } else {
    navbarHeaderSubMenuTitleClass = 'navbar-header__submenu-title';
  }

  if(viewportWidth > mobileWidth || multiBariSubMenu === false) {
    NavbarHeaderProductSubMenuItemsContainer = <>
      <NavbarHeaderSubMenuItem text="Fe-Pró"/>
      <NavbarHeaderSubMenuItem text="Ca-Pró"/>
      <NavbarHeaderSubMenuItem text="Produto 02"/>
      <NavbarHeaderSubMenuItem text="Produto 03"/>
      <NavbarHeaderSubMenuItem text="Produto 04"/>
    </>
  } else {
    NavbarHeaderProductSubMenuItemsContainer = '';
  }

  if(viewportWidth > mobileWidth || multiBariSubMenu) {
    navbarHeaderMultiBariSubmenuClass = 'navbar-header__submenu navbar-header__submenu_alternative_version';
  } else {
    navbarHeaderMultiBariSubmenuClass = 'navbar-header__submenu';
  }

  return (
    <ul className="navbar-header__submenu">
      <li className="navbar-header__submenu-item">
        <span className={navbarHeaderSubMenuTitleClass}
          onClick={() => dispatchSubMenuMultiBari({type: 'multibari'})}>
          Multi-Bari
          {multiBariSubMenu &&
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" className="navbar-header__submenu-icon navbar-header__submenu-icon_fill_blue">
              <path d="M192 127.338v257.324c0 17.818-21.543 26.741-34.142 14.142L29.196 270.142c-7.81-7.81-7.81-20.474 0-28.284l128.662-128.662c12.599-12.6 34.142-3.676 34.142 14.142z"/>
            </svg>}
        </span>
        {multiBariSubMenu &&
          <ul className={navbarHeaderMultiBariSubmenuClass}>
            <NavbarHeaderSubMenuItem text="Multi-Bari Pastilha Baunilha"
              navbarHeaderSubMenuItem="navbar-header__submenu-link text-blue"/>
            <NavbarHeaderSubMenuItem text="Multi-Bari Pastilha Morango"
              navbarHeaderSubMenuItem="navbar-header__submenu-link text-blue"/>
            <NavbarHeaderSubMenuItem text="Multi-Bari Strip Baunilha"
              navbarHeaderSubMenuItem="navbar-header__submenu-link text-blue"/>
            <NavbarHeaderSubMenuItem text="Multi-Bari Strip Morango"
              navbarHeaderSubMenuItem="navbar-header__submenu-link text-blue"/>
            <button className="navbar-header__submenu-button navbar-header__submenu-button_margin_axis">
              VER TODOS
            </button>
          </ul>}
      </li>
      {NavbarHeaderProductSubMenuItemsContainer}
    </ul>
  );
}

export default NavbarHeaderSubMenu;