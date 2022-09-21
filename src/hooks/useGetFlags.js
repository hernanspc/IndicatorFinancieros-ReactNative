import React, { useEffect, useRef, useState } from 'react';

export const useGetFlags = () => {

    const getFlags = () => {
        console.log('getFlags ')
    }


    useEffect(() => {
        getFlags();
    }, [])

    return {

    }
}