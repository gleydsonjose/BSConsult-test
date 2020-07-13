import React, {FC, useContext} from 'react';
import NavbarHeaderMenu from './navbar-header-menu';
import NavbarHeaderSocialMedia from './navbar-header-social-media';
import {subMenuState} from '../navbar-header'

interface NavbarHeaderLastGroupProps {
  viewportWidth: number;
  mobileWidth: number;
}

const NavbarHeaderLastGroup: FC<NavbarHeaderLastGroupProps> = ({
  viewportWidth, mobileWidth
}) => {
  const productSubMenu = useContext(subMenuState).productSubMenu;
  const multiBariSubMenu = useContext(subMenuState).multiBariSubMenu;
  let navbarHeaderLastGroupClass = 'navbar-header__last-group';
  let NavbarHeaderSocialMediaContainer: unknown = '';

  if(viewportWidth > mobileWidth || productSubMenu === false) {
    NavbarHeaderSocialMediaContainer = <NavbarHeaderSocialMedia/>;
  } else {
    NavbarHeaderSocialMediaContainer = '';
  }

  if(viewportWidth < mobileWidth && multiBariSubMenu) {
    navbarHeaderLastGroupClass = 'navbar-header__last-group navbar-header__last-group_bg-color_blue';
  }

  return (
    <div className={navbarHeaderLastGroupClass}>
      <NavbarHeaderMenu
        viewportWidth={viewportWidth}
        mobileWidth={mobileWidth}/>
      {NavbarHeaderSocialMediaContainer}
    </div>
  );
}

export default NavbarHeaderLastGroup;