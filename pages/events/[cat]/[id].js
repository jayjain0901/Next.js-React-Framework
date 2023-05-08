import SingleEvent from "@/src/components/events/singleEvent";

export default function singlePage({data}) {
   return (
      <SingleEvent data={data} />
   )
}

export async function getStaticPaths() {
   const { allEvents } = await import("/data/data.json");
   const allPathsSP = allEvents.map((path) => {
      return {
         params: {
            cat: path.city,
            id: path.id,
         }
      }
   })
   console.log("this is allPathsSP :", allPathsSP);
   return {
      paths: allPathsSP,
      fallback: false,
   }
}

export async function getStaticProps(context) {
   console.log("this is contextSP:  ", context);
   const id = context.params.id
   const { allEvents } = await import("/data/data.json");
   const data = allEvents.find((ev) => ev.id === id)
   console.log("this is data ", data);
   return {
      props: {
         data
      }
   }
}