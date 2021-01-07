export default function Contact() {
	return (
		<section id="contact" className="bg-white rounded shadow-md px-12 py-6">
			<p className="text-4xl mb-4">Contact</p>
			<div>
				<div className="flex">
					<img className="mr-4" src="/images/person.svg" alt="david" />
					<p className="font-light">David Álvarez-Martínez</p>
				</div>
				<div className="flex">
					<img className="mr-4" src="/images/email.svg" alt="email" />
					<p className="font-light">akavallo@gmail.com</p>
				</div>
				<div className="flex">
					<img className="mr-4" src="/images/call.svg" alt="phone" />
					<p className="font-light">+57 (1) 3394949 - Ext: 3870</p>
				</div>
				<div className="flex">
					<img className="mr-4" src="/images/building.svg" alt="building" />
					<p className="font-light">Mario Laserna Building, Off. 757</p>
				</div>
				<div className="flex">
					<img className="mr-4" src="/images/place.svg" alt="place" />
					<p className="font-light">Bogota D.C. - Colombia</p>
				</div>
			</div>
		</section>
	)
}