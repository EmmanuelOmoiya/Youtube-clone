import React from 'react';
import '../styles/LeftBar.css';
import { useAppContext } from '../utils/context';
import { LeftOption } from '../utils/constants';
import { useNavigate } from 'react-router-dom';

const LeftBar = () => {
    const navigate = useNavigate();
  const { leftOption, setLeftOption, sideOpen } = useAppContext();
  return (
    <div className={sideOpen ? "leftbar" : "leftbar close" } >
        <div className="leftOptions">
            
        {LeftOption.map((option) =>(
          <button className='leftoption' 
          onClick={() =>{
            setLeftOption(option.name)
            navigate('/')
            }}
          style={{
            background: option.name === leftOption && "#313231",
            color: option.name === leftOption && "white",
            fontWeight: option.name === leftOption && 600
          }}
          key={option.name}
          >
            {/* <img src={`${option.icon}`} alt={option.name} className="loptionicon" /> */}
            <p style={{ opacity: option.name === setLeftOption ? "1" : "0.8", color: option.name === leftOption ? "black" : "white"  }} className="leftoptioname">
              {option.name}
            </p>
          </button>
        ))}
        </div>
    </div>
  )
}

export default LeftBar