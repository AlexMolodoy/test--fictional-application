import { OfferCard } from '@/components/OfferCard';
import { CARDS_CONTENT } from '@/mock';
import './Offers.scss';

export const Offers = () => {
  const Title = <h1 className="offers__title">Offers</h1>;
  const Cards = CARDS_CONTENT.map(({ title, subtitle, handler }) => (
    <OfferCard title={title} subtitle={subtitle} handler={handler} />
  ));
  const CardsContainer = <div className="offers__cards">{Cards}</div>;

  return (
    <div className="offers">
      {Title}
      {CardsContainer}
    </div>
  );
};
