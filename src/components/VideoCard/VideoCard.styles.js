import styled from 'styled-components';

const VideoCardStyles = styled.div`
  background-color: var(--color-light);
  height: 40rem;
  width: 30rem;
  box-shadow: var(--shadow-light);
  transition: box-shadow 1.5s;
  margin: 4rem 2rem;

  &:hover {
    box-shadow: var(--shadow-dark);
  }

  .video-card__figure {
    height: 14.4rem;
    background-color: var(--color-red);
    background-image: url(${(props) => props.image});
    background-size: cover;
  }

  .video-card__text-box {
    padding: 2.4rem 2.4rem;
    height: calc(100% - 14.4rem);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .video-card__title {
    font-size: 1.8rem;
    font-family: 'Futura';
    font-weight: bold;
    margin-bottom: 1.2rem;
  }

  .video-card__description {
    font-size: 1.4rem;
    margin-bottom: 2rem;
    font-family: sans-serif;
  }

  .video-card__link {
  }

  .video-card__button {
    border: none;
    border-radius: 50px;
    color: #fff;
    padding: 1.2rem 4rem;
    background-color: var(--color-red);
  }

  .video-card__button:hover {
    cursor: pointer;
    transform: scale(1.04);
    padding: 1.2rem 4.2rem;
    box-shadow: var(--shadow-light);
  }
`;

export default VideoCardStyles;
