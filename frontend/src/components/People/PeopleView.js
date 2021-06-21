import ProfileCard from './ProfileCard';
import useQuery from '../../hooks/useQuery';

function PeopleView({ people }) {
	const query = useQuery();
	const conditionToRender = people && people.list && people.list.length > 0;

	return (
		<main id="people-view" className="h-screen overflow-auto max-w-screen-md m-auto">
			<p className="text-center text-5xl lg:text-left mt-20 md:mb-6 lg:mt-32">People</p>
			<section id="section-people" className="flex flex-col justify-start px-12 pb-20 sm:pb-0 sm:px-0 mx-6 mb-4 mt-8 sm:mx-6 sm:flex-row sm:flex-wrap lg:mx-0">
				{query.get('person')
					? conditionToRender && people.list.map(p => p.id === parseInt(query.get('person')) && <ProfileCard key={p.id} person={p} />)
					: conditionToRender && people.list.map(p => <ProfileCard key={p.id} person={p} />)
				}
			</section>
		</main>
	);
}

export default PeopleView;