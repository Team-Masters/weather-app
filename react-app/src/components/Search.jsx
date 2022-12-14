import { AsyncPaginate } from "react-select-async-paginate";
import React, { useState } from "react";
import {
  geoApiOptions,
  GEO_API_URL,
} from "../api-fetches/auto-complete-service";
import { BiSearch } from "react-icons/bi";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);
  const [isShown, setIsShown] = useState(false);

  const handleClick = () => {
    setIsShown(true);
  };

  const handleMouseLeave = () => {
    setIsShown(false);
  };

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())

      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      })

      .catch((err) => console.error(err));
  };

  const handleOnChange = (searchData) => {
    const targetDiv = document.getElementById("windows-load-forecast");
    if (targetDiv.style.display !== "none") {
      targetDiv.style.display = "none";
    }
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <div className="search-bar-section">
      {isShown && (
        <AsyncPaginate
          placeholder="Search"
          debounceTimeout={600}
          value={search}
          onChange={handleOnChange}
          loadOptions={loadOptions}
          onBlur={handleMouseLeave}
        />
      )}
      <button className="search-icon" onClick={handleClick}>
        <BiSearch size={30} style={{ color: "white" }} />
      </button>
    </div>
  );
};
export default Search;
