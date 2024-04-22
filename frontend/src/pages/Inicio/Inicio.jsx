import "./Inicio.css";
import { Link } from "react-router-dom";

export const Inicio = () => {
  return (
    <>
      <main className="index">
        <div className="indexContent">
          <img
            src="/AppioLogo.svg"
            alt="Appio Logo Soberanía Alimentaria"
          />
          <Link to="/login">INICIAR SESIÓN</Link>
        </div>
      </main>
    </>
  );
};
