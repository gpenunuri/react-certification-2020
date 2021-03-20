import React from 'react';

import './About.styles.css';

function AboutPage() {

  return (
      <div className="main-content">
        <section className="section-about">
          <h2 className="about__title">Wizetube is a challenge project using the YouTube API.</h2>
          <h3 className="about__description">Designed and coded by <a href="https://gpenunuri.com" rel="noopener noreferrer" target="_blank">Germán Peñuñuri</a> for Wizeline's React Bootcamp </h3>
        </section>
      </div>
  );
}

export default AboutPage;
