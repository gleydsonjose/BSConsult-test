import React, {FC} from 'react';

const FooterFirstGroup: FC = () => {
  return (
    <div className="footer__first-group">
      <img src={`${process.env.PUBLIC_URL}/images/footer-logo.png`} alt="Footer Logo" className="footer__logo"/>
      <nav className="footer__nav">
        <h1 className="footer__nav-title">MENU</h1>
        <ul className="footer__menu">
          <li className="footer__item">
            <a href="#link" className="footer__link">sobre</a>
          </li>
          <li className="footer__item">
            <a href="#link" className="footer__link">produtos</a>
          </li>
          <li className="footer__item">
            <a href="#link" className="footer__link">conhecimento</a>
          </li>
          <li className="footer__item">
            <a href="#link" className="footer__link">contato</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default FooterFirstGroup;