import React from 'react';
import { Link } from 'react-router-dom';


function ProjectCard({ project }) {
	return (
		<figure className="flex flex-col mr-2 mb-2 py-6 px-4 bg-white sm:w-5/12 cursor-pointer shadow-md rounded-md">
			<img className="sm:w-40 my-0 mx-auto w-64" src={project.img || "/images/broken_image.svg"} alt="tpp" />
			<p className="text-2xl mt-4">{project.title || ''}</p>
			<p className="flex-1 leading-relaxed tracking-wide font-light my-2 text-xs">{project.description || ''}</p>
			<Link to={`/projects/${project.id}/intro`}>
				<p className="text-right leading-relaxed tracking-wide text-xs uppercase mt-6 hover:text-gray-600">learn more</p>
			</Link>
		</figure>
	);
}

export default ProjectCard;