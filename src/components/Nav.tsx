import React from 'react';
import { Link } from 'gatsby';


interface NavProps {
  items: {
    id: string;
    title: string,
    fields: {
      url: string;
    }
  }[];
};

const Nav: React.FC<NavProps> = ({ items }) => (
  <>
    <div className="nav-bar">
      {items.map(item => (
        <Link key={item.id} to={item.fields.url} className="nav-link">{item.title}</Link>
      ))}
    </div>
  </>
);

export default Nav;
