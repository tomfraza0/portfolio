import { FaArrowRight } from 'react-icons/fa6';
import { profile } from '../data/portfolio';

type AboutProps = {
	copy: {
		label: string;
		title: string;
		titleAccent: string;
		paragraphs: string[];
		action: string;
	};
};

function Sobre({ copy }: AboutProps) {
	return (
		<section className="about section-shell" id="sobre">
			<div className="section-kicker">
				<span>01</span>
				<span>{copy.label}</span>
			</div>
			<div className="about-grid">
				<h2>
					{copy.title}
					<br />
					<em>{copy.titleAccent}</em>
				</h2>
				<div className="about-text">
					{copy.paragraphs.map((paragraph) => (
						<p key={paragraph}>{paragraph}</p>
					))}
					<a
						className="text-link dark-link"
						href={profile.links.github}
						target="_blank"
						rel="noreferrer"
					>
						{copy.action} <FaArrowRight />
					</a>
				</div>
			</div>
		</section>
	);
}

export default Sobre;
