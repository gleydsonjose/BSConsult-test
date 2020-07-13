import React, {FC} from 'react';
import './header-info.css';

interface HeaderInfoBtnSlidesProps {
  btnName: 'back' | 'next';
}

const HeaderInfoBtnSlides: FC<HeaderInfoBtnSlidesProps> = ({
  btnName, children
}) => {
  const svgSlidesClass = btnName === 'back' ?
    "header-info__svg header-info__svg_margin_right" :
    "header-info__svg header-info__svg_margin_left"

  return (
    <button className="header-info__btn-slides">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className={svgSlidesClass}>
        {children}
      </svg>
    </button>
  );
}

const HeaderInfo: FC = () => {
  return (
    <div className="header-info">
      <HeaderInfoBtnSlides btnName="back">
        <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"/>
      </HeaderInfoBtnSlides>
      <div className="header-info__main">
        <img src={`${process.env.PUBLIC_URL}/images/header-info.png`} alt="Header Info Logo" className="header-info__img"/>
        <a href="#link" className="header-info__link header-info__link_margin_top">CONHEÇA AGORA</a>
      </div>
      <HeaderInfoBtnSlides btnName="next">
        <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/>
      </HeaderInfoBtnSlides>
    </div>
  );
}

export default HeaderInfo;