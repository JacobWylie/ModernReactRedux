import React from 'react';

// es6 syntax: {video} takes the param and declares a new variable with same name
const VideoListItem = ({video, onVideoSelect}) => {
	const imageUrl = video.snippet.thumbnails.default.url;
	return (
		<li onClick={() => onVideoSelect(video)} className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={imageUrl} />
				</div>

				<div className="media-body">
					<h4>{video.snippet.title}</h4>
					<h6>By: {video.snippet.channelTitle}</h6>
					<p>{video.snippet.description}</p>
				</div>
			</div>
		</li>
	);
};

export default VideoListItem;