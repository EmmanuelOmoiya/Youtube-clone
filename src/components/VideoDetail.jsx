import React, { useEffect } from 'react';
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { useAppContext } from '../utils/context';
import Videos from './Videos';
import {fetchFromAPI} from '../utils/fetchFromApi';
import '../styles/VideoDetail.css';

const VideoDetail = () => {
    const { videoDetail, setVideoDetail, setVideos, videos } = useAppContext();
    const { id } = useParams();

    useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
          .then((data) => setVideoDetail(data.items[0]))
    
        fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
          .then((data) => setVideos(data.items))
      }, [id]);

  if(!videoDetail?.snippet) return(
    <div className="nothing">
          <p className='nothingP'>Retrieving Videos...</p>
        </div>
  );
  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

  return (
    <div className="videodetail">
        <div className="detaV">
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
            <div className="videoguy">
            <p className="vidt">{title}</p>
            <div className='lokiu'>
            <Link to={`/channel/${channelId}`} className="lki">
                <p >
                  {channelTitle}
                </p>
            </Link>
            <p className="pol">.</p>

                <p>
                  {parseInt(viewCount).toLocaleString()} views
                </p>
                <p className="pol">.</p>
                <p>
                  {parseInt(likeCount).toLocaleString()} likes
                </p>
            </div>
            </div>
        
        </div>        
        <p className="recomm">You might also like:</p>
        <div className="cides">
          <Videos videos={videos} direction="column" />
        </div>
    </div>
  )
}

export default VideoDetail