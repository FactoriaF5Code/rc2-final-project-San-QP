import { Link } from "react-router-dom";
import { Menu } from "../components/Menu";
import { BackHomeLink } from "../components/BackHomeLink";
import { IconSearch } from "../assets/svg/IconSearch";
import { TableSeeds } from "../components/TableSeeds";
import { ModalNewSeed } from "../components/ModalNewSeed";
import "../styles/MiHuerto.css";
import "../styles/MisSemillas.css";
import { useState, useEffect } from "react";
import axios from "axios";

export const MisSemillas = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataSeeds, setDataSeeds] = useState([]);
  const [needsReload, setNeedsReload] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const getDataFromDatabase = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/seeds");
        console.log("Datos de la respuesta:", response.data);
        setDataSeeds(response.data);
        // setNeedsReload(true);
      } catch (error) {
        console.log("Error al obtener datos:", error);
      }
    };
    getDataFromDatabase();
  }, [needsReload]);

  return (
    <>
      {isModalOpen && (
        <ModalNewSeed
          closeModal={closeModal}
          setNeedsReload={setNeedsReload} />
      )}
      <header className="mainHeader">
        <BackHomeLink />
      </header>
      <main className="panel_MiHuerto">
        <div className="panelContent">
          <section className="panelContent_title">
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
          <section className="seedsMain">
            <div className="seedsOptions">
              <div className="seedsOptions_searchContainer">
                <button type="submit" id="search">
                  <IconSearch />
                </button>
                <input type="search" placeholder={"Buscar en mis semillas"} />
              </div>
              <button className="fluorButton" onClick={openModal}>
                + AÑADIR ESPECIE
              </button>
            </div>
            <TableSeeds dataSeeds={dataSeeds} />
          </section>
        </div>
      </main>
      <Menu />
    </>
  );
};
