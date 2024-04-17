import { Link } from "react-router-dom";
import { Menu } from "../../components/Menu/Menu";
import { BackHomeLink } from "../../components/BackHomeLink";
import { AdvertCard } from "../../components/AdvertCard/AdvertCard";
import { AdvertsService } from "../../services/AdvertsService";
import "../MiHuerto/MiHuerto.css";
import "./Comunidad.css";
import { useEffect, useState } from "react";

export const Comunidad = () => {
  const [dataAdverts, setDataAdverts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const advertsService = new AdvertsService();
        const advertsData = await advertsService.showAdverts();
        setDataAdverts(advertsData);
      } catch (error) {
        console.log("Error fetching adverts:", error);
      }
    };

    fetchData();
  }, []);

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
          {dataAdverts &&
            dataAdverts.map((advert, index) => (
              <AdvertCard key={index} advert={advert} />
            ))}
        </section>
      </main>
      <Menu />
    </>
  );
};
