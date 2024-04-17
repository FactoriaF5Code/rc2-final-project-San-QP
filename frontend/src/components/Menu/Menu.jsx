import "./Menu.css";
import { Link } from "react-router-dom";
import { IconLettuce } from "../../assets/svg/IconLettuce";
import { IconCommunity } from "../../assets/svg/IconCommunity";
import { IconBook } from "../../assets/svg/IconBook";

export const Menu = () => {
  return (
    <menu className="panelContent_appioMenu">
      <div className="panelContent_appioMenu_button">
        <Link to="/mi-huerto">
          <div className="iconsMenu">
            <IconLettuce />
          </div>
          Mi huerto
        </Link>
      </div>
      <div className="panelContent_appioMenu_button">
        <Link to="/comunidad">
          <div className="iconsMenu">
            <IconCommunity />
          </div>
          Comunidad
        </Link>
      </div>
      <div className="panelContent_appioMenu_button">
        <Link to="/wait-for-it">
          <div className="iconsMenu">
            <IconBook />
          </div>
          Appiopedia
        </Link>
      </div>
    </menu>
  );
};
