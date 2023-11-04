import React from "react";
import "../style/Search.css";

const Search = () => {
    return (
        <section class="search">
            <input type="search" id="search" placeholder="Search..."/>
                <img class="search-icon" alt = "Search Icon" src = "search-icon.svg"/>
        </section>
    );
};

export default Search;