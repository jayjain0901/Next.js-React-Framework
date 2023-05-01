export default function singlePage({data}) {
   return (
      <div>
            <img src={data.image} width={300} height={200} alt={data.title} />
            <h1>{data.title}</h1>
            <p>{data.description}</p>
      </div>
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