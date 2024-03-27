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
        <body className="newSeed_Modal_Content">
          <form action="" className="newSeed_Modal_Content_Form">
            <section className="newSeed_Modal_Content_Form_Inputs">
              <input
                type="text"
                placeholder="Nombre de la especie"
                className="seedName"
              />
              <fieldset className="newSeed_Modal_Content_Form_InputsProps">
                <div className="inputProps_From">
                  <label htmlFor="">¿De dónde vienen tus semillas?</label>
                  <input type="text" className="seedFrom" />
                </div>
                <div>
                  <label htmlFor="">Fecha de recogida:</label>
                  <input type="date" className="seedDate" />
                </div>
                <div>
                  <label htmlFor="">Generación:</label>
                  <input type="number" className="seedGeneration" min="0"/>
                </div>
              </fieldset>
              <fieldset className="newSeed_Modal_Content_Form_InputsDetails">
                <label htmlFor="">Más detalles:</label>
                <textarea placeholder="Cantidad de semillas, características de la especie, resistencias a hongos y plagas, consejos de siembra...">
                </textarea>

              </fieldset>
            </section>
            <div className="newSeed_Modal_Content_Form_Button">
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
