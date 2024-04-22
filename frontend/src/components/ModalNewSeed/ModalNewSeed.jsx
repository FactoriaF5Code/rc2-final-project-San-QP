import "./ModalNewSeed.css";
import { IconClose } from "../../assets/svg/IconClose";
import { useState, useContext } from "react";
import PropTypes from "prop-types";
import { SeedsContext } from "../../middleware/context/SeedsContext";

export const ModalNewSeed = ({ closeModal, setNeedsReload }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [newSeedName, setNewSeedName] = useState("");
  const [newSeedDescription, setNewSeedDescription] = useState("");
  const [newSeedOrigin, setNewSeedOrigin] = useState("");
  const [newPickUpDate, setNewPickUpDate] = useState("");
  const [newSeedGeneration, setNewSeedGeneration] = useState("");
  const [formNewSeed, setFormNewSeed] = useState(true);
  const [confirmMessage, setConfirmMessage] = useState(false);
  const [error, setError] = useState(false);


  const { createSeed } = useContext(SeedsContext);

  const handleSend = (e) => {
    e.preventDefault();
    if (newSeedName.trim() === "") {
      setError(true);
    } else {
      setError(false);
      postSeed(e);
    }
};

  const hideFormNewSeed = () => {
    setFormNewSeed(false);
  };

  const showConfirmMessage = () => {
    setConfirmMessage(true);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const postSeed = (e) => {
    e.preventDefault();

    const seedData = {
      name: newSeedName,
      origin: newSeedOrigin,
      pick_up_date: newPickUpDate,
      generation: newSeedGeneration,
      description: newSeedDescription,
    };

    try {
      const newSeed = createSeed(seedData);
      console.log("Semilla creada:", newSeed);

      setNewSeedName("");
      setNewSeedOrigin("");
      setNewPickUpDate("");
      setNewSeedGeneration("");
      setNewSeedDescription("");
      hideFormNewSeed();
      showConfirmMessage();
      setNeedsReload(true);
    } catch (error) {
      console.error("Error al crear la semilla:", error.message);
    }
  };

  return (
    <section className="newSeed">
      {confirmMessage && (
        <div className="newSeed_Modal_ConfirmationMessage">
          <header>
            <button className="buttonCloseConfirmation" onClick={closeModal}>
              <IconClose />
            </button>
          </header>
          <div className="confirmationMessage_Content">
            <h1>¡Genial!</h1>
            <h2>ESPECIE AÑADIDA A TUS SEMILLAS</h2>
            <p>
              Recuerda conservar tus semillas secas, en un lugar fresco y
              protegido de la luz. De esta manera conservarás su capacidad de
              germinación el máximo tiempo posible.
            </p>
          </div>
        </div>
      )}
      {formNewSeed && !confirmMessage && (
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
                {error && <p className="errorMessage">* Campo obligatorio</p>}
                <fieldset className="newSeed_Modal_Content_Form_InputsProps">
                  <div className="inputProps_From">
                    <label>¿De dónde vienen tus semillas?</label>
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
                            setNewPickUpDate(e.target.value);
                          }}
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
                <button type="submit" className="fluorButton" id="saveButton" onClick={handleSend}>
                  GUARDAR
                </button>
              </div>
            </form>
          </main>
        </div>
      )}
    </section>
  );
};

ModalNewSeed.propTypes = {
  closeModal: PropTypes.func.isRequired,
  setNeedsReload: PropTypes.func,
};
