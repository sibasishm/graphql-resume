import Head from 'next/head';
import { useQuery, gql } from '@apollo/client';

import {
	FaTwitterSquare,
	FaGithubSquare,
	FaBehanceSquare,
	FaStackOverflow,
	FaLinkedin,
} from 'react-icons/fa';
import { SectionHeader } from 'components/SectionHeader';

const query = gql`
	query ResumeQuery {
		bio {
			name
			title
			email
			website
			twitter
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

	if (error)
		return <h1>Oops! Something went wrong. Please refresh the page.</h1>;

	const { bio, positions, educations } = data;
	return (
		<h1>
			<Head>
				<title>Sibasish Mohanty | Resume</title>
				<link rel='icon' href='/favicon.ico' />
				<link rel='stylesheet' href='https://rsms.me/inter/inter.css' />
			</Head>
			<div className='antialiased text-gray-900 max-w-screen-lg mx-auto md:flex'>
				<header className='p-4 relative text-center md:text-left md:w-1/3 '>
					<div className='md:fixed'>
						<img
							className='h-48 w-48 rounded-full mx-auto my-2 border-4 border-blue-600'
							src='/sibasish_mohanty.jpg'
							alt='Sibasish Mohanty in a fun mood'
						/>
						<h1 className='text-3xl font-black'>{bio.name}</h1>
						<p className='text-lg text-gray-600 font-medium'>{bio.title}</p>
						<section className='mt-6'>
							<SectionHeader>Contact details</SectionHeader>
							<ul className='mt-1 flex flex-row justify-center md:justify-start space-x-4 md:space-x-2'>
								<li>
									<a href={bio.twitter}>
										<FaTwitterSquare />
									</a>
								</li>
								<li>
									<a href={bio.github}>
										<FaGithubSquare />
									</a>
								</li>
								<li>
									<a href={bio.stackoverflow}>
										<FaStackOverflow />
									</a>
								</li>
								<li>
									<a href={bio.behance}>
										<FaBehanceSquare />
									</a>
								</li>
								<li>
									<a href={bio.linkedin}>
										<FaLinkedin />
									</a>
								</li>
							</ul>
						</section>
					</div>
				</header>
				<main className='md:w-2/3 p-4'>
					<section>
						<SectionHeader>Professional Summary</SectionHeader>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
							praesentium quia deserunt ad quasi. Dolorum quo quaerat nam
							ratione obcaecati, exercitationem suscipit esse blanditiis dolorem
							vitae placeat, architecto est nesciunt!
						</p>
					</section>
					<section className='mt-6'>
						<SectionHeader>Work History</SectionHeader>
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
										{achievements.map(item => (
											<li key={item}>{item}</li>
										))}
									</ul>
								</div>
							)
						)}
					</section>
					<section className='mt-6'>
						<SectionHeader>Education</SectionHeader>
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
					<section className='mt-6'>
						<SectionHeader>Skills</SectionHeader>
						<ul>
							<li>{bio.github}</li>
							<li>{bio.stackoverflow}</li>
							<li>{bio.behance}</li>
							<li>{bio.linkedin}</li>
						</ul>
					</section>
				</main>
			</div>
		</h1>
	);
}
