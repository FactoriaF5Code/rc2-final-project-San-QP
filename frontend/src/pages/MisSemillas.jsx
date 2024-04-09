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
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [needsReload, setNeedsReload] = useState(false);
  const [noResults, setNoResults] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSearch = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `http://localhost:8080/api/seeds/${searchTerm}`
      );
      setDataSeeds(response.data);
      setNoResults(response.data.length === 0);
    } catch (error) {
      console.log("Error al realizar la búsqueda:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    handleSearch();
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

  //MÉTODO DELETE
  const deleteSeed = async (e, id) => {
    e.preventDefault();
  
    try {
      const response = await axios.delete(`http://localhost:8080/api/seeds/${id}`);
      if (response.status === 200) {
        console.log("Semilla eliminada con éxito.");
        window.location.reload();
      } else {
        console.error("Error al eliminar la semilla. Estado de respuesta:", response.status);
      }
    } catch (error) {
      console.error("Error al eliminar la semilla:", error);
    }
  };
  

  return (
    <>
      {isModalOpen && (
        <ModalNewSeed closeModal={closeModal} setNeedsReload={setNeedsReload} />
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
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    handleChange(e);
                  }}
                />
                <button type="submit" id="search" onClick={handleSearch}>
                  <IconSearch />
                </button>
              </div>
            </div>
            <button className="fluorButton" onClick={openModal}>
              + AÑADIR ESPECIE
            </button>
          </div>
          <TableSeeds
            dataSeeds={dataSeeds}
            noResults={noResults}
            searchTerm={searchTerm}
            deleteSeed={deleteSeed}
          />
        </section>
      </main>
      <Menu />
    </>
  );
};
