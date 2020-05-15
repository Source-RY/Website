import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';


interface NavPage {
  title: string,
  id: string
};

const Nav: React.FC = () => (
  <StaticQuery
    query={graphql`
      query availablePages {
        allStrapiPage(filter: {primary: {eq: true}}) {
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
          {data.allStrapiPage.nodes.map((node: NavPage) => {
            return <Link to={`/${node.title}`} className="nav-link">{node.title}</Link>;
          })}
        </div>
      </>
    )}
  />
);

export default Nav;
