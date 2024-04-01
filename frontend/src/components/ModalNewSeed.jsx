import "../styles/ModalNewSeed.css";
import { IconClose } from "../assets/svg/IconClose";
import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export const ModalNewSeed = ({ closeModal }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [postSeed, setPostSeed] = useState({
    name: "",
    origin: "",
    pickUpDate: "",
    generation: "",
    description: "",
  });

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleInput = (event) => {
    setPostSeed({ ...postSeed, [event.target.name]: event.target.value });
  };

  function handleSubmit(event) {
    event.preventDefault();

    const data = {
      name: postSeed.name,
      origin: postSeed.origin,
      pickUpDate: postSeed.pickUpDate,
      generation: postSeed.generation,
      description: postSeed.description,
    };

    axios
      .post("http://localhost:8080/api/seeds", data)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }

  return (
    <section className="newSeed">
      <div className="newSeed_Modal">
        <header className="newSeed_Modal_Header">
          <h1>Nueva especie</h1>
          <button className="buttonClose" onClick={closeModal}>
            <IconClose />
          </button>
        </header>
        <main className="newSeed_Modal_Content">
          <form onSubmit={handleSubmit} className="newSeed_Modal_Content_Form">
            <section className="newSeed_Modal_Content_Form_Inputs">
              <input
                type="text"
                placeholder="Nombre de la especie"
                className="seedName"
                onChange={handleInput}
              />
              <fieldset className="newSeed_Modal_Content_Form_InputsProps">
                <div className="inputProps_From">
                  <label htmlFor="">¿De dónde vienen tus semillas?</label>

                  <select
                    className="seedFrom"
                    onChange={(event) => {
                      handleOptionChange(event);
                      handleInput(event);
                    }}
                    value={selectedOption}
                  >
                    <option value="">-- Selecciona el origen --</option>
                    <option value="Recogida">Recogida</option>
                    <option value="Intercambio">Intercambio</option>
                    <option value="Compra">Compra</option>
                  </select>
                </div>
                {selectedOption === "Recogida" && (
                  <>
                    <div className="pickUp_Options_Active">
                      <label htmlFor="">Fecha de recogida:</label>
                      <input
                        type="date"
                        className="seedDate"
                        onChange={handleInput}
                      />
                    </div>
                    <div className="pickUp_Options_Active">
                      <label htmlFor="">Generación:</label>
                      <input
                        type="number"
                        className="seedGeneration"
                        min="0"
                        onChange={handleInput}
                      />
                    </div>
                  </>
                )}
              </fieldset>
              <fieldset className="newSeed_Modal_Content_Form_InputsDetails">
                <label htmlFor="">Más detalles:</label>
                <textarea
                  placeholder="Cantidad de semillas, características de la especie, resistencias a hongos y plagas, consejos de siembra..."
                  onChange={handleInput}
                ></textarea>
              </fieldset>
            </section>
            <div className="newSeed_Modal_Content_Form_Button">
              <button className="fluorButton" id="saveButton">
                GUARDAR
              </button>
            </div>
          </form>
        </main>
      </div>
    </section>
  );
};

ModalNewSeed.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
