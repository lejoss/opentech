import PropTypes from 'prop-types';
import ProjectCard from './ProjectCard';
import useQuery from '../../hooks/useQuery';
import { mapToKeys } from '../../services';

function ProjectsView({ projects, people }) {
	const query = useQuery();
	let routingProjects = [];
	let packingProjects = [];

	if (query.get("person") && people.list && people.list.length > 0) {
		const peopleMap = mapToKeys(people.list);
		const projectIdsByPerson = peopleMap[query.get("person")].projects || [];
		const projectsByPerson = projects.list && projects.list.filter(p => projectIdsByPerson.some(projectId => projectId === p.id));

		routingProjects = projectsByPerson && projectsByPerson.filter(p => p.type === 'routing');
		packingProjects = projectsByPerson && projectsByPerson.filter(p => p.type === 'packing');
	}
	else {
		routingProjects = projects.list && people.list.length > 0 && projects.list.filter(p => p.type === 'routing');
		packingProjects = projects.list && people.list.length > 0 && projects.list.filter(p => p.type === 'packing');
	}

	return (
		<main id="projects-view" className="overflow-auto">
			{routingProjects.length > 0 && (
				<div>
					<p className="text-5xl md:mt-40 lg:mx-32">Routing</p>
					<section id="routing-projects" className="flex flex-col my-20 mx-2 sm:my-0  sm:mx-6 sm:flex-row sm:flex-wrap md:mx-10 lg:ml-32 2xl:mx-64">
						{routingProjects.map(p => <ProjectCard key={p.id} project={p} />)}
					</section>
				</div>
			)}

			{packingProjects.length > 0 && (
				<div>
					<p className="text-5xl md:mt-40 lg:mx-32 mb-10">Packing</p>
					<section id="packing-projects" className="flex flex-col my-20 mx-2 sm:my-0  sm:mx-6 sm:flex-row sm:flex-wrap md:mx-10 lg:ml-32 2xl:mx-64">
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