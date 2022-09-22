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
            name: "dolar"
        }, {
            id: "Euros",
            title: "Euro",
            name: "euro"
        }, {
            id: "IPCs",
            title: "Indice de precios al consumidor",
            name: "ipc"
        }, {
            id: "UFs",
            title: "Unidad de Fomento",
            name: "uf"
        }, {
            id: "UTMs",
            title: "Unidad Tributaria Mensual",
            name: "utm"
        }]

    const dispatch = useDispatch();
    const getListStaticFlags = async (name, id, title) => {
        const { data } = await axios.get(`${BASE_URL}recursos_api/${name}?apikey=${APY_KEY}&formato=json`)
        const response = {
            // ...data,
            title: title,
            data: data[id][0]
        }
        return response
    }

    const getFlags = async () => {
        const flagPromises = flag.map(({ name, id, title }) => {
            return getListStaticFlags(name, id, title)
        })

        let allRealPosts = []
        const allPosts = await Promise.all(flagPromises)
        allPosts.map((item) => {
            // console.log('data ', item)
            allRealPosts.push(...[item])
        })
        setSimpleData(allRealPosts)
        dispatch(setDataFlag(allRealPosts));
        console.log('allPosts ', allPosts)
    }

    useEffect(() => {
        getFlags();
    }, [])

    return {
        simpleData
    }
}