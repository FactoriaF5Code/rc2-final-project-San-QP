import "../styles/ModalNewSeed.css";
import { IconClose } from "../assets/svg/IconClose";

export const ModalNewSeed = () => {
  return (
    <section className="newSeed">
      <div className="newSeed_Modal">
        <header className="newSeed_Modal_Header">
          <h1>Nueva especie</h1>
          <IconClose />
        </header>
        <body className="newSeed_ModalContent">
          <form action="" className="newSeed_ModalContent_Form">
            <input type="text" placeholder="Nombre de la especie" className="seedName" />
            <section className="newSeed_ModalContent_inputs">
              <div>
                <label htmlFor="">¿De dónde vienen tus semillas?</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="">Fecha de recogida:</label>
                <input type="date" />
              </div>
              <div>
                <label htmlFor="">Generación:</label>
                <input type="number" />
              </div>
            </section>
            <div className="moreDetails">
              <label htmlFor="">Más detalles:</label>
              <input
                type="text"
                placeholder="Cantidad de semillas, características de la especie, resistencias a hongos y plagas, consejos de siembra..."
              />
            </div>
            <div className="newSeed_saveButton">
              <button className="fluorButton" id="saveButton">
                GUARDAR
              </button>
            </div>
          </form>
        </body>
      </div>
    </section>
  );
};
