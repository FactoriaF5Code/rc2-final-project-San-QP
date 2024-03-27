import "../styles/MainNav.css";
import { Link } from 'react-router-dom';

export const BackHomeLink = () => {
  return (
     <ul className="mainNav">
        <li>
          <Link
            to="/panel"
            className="mainNav_link"
            style={{ color: "var(--color-dark-green)" }}
          >
            VOLVER A INICIO
          </Link>
        </li>
      </ul>
  )
}
