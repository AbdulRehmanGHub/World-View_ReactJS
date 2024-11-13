import { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import styles from "./CountryDetail.module.css";

export default function CountryDetail() {
  const { country: countryName } = useParams();
  const [countryData, setCountryData] = useState(null);
  const [borderCountries, setBorderCountries] = useState([]);
  const [pageNotFound, setPageNotFound] = useState(false);
  const { state } = useLocation();

  function updateCountryData(country) {
    setCountryData({
      c_name: country.name.common || country.name,
      c_native_name: Object.values(country.name.nativeName || {})[0]?.common,
      c_flag: country.flags.svg,
      c_population: country.population.toLocaleString(),
      c_region: country.region,
      c_subregion: country.subregion,
      c_capital: country.capital ? country.capital.join(", ") : "N/A",
      c_tld: country.tld ? country.tld.join(", ") : "N/A",
      c_currency: Object.values(country.currencies || {})
        .map((currency) => currency.name)
        .join(", "),
      c_languages: Object.values(country.languages || {}).join(", "),
      c_border: country.borders || [],
    });

    // If borders exist, fetch their full names
    if (country.borders) {
      Promise.all(
        country.borders.map((border) =>
          fetch(`https://restcountries.com/v3.1/alpha/${border}`)
            .then((res) => res.json())
            .then(([borderCountry]) => borderCountry.name.common)
        )
      )
        .then((borderNames) => setBorderCountries(borderNames))
        .catch((err) => console.log(err));
    } else {
      setBorderCountries([]);
    }
  }

  useEffect(() => {
    if (state) {
      updateCountryData(state);
      return;
    }

    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([country]) => {
        updateCountryData(country);
      })
      .catch((err) => {
        setPageNotFound(true);
        console.log(err);
      });
  }, [countryName, state]);

  if (pageNotFound) {
    return (
      <h2 style={{ textAlign: "center", margin: "2rem 0" }}>
        Page is not found...
      </h2>
    );
  }

  return countryData === null ? (
    "loading data..."
  ) : (
    <main>
      <section className={styles.prevPage}>
        <Link className={styles.btnLink} onClick={() => window.history.back()}>
          <div className={styles.backBtn}>
            <i className="fa-solid fa-arrow-left"></i>
            <span>Back</span>
          </div>
        </Link>
      </section>

      <section className={styles.data}>
        <div className={styles.country_box}>
          <div className={styles.countryFlag}>
            <img src={countryData.c_flag} alt={`${countryData.c_name} flag`} />
          </div>
          <div className={styles["box-text"]}>
            <h3>{countryData.c_name}</h3>
            <div className={styles["box-text_paras"]}>
              <div>
                <p>
                  Native Name: <span>{countryData.c_native_name}</span>
                </p>
                <p>
                  Population: <span>{countryData.c_population}</span>
                </p>
                <p>
                  Region: <span>{countryData.c_region}</span>
                </p>
                <p>
                  Sub Region: <span>{countryData.c_subregion}</span>
                </p>
                <p>
                  Capital: <span>{countryData.c_capital}</span>
                </p>
              </div>
              <div>
                <p>
                  Top Level Domain: <span>{countryData.c_tld}</span>
                </p>
                <p>
                  Currencies: <span>{countryData.c_currency}</span>
                </p>
                <p>
                  Languages: <span>{countryData.c_languages}</span>
                </p>
              </div>
            </div>

            <div className={styles.countryBorders}>
              <p>Border Countries: </p>
              {borderCountries.length > 0 ? (
                <div className={styles.border_box}>
                  {borderCountries.map((border) => (
                    <Link key={border} to={`/${border}`}>
                      {border}
                    </Link>
                  ))}
                </div>
              ) : (
                <span>No border countries</span>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
