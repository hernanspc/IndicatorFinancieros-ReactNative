import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setDataFlag } from '../features/flags/flags';
import { BASE_URL, APY_KEY } from "@env"

export const useGetFlags = () => {
    const [simpleData, setSimpleData] = useState([]);

    const flag = [
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

    const dispatch = useDispatch();
    const getListStaticFlags = async ({ description, id, name, title }) => {
        const { data } = await axios.get(`${BASE_URL}recursos_api/${name}?apikey=${APY_KEY}&formato=json`)
        const response = {
            // ...data,
            id: id,
            title: title,
            description: description,
            name: name,
            data: data[id][0]
        }
        return response
    }

    const getFlags = async () => {
        const flagPromises = flag.map((value) => {
            return getListStaticFlags(value)
        })

        let allRealPosts = []
        const allPosts = await Promise.all(flagPromises)
        allPosts.map((item) => {
            allRealPosts.push(...[item])
        })
        setSimpleData(allRealPosts)
        dispatch(setDataFlag(allRealPosts));
        // console.log('allPosts ', allPosts)
    }

    useEffect(() => {
        getFlags();
    }, [])

    return {
        simpleData
    }
}