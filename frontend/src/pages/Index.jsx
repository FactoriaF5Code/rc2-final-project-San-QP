import { MainNav } from "../components/MainNav";
import "../styles/Index.css";
import { Link } from "react-router-dom";

export const Index = () => {
  return (
    <>
      {/* <header className="mainHeader">
        <MainNav textColor='var(--color-light)' backgroundColor="var(--color-light)"/>
      </header> */}
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
