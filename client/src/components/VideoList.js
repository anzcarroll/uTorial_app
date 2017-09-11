import React from 'react';
import VideoListItem from './VideoListItem';



const VideoList = (props) => {
   const videoItems =  props.videos.map((video, etag) => {
        return <VideoListItem key={video.etag} video={video}/>
    })
    return (
        <div>
            <ul className='col-md-4 list-group'>
         {videoItems}
            </ul>
        </div>
    );
};

export default VideoList;