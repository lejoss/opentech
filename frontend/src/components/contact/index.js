export default function Contact() {
	return (
		<section style={{ backgroundColor: "#fafafa" }} id="contact" className="rounded shadow-sm px-12 pt-6 pb-24 md:pb-12">
			<div className="lg:text-lg">
				<p className="mb-4 md:pt-6 font-bold uppercase">Contact</p>
				<div>
					<div className="flex">
						<img className="mr-4" src="/images/person.svg" alt="david" />
						<p className="font-light text-sm">David Álvarez-Martínez</p>
					</div>
					<div className="flex">
						<img className="mr-4" src="/images/email.svg" alt="email" />
						<p className="font-light text-sm">akavallo@gmail.com</p>
					</div>
					<div className="flex">
						<img className="mr-4" src="/images/call.svg" alt="phone" />
						<p className="font-light text-sm">+57 (1) 3394949 - Ext: 3870</p>
					</div>
					<div className="flex">
						<img className="mr-4" src="/images/building.svg" alt="building" />
						<p className="font-light text-sm">Mario Laserna Building, Off. 757</p>
					</div>
					<div className="flex">
						<img className="mr-4" src="/images/place.svg" alt="place" />
						<p className="font-light text-sm">Bogota D.C. - Colombia</p>
					</div>
				</div>
			</div>
		</section>
	)
}