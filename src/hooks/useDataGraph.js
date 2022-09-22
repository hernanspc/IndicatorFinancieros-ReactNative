import React, { useEffect, useState } from "react";
import axios from 'axios';
import { BASE_URL, APY_KEY } from "@env"
import { fetchDataGraph } from "../utils/utils";
import { flag, selectedMoths } from "../utils/functions";
import { useSelector } from "react-redux";

export const useDataGraph = () => {
    const { itemSelected } = useSelector(state => state.flags);
    const [dataGraph, setDataGraph] = useState([]);
    const getGraphInfo = async () => {
        const flagFilter = flag.filter((flag, id) => flag.id === itemSelected.id);

        flagFilter.map(async (value) => {
            const arrayPosts = await fetchDataGraph(value)
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