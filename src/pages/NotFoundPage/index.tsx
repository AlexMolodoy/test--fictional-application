import { Link } from 'react-router-dom';
import './NotFoundPage.scss';

export const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <h2>Страница не найдена</h2>
      <p>
        К сожалению, страница, которую вы ищете, не существует или была
        перемещена.
      </p>
      <Link to="/" className="back-home-button">
        Вернуться на главную
      </Link>
    </div>
  );
};

export default NotFoundPage;
