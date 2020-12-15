import ProjectCard from './ProjectCard';

function ProjectsView() {
	return (
		<main id="projects-view" className="bg-gray-200 h-screen overflow-auto">
			<section id="section-projects" className="flex flex-col my-20 mx-2 sm:justify-center sm:mx-6 sm:flex-row sm:flex-wrap lg:justify-start md:mx-10 lg:mx-32 2xl:mx-64">
				<ProjectCard />
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