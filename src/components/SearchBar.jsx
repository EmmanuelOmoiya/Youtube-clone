import React from 'react';
import { useAppContext } from '../utils/context';
import '../styles/SearchBar.css';
import { useNavigate } from 'react-router-dom';
import searchL from '../assets/icons/search.svg';

const SearchBar = () => {
  const { search, setSearchTerm, setSearch, searchTerm } = useAppContext();
  const navigate = useNavigate();

  const toggle = () =>{
    setSearch(!search);
    navigate('/')
  }
  const onhandleSubmit = () => {

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    } 
  };
  return (
    <div className={ search ? "searchbar shu" : "searchbar"}>
      <p className="fr" onClick={()=>toggle()}></p>
        <input type="text" className="searchinp" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} placeholder='Search Youtube' />
        <img src={searchL} alt="search" onClick={()=> onhandleSubmit()} className='searchBtn bas'/>
    </div>
  )
}

export default SearchBar