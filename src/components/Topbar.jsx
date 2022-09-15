import React, { useState } from 'react'
import '../styles/Topbar.css';
import searchL from '../assets/icons/search.svg';
import logo from '../assets/icons/YouTube-logo.png';
import SearchBar from './SearchBar';
import { useAppContext } from '../utils/context';


const Topbar = () => {
  const { search, setSearch } = useAppContext();

  const toggle = () =>{
    setSearch(!search);
  }
  return (
    <div className="topbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="search">
        <img src={searchL} alt="Search" className='searchBtn' onClick={()=>toggle()}/>
      </div>
      <SearchBar />
    </div>
    )
}

export default Topbar