import { createContext, useState } from 'react';
import { SeedsService } from '../../services/SeedsService';

const SeedsContext = createContext();

export const SeedsProvider = ({ children }) => {
    const [seeds, setSeeds] = useState([]);

    const seedsService = new SeedsService();

    const showSeeds = async () => {
        try {
            const data = await seedsService.showSeeds();
            console.log("Datos de la respuesta en context:", data)
            setSeeds(data);
        } catch (error) {
            console.error("Error al obtener los datos", error);
        }
    };

    const deleteSeed = async (id) => {
        try {
            await seedsService.deleteSeed(id);
            showSeeds();
        } catch (error) {
            console.error("Error al eliminar la semilla", error);
        }
    }

    const value = {
        seeds,
        showSeeds,
        setSeeds,
        deleteSeed,
    };

    return (
        <SeedsContext.Provider value={value}>
            { children }
        </SeedsContext.Provider>
    );
};

export { SeedsContext };
