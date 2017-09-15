// import React from 'react';

// const VideoDetail = (props, { video }) => {
//     if (!video) {
//         return <div> Loading... </div>
//     }



//     export default VideoDetail;

    import React, { Component } from 'react';

    class VideoDetail extends Component {
        constructor() {
            super();
            this.state = {
                user_id: '',
                favorites: []
            }
        }

        _handleFavoriteSubmit = (e) => {
            e.preventDefault();
            this.props.addFavorite(this.state.user)
        }
        _handleFavoriteChange = (e) => {
            const newState = { ...this.state };
            newState[e.target.name] = e.target.value;
            this.setState(newState);
        }

        render() {
            if (!this.props.video) {
                        return <div> Loading... </div>
                    }
            const videoId = this.props.video.id.videoId;
            const url = `https://www.youtube.com/embed/${videoId}`;

            return (
                <div className="video-detail col-md-8">
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src={url}></iframe>
                    </div>
                    <div className="details">
                        <div>{this.props.video.snippet.title}</div>
                        <div>{this.props.video.snippet.description}</div>
                        <form method="put" name="favorite" onSubmit={(e) => this.handleFavoriteSubmit(e)}>
                            <button onClick={(e) => this.handleFavoriteChange(e)}>ADD TO FAVORITES</button>
                        </form>
                    </div>
                </div>
            );
        }
    };
    export default VideoDetail;
