import React, {FC} from 'react';

const NavbarHeaderSocialMedia: FC = () => {
  return (
    <div className="navbar-header__social-media">
      <a className="navbar-header__social-media-link navbar-header__social-media-link_margin_right" href="#link" target="_blank">
        <img className="navbar-header__social-media-img" src={`${process.env.PUBLIC_URL}/images/facebook-icon.png`} alt="Facebook Icon"/>
      </a>
      <a className="navbar-header__social-media-link" href="#link" target="_blank">
        <img className="navbar-header__social-media-img" src={`${process.env.PUBLIC_URL}/images/instagram-icon.png`} alt="Instagram Icon"/>
      </a>
    </div>
  );
}

export default NavbarHeaderSocialMedia;