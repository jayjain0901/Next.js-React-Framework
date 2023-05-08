import Link from 'next/link'


export function HomePage({ data }) {
	return (
		<div className='home_body' >
			{data.map((ev) => (
				<Link  legacyBehavior key={ev.id} href={`events/${ev.id}`} passHref>
					<a className='card'>
						<div>
							<img alt={ev.title} width={220} height={150} src={ev.image} />
						</div>
						<div className='content' >
							<h2>{ev.title}</h2>
							<p>{ev.description}</p>
						</div>
					</a>
				</Link>
			))}
		</div>
	)
}