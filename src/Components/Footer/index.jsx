import React from "react";
import { useState } from "react";
import Logo from '../../assets/images/favicon.png'

export default function Footer() {

    const [showContact, setShowContact] = useState('hidden') 

    const changeContactState = () => {
        setShowContact('')
    }

    const handelClose = () => {
        setShowContact('hidden')
    }

    const background = "#508950"
    return (
        <div class="flex items-center justify-center w-screen text-base bottom-0 text-white tracking-wide h-fit" style={{background}} >
            <div class="flex flex-col-reverse items-center md:flex-row justify-center md:justify-around md:w-3/5">
                <img src={Logo} alt="Logo" class="h-28 pb-2 md:pb-0" />
                <div class="p-6">Copyright©fenyofa-kerteszet.hu</div>
                <div class="flex flex-col items-center py-3 md:text-sm">
                    <div>Spolár Attila</div>
                    <div>8840</div>
                    <div>Csurgó</div>
                    <div>Eötvös utca 20.</div>
                    {showContact === 'hidden' ? 
                    <button onClick={changeContactState} class="text-sm text-green-600 hover:text-green-300">...mutasd az elérhetőségeket</button>
                    :
                    <>
                    <div class={`${showContact}`}>+36 30 336 08 58</div>
                    <div class={`${showContact} `}>spolarattila2@citromail.hu</div>
                    <button onClick={handelClose} class="text-sm text-red-500 hover:text-red-300">Elrejtés...</button>
                    </>
                    }
                </div>
            </div>
        </div>
    )
}