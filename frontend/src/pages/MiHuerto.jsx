import { Link } from "react-router-dom";
import { Menu } from "../components/Menu";
import "../styles/MiHuerto.css";

export const MiHuerto = () => {
  return (
    <>
      <header>
        <Link to="/panel">VOLVER A INICIO</Link>
      </header>
      <main className="panel_MiHuerto">
        <div className="panelContent">
          <section className="panelContent_title">
            <img
              src="../../public/MiHuertoLogo.svg"
              alt="Logo Appio"
              style={{ minWidth: "30rem" }}
            />
            <p>
              Mantén tu huerto organizado guardando un registro de tu biblioteca
              de semillas y tus cultivos.
            </p>
          </section>
          <section className="panel_MiHuerto_buttons">
            <div>
              <img src="../../public/mis-cultivos.jpg" alt="" />
              <a>MIS SEMILLAS</a>
            </div>
            <div>
                <img src="../../public/mis-cultivos.jpg" alt="" />
              <a>MIS CULTIVOS</a>
            </div>
          </section>
          <Menu />
        </div>
      </main>
    </>
  );
};
