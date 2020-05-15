import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';


interface navPage {
  title: String,
  id: String
};

const Nav: React.FC = () => (
  <StaticQuery
    query={graphql`
      query availablePages {
        allStrapiPage {
          nodes {
            title
            id
          }
        }
      }
    `}
    render={data => (
      <>
        <div className="nav-bar">
          {data.allStrapiPage.nodes.map((node: navPage) => {
            return (<Link to={`/${node.title}`} className="nav-link">{node.title}</Link>);
          })}
        </div>
      </>
    )}
  />
);

export default Nav;
