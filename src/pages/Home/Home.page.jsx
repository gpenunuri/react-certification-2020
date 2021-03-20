import React from 'react';

import VideoCard from '../../components/VideoCard';
import {videosMock} from '../../utils/videos-mock';
import './Home.styles.css';

function HomePage() {
  const {items: videos} = videosMock;

  return (
      <div className="main-content">
        <section className="section-cards">
          { videos.map(video => (<VideoCard video={video.snippet} key={video.etag} />)) }
        </section>
      </div>
  );
}

export default HomePage;
