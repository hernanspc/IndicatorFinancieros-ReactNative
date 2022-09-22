
export function restardias(dias) {
    let dia = dias;
    let hoy = new Date();
    let diasrestantes = 1000 * 60 * 60 * 24 * dia;
    let resta = hoy.getTime() - diasrestantes;
    let result = new Date(resta);

    return formatDate(result);
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