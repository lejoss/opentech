import ProjectCard from './ProjectCard';

function ProjectView() {
	return (
		<main id="projects-view" className="h-full bg-gray-200">
			<section id="section-projects" className=" flex flex-wrap px-8 py-20 ">
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