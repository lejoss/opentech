import PropTypes from 'prop-types';
import ProjectCard from './ProjectCard';
import useQuery from '../../hooks/useQuery';
import { mapToKeys } from '../../services';

function ProjectsView({ projects, people }) {
	const query = useQuery();
	let routingProjects = [];
	let packingProjects = [];

	if (query.get("person") && people && people.list && people.list.length > 0) {
		const peopleMap = mapToKeys(people.list);
		const projectIdsByPerson = peopleMap[query.get("person")].projects || [];
		const projectsByPerson = projects.list.filter(p => projectIdsByPerson.some(projectId => projectId === p.id));

		routingProjects = projectsByPerson && projectsByPerson.filter(p => p.type === 'routing');
		packingProjects = projectsByPerson && projectsByPerson.filter(p => p.type === 'packing');
	}
	else {
		routingProjects = projects.list && people.list.length > 0 && projects.list.filter(p => p.type === 'routing');
		packingProjects = projects.list && people.list.length > 0 && projects.list.filter(p => p.type === 'packing');
	}

	return (
		<main id="projects-view" className="overflow-auto h-full pb-20 sm:pb-0 max-w-screen-md m-auto">
			{routingProjects && routingProjects.length > 0 && (
				<div className="mt-20">
					<div className="flex flex-row">
						<p className="text-center text-5xl sm:pt-10 mb-4 lg:text-left lg:uppercase lg:text-2xl font-bold">Routing</p>
					</div>
					<section id="routing-projects" className="flex flex-col justify-center mb-4 lg:justify-start sm:flex-row sm:flex-wrap">
						{routingProjects && routingProjects.map(p => <ProjectCard key={p.id} project={p} />)}
					</section>
				</div>
			)}

			{packingProjects && packingProjects.length > 0 && (
				<div className={`${routingProjects && routingProjects.length > 0 ? 'mt-10' : 'mt-20'}`}>
					<div className="flex flex-row">
						<p className="text-center text-5xl pt-10 mb-4 lg:text-left lg:uppercase lg:text-2xl font-bold">Packing</p>
					</div>
					<section id="packing-projects" className="flex flex-col justify-center mb-4 sm:px-0 lg:justify-start sm:flex-row sm:flex-wrap">
						{packingProjects.map(p => <ProjectCard key={p.id} project={p} />)}
					</section>
				</div>
			)}
		</main>
	);
}

ProjectsView.propTypes = {
	projects: PropTypes.object,
	people: PropTypes.object,
}

export default ProjectsView;