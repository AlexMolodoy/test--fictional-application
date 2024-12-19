import { BUTTON_TEXT_SUMMARY, SUMMARY_TEXT, SUMMARY_TITLE } from '@/mock';
import './Summary.scss';

export const Summary = () => {
  const Title = <h1 className="summary__title">{SUMMARY_TITLE}</h1>;
  const Text = <p className="summary__text">{SUMMARY_TEXT}</p>;
  const SummaryButton = (
    <button className="summary__button">{BUTTON_TEXT_SUMMARY}</button>
  );

  return (
    <div className="summary">
      {Title}
      {Text}
      {SummaryButton}
    </div>
  );
};
