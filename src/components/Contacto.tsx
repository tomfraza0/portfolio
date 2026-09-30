import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
import { profile } from '../data/portfolio';

type ContactProps = {
	copy: {
		label: string;
		title: string;
		titleAccent: string;
		subtitle: string;
	};
};

function Contacto({ copy }: ContactProps) {
	return (
		<section className="contact section-shell" id="contacto">
			<div className="section-kicker">
				<span>04</span>
				<span>{copy.label}</span>
			</div>
			<div className="contact-content">
				<h2>
					{copy.title}
					<br />
					<em>{copy.titleAccent}</em>
				</h2>
				<p className="contact-subtitle">{copy.subtitle}</p>
				<a className="contact-email" href={`mailto:${profile.email}`}>
					{profile.email} <span>↗</span>
				</a>
				<div className="socials">
					<a
						href={profile.links.instagram}
						target="_blank"
						rel="noreferrer"
					>
						<FaInstagram /> Instagram
					</a>
					<a
						href={profile.links.linkedin}
						target="_blank"
						rel="noreferrer"
					>
						<FaLinkedinIn /> LinkedIn
					</a>
					<a
						href={profile.links.github}
						target="_blank"
						rel="noreferrer"
					>
						<FaGithub /> GitHub
					</a>
					<span className="social-handle">
						Discord {profile.socialHandles.discord}
					</span>
				</div>
			</div>
		</section>
	);
}

export default Contacto;
