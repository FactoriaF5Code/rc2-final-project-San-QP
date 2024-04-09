import "../styles/MisSemillas.css";
import PropTypes from "prop-types";

export const TableSeeds = ({ dataSeeds, noResults, searchTerm, deleteSeed }) => {
  const reversedDataSeeds = [...dataSeeds].reverse();

  return (
    <div className="seeds">
      MIS SEMILLAS
      {noResults && <p>No se encuentran resultados para la búsqueda &quot;{searchTerm}&quot;.</p>}
      {!noResults && <div className="seedsTable">
        {reversedDataSeeds &&
          reversedDataSeeds.map((seed, index) => (
            <ul className="seedsRow" key={index}>
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
                <li onClick={(e) => deleteSeed(e, seed.id)}>Borrar</li>
                <li >Modificar</li>
                <li>Ver</li>
              </ul>
            </ul>
          ))}
      </div>}
    </div>
  );
};

TableSeeds.propTypes = {
  dataSeeds: PropTypes.arrayOf(PropTypes.object).isRequired,
};
