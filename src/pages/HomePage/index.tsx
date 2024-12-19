import { Footer } from '@modules/Footer';
import { Header } from '@modules/Header';
import { Offers } from '@modules/Offers';
import { Poster } from '@modules/Poster';
import { Summary } from '@modules/Summary';

export const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <Poster />
      <Offers />
      <Summary />
      <Footer />
    </div>
  );
};
