import { createContext, useState } from "react";
import { AdvertsService } from "../../services/AdvertsService";

const AdvertsContext = createContext();

export const AdvertsProvider = ({ children }) => {
  const [adverts, setAdverts] = useState([]);

  const advertsService = new AdvertsService();

  const showAdverts = async () => {
    try {
      const dataAdverts = await advertsService.showAdverts();
      console.log("Datos de la respuesta de adverts en context", dataAdverts);
      setAdverts(dataAdverts);
    } catch (error) {
      console.error("Error al obtener los datos de adverts en context", error);
    }
  };

  const value = {
    adverts,
    showAdverts,
    setAdverts,
  };

  return (
    <AdvertsContext.Provider value={value}>{children}</AdvertsContext.Provider>
  );
};

export { AdvertsContext };
