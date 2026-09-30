import { FaArrowRight } from 'react-icons/fa6';
import { profile } from '../data/portfolio';
import type { Language } from '../data/portfolio';

type HeaderProps = {
	copy: { about: string; projects: string; contact: string; cta: string };
	language: Language;
	onLanguageChange: (language: Language) => void;
};

function Header({ copy, language, onLanguageChange }: HeaderProps) {
	return (
		<nav className="site-nav" aria-label="Navegação principal">
			<a className="brand" href="#top">
				TF<span>.</span>
			</a>
			<div className="nav-links">
				<a href="#sobre">{copy.about}</a>
				<a href="#projetos">{copy.projects}</a>
				<a href="#contacto">{copy.contact}</a>
			</div>
			<div className="nav-actions">
				<div
					className="language-switch"
					role="group"
					aria-label="Language"
				>
					<button
						className={language === 'pt' ? 'active' : ''}
						onClick={() => onLanguageChange('pt')}
					>
						PT
					</button>
					<button
						className={language === 'en' ? 'active' : ''}
						onClick={() => onLanguageChange('en')}
					>
						EN
					</button>
				</div>
				<a className="nav-contact" href={`mailto:${profile.email}`}>
					{copy.cta} <FaArrowRight />
				</a>
			</div>
		</nav>
	);
}

export default Header;
