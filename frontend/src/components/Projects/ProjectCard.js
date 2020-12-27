import React from 'react';
import { Link } from 'react-router-dom';


function ProjectCard({ project }) {
	return (
		<figure className="flex flex-col sm:mr-2 mb-2 py-6 px-4 bg-white sm:w-5/12 lg:w-64 cursor-pointer shadow-sm rounded-md">
			<img className="sm:w-40 my-0 mx-auto w-64 h-32" src={project.img || "/images/broken_image.svg"} alt="tpp" />
			<p className="text-lg mt-4 font-bold">{project.title || ''}</p>
			<p className="flex-1 font-light my-2 text-xs">{project.description || ''}</p>
			
			<Link to={`/projects/${project.id}/intro`} className="rounded-full border border-indigo-600 hover:bg-indigo-100 flex justify-center p-2 mx-4 shadow-sm cursor-pointer mt-6">
				<p className="capitalize text-sm text-indigo-600 font-bold">show more</p>
			</Link>
		</figure>
	);
}

export default ProjectCard;