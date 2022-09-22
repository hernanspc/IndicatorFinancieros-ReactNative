import React, { useEffect, useState } from "react";
import axios from 'axios';
import { BASE_URL, APY_KEY } from "@env"
import { fetchDataGraph } from "../utils/utils";
import { flag } from "../utils/functions";
import { useDispatch, useSelector } from "react-redux";
import { setArrGraph } from "../features/flags/flags";

export const useDataGraph = () => {
    const dispach = useDispatch();

    const { itemSelected } = useSelector(state => state.flags);
    const [dataGraph, setDataGraph] = useState([]);
    const getGraphInfo = async () => {
        const flagFilter = flag.filter((flag, id) => flag.id === itemSelected.id);

        flagFilter.map(async (value) => {
            const arrayPosts = await fetchDataGraph(value)
            dispach(setArrGraph(arrayPosts));

            setDataGraph(arrayPosts)
            return arrayPosts
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