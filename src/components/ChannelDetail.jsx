import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ChannelDetail.css';
import { fetchFromAPI } from "../utils/fetchFromApi";
import { useAppContext } from '../utils/context';
import ChannelCard from './ChannelCard';
import Videos from './Videos';

const ChannelDetail = () => {
  const { id } = useParams();
  const { channelDetail, setChannelDetail, setVideos, videos } = useAppContext();


  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);

      setVideos(videosData?.items);
      console.log(videosData?.items)
    };

    fetchResults();
  }, [id]);
  if(!videos) return(
    <div className="nothing">
          <p className='nothingP'>Retrieving Videos...</p>
        </div>
  );
  return (
    <div className="channelDetail">
      <div className="channelUp">
      <div className="channelBanner">
        <img src={channelDetail?.snippet?.thumbnails?.default?.url }
                alt={channelDetail?.snippet?.title} className="channelBanner" />
      </div>
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </div>
      <div className="channelDetas">
        <p className="channelDescription">{channelDetail?.snippet.description.slice(0,100)}...</p>
      </div>
      <div className="">
        <Videos videos={videos} />
      </div>
    </div>
  )
}

export default ChannelDetail