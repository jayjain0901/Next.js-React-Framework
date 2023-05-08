import EventsPage from '@/src/components/events/events-page';

export default function eventsPage({ data }) {
	return <EventsPage data={data} />
}

export async function getStaticProps() {
	const { events_categories } = await import("/data/data.json");
	console.log(events_categories);
	return {
		props: {
			data: events_categories,
		},
	};
}
