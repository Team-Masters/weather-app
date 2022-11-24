import { AsyncPaginate } from "react-select-async-paginate";
import { MdSettings } from "react-icons/md";
import React, { useState } from "react";
import {
  geoApiOptions,
  GEO_API_URL,
} from "../api-fetches/auto-cpmplete.service";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

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
      <AsyncPaginate
        placeholder="  🔍 Search"
        debounce={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
      />
      <div className="settings-icon">
        <h1>
          <MdSettings />
        </h1>
      </div>
    </div>
  );
};
export default Search;
