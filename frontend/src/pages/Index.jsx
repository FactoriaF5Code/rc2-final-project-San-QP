import "../styles/Index.css";
import { Link } from "react-router-dom";

export const Index = () => {
  return (
    <>
      <main className="index">
        <div className="indexContent">
          <img
            src="/AppioLogo.svg"
            alt="Appio Logo Soberanía Alimentaria"
          />
          <Link to="panel">INICIAR SESIÓN</Link>
        </div>
      </main>
    </>
  );
};
