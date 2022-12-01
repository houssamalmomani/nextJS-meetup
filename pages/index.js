import Head from 'next/head';
import { MongoClient } from 'mongodb';

import MeetupList from '../components/meetups/MeetupList';
import { Fragment } from 'react';

function HomePage(props) {
	return (
		<Fragment>
			<Head>
				<title>MeetUps</title>
				<meta
					name='description'
					content='Browse list of highly active meetups!'
				/>
			</Head>
			<MeetupList meetups={props.meetups} />;
		</Fragment>
	);
}
// export async function getServerSideProps(context) {
// 	const req = context.req;
// 	const res = context.res;
// 	return {
// 		props: {
// 			meetups: DUMMY_MEETUPS,
// 		},
// 	};
// }
export async function getStaticProps() {
	const client = await MongoClient.connect(
		'mongodb+srv://Houssam:h_cM99W7CVcKq6B@cluster0.p4hcych.mongodb.net/meetups?retryWrites=true&w=majority'
	);
	const db = client.db();

	const meetupCollection = db.collection('meetups');

	const meetups = await meetupCollection.find().toArray();

	client.close();

	return {
		props: {
			meetups: meetups.map((meetup) => ({
				title: meetup.title,
				address: meetup.address,
				image: meetup.image,
				id: meetup._id.toString(),
			})),
			revalidate: 1,
		},
	};
}

export default HomePage;
