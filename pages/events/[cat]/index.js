// import { getStaticProps } from "..";
import CatEvent from '@/src/components/events/catEvent';
import Link from 'next/link'; 

export default function index({ data, pageName }) {
	return <CatEvent data={data} pageName={pageName}/>
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
