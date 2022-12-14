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
            let arr = [];

            if (typeOfBussines.indexOf(value.name) === -1) { //esto va caer en 12 meses
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
                amount: arrAmount,
            }
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