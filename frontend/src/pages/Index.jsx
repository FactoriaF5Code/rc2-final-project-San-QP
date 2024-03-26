import { MainNav } from "../components/MainNav";
import "../styles/Index.css";

export const Index = () => {
  return (
    <>
      <header>
        <MainNav />
      </header>
      <main className="index">
        <div className="indexContent">
            <img
            src="../../public/AppioLogo.svg"
            alt="Appio Logo Soberanía Alimentaria"
            />
            <a href="#">INICIAR SESIÓN</a>
        </div>
      </main>
    </>
  );
};
