import { FaArrowRight, FaGithub } from 'react-icons/fa6';
import { profile } from '../data/portfolio';

type ProjectsProps = {
	copy: {
		label: string;
		title: string;
		titleAccent: string;
		status: string;
		projectType: string;
		name: string;
		description: string;
		stack: string;
		githubAction: string;
	};
};

function Projetos({ copy }: ProjectsProps) {
	return (
		<section className="projects section-shell" id="projetos">
			<div className="section-kicker">
				<span>02</span>
				<span>{copy.label}</span>
			</div>
			<div className="projects-heading">
				<h2>
					{copy.title}
					<br />
					<em>{copy.titleAccent}</em>
				</h2>
				<span>01 / 01</span>
			</div>
			<a
				className="featured-project"
				href={profile.links.treeMaker}
				target="_blank"
				rel="noreferrer"
			>
				<div className="project-visual">
					<div className="tree-mark">
						T<span>ree</span>
						<br />
						Maker
					</div>
					<span className="visual-caption">
						treemaker.tomasfrazao.pt
					</span>
				</div>
				<div className="project-info">
					<div className="project-topline">
						<span>{copy.projectType}</span>
						<span>{copy.status}</span>
					</div>
					<h3>{copy.name}</h3>
					<p>{copy.description}</p>
					<div className="project-bottom">
						<span>{copy.stack}</span>
						<span className="round-arrow">
							<FaArrowRight />
						</span>
					</div>
				</div>
			</a>
			<div className="github-strip">
				<div>
					<FaGithub />
					<span>{copy.githubAction}</span>
				</div>
				<a href={profile.links.github} target="_blank" rel="noreferrer">
					{profile.socialHandles.github} <FaArrowRight />
				</a>
			</div>
		</section>
	);
}

export default Projetos;
