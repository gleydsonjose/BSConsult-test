import React, { FC, Dispatch, useState, createContext, useReducer } from 'react';
import NavbarHeaderFirstGroup from './components/navbar-header-first-groups';
import NavbarHeaderLastGroup from './components/navbar-header-last-group';
import {useViewportResize} from '../hooks';
import './navbar-header.css';

interface SubMenuState {
  productSubMenu: boolean;
  multiBariSubMenu: boolean;
}

interface Action {
  type: string;
}

const subMenuStateInit: SubMenuState = {
  productSubMenu: false,
  multiBariSubMenu: false
}

function reducer(state: SubMenuState, action: Action) {
  switch(action.type) {
    case 'product':
      return {...state, productSubMenu: !state.productSubMenu};
    case 'multibari':
      return {...state, multiBariSubMenu: !state.multiBariSubMenu};
    default:
      throw new Error("This submenu don't exist!");
  }
}

export const subMenuState = createContext(subMenuStateInit);
export const subMenuDispatch = createContext<Dispatch<Action> | null>(null);

const NavbarHeader: FC =() => {
  const [menuMobileButton, setMenuMobileButton] = useState(false);
  const viewportWidth = useViewportResize();
  const mobileWidth = 900;
  let navbarHeaderBgColor = 'navbar-header navbar-header_bg-color_primary';
  let NavbarHeaderLastGroupContainer: unknown = '';
  const [state, dispatch] = useReducer(reducer, subMenuStateInit);
  const multiBariSubMenu = state.multiBariSubMenu;
  const productSubMenu = state.productSubMenu;
  
  if(viewportWidth > mobileWidth) {
    navbarHeaderBgColor = 'navbar-header navbar-header_bg-color_primary';
  } else {
    if(menuMobileButton && multiBariSubMenu === false) {
      navbarHeaderBgColor = 'navbar-header navbar-header_bg-color_green';
    } else if(menuMobileButton && multiBariSubMenu) {
      navbarHeaderBgColor = 'navbar-header navbar-header_bg-color_blue';
    }
  }

  function handleMenuMobile(menuMobileStatus: 'open' | 'close') {
    switch(menuMobileStatus) {
      case 'open':
        setMenuMobileButton(true);
        break;
      case 'close':
        setMenuMobileButton(false);

        if(productSubMenu) {
          dispatch({type: 'product'});
        }

        if(multiBariSubMenu) {
          dispatch({type: 'multibari'});
        }

        break;
      default:
        throw new Error("This status don't exist!");
    }
  }

  if(viewportWidth > mobileWidth || menuMobileButton) {
    NavbarHeaderLastGroupContainer =
      <subMenuState.Provider value={state}>
        <subMenuDispatch.Provider value={dispatch}>
          <NavbarHeaderLastGroup
            viewportWidth={viewportWidth}
            mobileWidth={mobileWidth}/>
        </subMenuDispatch.Provider>
      </subMenuState.Provider>
  } else {
    NavbarHeaderLastGroupContainer = '';
  }

  return (
    <nav className={navbarHeaderBgColor}>
      <NavbarHeaderFirstGroup
      menuMobileButton={menuMobileButton}
      handleMenuMobile={handleMenuMobile}/>

      {NavbarHeaderLastGroupContainer}
    </nav>
  );
}

export default NavbarHeader;