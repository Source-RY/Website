import * as React from 'react';
import { Link } from 'gatsby';

import IndexLayout from '../layouts';


const PageTwo = () => (
  <IndexLayout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <ul>
      <li>
        <Link to="/">Take me back home.</Link>
      </li>
    </ul>
  </IndexLayout>
);

export default PageTwo;
