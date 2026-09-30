import { SiJavascript, SiPython, SiReact, SiTypescript } from 'react-icons/si';
import { skills as skillNames } from '../data/portfolio';

const icons = {
	React: <SiReact />,
	TypeScript: <SiTypescript />,
	JavaScript: <SiJavascript />,
	Python: <SiPython />,
};
type SkillsProps = {
	copy: {
		label: string;
		title: string;
		titleAccent: string;
		titleEnd: string;
	};
};

function Skills({ copy }: SkillsProps) {
	return (
		<section className="toolkit section-shell">
			<div className="section-kicker">
				<span>03</span>
				<span>{copy.label}</span>
			</div>
			<div className="toolkit-content">
				<h2>
					{copy.title}
					<br />
					<em>{copy.titleAccent}</em>
					<br />
					{copy.titleEnd}
				</h2>
				<div className="skill-list">
					{skillNames.map((skill) => (
						<div className="skill" key={skill}>
							<span>{icons[skill as keyof typeof icons]}</span>
							{skill}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Skills;
