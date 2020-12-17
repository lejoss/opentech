import ProjectCard from './ProjectCard';
import useQuery from '../../hooks/useQuery';

function ProjectsView({ projects, people }) {
	const query = useQuery();
	let routingProjects;
	let packingProjects;

	if (query.get("person")) {
		const peopleMap = mapToKeys(people.list);
		const projectIdsByPerson = peopleMap[query.get("person")].projects || [];
		const projectsByPerson = projects.list.filter(p => projectIdsByPerson.some(projectId => projectId === p.id));

		routingProjects = projectsByPerson.filter(p => p.type === 'routing');
		packingProjects = projectsByPerson.filter(p => p.type === 'packing');
	}
	else {
		routingProjects = projects.list.filter(p => p.type === 'routing');
		packingProjects = projects.list.filter(p => p.type === 'packing');
	}

	return (
		<main id="projects-view" className="h-screen overflow-auto">
			{routingProjects.length > 0 && (
				<div>
					<p className="text-5xl md:mt-40 lg:mx-32 mb-2">Routing</p>
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

function mapToKeys(arr = []) {
	return arr.reduce((prev, current, index, array) => {
		return {
			...prev,
			[current.id]: array[index]
		}
	}, {});
}

export default ProjectsView;