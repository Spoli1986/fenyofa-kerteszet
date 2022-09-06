import React from "react";
import { useState } from 'react';
import emailjs from '@emailjs/browser';


export default function ContactUs() {
  
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: 'Attila',
    message: '',
    your_email: '',
    phone_number: ''
  });
  const [responseDisplay, setResponseDisplay] = useState(null)

  const onSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      'service_fenyofa',
      'template_ari3vp3',
      toSend,
      'o0RO2c6ouo11L0v_1'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setResponseDisplay('Üzenetét megkaptuk, hamarosan jelentkezünk!')
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
    setToSend({
      from_name: '',
      to_name: 'Attila',
      message: '',
      your_email: '',
      phone_number: ''
    })
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const handelClose = () => {
    setResponseDisplay(null)
  }

  return (
    <div class= "flex items-center justify-center  h-screen w-screen">
      <div class="flex flex-col items-center justify-center h-screen w-screen md:w-4/5 bg-gray-100 shadow-lg mt-1" style={{height: '88vh'}}>
        <div class=" flex items-center justify-center text-center h-10 bg-gray-200 text-gray-500 text-2xl shadow-md md:w-1/4 mb-20">
          Küldjön üzenetet!
        </div>
        <form onSubmit={onSubmit} class="flex flex-col bg-slate-100 shadow-xl w-full md:w-1/4">
          <label htmlFor="" class="text-gray-500 pl-2">Név</label>
          <input
            type='text'
            name='from_name'
            value={toSend.from_name}
            onChange={handleChange}
            required={true}
            onInvalid={e => e.target.setCustomValidity("Kérem töltse ki ezt a mezőt!")}
            class="outline-0 border-0 border-b-2 border-b-gray-200 m-2 focus:border-none"
          />
          <label htmlFor="" class="text-gray-500 pl-2">Üzenet</label>
          <textarea
            type='textarea'
            name='message'
            value={toSend.message}
            onChange={handleChange}
            required={true}
            onInvalid={e => e.target.setCustomValidity("Kérem töltse ki ezt a mezőt!")}
            class="outline-0 border-0 border-b-2 border-b-gray-200 m-2 focus:border-none"
          />
          <label htmlFor="" class="text-gray-500 pl-2">Az ön email címe</label>
          <input
            type='email'
            name='your_email'
            value={toSend.your_email}
            onChange={handleChange}
            required={true}
            onInvalid={e => e.target.setCustomValidity("Kérem érvényes email címet adjon meg!")}
            class="outline-0 border-0 border-b-2 border-b-gray-200 m-2 focus:border-none"
          />
          <label htmlFor="" class="text-gray-500 pl-2">Telefonszáma</label>
          <input
            type='text'
            name='phone_number'
            value={toSend.phone_number}
            onChange={handleChange}
            required={true}
            onInvalid={e => e.target.setCustomValidity("Kérem töltse ki ezt a mezőt!")}
            class="border-0 border-b-2 border-b-gray-200 m-2 focus:border-none"
          />
          <button type='submit' class=" bg-menuBackground text-white m-2 text-xl rounded-full py-2 focus:bg-white focus:text-menuBackground focus:border-2-menuBackground">Küldés</button>
        </form>
          {responseDisplay === null ? responseDisplay :
          <div class="absolute flex flex-col w-screen h-screen bg-gray-300/60 self-center items-center justify-center">
            <div class="flex flex-col md:w-1/3 md:h-1/3 h-2/3 bg-white items-center justify-around">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 rounded-full border-4 border-menuBackground" fill="none" viewBox="0 0 24 24" stroke="#78be20" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div class="text-center text-2xl text-gray-600">
                {responseDisplay}
              </div>
              <button class="bg-menuBackground text-white rounded-full px-5 py-2 focus:bg-white focus:text-menuBackground" onClick={handelClose}>OK</button>
            </div>
          </div>
          }
      </div>
    </div>
  )
}