import { FOOTER_TEXT } from '@/mock';
import ROCKET from '@assets/ROCKET.png';
import './Footer.scss';

export const Footer = () => {
  const FooterText = <h1 className="footer__text">{FOOTER_TEXT}</h1>;
  return (
    <div className="footer">
      <img src={ROCKET} alt="rocket" className="footer__image" />
      {FooterText}
    </div>
  );
};
