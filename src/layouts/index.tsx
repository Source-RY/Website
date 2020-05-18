import * as React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Nav from '../components/nav';


interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      keywords: string;
    };
  }
  allStrapiPage: {
    nodes: {
      id: string;
      title: string;
      fields: {
        url: string;
      }
    }[];
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
        allStrapiPage {
          nodes {
            id
            title
            fields {
              url
            }
          }
        }
      }
    `}
    render={({ site: { siteMetadata }, allStrapiPage }: StaticQueryProps) => (
      <>
        <Helmet
          title={siteMetadata.title}
          meta={[
            { name: 'description', content: siteMetadata.description },
            { name: 'keywords', content: siteMetadata.keywords }
          ]}
        />
        <Nav items={allStrapiPage.nodes} />
        <main className="content-wrapper">{children}</main>
      </>
    )} />
);

export default IndexLayout;
