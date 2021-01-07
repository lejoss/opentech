import React from 'react';
import { Link } from 'react-router-dom';

function displayAuthors(peopleIds, peopleMap) {
	return peopleIds.map((personId, i) => (
		<Link key={i} to={`/people?person=${personId}`} className="underline font-light text-xs text-indigo-700 mr-1">{peopleMap[personId].name}</Link>
	));
}

function ProjectCard({ project, people = null }) {

	return (
		<figure className="flex flex-col sm:mr-2 mb-2 py-6 px-4 bg-white sm:w-5/12 lg:w-64 shadow-sm rounded-md">
			<img className="sm:w-40 my-0 mx-auto w-64 h-32" src={project.img || "/images/broken_image.svg"} alt="tpp" />
			<p className="text-lg mt-4 font-bold">{project.title || ''}</p>
			{people
				? <div className="flex flex-1 flex-wrap mt-2">{displayAuthors(project.people, people)}</div>
				: <p className="flex-1 font-light my-2 text-xs">{project.description || ''}</p>
			}

			<Link to={`/projects/${project.id}/intro`} className="rounded-full border border-indigo-600 hover:bg-indigo-100 flex justify-center p-2 mx-4 shadow-sm cursor-pointer mt-6">
				<p className="capitalize text-sm text-indigo-600 font-bold">show more</p>
			</Link>
		</figure>
	);
}

export default ProjectCard;




			// <p className="text-3xl pt-10 mb-4">Recent Projects</p>
			// {latestProjects.length > 0 && latestProjects.map((p, i) => (
			// 	<div key={i} className="flex bg-white p-2 rounded-sm items-center border-b">
			// 		<img className="w-20 h-20" src={p.img} alt="tpp" />
			// 		<div className="ml-4">
			// 			<Link to="/projects" className="flex items-center font-bold text-indigo-700">
			// 				<img src={p.type === 'packing' ? "/images/packing.svg" : "/images/routing.svg"} alt="" className="w-4 h-4 mr-2" />
			// 				<p>{p.title}</p>
			// 				<p className="ml-2 italic font-light text-sm">({p.type})</p>
			// 			</Link>
			// 			<p className="font-light">{p.subTitle}</p>
			// 		</div>
			// 	</div>
			// ))}