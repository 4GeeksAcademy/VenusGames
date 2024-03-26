import React from "react";
import "../../styles/FilterBar.css";

const FilterBar = () => {
  return (
    <div className="maindropdown">
      <div className="dropdown">
        <button
          className="btn dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{ boxShadow: "none" }}
        >
          <i
            className="fa-solid fa-bars-staggered"
            style={{ color: "lightGrey" }}
          ></i>
        </button>
        <ul className="dropdown-menu">
          <div className="filter__types" id="type-container" style={{color: "aliceblue"}}>
            <h2 className="filter__title">
              Type <i className="fa-solid fa-wand-magic-sparkles"></i>
            </h2>
            <li className="type type--normal default_pointer_cs">
              normal <i className="fa-solid fa-person"></i>
            </li>
            <li className="type type--fighting default_pointer_cs">
              fighting <i className="fa-solid fa-user-ninja"></i>
            </li>
            <li className="type type--flying">
              flying <i className="fa-solid fa-feather"></i>
            </li>
            <li className="type type--poison">
              poison <i className="fa-solid fa-skull-crossbones"></i>
            </li>
            <li className="type type--ground">
              ground <i className="fa-solid fa-bone"></i>
            </li>
            <li className="type type--rock">
              rock <i className="fa-solid fa-hill-rockslide"></i>
            </li>
            <li className="type type--bug">
              bug <i className="fa-solid fa-bugs"></i>
            </li>
            <li className="type type--ghost">
              ghost <i className="fa-solid fa-ghost"></i>
            </li>
            <li className="type type--steel">
              steel <i className="fa-solid fa-drum-steelpan"></i>
            </li>
            <li className="type type--fire">
              fire <i className="fa-solid fa-fire"></i>
            </li>
            <li className="type type--water">
              water <i className="fa-solid fa-droplet"></i>
            </li>
            <li className="type type--grass">
              grass <i className="fa-solid fa-seedling"></i>
            </li>
            <li className="type type--electric">
              electric <i className="fa-solid fa-bolt-lightning"></i>
            </li>
            <li className="type type--psychic">
              psychic <i className="fa-solid fa-brain"></i>
            </li>
            <li className="type type--ice">
              ice <i className="fa-solid fa-igloo"></i>
            </li>
            <li className="type type--dragon">
              dragon <i className="fa-solid fa-dragon"></i>
            </li>
            <li className="type type--dark">
              dark <i className="fa-solid fa-moon"></i>
            </li>
            <li className="type type--fairy">
              fairy <i className="fa-solid fa-hat-wizard"></i>
            </li>
            <li className="type type--unknown">
              unknown <i className="fa-solid fa-circle-question"></i>
            </li>
            <li className="type type--shadow">
              shadow <i className="fa-solid fa-eye-slash"></i>
            </li>
          </div>

          <div className="filter__action">
            <button className="filter__button" id="filter-button">
              Filter
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default FilterBar;
