import ProjectCard from './ProjectCard';

function ProjectView() {
	return (
		<main className="bg-gray-200">
			<section id="section-projects" className="flex flex-col px-8 pt-20 md:flex-wrap  ">
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
			</section>
		</main>
	);
}

export default ProjectView;