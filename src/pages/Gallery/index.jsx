import React from "react";
import { useState } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import Forrest from '../../assets/images/startpage_pic.jpg';
// import {pinetree} from "@fenyo"  
import TreeCloseUp from '../../assets/images/fir-tree-gc3b098ea8_1920.jpg';
export default function Gallery() {
  

  const [isOpen, setIsOpen] = useState(false);
  const [galleryState, setGalleryState] = useState("closed");
  const [currentPicture, setCurrentPicture] = useState(Forrest)

  function importAll(r) {
    let pictures = {};
    r.keys().map((item, index) => { pictures[item.replace('./', '')] = r(item); });
    return pictures;
  }

  function zoomIn() {
    setIsOpen(true);
    setGalleryState("open")
  }

  function zoomOut() {
    setIsOpen(false);
    setGalleryState("closed")
    setCurrentPicture(Forrest)
  }

  const pictures = importAll(require.context('../../assets/pictures', false, /\.(png|jpe?g|JPG|svg)$/));

  return (
    <div class={`flex items-center justify-center ${galleryState === 'open' ? 'h-full' : 'pb-3'} md:h-screen bg-gray-100`}>
      <img src={TreeCloseUp} alt="Tree" class={`md:w-2/3 ${galleryState === 'open' ? 'hidden' : 'absolute' }`} />
      <div class="flex justify-center items-center md:w-2/4 h-full mt-1 z-10">
        {galleryState === "closed" ? 
          <div class="grid grid-rows-2 grid-cols-2 p-4 shadow-xl shadow-gray-500 cursor-pointer hover:bg-none" onClick={zoomIn}>
          {Object.keys(pictures).slice(0,4).map((picture) => {
            return <img class="md:w-72 md:h-72 w-40 h-40 m-4" alt="pic" src={pictures[picture]} />
          })}
          </div>
          : 
          (
            <div class="w-full flex flex-col">
              <div class="grid top-0 sticky"><span class=" absolute justify-self-end text-xl cursor-pointer w-8 h-8 rounded-full text-gray-300 bg-white justify-center items-center text-center" onClick={zoomOut}>x</span><img src={currentPicture} alt="top pic" class="justify-self-center max-h-fit"/></div>
              <div class="grid md:grid-flow-col grid-flow-row auto-cols-max gap-px shadow-xl overflow-x-auto overscroll-contain md:w-full self-center items-center">
              {Object.keys(pictures).map((picture) => {
                return (
                  <img class="m-4 w-40 h-40 md:h-52 md:w-52 cursor-pointer" alt="pic" src={pictures[picture]} onClick={() => setCurrentPicture(pictures[picture])} />
                  )
                })}
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
};