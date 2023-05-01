// import { getStaticProps } from "..";
import Link from 'next/link'; 
export default function index({ data, pageName }) {
	return (
		<div className="events-cat">
			<h1>Events in {pageName}</h1>
			<div>	
				{data.map((ev) => (
					<Link legacyBehavior key={ev.id} href={`/events/${ev.city}/${ev.id}`} passHref> 
					<a >
						<img height={100} width={200} src={ev.image} />
						<h2>{ev.title}</h2>  <p>{ev.description}</p>
					</a>
					</Link>
				))}	
			</div>
		</div>
	);
}

export async function getStaticPaths() {
	const { events_categories } = await import("/data/data.json");
	const allPaths = events_categories.map((ev) => {
		return {
			params: {
				cat: ev.id.toString(),
			},
		};
	});
	console.log("this is allPaths :",allPaths);
	return {
		paths: allPaths,
		fallback: false,
	}
}

export async function getStaticProps(context) {
	console.log("this is context ", context);
	const id = context.params.cat
	const { allEvents } = await import("/data/data.json");
	const data = allEvents.filter((ev) => ev.city === id)
	console.log("this is data ", data);
	return {
		props: {
			data,
			pageName : id,
		}
	}
}
