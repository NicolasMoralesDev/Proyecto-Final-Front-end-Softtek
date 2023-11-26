import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(search);
  }

  const handleClick = () => {
    console.log(search);
  }

  return (
    <div className={`d-flex align-items-center`}>
      <input
        type="text"
        className={styles.searchBar}
        placeholder="Buscar..."
        onChange={handleChange}
      />
      <div className={styles.searchButton} onClick={handleClick}>
        <CiSearch />
      </div>
    </div>
  );
};

export default SearchBar;