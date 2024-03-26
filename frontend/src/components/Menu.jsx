import "../styles/Panel.css";
import { Link } from 'react-router-dom';

export const Menu = () => {
  return (
    <menu className="panelContent_appioMenu">
      <div className="panelContent_appioMenu_button">
        <Link to="/mi-huerto">Mi huerto</Link>
      </div>
      <div className="panelContent_appioMenu_button">
        <Link to="#">Comunidad Appio</Link>
      </div>
      <div className="panelContent_appioMenu_button">
        <Link to="#">Appiopedia</Link>
      </div>
    </menu>
  );
};
