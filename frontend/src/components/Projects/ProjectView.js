import ProjectCard from './ProjectCard';

function ProjectView() {
	return (
		<main id="projects-view" className="bg-gray-200 sm:h-screen sm:overflow-auto">
			<section id="section-projects" className="flex flex-wrap px-8 py-20">
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

export default ProjectView;