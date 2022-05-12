import axios from 'axios';

export default class CurrencyService{
    static async getall(page=1){
        try {
            const response = await axios.get('https://localhost:44323/api/Currency/Currencies/'+ page);
            return response;
        }
        catch (e) {
            console.log(e);
        }
    }

    static async getCurrByCharcode(charcode){
        try{
            const response = await axios.get('https://localhost:44323/api/Currency/Currency/'+ charcode);
            return response;
        } catch (e) {
            console.log(e);
        }
    }
}