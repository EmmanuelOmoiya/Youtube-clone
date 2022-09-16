import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/VideoCard.css';

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  return (
    <div className="videocard">
        <div className="card">
            <Link to={`/video/${videoId}` } className="videoimg">
                <img src={snippet?.thumbnails?.medium?.url } alt={snippet?.title}  className="videoimg"/>
            </Link>
        </div>
        <div className="cardContent">
            <Link to={`/video/${videoId}` } className="link-cardName">
                <p className="cardName">{snippet?.title.slice(0, 60) }</p>
            </Link>
            <Link to={`/channel/${snippet?.channelId}`} className="link-channel">
                <p className="channelId">{snippet?.channelTitle }</p><p className='pol'>.</p><p className="videotime">{snippet?.publishedAt.slice(0, 10)}</p>
            </Link>
        </div>
    </div>
    )
}

export default VideoCard