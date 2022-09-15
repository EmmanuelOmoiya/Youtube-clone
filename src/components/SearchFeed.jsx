import React, { useEffect } from 'react';
import { fetchFromAPI } from '../utils/fetchFromApi';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../utils/context';
import Videos from './Videos';
import '../styles/SearchFeed.css';

const SearchFeed = () => {
  const { searchTerm } = useParams();
  const { setVideos, videos} = useAppContext();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);
  if(!videos) return(
    <div className="nothing">
          <p className='nothingP'>Retrieving Videos...</p>
        </div>
  );

  return (
    <div className="searchfeed">
      <p className="searchQ ">Search results for {searchTerm} </p>
      <Videos videos={videos} />
    </div>
  )
}

export default SearchFeed