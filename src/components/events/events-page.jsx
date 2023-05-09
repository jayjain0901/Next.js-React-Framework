import React from 'react'
import Link from 'next/link';

export default function EventsPage({ data }) {
   return (
      <div className='events_page'>


         {data.map((ev) => (
            <Link legacyBehavior key={ev.id} href={`events/${ev.id}`} passHref>
               <a className='card'> 
                  <img alt={ev.title} width={'100%'} height={'auto'}  src={ev.image} />
                  <h2>{ev.title}</h2>
               </a>
            </Link>
         ))}

      </div>
   )
}
