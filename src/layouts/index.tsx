import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Nav, { NavItemOrNavMenu } from '../components/Nav';
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
    items: NavItemOrNavMenu[]
  };
}

interface NavProps {
  items: NavItemOrNavMenu[]
}

const NavAndButton: React.FC<NavProps> = ({ items }) => {

  const [navActive, setNavActive] = useState(false);

  return (
    <>
      <Nav items={items} navActive={navActive} setNavInactive={() => setNavActive(false)} />
      <button onClick={() => setNavActive(true)} type="button" className="activate-nav-button">
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
        />
        <NavAndButton items={strapiNavigationBar.items} />
        <main className="content-wrapper">{children}</main>
      </>
    )} />
);

export default IndexLayout;
