import { AsyncPaginate } from "react-select-async-paginate";
import React, { useState } from "react";
import {
  geoApiOptions,
  GEO_API_URL,
} from "../api-fetches/auto-complete-service";
import LightToDark from "../utilities/LightToDark";
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
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <div className="search-bar-section">
      {isShown && (
        <AsyncPaginate
          placeholder="Search"
          debounce={600}
          value={search}
          onChange={handleOnChange}
          loadOptions={loadOptions}
          onBlur={handleMouseLeave}
        />
      )}
      <button className="search-icon" onClick={handleClick}>
        <BiSearch size={30} />
      </button>
      <LightToDark />
    </div>
  );
};
export default Search;
