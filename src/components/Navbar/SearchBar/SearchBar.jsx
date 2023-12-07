import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const [search, setSearch] = useState('');

  
  const handleChange =  (e) => {
    setSearch(e.target.value);
  }

  const handleClick = (e) => {
    e.preventDefault();
    console.log(e.key);
    location.replace(`/productos?q=${search}`);

  }

  return (
    <div className={`d-flex align-items-center`}>
      <form action="" onSubmit={handleClick}>

           <input
        type="text"
        className={styles.searchBar}
        placeholder="Buscar..."
        onChange={handleChange}
      />
  
      </form>
      <div className={styles.searchButton} onClick={handleClick}>
        <CiSearch />
      </div> 
    </div>
  );
};

export default SearchBar;