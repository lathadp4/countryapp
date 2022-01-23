import React, { useState } from "react";
import Axios from "axios";
import "./App.css";
import Weather from "./components/Weather";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [country, setcountry] = useState("");
  const [search, setSearch] = useState("");

  const countryName = async () => {
    await Axios.get(`https://restcountries.com/v3.1/name/${search}`).then(
      (response) => {
        console.log(response);
        setcountry(response.data);
        console.log(country);
      }
    );
  };
  const getInput = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };
  const getForm = (e) => {
    e.preventDefault();
    countryName();
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1> SEARCH THE COUNTRY</h1>
        <form className="inputfield">
          <input
            className="textfield"
            type="text"
            id="search"
            placeholder="countryname"
            onChange={getInput}
          ></input>
          <button id="btn1" onClick={getForm}>
            search
          </button>
        </form>

        {country && country.length > 0 ? (
          country.map((data) => {
            return (
              <div className="conapp" key={uuidv4()}>
                <h4>Name:{data.name.common}</h4>
                <h4>Capital: {data.capital}</h4>
                <h4>Population: {data.population}</h4>
                <h4>Continents: {data["continents"][0]}</h4>
                <h4>
                  Lating: {data["latlng"][0]},{data["latlng"][1]}
                </h4>
                <img src={data.flags.png} alt={data.name.common} />
                <Weather search={search} />
              </div>
            );
          })
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default App;
