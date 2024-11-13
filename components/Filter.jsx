import PropTypes from "prop-types";

const Filter = ({ setQuery }) => {
  return (
    <div className="filter">
      <select
        id="filterByRegion"
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      >
        <option defaultValue="filter-by-region" hidden>
          Filter by Region
        </option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

Filter.propTypes = {
  setQuery: PropTypes.func.isRequired,
};

export default Filter;
