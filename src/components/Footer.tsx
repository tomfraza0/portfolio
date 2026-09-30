import { FaArrowUp } from 'react-icons/fa6';
import { profile } from '../data/portfolio';

type FooterProps = { copy: { phrase: string; back: string } };

function Footer({ copy }: FooterProps) {
	return (
		<footer>
			<span>
				© {new Date().getFullYear()} {profile.name}
			</span>
			<span>{copy.phrase}</span>
			<a href="#top">
				{copy.back} <FaArrowUp />
			</a>
		</footer>
	);
}

export default Footer;
