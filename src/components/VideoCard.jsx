import React from 'react'
import { Link } from 'react-router-dom';
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";
import '../styles/VideoCard.css';

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  return (
    <div className="videocard">
        <div className="card">
            <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY` } className="videoimg">
                <img src={snippet?.thumbnails?.medium?.url || demoThumbnailUrl} alt={snippet?.title}  className="videoimg"/>
            </Link>
        </div>
        <div className="cardContent">
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } className="link-cardName">
                <p className="cardName">{snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}</p>
            </Link>
            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} className="link-channel">
                <p className="channelId">{snippet?.channelTitle || demoChannelTitle}</p><p className='pol'>.</p><p className="videotime">{snippet?.publishedAt.slice(0, 10)}</p>
            </Link>
        </div>
    </div>
    )
}

export default VideoCard