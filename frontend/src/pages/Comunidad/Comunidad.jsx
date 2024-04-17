import { Link } from "react-router-dom";
import { Menu } from "../../components/Menu/Menu";
import { BackHomeLink } from "../../components/BackHomeLink";
import { AdvertCard } from "../../components/AdvertCard/AdvertCard";
import "../MiHuerto/MiHuerto.css";
import "./Comunidad.css"

export const Comunidad = () => {
  return (
    <>
      <header className="backLink">
        <BackHomeLink />
      </header>
      <main className="comunidadAppio">
        <section className="comunidadAppio_logo">
          <Link to="/mi-huerto">
            <img
              src="/ComunidadAppio.svg"
              alt="Comunidad Appio"
              style={{ minWidth: "30rem" }}
            />
          </Link>
        </section>
        <section className="adverts">
            <AdvertCard />
            <AdvertCard />
            <AdvertCard />
            <AdvertCard />
            <AdvertCard />
            <AdvertCard />
            <AdvertCard />
            <AdvertCard />
            <AdvertCard />
            <AdvertCard />
        </section>
      </main>
      <Menu />
    </>
  );
};
