import React from 'react';
import { Link } from 'react-router-dom';


function ProfileCard() {
	return (
		<figure className="m-1 p-2 bg-white sm:w-72 cursor-pointer shadow-md rounded-md m-0">
			<img className="w-32 h-32 my-0 mx-auto" src="/images/dave.png" alt="tpp" />
			<p className="text-center leading-relaxed tracking-wide text-xl mt-4 text-gray-900">David Alvarez</p>
			<p className="text-center leading-relaxed tracking-wide mb-6 text-xs text-gray-600 font-light">Assistant Professor</p>

			<div className="flex items-center mb-2">
				<img className="ml-4 mr-4" src="/images/call.svg" alt="contact pbx" />
				<div className="">
					<p className="leading-relaxed text-gray-900 tracking-wide text-sm font-light">+571 3394949</p>
					<p className="leading-relaxed text-gray-600 tracking-wide text-xs">PBX</p>
				</div>
			</div>
			<div className="flex items-center mb-2">
				<img className="ml-4 mr-4" src="/images/email.svg" alt="contact email" />
				<div className="">
					<p className="break-all text-gray-900 leading-relaxed tracking-wide text-sm font-light">d.alvarezm@uniandes.edu.co</p>
					<p className="leading-relaxed text-gray-600 tracking-wide text-xs">Work</p>
				</div>
			</div>
			<br />
			<div className="flex justify-end mb-2 mr-2">
				<Link to="/projects/1/intro" className="bg-gray-900 rounded p-2 shadow-md">
					<p className="leading-relaxed tracking-wide text-xs uppercase text-gray-100 hover:text-gray-500 font-medium">PROJECTS</p>
				</Link>
			</div>
		</figure>
	);
}

export default ProfileCard;