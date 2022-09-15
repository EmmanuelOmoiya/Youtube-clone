import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/Sidebar.css';
import { useAppContext } from '../utils/context';
import { SideOptions } from '../utils/constants';

const Sidebar = () => {
  const navigate = useNavigate();
  const { selectedOption, setSelectedOption } = useAppContext();
  return (
    <div className="sidebar">
      <div className="explore">
        <button className="explore">Explore</button>
      </div>
      <div className="sideoptions">
        {SideOptions.map((option) =>(
          <button className='sideoption' 
          onClick={() =>{
            if(window.location.pathname !== '/') {
              setSelectedOption(option.name)
              navigate('/')
            } else {
              setSelectedOption(option.name)
            }
            }}
          style={{
            background: option.name === selectedOption && "#fff",
            color: "white"
          }}
          key={option.name}
          >
            <p style={{ opacity: option.name === setSelectedOption ? "1" : "0.8", color: option.name === selectedOption ? "black" : "white"  }} className="optioname">
              {option.name}
            </p>
          </button>
        ))}
      </div>
    </div>
    )
}

export default Sidebar