import Link from 'next/link'; 
export default function eventsPage({ data }) {
	return (
		<div>
			<h1>Events Page</h1>

			{data.map((ev) => (
				<Link legacyBehavior key={ev.id} href={`events/${ev.id}`} passHref>
				<a>
					<img alt={ev.title} width={100} height={50} src={ev.image} />
					<h2>{ev.title}</h2>
				</a>
				</Link>
			))}
		</div>
	);
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
