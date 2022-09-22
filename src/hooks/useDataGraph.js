import React, { useEffect, useState } from "react";
import axios from 'axios';
import { BASE_URL, APY_KEY } from "@env"
import { fetchDataGraph } from "../utils/utils";
import { flag, selectedMoths } from "../utils/functions";
import { useSelector } from "react-redux";

export const useDataGraph = () => {
    const { itemSelected } = useSelector(state => state.flags);
    //TODO:  dólar, euro y la UF 10 ULTIMOS DIAS

    //TODO:  IPC y la UTM 12 ULTIMOS MESES

    const getGraphInfo = async () => {
        // const { data: result } = await fetchDataGraph(itemSelected?.name)
        const flagFilter = flag.filter((flag, id) => flag.id === itemSelected.id);

        let allRealPosts = [];
        const getGraphPromises = flagFilter.map(async (value) => {
            const { data } = await fetchDataGraph(value.name)
            const arrayPosts = data[value?.id]
            console.log('Real ', arrayPosts)
            // console.log('xxx', Object.values(arrayPosts))


            // const newArray = arrayPosts.map((value) => {
            //     const fecha = value.Fecha;
            //     const mes = fecha.split('-', 2)[1];
            //     value.mes = selectedMoths(mes);
            //     console.log('val ', value)
            //     // delete value.Valor;
            //     // const fecha = Object.values(value);

            //     return value
            // })

            // console.log('asa ', newArray)

            // const newww = newArray.map((e) => (
            //     console.log('e ', e)
            //     // { ...e, e }
            //     // { ...e, imagenPublicacion: `https://res.cloudinary.com/dd0myqhyb/image/upload/v1662351177/OnlyPost/post/post1.jpg` }
            // ));
            // console.log('newww ', newww)
            // return arrayPosts
        })

        // const allPosts = await Promise.all(getGraphPromises)
        // allPosts.map((post) => {
        //     // console.log('post ', post)
        //     // allRealPosts.push(...post)
        // })
        // console.log('allRealPosts ', allRealPosts)


    }



    useEffect(() => {
    }, [])

    return {
        getGraphInfo,
    }
}