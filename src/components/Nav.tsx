import React, { useState } from 'react';
import { Link } from 'gatsby';
import { ChevronDown, Instagram, Facebook, X } from 'react-feather';


interface NavItem {
  id: number;
  label: string;
  visible: boolean;
  index: number;
  page: {
    url: string;
    enabled: boolean;
  };
}

interface NavMenu extends NavItem {
  items: (NavMenu | NavItem)[];
}

export type NavItemOrNavMenu = NavItem | NavMenu;

interface NavProps {
  items: NavItemOrNavMenu[];
  setNavInactive: Function;
  navActive: boolean;
};

// Taking items from NavProps.items
const Nav: React.FC<NavProps> = ({ items, navActive, setNavInactive }) => {

  return (
  /* TODO: implement nav menus */
    <>
      <div className={'nav-bar ' + (navActive ? 'active' : '')}>
        <div className="nav-inner">
          <div className="nav-logo-container">
            <a href="https://cdn.discordapp.com/attachments/745750496333267034/745751354818953308/4cdb98bb1295cee1e2175eb83ef99284.jpg">
              <img src="/logo.png" />
            </a>
          </div>
          <div className="nav-items">
            {items
              .filter(item => item.visible)
              .sort((a, b) => a.index - b.index)
              .map(item => (
                <NavPart key={item.id} {...item} />
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

const NavPart: React.FC<NavItemOrNavMenu> = ( item ) => {

  const [subNavActive, setSubNavActive] = useState(false);

  let subContent: NavItemOrNavMenu[] = [];

  if ('items' in item) {
    subContent = item.items;
  }

  return (
    <>
      <div className="nav-link-container" key={`part-${item.id}`}>
        {
          item.page.enabled ?
            <Link className="nav-link" to={item.page.url}>{item.label}</Link>
            : <p className="nav-link">{item.label}</p>
        }
        {
          subContent != null && subContent.length > 0 ? (
            <>
              <p onClick={() => setSubNavActive(!subNavActive)} className="nav-chevron">
                <ChevronDown className="nav-chevron-icon" color="#fff" />
              </p>
              <div className={'nav-sub-container ' + (subNavActive ? 'active' : '')}>
                {
                  subContent.map(subItem => {
                    return <NavPart key={subItem.id} {...subItem} />;
                  })
                }
              </div></>
          )
            :
            <></>

        }
      </div>
    </>
  );
};


export default Nav;
