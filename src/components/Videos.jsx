import React from 'react';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';
import '../styles/Videos.css';

const Videos = ({videos}) => {
  return (
    <div className="videos">
        {videos.map((item, idx)=>(
            <div className="videod" key={idx}>
              {item.id.videoId && <VideoCard video={item} /> }
              {item.id.channelId && <ChannelCard channelDetail={item} />}
            </div>
        ))}
    </div>
  )
}

export default Videos