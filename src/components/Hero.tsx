import { FaArrowDown, FaArrowRight } from 'react-icons/fa6';
import { profile } from '../data/portfolio';

type HeroProps = { copy: typeof import('../data/portfolio').content.pt.hero };

function Hero({ copy }: HeroProps) {
	return (
		<section className="hero" id="top">
			<div className="hero-copy">
				<p className="eyebrow">
					<span className="status-dot" /> {copy.eyebrow}
				</p>
				<h1>
					{copy.title}
					<br />
					<em>{copy.titleAccent}</em>
				</h1>
				<p className="hero-intro">{copy.intro}</p>
				<div className="hero-actions">
					<a className="button button-primary" href="#projetos">
						{copy.button} <FaArrowDown />
					</a>
					<a className="text-link" href={`mailto:${profile.email}`}>
						{profile.email} <FaArrowRight />
					</a>
				</div>
			</div>
			<div className="hero-portrait">
				<div className="portrait-frame">
					<img src={profile.photo} alt={profile.name} />
					<span className="portrait-label">
						{profile.location}
						<br />
						<strong>2025 — agora</strong>
					</span>
				</div>
				<span className="hero-number">01</span>
			</div>
			<div className="hero-scroll">
				<span /> {copy.scroll}
			</div>
		</section>
	);
}

export default Hero;
