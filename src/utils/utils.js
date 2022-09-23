
import axios from 'axios';
import { BASE_URL, APY_KEY } from "@env"
import { formatUSD, restardias, selectedMoths } from './functions';
import { setDataGraph } from '../features/flags/flags';

export const fetchDataGraph = async ({ name, id }) => {

    let actuallyDate = new Date();
    console.log('dia hoy ', actuallyDate)
    let yearAct = actuallyDate.getFullYear();
    let monthAct = actuallyDate.getMonth() + 1;
    let dayAct = actuallyDate.getDate();
    if ((monthAct) < 10) {
        monthAct = '0' + monthAct;
    }
    if (dayAct < 10) {
        dayAct = '0' + dayAct;
    }

    const lastTenDays = restardias(10);
    const partsLastDays = lastTenDays.split("-");
    const lastTenDay = partsLastDays[2];
    const lastTenMonth = partsLastDays[1];
    const lastTenYear = partsLastDays[0];

    const typeOfBussines = ['dolar', 'euro', 'uf'];
    if (typeOfBussines.indexOf(name) === -1) {
        console.log('12 meeses antes...')
        // const { data } = await axios.get(`${BASE_URL}recursos_api/${name}/posteriores/${yearLast}/${dayAct}?apikey=${APY_KEY}&formato=json`)
        const { data } = await axios.get(`${BASE_URL}recursos_api/${name}/posteriores/2021/09?apikey=${APY_KEY}&formato=json`)
        console.log('data[id] ', data[id])
        return data[id]
    } else {
        console.log('10 dias antes...')
        const { data } = await axios.get(`${BASE_URL}recursos_api/${name}/periodo/${yearAct}/${monthAct}/dias_i/${lastTenDay}/${lastTenYear}/${lastTenMonth}/dias_f/22?apikey=${APY_KEY}&formato=json`)
        // const { data } = await axios.get(`${BASE_URL}recursos_api/${name}/periodo/2022/09/dias_i/12/2022/09/dias_f/22?apikey=${APY_KEY}&formato=json`)
        console.log('data[id] ', data[id])
        return data[id]
    }

};