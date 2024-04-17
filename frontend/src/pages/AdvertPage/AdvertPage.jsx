import "../MiHuerto/MiHuerto.css";
import "../Comunidad/Comunidad.css";
import "./AdvertPage.css";
import { BackHomeLink } from "../../components/BackHomeLink";
import { Menu } from "../../components/Menu/Menu";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { AdvertsService } from "../../services/AdvertsService";


export const AdvertPage = () => {
    const navigate = useNavigate();
    const [dataSingleAdvert, setSingleAdvert] = useState([])
  
    const contactUser = () => {
        navigate("/wait-for-it");
    }

    useEffect(() => {
        const fetchDataAdvert = async () => {
          try {
            const advertsService = new AdvertsService();
            const advertData = await advertsService.showAdverts();
            setSingleAdvert(advertData);
          } catch (error) {
            console.log("Error fetching adverts:", error);
          }
        };
    
        fetchDataAdvert();
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
        <section className="singleAdvert">
          <div className="singleAdvertImg">
            <img src="/semillas.jpg" alt="" />
          </div>
          <div className="singleAdvertInfo">
            <div>
              <h2>Tomate raft</h2>
              <p className="singleAdvertDetails">ORIGEN DE LAS SEMILLAS:</p>
              <p className="singleAdvertDescription">Descripción</p>
            </div>
            <div>
              <p className="singleAdvertDetails">USUARIO: </p>
              <button className="fluorButton" onClick={contactUser}>CONTACTAR</button>
            </div>
          </div>
        </section>
      </main>
      <Menu />
    </>
  );
};
