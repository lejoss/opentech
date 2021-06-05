import React from 'react';
import { Link } from 'react-router-dom';

function displayAuthors(peopleIds, peopleMap) {
	return peopleIds.map((personId, i) => (
		<Link key={i} to={`/people?person=${personId}`} className="underline font-light text-xs text-indigo-700 mr-1">{peopleMap[personId].name}</Link>
	));
}

function ProjectCard({ project, people = null }) {
	return (
		<figure className="flex flex-col sm:mr-2 mb-2 bg-white sm:w-5/12 lg:w-48 shadow-sm rounded-md lg: px-1">
			<img className="sm:w-48 my-0 mx-auto h-32 lg:h-32 lg:w-32 lg:p-2" src={project.img || "/images/broken_image.svg"} alt="tpp" />
			<p className="px-4 break-all lg:text-sm mt-4 font-bold uppercase">{project.title || ''}</p>
			{people
				? <div className="px-4 flex flex-1 flex-wrap mt-2">{displayAuthors(project.people, people)}</div>
				: <p className="px-4 flex-1 font-light mt-2 text-xs">{project.description || ''}</p>
			}
			<Link to={`/projects/${project.id}/intro`} className="rounded-full border border-indigo-700 hover:bg-indigo-100 flex justify-center p-1 mx-4 mt-2 mb-4 shadow-sm cursor-pointer">
				<p className="capitalize text-sm text-indigo-600 font-bold">show more</p>
			</Link>
		</figure>
	);
}

export default ProjectCard;
