import { BASE_URL, APY_KEY } from '@env';

export function restardias(dias) {
    let dia = dias;
    let hoy = new Date();
    let diasrestantes = 1000 * 60 * 60 * 24 * dia;
    let resta = hoy.getTime() - diasrestantes;
    let result = new Date(resta);

    return formatDate(result);
}

export function validarSwitch(param) {
    //RESTAR DIAS A UNA FECHA
    console.log('restardias ', restardias(30))

    switch (param) {
        case 'dolar':
            return `${BASE_URL}recursos_api/${param}/posteriores/2022/08/dias/23?apikey=${APY_KEY}&formato=json`;
        case 'euro':
            return `${BASE_URL}recursos_api/${param}/posteriores/2022/08/dias/23?apikey=${APY_KEY}&formato=json`;

        case 'ipc':
            return `${BASE_URL}recursos_api/${param}/2022?apikey=${APY_KEY}&formato=json`;

        case 'uf':
            return `${BASE_URL}recursos_api/${param}/posteriores/2022/08/dias/23?apikey=${APY_KEY}&formato=json`;

        case 'utm':
            return `${BASE_URL}recursos_api/${param}/2022?apikey=${APY_KEY}&formato=json`;
        default:
            break;
    }
}

export function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}

export function selectedMoths(data) {
    const month = {
        '01': 'Enero',
        '02': 'Febrero',
        '03': 'Marzo',
        '04': 'Abril',
        '05': 'Mayo',
        '06': 'Junio',
        '07': 'Julio',
        '08': 'Agosto',
        '09': 'Septiembre',
        '10': 'Octubre',
        '11': 'Noviembre',
        '12': 'Diciembre',
    };
    return month[data];
};

export const flag = [
    {
        id: "Dolares",
        title: "Dólar",
        description: "Dólar",
        name: "dolar"
    }, {
        id: "Euros",
        title: "Euro",
        description: "Pesos",
        name: "euro"
    }, {
        id: "IPCs",
        title: "Indice de precios al consumidor",
        description: "Porcentaje",
        name: "ipc"
    }, {
        id: "UFs",
        title: "Unidad de Fomento",
        description: "Porcentaje",
        name: "uf"
    }, {
        id: "UTMs",
        title: "Unidad Tributaria Mensual",
        description: "Porcentaje",
        name: "utm"
    }]
