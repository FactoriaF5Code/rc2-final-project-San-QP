// import { MainNav } from "../components/MainNav";
import { Menu } from "../../components/Menu/Menu";
import { ShortCalendar } from "../../components/ShortCalendar/ShortCalendar";
import "./Panel.css";

export const Panel = () => {
  return (
    <>
      <Menu />
      <main className="panel">
        <div className="panelContent">
          <div className="panelContent_title">
            <img src="/AppioLogoSimple.svg" alt="Logo Appio" />
            <p>
              Da tus primeros pasos hacia la autosuficiencia y la soberanía
              alimentaria, impulsando un mundo más justo y sostenible.
            </p>
          </div>
          <ShortCalendar />
        </div>
      </main>
    </>
  );
};
