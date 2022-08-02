import React from "react";
import StartpageImg from "../../assets/images/startpage_pic.jpg"

export default function Startpage() {

    return (
       <div class="flex justify-center items-start">
          <div class="flex flex-col items-center md:h-2/3 md:w-2/3">
            <p class="p-6 bg-gray-100 w-full">
               <strong> 
                  Üdvözöljük a fenyőfa kertészetben! <br />

                  Fenyőfák széles választéka <br />

                  Keressen bizalommal! <br />

                  Spolár Attila
               </strong>
            </p>
            <img src={StartpageImg} alt="startpage pinetree" class="" />
          </div>
       </div>
    )
}