import { useState } from "react";
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../api/Api";
import './Search.css'
const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState();
  const navigate = useNavigate();
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
              label: `${city.name}`,
            };
          }),
        };
      });
  };


  const handleOnChange = (selectedOption) => {
    if (selectedOption) {
      const cityName = selectedOption.label;
      console.log(cityName);
      navigate(`/specific-city-details/${cityName}`);
    }
  };
  return (
    <div className="parent-div">
      <div className="search">
        <AsyncPaginate
          placeholder="Search for city"
          debounceTimeout={600}
          value={search}
          onChange={(selectedOption) => handleOnChange(selectedOption)}
          loadOptions={loadOptions}
        />
      </div>

    </div>


  );



}

export default Search;