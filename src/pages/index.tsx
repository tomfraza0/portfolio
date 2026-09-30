import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Sobre from '../components/Sobre';
import Projetos from '../components/Projetos';
import Skills from '../components/Skills';
import Contacto from '../components/Contacto';
import Footer from '../components/Footer';
import { content } from '../data/portfolio';
import type { Language } from '../data/portfolio';
import '../styles/global.css';

function Index() {
	const [language, setLanguage] = useState<Language>('pt');
	const copy = content[language];

	useEffect(() => {
		document.documentElement.lang = language === 'pt' ? 'pt-PT' : 'en';
	}, [language]);

	return (
		<main>
			<Header
				copy={copy.navigation}
				language={language}
				onLanguageChange={setLanguage}
			/>
			<Hero copy={copy.hero} />
			<Sobre copy={copy.about} />
			<Projetos copy={copy.projects} />
			<Skills copy={copy.skills} />
			<Contacto copy={copy.contact} />
			<Footer copy={copy.footer} />
		</main>
	);
}

export default Index;
