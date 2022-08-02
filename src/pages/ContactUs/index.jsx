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

  return (
    <div class="flex items-center justify-center">
      <div class="flex flex-col items-center justify-center md:w-3/5 bg-gray-100 w-screen shadow-lg mt-1" style={{height: '88vh'}}>
        <div class=" flex items-center justify-center h-10 bg-gray-200 text-gray-500 text-2xl shadow-md md:w-1/4 m-2">
        </div>
        <form onSubmit={onSubmit} class="flex flex-col bg-slate-100 shadow-xl w-full md:w-1/4">
          <label htmlFor="" class="text-gray-500 pl-2">Név</label>
          <input
            type='text'
            name='from_name'
            value={toSend.from_name}
            onChange={handleChange}
            class="outline-0 border-0 border-b-2 border-b-gray-200 m-2"
          />
          <label htmlFor="" class="text-gray-500 pl-2">Üzenet</label>
          <textarea
            type='textarea'
            name='message'
            value={toSend.message}
            onChange={handleChange}
            class="outline-0 border-0 border-b-2 border-b-gray-200 m-2"
          />
          <label htmlFor="" class="text-gray-500 pl-2">Az ön email címe</label>
          <input
            type='text'
            name='your_email'
            value={toSend.your_email}
            onChange={handleChange}
            class="outline-0 border-0 border-b-2 border-b-gray-200 m-2"
          />
          <label htmlFor="" class="text-gray-500 pl-2">Telefonszáma</label>
          <input
            type='text'
            name='phone_number'
            value={toSend.phone_number}
            onChange={handleChange}
            class="outline-0 border-0 border-b-2 border-b-gray-200 m-2"
          />
          <button type='submit' class="cursor-pointer text-green-500 m-2 text-xl">Küldés</button>
        </form>
      </div>
    </div>
  )
}