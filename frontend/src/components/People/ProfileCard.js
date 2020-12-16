import React from 'react';
import { Link } from 'react-router-dom';


function ProfileCard() {
	return (
		<figure style={{ maxWidth: 250, minHeight: 390, maxHeight: 390 }} className="m-1 py-6 px-4 bg-white sm:w-72 cursor-pointer shadow-md rounded-md m-0">
			<img className="h-24 w-24 my-0 mx-auto" src="/images/dave.png" alt="tpp" />
			<p className="text-center leading-relaxed tracking-wide text-2xl mt-4 text-gray-900 font-light">David Alvarez</p>
			<p className="text-center leading-relaxed tracking-wide mb-8 text-xs text-gray-600 font-light">Assistant Professor</p>

			<div className="flex items-center ml-0 mb-1">
				<img className="mr-6" src="/images/call.svg" alt="contact pbx" />
				<div className="">
					<p className="leading-relaxed text-gray-900 tracking-wide text-xs font-light">+571 3394949</p>
					<p className="leading-relaxed text-gray-600 tracking-wide text-xs font-light">Mobile</p>
				</div>
			</div>
			<div className="flex items-center ml-0 mb-1">
				<img className="mr-6" src="/images/email.svg" alt="contact email" />
				<div className="">
					<p className="break-all text-gray-900 leading-relaxed tracking-wide text-xs font-light">d.alvarezm@uniandes.edu.co</p>
					<p className="leading-relaxed text-gray-600 tracking-wide text-xs font-light">Work</p>
				</div>
			</div>

	<Link to="/projects?person=david" style={{ backgroundColor: '#212121' }} className="flex justify-center mt-8 rounded p-2 shadow-md">
				<p className="leading-relaxed tracking-wide text-xs uppercase text-white hover:text-gray-300">PROJECTS</p>
			</Link>

		</figure>
	);
}

export default ProfileCard;