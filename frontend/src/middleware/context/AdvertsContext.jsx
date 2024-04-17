import { createContext, useState } from "react";
import { AdvertsService } from "../../services/AdvertsService";

const AdvertsContext = createContext();

export const AdvertsProvider = ({ children }) => {
  const [advert, setAdvert] = useState([]);

  const advertsService = new AdvertsService();

  const showAdverts = async () => {
    try {
      const data = await advertsService.showAdverts();
      console.log("Datos de la respuesta de adverts en context", data);
      setAdvert(data);
    } catch (error) {
      console.error("Error al obtener los datos de adverts en context", error);
    }
  };

  const value = {
    advert,
    showAdverts,
    setAdvert,
  };

  return <AdvertsContext.Provider value={value}></AdvertsContext.Provider>;
};

export { AdvertsContext };
