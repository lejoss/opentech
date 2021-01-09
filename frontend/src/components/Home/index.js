import Contact from '../Contact';
import ProjectCard from '../Projects/ProjectCard';
import { mapToKeys } from '../../services'

function RecentProjects(arr, people) {
	if (arr.length > 0) {
		return (
			<section style={{  backgroundColor: "#eee"}} id="recent-projects" className="mb-10 h-full w-full">
				<p className="mb-6 pt-6 text-center text-3xl sm:text-4xl">Recent Projects</p>
				<div className="flex flex-col mx-6 sm:justify-between sm:flex-row">
					{arr.map(p => <ProjectCard people={people} key={p.id} project={p} />)}
				</div>
			</section>
		)
	} else return null;
}

function Banner() {
	return (
		<div className="flex flex-col items-center p-12 bg-white rounded sm:shadow-sm mb-10">
			<img className="w-64 h-64 opacity-75" src="/images/logo.png" alt="logo" />
			<p className="mt-4 text-xl text-center font-light sm:px-10 sm:text-justify leading-relaxed tracking-wide">Opentechs is a repository of projects developed by the group of people posted on the website. Here you will find the latest works created by our team along with complementary information on each project.</p>
		</div>
	)
}
export default function Home({ latestProjects = [], people = [] }) {
	return (
		<div className="bg-white w-full md:bg-transparent pt-16 h-full lg:mx-40 sm:px-10">
			<Banner />
			{RecentProjects(latestProjects, mapToKeys(people))}
			<Contact />
		</div>
	)
}
