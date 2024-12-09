import { Link } from 'react-router-dom';
import '../styles/header.scss';

const Header = () => {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/about">À Propos</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;