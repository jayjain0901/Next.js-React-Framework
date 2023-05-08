import Link from 'next/link'

export function HeaderPage() {
	return (
		<header >
			<div>
				<div className='topNav'>
					<img alt='logo' src={'/images/logo_acc.png'} width={50} height={50} />
					<nav>
						<ul>
							<li>
								<Link legacyBehavior href="/" passHref>
									<a > home | </a>
								</Link>
							</li>
							<li>
								<Link legacyBehavior href="/events" passHref>
									<a>events | </a>
								</Link>
							</li>
							<li>
								<Link legacyBehavior href="/about-us" passHref>
									<a>about-us</a>
								</Link>
							</li>
						</ul>
					</nav>
				</div>
				<p className='title'>Etiam risus ipsum, imperdi</p>
			</div>
		</header>)
}