import React from 'react';
import { Link } from 'react-router-dom';
import trimString from '../../utils/trimString';
import VideoCardStyles from './VideoCard.styles';

function VideoCard({video}) {
    const {title, description, thumbnails} = video;

  return (
    <VideoCardStyles className="video-card" image={thumbnails.medium.url}>
        <figure className="video-card__figure"></figure>
        <div className="video-card__text-box">
            <h3 className="video-card__title">{trimString(title, 47)}</h3>
            <p className="video-card__description">
            {description? trimString(description, 140) : ''}
            </p>
            <Link to="/" className="video-card__link">
                <button className="video-card__button" onClick={()=> console.log(title, description, thumbnails)}>View</button>
            </Link>
        </div>
    </VideoCardStyles>
  )
}

export default VideoCard;
