import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

export const useGetFlags = () => {
    const [simpleData, setSimpleData] = useState([]);
    const flag = ["dolar", "euro", "ipc", "uf", "utm"]

    const getListStaticFlags = async (id) => {
        return await axios.get(`https://api.cmfchile.cl/api-sbifv3/recursos_api/${id}?apikey=bf6b491ec46caf655a1204c927f559580679f4c4&formato=json`)
    }

    const getFlags = async () => {

        const flagPromises = flag.map((value) => {
            return getListStaticFlags(value)
        })

        let allRealPosts = []
        const allPosts = await Promise.all(flagPromises)
        allPosts.map(({ data }) => {
            allRealPosts.push(...[data])
        })
        setSimpleData(allRealPosts)
    }


    useEffect(() => {
        getFlags();
    }, [])

    return {
        simpleData
    }
}