import { Link } from "react-router-dom";

export default function CountryCard({
  name,
  flag,
  population,
  region,
  capital,
  country,
}) {
  return (
    <div className="country_box">
      <Link to={`/${name}`} className="countryCard" state={country}>
        <img src={flag} alt={name + "flag"} />
        <div className="box-text">
          <h3>{name}</h3>
          <p>
            Population: <span>{population}</span>
          </p>
          <p>
            Region: <span>{region}</span>
          </p>
          <p>
            Capital: <span>{capital}</span>
          </p>
        </div>
      </Link>
    </div>
  );
}
