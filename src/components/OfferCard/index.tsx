import './OfferCard.scss';
type OfferCardType = {
  title: string;
  subtitle: string;
  handler: () => void;
};
export const OfferCard = ({ title, subtitle, handler }: OfferCardType) => {
  const Title = <h1 className="offer-card__title">{title}</h1>;
  const SubTitle = <h2 className="offer-card__subtitle">{subtitle}</h2>;
  const LearnMoreButton = (
    <button className="offer-card__button" onClick={handler}>
      Learn more
    </button>
  );

  return (
    <div className="offer-card">
      {Title}
      {SubTitle}
      {LearnMoreButton}
    </div>
  );
};
