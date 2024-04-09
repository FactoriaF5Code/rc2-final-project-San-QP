import { Link } from "react-router-dom";
import { Menu } from "../components/Menu";
import { BackHomeLink } from "../components/BackHomeLink";
import "../styles/MiHuerto.css";

export const MiHuerto = () => {
  return (
    <>
      <header className="backLink">
        <BackHomeLink />
      </header>
      <main className="panel_MiHuerto">
        {/* <div className="panelContent_MiHuerto"> */}
        <section className="panelContent_title_MiHuerto">
          <Link to="/mi-huerto">
            <img
              src="/MiHuertoLogo.svg"
              alt="Logo Appio"
              style={{ minWidth: "30rem" }}
            />
          </Link>
          <p>
            Mantén tu huerto organizado guardando un registro de tu biblioteca
            de semillas y tus cultivos.
          </p>
        </section>
        <section className="panel_MiHuerto_buttons">
          <div className="fondo_semillas">
            <Link to="mis-semillas">
              <img src="/semillas.jpg" alt="" />
              <p>MIS SEMILLAS</p>
            </Link>
            <Link to="#">
              <img src="/mis-cultivos.jpg" alt="" />
              <p>MIS CULTIVOS</p>
            </Link>
          </div>
        </section>
        {/* </div> */}
      </main>
      <Menu />
    </>
  );
};
