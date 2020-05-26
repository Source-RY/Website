import React from 'react';
import { Link } from 'gatsby';


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
};

const Nav: React.FC<NavProps> = ({ items }) => {
  console.log(items);

  return (
  /* TODO: implement nav menus */
    <>
      <div className="nav-bar">
        {items
          .filter(item => item.visible)
          .sort((a, b) => a.index - b.index)
          .map(item => (
            <React.Fragment key={item.id}>
              {/* Don't create link if the page doesn't exist */}
              {item.page.enabled ?
                <Link className="nav-link" to={item.page.url}>{item.label}</Link> :
                <p className="nav-link">{item.label}</p>}
            </React.Fragment>
          ))}
      </div>
    </>
  );
};

export default Nav;
