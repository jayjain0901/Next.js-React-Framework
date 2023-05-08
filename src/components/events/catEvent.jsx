import React from 'react'
import Link from "next/link"
export default function CatEvent({data,pageName}) {
   return (
      <div className='cat_events'>
         <h1>Events in {pageName}</h1>

         <div className='content'>
            {data.map((ev) => (
               <Link legacyBehavior key={ev.id} href={`/events/${ev.city}/${ev.id}`} passHref>
                  <a className='card'>
                     <img height={200} width={300} src={ev.image} />
                     <h2>{ev.title}</h2>  <p>{ev.description}</p>
                  </a>
               </Link>
            ))}
         </div>
      </div>
   )
}
