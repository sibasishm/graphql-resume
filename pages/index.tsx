import Head from 'next/head';
import { useQuery, gql } from '@apollo/client';

import styles from '../styles/Home.module.css';

const query = gql`
	query ResumeQuery {
		bio {
			name
			title
			email
			website
			github
			stackoverflow
			behance
			linkedin
		}
		positions {
			id
			role
			company
			location
			years
			months
			achievements
		}
		educations {
			id
			certificate
			school
			location
			startYear
			endYear
			grade
		}
	}
`;

export default function Home() {
	const { data, error, loading } = useQuery(query);

	if (loading) return <h1>Loading...</h1>;

	return (
		<>
			<Head>
				<title>Sibasish Mohanty | Resume</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<header className={styles.header}>
				<h1>{data.bio.name}</h1>
				<h2>{data.bio.title}</h2>
			</header>
			<main className={styles.main}>
				<pre>{JSON.stringify(data, null, 4)}</pre>
			</main>
		</>
	);
}
