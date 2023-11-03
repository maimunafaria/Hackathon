import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../api/Api";
import './Search.css'
const Search = ({onSearchChange}) => {
    const [search, setSearch] = useState();    

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
                  label: `${city.name}, ${city.countryCode}`,
                };
              }),
            };
          });
      };
    
    
    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }
    
    return (
        <div className="parent-div">
        <div className="search">
          <AsyncPaginate
            placeholder="Search for city"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
          />
        </div>
      </div>
      
           
          );
          
        
    
}

export default Search;