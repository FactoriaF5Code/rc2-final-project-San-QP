import { Link } from "react-router-dom";
import { Menu } from "../../components/Menu/Menu";
import { BackHomeLink } from "../../components/BackHomeLink";
import { AdvertCard } from "../../components/AdvertCard/AdvertCard";
import { AdvertPage } from "../AdvertPage/AdvertPage";
// import { AdvertsService } from "../../services/AdvertsService";
import { AdvertsContext } from "../../middleware/context/AdvertsContext";
import "../MiHuerto/MiHuerto.css";
import "./Comunidad.css";
import { useEffect, useContext, useState } from "react";

export const Comunidad = () => {
  const {adverts, showAdverts, setAdverts} = useContext(AdvertsContext);

  useEffect(() => {
    showAdverts();
}, [showAdverts]);

  return (
    <>
      <header className="backLink">
        <BackHomeLink />
      </header>
      <main className="comunidadAppio">
        <section className="comunidadAppio_logo">
          <Link to="/comunidad">
            <img
              src="/ComunidadAppio.svg"
              alt="Comunidad Appio"
              style={{ minWidth: "30rem" }}
            />
          </Link>
        </section>
        <section className="adverts">
          {adverts &&
            adverts.map((advert, index) => (
              <AdvertCard key={index} advert={advert} />
            ))}
        </section>
        <section>
      </section>
      </main>
      <Menu />
    </>
  );
};
