import path from 'path';
import fs from 'fs';

function buildPath() {
   return path.join(process.cwd(), 'data', 'data.json')
}

function extractData(filePath) {
   const jsonData = fs.readFileSync(filePath);
   const data = JSON.parse(jsonData)
   console.log("this is parsed data: ", data);
   return data;
}

export default function handler(req, res) {
   const { method } = req;
   // access our data 
   // extract our data (Allevents)
   // res 404 if thrre are no allevents
   // allEvents - loop through them and identify 
   // the eventId and the email into email_registered - 
   // only if that email doent exist
   // check format of email
   
   const filePath = buildPath();
   const { events_categories, allEvents } = extractData(filePath);

   if (!allEvents) {
      return res
         .status(404)
         .json({
            message: 'events data not found'
         })
   }

   if (method === 'POST') {
      const { email, eventId } = req.body;

      if(!email | !email.includes('@')){
         res
            .status(422)
            .json({ message : "Invalid email address"})
            return;
      } 

      const newAllEvents = allEvents.map(ev => {
         if (ev.id === eventId) {
            // if email id already exists
            if (ev.emails_registered.includes(email)) {
               res
                  .status(409)
                  .json({
                     message: 'This email has already been registered'
                  })
                  return ev;
            }
            // for new email id
            return {
               ...ev,
               emails_registered: [...ev.emails_registered, email],
            }
         }
         return ev;
      })

      fs.writeFileSync(filePath, JSON.stringify({ events_categories, allEvents: newAllEvents }))
      res
         .status(200)
         .json({
            message: `You have been registered successfully for the event :${email} ${eventId} `
         });
   }
}