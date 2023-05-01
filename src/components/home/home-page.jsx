import Link from 'next/link'


export function HomePage({ data }) {
	return (
		<main >
			{data.map((ev) => (
				<Link legacyBehavior key={ev.id} href={`events/${ev.id}`} passHref>
					<a>
						<img alt={ev.title} width={200} height={100} src={ev.image} />
						<h2>{ev.title}</h2> <p>{ev.description}</p>
					</a>
				</Link>
			))}
		</main>
	)
}