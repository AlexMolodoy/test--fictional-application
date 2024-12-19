import BurgerButton from '@/components/BurgerButton';
import { Logo } from '@/components/Logo';
import { NavigationMenuPopup } from '@/components/MenuNavigation';
import { Navigation } from '@/components/Navigation';
import { useState } from 'react';
import './Header.scss';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const LogoContainer = (
    <div className="logo-container">
      <Logo />
    </div>
  );
  const BurgerMenu = (
    <div className="burger-button">
      <BurgerButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
    </div>
  );
  const NavigationMenu = (
    <div className="navigation-container">
      <Navigation />
    </div>
  );

  return (
    <div>
      <div className="header-container">
        {LogoContainer}
        {BurgerMenu}
        {NavigationMenu}
      </div>
      {isOpen && <NavigationMenuPopup />}
    </div>
  );
};
