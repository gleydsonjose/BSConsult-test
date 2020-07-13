import React, {FC} from 'react';
import './footer.css';
import { useViewportResize } from '../hooks';
import FooterFirstGroup from './components/footer-first-group';
import FooterLastGroup from './components/footer-last-group';

const Footer: FC = () => {
  const viewportWidth = useViewportResize();
  const mobileWidth = 900;

  return (
    <footer className="footer">
      <img src={`${process.env.PUBLIC_URL}/images/background-separator.png`} alt="Separator" className="footer__separator"/>
      <div className="footer__body">
        {viewportWidth > mobileWidth && <FooterFirstGroup/>}
        <FooterLastGroup/>
      </div>
    </footer>
  );
}

export default Footer;