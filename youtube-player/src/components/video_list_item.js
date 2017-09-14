import React from 'react';

// es6 syntax: {video} takes the param and declares a new variable with same name
const VideoListItem = ({video, onVideoSelect}) => {
	const imageUrl = video.snippet.thumbnails.default.url;
	return (
		<li onClick={() => onVideoSelect(video)} className="list-group-item">
			<div className="video-list media">
				<div className="d-flex mr-3">
					<img className="media-object" src={imageUrl} />
				</div>

				<div className="media-body">
					<h5>{video.snippet.title}</h5>
					<p>By: {video.snippet.channelTitle}</p>
					<p>{video.snippet.description}</p>
				</div>
			</div>
		</li>
	);
};

export default VideoListItem;