import React from 'react';

// es6 syntax: {video} takes the param and declares a new variable with same name
const VideoDetail = ({video}) => {
	if(!video) {
		return <div>Loading...</div>;
	}

	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;

	return (
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url}></iframe>
			</div>
			<div className="details">
				<h4>{video.snippet.title}</h4>
				<h6>By: {video.snippet.channelTitle}</h6>
				<p>{video.snippet.description}</p>
			</div>
		</div>
	);
};

export default VideoDetail;