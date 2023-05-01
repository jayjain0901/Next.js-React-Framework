import Link from 'next/link'

export function HeaderPage() {
	return (
		<header >
			<nav>
				<img />
				<Link legacyBehavior href="/" passHref>
					<a > home | </a>
				</Link>
				<Link legacyBehavior href="/events" passHref>
					<a>events | </a>
				</Link>
				<Link legacyBehavior href="/about-us" passHref>
					<a>about-us</a>
				</Link>
			</nav>
		</header>)
}