import * as React from 'react';
import { Link } from 'gatsby';

import IndexLayout from '../layouts';


const NotFoundPage = () => (
  <IndexLayout>
    <h1 className="not-found">Tais mennä väärin</h1>
    <p className="not-found">
      Typoista päätellen olet jo valmistunut insinööri!
      <br /><br />
      <Link to="/">Haluun pois</Link>
    </p>
  </IndexLayout>
);

export default NotFoundPage;
