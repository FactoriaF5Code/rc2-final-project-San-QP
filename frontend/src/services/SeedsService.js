import axios from "axios";

export class SeedsService {
    async showSeeds() {
        try {
            const response = await axios.get('http://localhost:8080/api/seeds');
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
}
