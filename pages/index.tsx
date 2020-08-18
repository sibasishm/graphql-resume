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
	const {
		data: { bio, educations, positions },
		error,
		loading,
	} = useQuery(query);

	if (loading) return <h1>Loading...</h1>;

	if (error) return <h1>Error!</h1>;

	return (
		<>
			<Head>
				<title>Sibasish Mohanty | Resume</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<header className={styles.header}>
				<h1>{bio.name}</h1>
				<h2>{bio.title}</h2>
			</header>
			<main className={styles.main}>
				<div className={styles.grid__one}>
					<section>
						<h3>Professional Summary</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Expedita praesentium quia deserunt ad quasi.
							Dolorum quo quaerat nam ratione obcaecati,
							exercitationem suscipit esse blanditiis dolorem
							vitae placeat, architecto est nesciunt!
						</p>
					</section>
					<section>
						<h3>Work History</h3>
						{positions.map(
							({
								id,
								role,
								company,
								location,
								achievements,
								years,
								months,
							}) => (
								<div key={id}>
									<h4>
										{company} - {role}
									</h4>
									<p>{location}</p>
									<p>
										{years} years, {months} months
									</p>
									<ul>
										{achievements.map((item) => (
											<li>{item}</li>
										))}
									</ul>
								</div>
							)
						)}
					</section>
					<section>
						<h3>Education</h3>
						{educations.map(
							({
								id,
								certificate,
								school,
								location,
								startYear,
								endYear,
								grade,
							}) => (
								<div key={id}>
									<h4>
										{certificate} - {grade}
									</h4>
									<p>
										{startYear} - {endYear}
									</p>
									<p>
										{school}, {location}
									</p>
								</div>
							)
						)}
					</section>
				</div>
				<div className={styles.grid__two}>
					<section>
						<h3>Contact details</h3>
						<ul>
							<li>{bio.github}</li>
							<li>{bio.stackoverflow}</li>
							<li>{bio.behance}</li>
							<li>{bio.linkedin}</li>
						</ul>
					</section>
					<section>
						<h3>Skills</h3>
						<ul>
							<li>{bio.github}</li>
							<li>{bio.stackoverflow}</li>
							<li>{bio.behance}</li>
							<li>{bio.linkedin}</li>
							<li>{bio.github}</li>
							<li>{bio.stackoverflow}</li>
							<li>{bio.behance}</li>
							<li>{bio.linkedin}</li>
						</ul>
					</section>
				</div>
			</main>
		</>
	);
}
