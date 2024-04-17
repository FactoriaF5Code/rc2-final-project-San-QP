import "../MiHuerto/MiHuerto.css";
import "../Comunidad/Comunidad.css";
import "./AdvertPage.css";
import { BackHomeLink } from "../../components/BackHomeLink";
import { Menu } from "../../components/Menu/Menu";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
// import { AdvertsService } from "../../services/AdvertsService";
import { AdvertsContext } from "../../middleware/context/AdvertsContext";


export const AdvertPage = () => {
    const { advertId } = useParams();
    const navigate = useNavigate();
    const { adverts } = useContext(AdvertsContext);
    const [seedName, setSeedName] = useState("");
    const [seedDescription, setSeedDescription] = useState("");
    const [seedOrigin, setSeedOrigin] = useState("");
    const [seedUser, setSeedUser] = useState("");

    useEffect(() => {
        const advert = adverts.find((advert) => advert.id === Number(advertId));
        if (advert) {
            setSeedName(advert.seed.name);
            setSeedOrigin(advert.seed.origin);
            setSeedDescription(advert.advert_description);
            setSeedUser(advert.user.name);
        }
    }, [advertId, adverts]);
  
    const contactUser = () => {
        navigate("/wait-for-it");
    }

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
        <section className="singleAdvert">
          <div className="singleAdvertImg">
            <img src="/semillas.jpg" alt="" />
          </div>
          <div className="singleAdvertInfo">
            <div>
              <h2>{seedName}</h2>
              <p className="singleAdvertDetails">Origen de las semillas: {seedOrigin}</p>
              <p className="singleAdvertDescription">{seedDescription}</p>
            </div>
            <div>
              <p className="singleAdvertDetails">USUARIO: {seedUser}</p>
              <button className="fluorButton" onClick={contactUser}>CONTACTAR</button>
            </div>
          </div>
        </section>
      </main>
      <Menu />
    </>
  );
};
