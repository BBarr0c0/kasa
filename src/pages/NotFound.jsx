import { Link } from 'react-router-dom';
import '../styles/pages/notfound.scss';

const NotFound = () => {
    return (
        <div className="notfound">
            <h1>404</h1>
            <p>Page non trouvée</p>
            <Link to="/">Retour à l'accueil</Link>
        </div>
    );
};

export default NotFound;