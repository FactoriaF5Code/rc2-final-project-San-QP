import "../styles/ModalNewSeed.css";
import { IconClose } from "../assets/svg/IconClose";
import { useState } from "react";
import PropTypes from "prop-types";
// import axios from "axios";

export const ModalNewSeed = ({ closeModal }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [newSeedName, setNewSeedName] = useState("");
  const [newSeedDescription, setNewSeedDescription] = useState("");
  const [newSeedOrigin, setNewSeedOrigin] = useState("");
  const [newPickUpDate, setNewPickUpDate] = useState("");
  const [newSeedGeneration, setNewSeedGeneration] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // const handleInput = (event) => {
  //   setPostSeed({ ...postSeed, [event.target.name]: event.target.value });
  // };

  const postSeed = (e) => {
    e.preventDefault();

    const url = "http://localhost:8080/api/seeds";

    console.log("Valor de newPickUpDate:", newPickUpDate);

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: newSeedName,
        origin: newSeedOrigin,
        pick_up_date: newPickUpDate,
        generation: newSeedGeneration,
        description: newSeedDescription,
      }),
    };

    fetch(url, options).then((response) => {
      if (response.ok) {
        setNewSeedName("");
        setNewSeedOrigin("");
        setNewPickUpDate("");
        setNewSeedGeneration("");
        setNewSeedDescription("");
      }
    });
  };

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
          <form onSubmit={postSeed} className="newSeed_Modal_Content_Form">
            <section className="newSeed_Modal_Content_Form_Inputs">
              <input
                type="text"
                placeholder="Nombre de la especie"
                className="seedName"
                onChange={(e) => setNewSeedName(e.target.value)}
              />
              <fieldset className="newSeed_Modal_Content_Form_InputsProps">
                <div className="inputProps_From">
                  <label htmlFor="">¿De dónde vienen tus semillas?</label>

                  <select
                    className="seedFrom"
                    value={selectedOption}
                    onChange={(e) => {
                      handleOptionChange(e);
                      setNewSeedOrigin(e.target.value);
                    }}
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
                        onChange={(e) => {
                          console.log(e.target.value); // Agregar el console.log() aquí
                          setNewPickUpDate(e.target.value);}}
                        
                      />
                    </div>
                    <div className="pickUp_Options_Active">
                      <label htmlFor="">Generación:</label>
                      <input
                        type="number"
                        className="seedGeneration"
                        min="0"
                        onChange={(e) => setNewSeedGeneration(e.target.value)}
                      />
                    </div>
                  </>
                )}
              </fieldset>
              <fieldset className="newSeed_Modal_Content_Form_InputsDetails">
                <label htmlFor="">Más detalles:</label>
                <textarea
                  placeholder="Cantidad de semillas, características de la especie, resistencias a hongos y plagas, consejos de siembra..."
                  onChange={(e) => setNewSeedDescription(e.target.value)}
                ></textarea>
              </fieldset>
            </section>
            <div className="newSeed_Modal_Content_Form_Button">
              <button type="submit" className="fluorButton" id="saveButton">
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
