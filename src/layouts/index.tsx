import * as React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Nav, { NavItemOrNavMenu } from '../components/nav';


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
        <Nav items={strapiNavigationBar.items} />
        <main className="content-wrapper">{children}</main>
      </>
    )} />
);

export default IndexLayout;
