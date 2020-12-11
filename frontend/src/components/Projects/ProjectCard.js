import { Link } from 'react-router-dom';

function ProjectCard() {
	return (
		<div className="w-1/4 p-6">
			<div className="cursor-pointer shadow-md bg-white rounded-sm p-4">
				<Link to="/projects/1">
					<img className="" src="/images/tpp.jpeg" alt="tpp" />
					<p>TPP</p>
				</Link>
			</div>
		</div>
	);
}

export default ProjectCard;