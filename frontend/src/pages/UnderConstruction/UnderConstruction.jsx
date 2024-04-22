import { Link } from "react-router-dom";
import "./UnderConstruction.css";
import { IconPlants } from "../../assets/svg/IconPlants";

export const UnderConstruction = () => {
  return (
    <>
      <main className="inProgress">
      <img src="/AppioLogoSimpleWhite.svg" alt="Logo Appio" />
        <div className="inProgressContent">
          <div className="inProgressIcon">
          <IconPlants />
          </div>
          <h1>PÁGINA GERMINANDO...</h1>
          <p>
            Ten paciencia, <br /> en breve estará disponible.
          </p>
          <Link to="/panel">VOLVER</Link>
        </div>
      </main>
    </>
  );
};
