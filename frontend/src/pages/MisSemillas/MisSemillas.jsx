import { Link } from "react-router-dom";
import { Menu } from "../../components/Menu/Menu";
import { BackHomeLink } from "../../components/BackHomeLink";
import { IconSearch } from "../../assets/svg/IconSearch";
import { TableSeeds } from "../../components/TableSeeds/TableSeeds";
import { ModalNewSeed } from "../../components/ModalNewSeed/ModalNewSeed";
import { SeedsContext } from "../../middleware/context/SeedsContext";
import "../MiHuerto/MiHuerto.css";
import "./MisSemillas.css";
import { useState, useEffect, useContext } from "react";

export const MisSemillas = () => {
  // eslint-disable-next-line no-unused-vars
  const { seeds, setSeeds, showSeeds } = useContext(SeedsContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [needsReload, setNeedsReload] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    showSeeds();
  }, [needsReload]);

  return (
    <>
      {isModalOpen && (
        <ModalNewSeed
          closeModal={closeModal}
            setNeedsReload={setNeedsReload} />
      )}
      <header className="backLink">
        <BackHomeLink />
      </header>
      <main className="panel_MiHuerto">
        <section className="panelContent_title_MiHuerto">
          <Link to="/mi-huerto">
            <img
              className="logoMiHuerto"
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
            <div className="seedsSearch">
              <div className="seedsOptions_searchContainer">
                <input
                  type="search"
                  placeholder={"Buscar en mis semillas"}
                />
                <button type="submit" id="search">
                  <IconSearch />
                </button>
              </div>
            </div>
            <button className="fluorButton" onClick={openModal}>
              + AÑADIR ESPECIE
            </button>
          </div>
          <TableSeeds />
        </section>
      </main>
      <Menu />
    </>
  );
};
