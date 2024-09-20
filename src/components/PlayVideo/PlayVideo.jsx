import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { API_KEY, value_converter } from '../../data'
import moment from 'moment'

const PlayVideo = ({videoId}) => {

  const[apiData,setApiData] = useState(null);

  const fetchVideoData = async () =>{
    //fetching video data
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
     await fetch(videoDetails_url).then(res=>res.json()).then(data => setApiData(data.items[0]));
     console.log(data);
    }

  useEffect(()=>{
    fetchVideoData();
  },[])


  return (
    <div className='play-video'>
       {/* <video src={video1} controls autoPlay muted></video> */}
       <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <h3>{apiData?apiData.snippet.title:"title data"}</h3>
      <div className="play-video-info">
      <p>{apiData?value_converter(apiData.statistics.viewCount):"16k"} views &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow():""}</p>
        <div>
            <span><img src={like} alt="" />{apiData?apiData.statistics.likeCount:155}</span>
            <span><img src={dislike} alt="" />2</span>
            <span><img src={share} alt="" />share</span>
            <span><img src={save} alt="" />save</span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={jack} alt="" />
        <div>
      <p>Greatstack</p>
      <span>1M Subscribers</span>
      </div>
      <button>Subscribe</button>
      </div>
      <div className="vid-description">
      <p>channel that makes learning easy</p>
      <p>Subscribe greatstack to watch more tutorials on web d</p>
      <hr />
      <h4>130 Comments</h4>
      <div className="Comment">
        <img src={user_profile} alt="" />
        <div>
            <h3>Jack Nicholson <span>1 day ago</span></h3>
            <p>global computer network providing a variety of information and conclusion
                      its interconnected network using standardized communication protocols</p>
              <div className="comment-action">
                <img src={like} alt="" />
                <span>244</span>
                <img src={dislike} alt="" />
                </div>        
        </div>
      </div>
      <div className="Comment">
        <img src={user_profile} alt="" />
        <div>
            <h3>Jack Nicholson <span>1 day ago</span></h3>
            <p>global computer network providing a variety of information and conclusion
                      its interconnected network using standardized communication protocols</p>
              <div className="comment-action">
                <img src={like} alt="" />
                <span>244</span>
                <img src={dislike} alt="" />
                </div>        
        </div>
      </div>
      <div className="Comment">
        <img src={user_profile} alt="" />
        <div>
            <h3>Jack Nicholson <span>1 day ago</span></h3>
            <p>global computer network providing a variety of information and conclusion
                      its interconnected network using standardized communication protocols</p>
              <div className="comment-action">
                <img src={like} alt="" />
                <span>244</span>
                <img src={dislike} alt="" />
                </div>        
        </div>
      </div>
      <div className="Comment">
        <img src={user_profile} alt="" />
        <div>
            <h3>Jack Nicholson <span>1 day ago</span></h3>
            <p>global computer network providing a variety of information and conclusion
                      its interconnected network using standardized communication protocols</p>
              <div className="comment-action">
                <img src={like} alt="" />
                <span>244</span>
                <img src={dislike} alt="" />
                </div>        
        </div>
      </div>
      </div>
    </div>

  )
}

export default PlayVideo
