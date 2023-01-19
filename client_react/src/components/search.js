import React from 'react';
import { BsSearch } from 'react-icons/bs';

export const Search = () => {
  return (
    <div class="search-component ">
            <div class="search-input-icon-div">
                <input class="search-input" type="search" placeholder="Search..."/>
                <button class="search-icon"><BsSearch/></button>
            </div>
            <button class="filter-icon">filter</button>
    </div>
  )
}
