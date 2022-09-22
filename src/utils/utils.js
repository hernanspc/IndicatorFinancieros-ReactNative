
import axios from 'axios';
import { BASE_URL, APY_KEY } from "@env"
import { formatUSD, selectedMoths } from './functions';
import { setDataGraph } from '../features/flags/flags';

export const fetchDataGraph = async ({ name, id }) => {
    const typeOfBussines = ['dolar', 'euro', 'uf'];
    if (typeOfBussines.indexOf(name) === -1) {
        const { data } = await axios.get(`${BASE_URL}recursos_api/${name}/posteriores/2021/09?apikey=${APY_KEY}&formato=json`)
        const addVerticalData = data[id].filter((item) =>
            item.mes = selectedMoths(item.Fecha.split('-', 2)[1])
        )
        let arr = [];
        addVerticalData.map((item) => arr.push(item.mes))
        const response = {
            labels: arr,
            info: data[id],
        }
        return response
    } else {
        console.log('10 dias')
        const { data } = await axios.get(`${BASE_URL}recursos_api/${name}/periodo/2022/09/dias_i/12/2022/09/dias_f/22?apikey=${APY_KEY}&formato=json`)
        const addVerticalData = data[id].filter((item) =>
            item.day = item.Fecha.split('-', 3)[2]
        )
        const addHorizontalData = data[id].filter((item) =>
            item.amount = item.Valor.replace(/\./g, '')
        )

        let arr = [];
        addVerticalData.map((item) =>
            arr.push(item.day)
        )

        let arrAmount = [];
        addHorizontalData.map((item) =>
            arrAmount.push(item.amount.replace(/,/g, '.'))
        )
        // console.log('arrAmount ', arrAmount)
        const response = {
            labels: arr,
            amount: arrAmount,
            info: data[id],
        }
        return response
    }

};