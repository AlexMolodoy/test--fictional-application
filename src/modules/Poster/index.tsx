import EARTH from '@assets/EARTH.png';
import './Poster.scss';
export const Poster = () => {
  const Title = (
    <h1 className="text__title">
      Discover the vast expanses of{' '}
      <span className="text__title-last-word">space</span>
    </h1>
  );
  const SubTitle = (
    <h2 className="text__subtitle">
      Where the possibilities are{' '}
      <span className="text__subtitle-last-word">endless!</span>
    </h2>
  );
  const LearnMoreButton = <button className="text__button">Learn more</button>;
  return (
    <div className="poster">
      <div className="poster__earth earth">
        <img src={EARTH} alt="Earth" className="earth__image" />
      </div>

      <div className="poster__text-container text">
        {Title}
        {SubTitle}
        {LearnMoreButton}
      </div>
    </div>
  );
};
