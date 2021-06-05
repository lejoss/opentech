import Contact from '../Contact';
import ProjectCard from '../Projects/ProjectCard';
import { mapToKeys } from '../../services'

function RecentProjects(arr, people) {
	if (arr.length > 0) {
		return (
			<section style={{ backgroundColor: "#eee" }} id="recent-projects" className="pb-10 px-12 lg:m-0 sm:px-0 sm:mx-10">
				<p className="mb-6 pt-6 text-center font-bold md:text-left text-3xl sm:text-4xl lg:uppercase lg:text-xl">Recent Projects</p>
				<div className="flex flex-col mx-6 sm:mx-0 lg:justify-start sm:flex-row sm:flex-wrap sm:justify-center">
					{arr.map(p => <ProjectCard people={people} key={p.id} project={p} />)}
				</div>
			</section>
		)
	} else return null;
}

function Banner() {
	return (
		<div className="flex flex-col items-center bg-white rounded sm:shadow-sm mb-10 lg:pt-8 lg:pb-12">
			<img className="w-32 h-32 opacity-75" src="/images/logo.png" alt="logo" />
			<p className="opacity-50 mt-4 text-xl text-center font-light sm:px-10 sm:text-justify lg:text-center lg:text-lg leading-relaxed tracking-wide">Opentechs is a repository of projects developed by the group of people posted on the website. Here you will find the latest works created by our team along with complementary information on each project.</p>
		</div>
	)
}
export default function Home({ latestProjects = [], people = [] }) {
	return (
		<div className="max-w-screen-md m-auto bg-white w-full md:bg-transparent pt-16 h-full">
			<Banner />
			{RecentProjects(latestProjects, mapToKeys(people))}
			<Contact />
		</div>
	)
}
