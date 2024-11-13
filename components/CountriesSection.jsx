import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import CountryCardShimmer from "./CountryCardShimmer.jsx";
import PropTypes from "prop-types";

export default function CountriesSection({ query }) {
  const [allCountries, setAllCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setAllCountries(data);
      });
  }, []);

  return (
    <>
      {!allCountries.length ? (
        <CountryCardShimmer />
      ) : (
        <section className="data">
          {allCountries
            .filter(
              (country) =>
                country.name.common.toLowerCase().includes(query) ||
                country.region.toLowerCase().includes(query)
            )
            .map((country) => {
              return (
                <CountryCard
                  key={country.name.common}
                  name={country.name.common}
                  flag={country.flags.svg}
                  population={country.population.toLocaleString()}
                  region={country.region}
                  capital={country.capital?.[0]}
                  country={country}
                />
              );
            })}
        </section>
      )}
    </>
  );
}

CountriesSection.propTypes = {
  query: PropTypes.func.isRequired,
};
