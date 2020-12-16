import ProjectCard from './ProjectCard';
import useQuery from '../../hooks/useQuery';

function ProjectsView() {
	let query = useQuery();
	console.log('query', query.get("person"));
	return (
		<main id="projects-view" className="h-screen overflow-auto">
			<p className="text-5xl text-gray-900 md:mt-40 lg:mx-32 mb-2">Routing</p>
			<section id="routing-projects" className="flex flex-col my-20 mx-2 sm:my-0 sm:justify-center sm:mx-6 sm:flex-row sm:flex-wrap md:mx-10 lg:mx-24 2xl:mx-64">
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
			</section>

			<p className="text-5xl text-gray-900 md:mt-40 lg:mx-32 mb-2">Packing</p>
			<section id="packing-projects" className="flex flex-col my-20 mx-2 sm:my-0 sm:justify-center sm:mx-6 sm:flex-row sm:flex-wrap md:mx-10 lg:mx-24 2xl:mx-64">
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
			</section>
		</main>
	);
}

export default ProjectsView;