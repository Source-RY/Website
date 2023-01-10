import { Link } from "react-router-dom";

const Missing404 = () => {
  return (
    <div className="page-text">
      <h1 class="not-found">Tais mennä väärin</h1>
      <p class="not-found">
        Typoista päätellen olet jo valmistunut insinööri!
        <br />
        <br />
        <Link to="/">Haluun pois</Link>
      </p>
    </div>
  );
};

export default Missing404;
