import { Link } from "react-router-dom";
import { Menu } from "../../components/Menu/Menu";
import { BackHomeLink } from "../../components/BackHomeLink";
import { AdvertCard } from "../../components/AdvertCard/AdvertCard";
import "../MiHuerto/MiHuerto.css";
import "./Comunidad.css";
import { useEffect, useState } from "react";
import axios from "axios";

export const Comunidad = () => {
  const [dataAdverts, setDataAdverts] = useState([]);

  useEffect(() => {
    const getAdvertsFromDatabase = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/adverts");
        console.log("Datos de la respuesta:", response.data);
        setDataAdverts(response.data);
      } catch (error) {
        console.log("Error al obtener datos:", error);
      }
    };
    getAdvertsFromDatabase();
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
