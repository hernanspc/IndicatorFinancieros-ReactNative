
import axios from 'axios';
import { BASE_URL, APY_KEY } from "@env"
import { formatUSD, selectedMoths } from './functions';
import { setDataGraph } from '../features/flags/flags';

export const fetchDataGraph = async ({ name, id }) => {
    const typeOfBussines = ['dolar', 'euro', 'uf'];
    if (typeOfBussines.indexOf(name) === -1) {
        const { data } = await axios.get(`${BASE_URL}recursos_api/${name}/posteriores/2021/09?apikey=${APY_KEY}&formato=json`)
        return data[id]
    } else {
        const { data } = await axios.get(`${BASE_URL}recursos_api/${name}/periodo/2022/09/dias_i/12/2022/09/dias_f/22?apikey=${APY_KEY}&formato=json`)
        return data[id]
    }

};