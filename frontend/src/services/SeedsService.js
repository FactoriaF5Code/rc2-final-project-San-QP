import axios from "axios";

export class SeedsService {

    async showSeeds() {
        const url = "http://localhost:8080/api/seeds";
        try {
            const response = await axios.get(url);
            console.log('Datos de la respuesta a api/seeds', response.data);
            return response.data;
        } catch (error) {
            throw new Error(`Error fetching seeds: ${error.message}`);
        }
    }

    async deleteSeed(id) {
        try {
            const response = await axios.delete(`http://localhost:8080/api/seeds/${id}`);
            console.log("Eliminada con éxito semilla con id:", response.id);
        } catch (error) {
            console.error("Error al eliminar la semilla:", error)
        }
    }

    async createSeed(seedData) {
        const url = "http://localhost:8080/api/seeds";
        try {
            const response = await axios.post(url, seedData);
            if (response.status === 201) {
                return response.data;
            } else {
                throw new Error("Error al crear la semilla. Estado de respuesta: " + response.status);
            }
        } catch (error) {
            throw new Error("Error al enviar la solicitud: " + error.message);
        }
    }
}
