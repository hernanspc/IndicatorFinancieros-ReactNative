
import axios from 'axios';
import { BASE_URL, APY_KEY } from "@env"

export const fetchDataGraph = async (name) => {
    const typeOfBussines = ['dolar', 'euro', 'uf'];
    if (typeOfBussines.indexOf(name) === -1) {
        console.log('12 meses')
        const res = await axios.get(`${BASE_URL}recursos_api/${name}/posteriores/2021/09?apikey=${APY_KEY}&formato=json`)

        const response = {
            labels: ["Ener", "Febrero"],
            info: res?.data,
        }
        return response
    } else {
        console.log('10 dias')

        const res = await axios.get(`${BASE_URL}recursos_api/${name}/periodo/2022/09/dias_i/12/2022/09/dias_f/22?apikey=${APY_KEY}&formato=json`)

        return res
    }

    // return await axios.get(`${BASE_URL}`);
};