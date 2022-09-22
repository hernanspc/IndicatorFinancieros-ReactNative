
import axios from 'axios';
import { BASE_URL, APY_KEY } from "@env"

export const fetchDataGraph = async (name) => {
    const typeOfBussines = ['dolar', 'euro', 'uf'];
    if (typeOfBussines.indexOf(name) === -1) {
        return await axios.get(`${BASE_URL}recursos_api/${name}/posteriores/2021/09?apikey=${APY_KEY}&formato=json`)
        // console.log('data ', data)
        // const response = {
        //     labels: ["May", "June", "July", "August", "September", "October"],
        //     data: data,
        // } 
    } else {
        return await axios.get(`${BASE_URL}recursos_api/${name}/periodo/2022/09/dias_i/12/2022/09/dias_f/22?apikey=${APY_KEY}&formato=json`)
    }

    // return await axios.get(`${BASE_URL}`);
};