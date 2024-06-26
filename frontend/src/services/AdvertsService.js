import axios from 'axios';

export class AdvertsService {
    async showAdverts() {
        const url = "http://localhost:8080/api/adverts";
        try {
            const response = await axios.get(url);
            console.log('Datos de la respuesta a api/adverts', response.data);
            return response.data;
        } catch (error) {
            throw new Error(`Error fetching adverts: ${error.message}`);
        }
    }

    async showSingleAdvert(advertId) {
        const url = `http://localhost:8080/api/adverts/${advertId}`;
        try {
            const response = await axios.get(url);
            console.log(`Datos de advert con ID ${advertId}:`, response.data);
            return response.data;
        } catch (error) {
            throw new Error(`Error fetching advert with ID ${advertId}: ${error.message}`);
        }
    }

}