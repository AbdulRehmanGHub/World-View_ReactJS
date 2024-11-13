import { useState } from "react";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import CountriesSection from "./CountriesSection";
import "../src/index.css";
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";

const Home = () => {
  const [query, setQuery] = useState("");
  const [isDark] = useContext(ThemeContext);

  return (
    <main className={isDark ? "dark" : ""}>
      <section className="search-filter">
        <SearchBar setQuery={setQuery} />
        <Filter setQuery={setQuery} />
      </section>
      <CountriesSection query={query} />
    </main>
  );
};

export default Home;
