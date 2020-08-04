import React from 'react';
import { Link } from 'gatsby';
import { ChevronDown } from 'react-feather';


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

// Taking items from NavProps.items
const Nav: React.FC<NavProps> = ({ items }) => {

  return (
  /* TODO: implement nav menus */
    <>
      <div className="nav-bar">
        {items
          .filter(item => item.visible)
          .sort((a, b) => a.index - b.index)
          .map(item => (
            <NavPart key={item.id} {...item} />
          ))}
      </div>
    </>
  );
};

const NavPart: React.FC<NavItemOrNavMenu> = ( item ) => {

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
              <ChevronDown className="nav-chevron" color="#fff" />
              <div className="nav-sub-container">
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
