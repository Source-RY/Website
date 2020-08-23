import React from 'react';

import { Link } from 'gatsby';
import { ChevronDown } from 'react-feather';

import { NavigationBarItemOrNavigationBarMenu } from './NavigationBarMenu';


export type NavigationBarPartProps = {} & NavigationBarItemOrNavigationBarMenu;

const NavigationBarPart: React.FC<NavigationBarPartProps> = (item) => {
  const [subNavActive, setSubNavActive] = React.useState(false);

  let subContent: NavigationBarItemOrNavigationBarMenu[] = [];

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
                    return <NavigationBarPart key={subItem.id} {...subItem} />;
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


export default NavigationBarPart;
