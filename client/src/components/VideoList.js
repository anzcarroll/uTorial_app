import React, { Component } from 'react';
import VideoListItem from './VideoListItem';

 

class VideoList extends Component {
    componentWillMount() {
        console.log(this.props)
    }
    render() {
        const videoItems =  this.props.videos.map((video) => {
                    return (
                    <VideoListItem 
                    onVideoSelect={this.props.onVideoSelect}
                    key={video.etag} 
                    video={video}/>
                ) })
                return (
                    <div>
                        <ul className='col-md-4 list-group'>
                     {videoItems}
                        </ul>
                    </div>
                );
            }
        }

        VideoList.defaultProps = {
            videos: []
        }

export default VideoList;