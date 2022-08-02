import React from "react";
import Logo from '../../assets/images/favicon.png'

export default function Footer() {

    const background = "#508950"
    return (
        <div class="flex items-center justify-center w-screen text-s bottom-0 md:h-40 text-white tracking-wide h-fit" style={{background}} >
            <div class="flex flex-col-reverse items-center md:flex-row justify-center md:justify-around md:w-3/5">
                <img src={Logo} alt="Logo" class="h-28 pb-2 md:pb-0" />
                <div class="p-10">Copyright©fenyofa-kerteszet.hu</div>
                <tr class="flex flex-col items-center pt-3">
                    <td>Spolár Attila</td>
                    <td>8840</td>
                    <td>Csurgó</td>
                    <td>József A. utca 7</td>
                    <td>Tel: +36 30 336 08 58</td>
                    <td>Email: spolarattila2@citromail.hu</td>
                </tr>
            </div>
        </div>
    )
}