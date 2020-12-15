import ProjectCard from './ProjectCard';

function ProjectsView() {
	return (
		<main id="projects-view" className="h-screen overflow-auto">
			<p className="text-5xl text-gray-900 md:mt-40 lg:mx-32 mb-2">Projects</p>
			<section id="section-projects" className="flex flex-col my-20 mx-2 sm:my-0 sm:justify-center sm:mx-6 sm:flex-row sm:flex-wrap md:mx-10 lg:mx-24 2xl:mx-64">
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
			</section>
		</main>
	);
}

export default ProjectsView;