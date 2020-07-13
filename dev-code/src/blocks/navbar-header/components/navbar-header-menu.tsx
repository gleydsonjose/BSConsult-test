import React, {FC, useContext} from 'react';
import NavbarHeaderSubMenu from './navbar-header-sub-menu';
import {subMenuState, subMenuDispatch} from '../navbar-header';

interface NavbarHeaderMenuItem {
  text: string;
}

const NavbarHeaderMenuItem: FC<NavbarHeaderMenuItem> = ({text}) => {
  return (
    <li className="navbar-header__menu-item">
      <a href="#link" className="navbar-header__menu-link">
        {text}
      </a>
    </li>
  );
}

interface NavbarHeaderMenuProps {
  viewportWidth: number;
  mobileWidth: number;
}

const NavbarHeaderMenu: FC<NavbarHeaderMenuProps> = ({
  viewportWidth, mobileWidth
}) => {
  const productSubMenu = useContext(subMenuState).productSubMenu;
  const multiBariSubMenu = useContext(subMenuState).multiBariSubMenu;
  const dispatchSubMenuProduct = useContext(subMenuDispatch)!;
  let NavbarHeaderProductSubmenuTitleContainer:unknown = '';

  let NavbarHeaderMenuItemContainer = (text: string) => {
    let NavbarHeaderMenuItemContainerData: unknown = '';
    if (viewportWidth > mobileWidth || productSubMenu === false) {
      NavbarHeaderMenuItemContainerData = <NavbarHeaderMenuItem text={text} />;
    } else {
      NavbarHeaderMenuItemContainerData = '';
    }
    return NavbarHeaderMenuItemContainerData;
  }

  if(viewportWidth > mobileWidth || multiBariSubMenu === false) {
    NavbarHeaderProductSubmenuTitleContainer =
      <span className="navbar-header__submenu-title"
        onClick={() => dispatchSubMenuProduct({type: 'product'})}>
        {productSubMenu &&
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" className="navbar-header__submenu-icon">
            <path d="M192 127.338v257.324c0 17.818-21.543 26.741-34.142 14.142L29.196 270.142c-7.81-7.81-7.81-20.474 0-28.284l128.662-128.662c12.599-12.6 34.142-3.676 34.142 14.142z"/>
          </svg>}
        produtos
      </span>
  } else {
    NavbarHeaderProductSubmenuTitleContainer = '';
  }

  return (
    <ul className="navbar-header__menu">
      {NavbarHeaderMenuItemContainer('sobre')}
      <li className="navbar-header__menu-item navbar-header__menu-item_border_none">
        {productSubMenu &&
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" className="navbar-header__submenu-top-icon">
            <path d="M192 127.338v257.324c0 17.818-21.543 26.741-34.142 14.142L29.196 270.142c-7.81-7.81-7.81-20.474 0-28.284l128.662-128.662c12.599-12.6 34.142-3.676 34.142 14.142z"/>
          </svg>}
        {NavbarHeaderProductSubmenuTitleContainer}
        {productSubMenu &&
          <NavbarHeaderSubMenu
            viewportWidth={viewportWidth}
            mobileWidth={mobileWidth}/>}
      </li>
      {NavbarHeaderMenuItemContainer('conhecimento')}
      {NavbarHeaderMenuItemContainer('contato')}
    </ul>
  )
}

export default NavbarHeaderMenu;