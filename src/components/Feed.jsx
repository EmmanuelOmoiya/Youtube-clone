import React, { useState, useEffect } from 'react'
import '../styles/Feed.css'
import { fetchFromAPI } from "../utils/fetchFromApi";
import Videos from './Videos.jsx';
import { useAppContext } from '../utils/context';

const Feed = () => {
  const { selectedOption, videos, setVideos } = useAppContext();
  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedOption}`)
      .then((data) => setVideos(data.items))
    }, [selectedOption]);
  return (
    <div className="feed">
        { videos?.length > 0 
        ? 
        <Videos videos={videos} />
        :
        <div className="nothing">
          <p className='nothingP'>Retrieving Videos...</p>
        </div>
        }
    </div>
  )
}

export default Feed