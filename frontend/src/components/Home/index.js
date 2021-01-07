import { Link } from 'react-router-dom';
import Contact from '../Contact';
import ProjectCard from '../Projects/ProjectCard';
import { mapToKeys } from '../../services'

function RecentProjects(arr, people) {
	if (arr.length > 0) {
		return (
			<section id="recent-projects" className="mb-10">
				<p className="text-3xl mb-6 leading-relaxed">Recent Projects</p>
				<div className="flex justify-between">
					{arr.map(p => <ProjectCard people={people} key={p.id} project={p} />)}
				</div>
			</section>
		)
	} else return null;
}

function Banner() {
	return (
		<div className="flex items-center p-12 bg-white rounded shadow-sm mb-10">
			<img className="w-64 h-64 opacity-75" src="/images/logo.png" alt="logo" />
			<p className="text-xl font-light px-10 text-justify tracking-wide">Opentechs is a repository of projects developed by the group of people posted on the website. Here you will find the latest works created by our team along with complementary information on each project.</p>
		</div>
	)
}
export default function Home({ latestProjects = [], people = [] }) {
	return (
		<div className="pt-16 h-full lg:mx-40 px-10">
			<Banner />
			{RecentProjects(latestProjects, mapToKeys(people))}
			<Contact />
		</div>
	)
}
