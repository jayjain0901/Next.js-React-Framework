import React, { useRef, useState } from 'react'
import { useRouter } from 'next/router';

export default function SingleEvent({ data }) {
   const inputEmail = useRef();
   // console.log(inputEmail);
   const router = useRouter();
   // console.log(router);
   const [message, setMessage] = useState('')
   const onSubmit = async (e) => {
      e.preventDefault(inputEmail);
      // console.log("inputEmail.current.value " , inputEmail.current.value);
      const emailValue = inputEmail.current.value;
      // console.log("emailValue: " , emailValue);
      const eventId = router.query.id;
      // console.log("eventId: ", eventId);

      const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      if(!emailValue.match(validRegex)){
         setMessage('Plase enter a valid email address')
      }

      try {
         // POST fetch request
         // body emailValue and the eventId
         const response = await fetch('/api/email-registration', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: emailValue, eventId })
         });
         if (!response.ok) throw new Error('Error : ${response.status} ')
         const data = await response.json();

         setMessage(data.message);
         inputEmail.current.value = ''
         console.log('POST', data);
      } catch (e) {
         console.log("Error", e);
      }

   };

   return (
      <div className="event_single_page">
         <h1>{data.title}</h1>
         <br></br>
         <img src={data.image} width={'100%'} height={'auto'} alt={data.title} />
         <p>{data.description}</p>
         <form onSubmit={onSubmit} className='email_registration'>
            <label>Get registered for this event!</label>
            <input ref={inputEmail}  id="email" placeholder='Please insert your email here' />
            <button >Submit</button>
         </form>
         <br></br>
         <p>{message}</p>
      </div>
   )
}
