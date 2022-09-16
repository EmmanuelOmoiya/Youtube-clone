import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ChannelCard.css';

const ChannelCard = ({ channelDetail }) => {
  return (
    <div className="channelCard">
      
        <Link to={`/channel/${channelDetail?.id?.channelId}`} className="link">
            <div className="channelContent">
                <img src={channelDetail?.snippet?.thumbnails?.high?.url }
                alt={channelDetail?.snippet?.title} className="channel-img"/>
                <p className="channeltitle">{channelDetail?.snippet?.title}{' '}</p>
                {channelDetail?.statistics?.subscriberCount && (
                <p className='subcdr'>
                    {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
                    </p>
                 )}
            </div>
        </Link>
    </div>
  )
}

export default ChannelCard