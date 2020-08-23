import React from 'react';

import { Facebook, Instagram, X } from 'react-feather';

import { NavigationBarItemOrNavigationBarMenu } from './NavigationBarMenu';
import NavigationBarPart from './NavigationBarPart';


export interface NavigationBarProps {
  items: NavigationBarItemOrNavigationBarMenu[];
  setNavInactive: Function;
  navActive: boolean;
};


const NavigationBar: React.FC<NavigationBarProps> =
({ items, navActive, setNavInactive }) => {
  return (
    <>
      <div className={'nav-bar ' + (navActive ? 'active' : '')}>
        <div className="nav-inner">
          <div className="nav-logo-container">
            {/* eslint-disable-next-line max-len */}
            <a href="https://cdn.discordapp.com/attachments/745750496333267034/745751354818953308/4cdb98bb1295cee1e2175eb83ef99284.jpg">
              <img src="/logo.png" />
            </a>
          </div>
          <div className="nav-items">
            {items
              .filter(item => item.visible)
              .sort((a, b) => a.index - b.index)
              .map(item => (
                <NavigationBarPart key={item.id} {...item} />
              ))}
          </div>
          <div className="nav-socials">
            <a target="_blank" href="https://www.instagram.com/source_ry/"
              className="nav-social-link">
              <Instagram className="nav-social-icon" />
            </a>
            <a target="_blank" href="https://www.facebook.com/tamko.source/"
              className="nav-social-link">
              <Facebook className="nav-social-icon" />
            </a>
          </div>
        </div>
        <button onClick={() => setNavInactive()} type="button" className="deactivate-nav-button">
          <X className="deactivate-nav-button-icon" />
        </button>
      </div>
    </>
  );
};


export default NavigationBar;
