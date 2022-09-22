import React, { useEffect, useState } from "react";
import axios from 'axios';
import { BASE_URL, APY_KEY } from "@env"
import { fetchDataGraph } from "../utils/utils";
import { flag, selectedMoths } from "../utils/functions";
import { useDispatch, useSelector } from "react-redux";
import { setArrGraph } from "../features/flags/flags";

export const useDataGraph = () => {
    const dispach = useDispatch();

    const { itemSelected } = useSelector(state => state.flags);
    const [dataGraph, setDataGraph] = useState([]);
    const getGraphInfo = async () => {
        const typeOfBussines = ['dolar', 'euro', 'uf'];

        const flagFilter = flag.filter((flag, id) => flag.id === itemSelected.id);

        flagFilter.map(async (value) => {

            const arrayPosts = await fetchDataGraph(value)
            console.log('arrayPosts ', arrayPosts)
            let arr = [];

            if (typeOfBussines.indexOf(value.name) === -1) { //esto va caer en 12 meses
                console.log('es', value.name)
                const addVerticalData = arrayPosts.filter((item) =>
                    item.mes = selectedMoths(item.Fecha.split('-', 2)[1])
                )
                addVerticalData.map((item) => arr.push(item.mes))
            } else {
                const addVerticalData = arrayPosts.filter((item) =>
                    item.day = item.Fecha.split('-', 3)[2]
                )
                addVerticalData.map((item) =>
                    arr.push(item.day)
                )
                console.log('no es')
            }

            const addHorizontalData = arrayPosts.filter((item) => {
                return item.amount = item.Valor.replace(/\./g, '')
            })

            let arrAmount = [];
            addHorizontalData.map((item) =>
                arrAmount.push(item.amount.replace(/,/g, '.'))
            )

            const response = {
                labels: arr,
                // amount: arrAmount,
                amount: ["34013.91", "34108.71", "34122.28", "34135.85", "34149.42"]
            }
            // console.log('response ', arrAmount)
            dispach(setArrGraph(response));
            setDataGraph(arrayPosts)
        })

    }

    useEffect(() => {
        getGraphInfo();
    }, [])

    return {
        getGraphInfo,
        dataGraph
    }
}