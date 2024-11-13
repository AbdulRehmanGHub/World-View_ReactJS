const SearchBar = ({ setQuery }) => {
  return (
    <div className="search">
      <input
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
        type="text"
        id="search-country"
        placeholder="Search for a country"
      />
      <i className="fa-solid fa-magnifying-glass"></i>
    </div>
  );
};

export default SearchBar;
