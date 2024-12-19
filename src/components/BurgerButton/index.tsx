import './BurgerButton.scss';

const BurgerButton = ({ isOpen, onClick }) => {
  return (
    <button
      className={`burger-button ${isOpen ? 'open' : ''}`}
      onClick={onClick}
    >
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </button>
  );
};

export default BurgerButton;
