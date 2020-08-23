import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import NavigationBar, { NavigationBarItemOrNavigationBarMenu } from '../components/NavigationBar';
import { AlignJustify } from 'react-feather';


interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      keywords: string;
    };
  }
  strapiNavigationBar: {
    items: NavigationBarItemOrNavigationBarMenu[]
  };
}

interface NavigationBarProps {
  items: NavigationBarItemOrNavigationBarMenu[]
}

const NavigationBarAndButton: React.FC<NavigationBarProps> = ({ items }) => {

  const [navActive, setNavActive] = useState(false);

  useEffect(() => {
    if (navActive && !document.body.classList.contains('noscroll'))
      document.body.classList.add('noscroll');
    else
      document.body.classList.remove('noscroll');
  }, [navActive]);

  return (
    <>
      <NavigationBar
        items={items}
        navActive={navActive}
        setNavInactive={() => setNavActive(false)} />
      <button
        onClick={() => setNavActive(true)}
        type="button"
        className="activate-nav-button">
        <AlignJustify className="activate-nav-button-icon" />
      </button>
    </>
  );
};

const IndexLayout: React.FC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
        strapiNavigationBar {
          items {
            id
            label
            index
            visible
            page {
              url
              enabled
            }
            items {
              id
              label
              index
              visible
              page {
                url
                enabled
              }
            }
          }
        }
      }
    `}
    render={({ site: { siteMetadata }, strapiNavigationBar }: StaticQueryProps) => (
      <>
        <Helmet
          title={siteMetadata.title}
          meta={[
            { name: 'description', content: siteMetadata.description },
            { name: 'keywords', content: siteMetadata.keywords }
          ]}
          link={[
            { rel: 'icon', type: 'image/png', href: '/favicon.png' }
          ]}
        />
        <NavigationBarAndButton items={strapiNavigationBar.items} />
        <main className="content-wrapper">{children}</main>
      </>
    )} />
);

export default IndexLayout;
