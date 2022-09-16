import React, { useState } from 'react'
import '../styles/Topbar.css';
import searchL from '../assets/icons/search.svg';
import logo from '../assets/icons/YouTube-logo.png';
import SearchBar from './SearchBar';
import { useAppContext } from '../utils/context';
import { useNavigate } from 'react-router-dom';


const Topbar = () => {
  const { search, setSearch, searchTerm, setSearchTerm, sideOpen, setSideOpen } = useAppContext();
  const navigate = useNavigate();
  const toggle = () =>{
    setSearch(!search);
  }
  const close = () => {
    setSideOpen(!sideOpen);
  }
  const onhandleSubmit = () => {

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    } 
  };
  return (
    <div className="topbar">
      <div className="hamburger" onClick={()=> close()}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div className="logo" onClick={()=>navigate('/')}>
        <img src={logo} alt="" />
      </div>
      <div className="search">
        <img src={searchL} alt="Search" className='searchBtn' onClick={()=>toggle()}/>
      </div>
      <SearchBar />
      <div className="opun">
        <input type="text" className="searchOpinp" placeholder='Search YouTube' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
        <img src={searchL} alt="Search" className='searchBtn opip' onClick={()=> onhandleSubmit()}/>
      </div>
    </div>
    )
}

export default Topbar