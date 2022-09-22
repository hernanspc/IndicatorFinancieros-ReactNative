import React, { useEffect, useState } from "react";

export const useDataGraph = () => {
    //TODO:  dólar, euro y la UF 10 ULTIMOS DIAS

    //TODO:  IPC y la UTM 12 ULTIMOS MESES
    const [infoData, setInfoData] = useState([]);

    const getGraphInfo = (value) => {
        console.log('value ', value)
    }

    useEffect(() => {

    }, [])

    return {
        getGraphInfo,
        infoData
    }
}