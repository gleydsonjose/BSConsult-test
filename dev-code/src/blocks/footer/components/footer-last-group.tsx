import React, {FC} from 'react';

const FooterLastGroup: FC = () => {
  return (
    <div className="footer__last-group">
      <h1 className="footer__partners-title">PARCEIROS</h1>
      <div className="footer__partners">
        <img src={`${process.env.PUBLIC_URL}/images/partners-1.png`} alt="Partners 1" className="footer__partners-img footer__partners-img_margin_left"/>
        <img src={`${process.env.PUBLIC_URL}/images/partners-2.png`} alt="Partners 2" className="footer__partners-img footer__partners-img_margin_left"/>
        <img src={`${process.env.PUBLIC_URL}/images/partners-3.png`} alt="Partners 3" className="footer__partners-img footer__partners-img_margin_left"/>
        <img src={`${process.env.PUBLIC_URL}/images/partners-4.png`} alt="Partners 4" className="footer__partners-img"/>
      </div>
      <img src={`${process.env.PUBLIC_URL}/images/secure-website.png`} alt="Secure Website" className="footer__secure-website-img"/>
    </div>
  );
}

export default FooterLastGroup;