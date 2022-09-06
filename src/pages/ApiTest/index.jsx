import React from "react";
import { useState, useEffect } from 'react';
 

export default function Api() {

    const [message, SetMessage] = useState('');

    useEffect(() => {

        async function fetchApi() {
            const res = await fetch('http://localhost:9000/images')
            const text = await res.json()
            SetMessage(text)
        }

        fetchApi()
        .catch(console.error)

    }, []);

    return (
        <div>
            <span>{message}</span>
        </div>
    )
}