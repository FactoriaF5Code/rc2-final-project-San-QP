import { MainNav } from "../components/MainNav";
import { Menu } from "../components/Menu";
import { ShortCalendar } from "../components/ShortCalendar";
import "../styles/Panel.css";

export const Panel = () => {
  return (
    <>
      <header>
        <MainNav
          textColor="var(--color-dark-green)"
          backgroundColor="var(--color-light)"
        />
      </header>
      <main className="panel">
        <div className="panelContent">
          <div className="panelContent_title">
            <img src="../../public/AppioLogoSimple.svg" alt="Logo Appio" />
            <p>
              Da tus primeros pasos hacia la autosuficiencia y la soberanía
              alimentaria, impulsando un mundo más justo y sostenible.
            </p>
          </div>
          <ShortCalendar />
          <Menu />
        </div>
      </main>
    </>
  );
};
