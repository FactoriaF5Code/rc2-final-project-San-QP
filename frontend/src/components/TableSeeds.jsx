import "../pages/MisSemillas/MisSemillas.css";
import { useContext } from "react";
import { SeedsContext } from "../middleware/context/SeedsContext";

export const TableSeeds = () => {
  const { seeds, loading, error, deleteSeed } = useContext(SeedsContext);

  const deleteSeedHandler = async (e, id) => {
    e.preventDefault();
    try {
      await deleteSeed(id);
      console.log("Semilla eliminada con éxito.");
    } catch (error) {
      console.error("Error al eliminar la semilla:", error);
    }
  };

  return (
    <div className="seeds">
      MIS SEMILLAS
      {loading && <p>Cargando...</p>}
      {error && <p>Ocurrió un error al cargar los datos de las semillas.</p>}
      {!loading && !error && seeds.length === 0 && (
        <p>No se encontraron semillas.</p>
      )}
      {!loading && !error && seeds.length > 0 && (
        <div className="seedsTable">
          {seeds.slice().reverse().map((seed) => (
            <ul className="seedsRow" key={seed.id}>
              <li className="seedsRow_Name">{seed.name}</li>
              <div className="seedsRow_Props">
                <li className="seedsRow_Props_Item">Origen: {seed.origin}</li>
                {seed.pick_up_date && (
                  <li className="seedsRow_Props_Item" id="pickUp">
                    Fecha de recogida: {seed.formattedPickUpDate}
                  </li>
                )}
                {seed.generation && (
                  <li className="seedsRow_Props_Item" id="generation">
                    Generación: {seed.generation}
                  </li>
                )}
              </div>
              <ul className="seedsRow_Options">
                <li onClick={(e) => deleteSeedHandler(e, seed.id)}>Borrar</li>

                <li>Ver</li>
              </ul>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
};
