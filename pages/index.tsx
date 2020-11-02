import Head from 'next/head';
import { useQuery, gql } from '@apollo/client';

import {
	FaTwitterSquare,
	FaGithubSquare,
	FaBehanceSquare,
	FaStackOverflow,
	FaLinkedin,
} from 'react-icons/fa';
import { BiBuildingHouse, BiCalendar, BiLocationPlus } from 'react-icons/bi';
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
						<section className='mt-4 md:mt-6'>
							<SectionHeader>Contact details</SectionHeader>
							<ul className='mt-1 flex flex-row justify-center md:justify-start space-x-4 md:space-x-2'>
								<li>
									<a
										href={bio.twitter}
										target='_blank'
										rel='noopener noreferrer'
									>
										<FaTwitterSquare className='w-8 h-8' />
									</a>
								</li>
								<li>
									<a
										href={bio.github}
										target='_blank'
										rel='noopener noreferrer'
									>
										<FaGithubSquare className='w-8 h-8' />
									</a>
								</li>
								<li>
									<a
										href={bio.stackoverflow}
										target='_blank'
										rel='noopener noreferrer'
									>
										<FaStackOverflow className='w-8 h-8' />
									</a>
								</li>
								<li>
									<a
										href={bio.behance}
										target='_blank'
										rel='noopener noreferrer'
									>
										<FaBehanceSquare className='w-8 h-8' />
									</a>
								</li>
								<li>
									<a
										href={bio.linkedin}
										target='_blank'
										rel='noopener noreferrer'
									>
										<FaLinkedin className='w-8 h-8' />
									</a>
								</li>
							</ul>
						</section>
						<a
							className='hidden mt-12 p-2 md:w-full md:block text-center bg-blue-600 text-white font-semibold tracking-wider'
							href='mailto:smsibasish@gmail.com'
						>
							Hire me
						</a>
					</div>
				</header>
				<main className='md:w-2/3 p-4 text-sm md:text-base leading-normal md:leading-relaxed'>
					<section>
						<SectionHeader>Professional Summary</SectionHeader>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
							praesentium quia deserunt ad quasi. Dolorum quo quaerat nam
							ratione obcaecati, exercitationem suscipit esse blanditiis dolorem
							vitae placeat, architecto est nesciunt!
						</p>
					</section>
					<section className='mt-4 md:mt-8'>
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
								<article key={id} className='mt-2'>
									<h4 className='text-base md:text-lg font-medium'>
										{company} - {role}
									</h4>
									<div className='flex items-center space-x-1 text-gray-700 font-medium'>
										<BiLocationPlus />
										<p>{location}</p>
									</div>
									<div className='flex items-center space-x-1 text-gray-700 font-medium'>
										<BiCalendar />{' '}
										<p>
											{years} years, {months} months
										</p>
									</div>
									<ul className='list-disc mt-2 list-inside'>
										{achievements.map(item => (
											<li key={item}>{item}</li>
										))}
									</ul>
								</article>
							)
						)}
					</section>
					<section className='mt-4 md:mt-8'>
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
								<article key={id} className='mt-2 md:mt-4'>
									<h4 className='text-base md:text-lg font-medium'>
										{certificate} - {grade}
									</h4>
									<div className='flex items-center space-x-1 text-gray-700 font-medium'>
										<BiCalendar />{' '}
										<p>
											{startYear} - {endYear}
										</p>
									</div>
									<div className='flex items-center space-x-1 text-gray-700 font-medium'>
										<BiBuildingHouse />{' '}
										<p>
											{school}, {location}
										</p>
									</div>
								</article>
							)
						)}
					</section>
					<section className='mt-4 md:mt-8'>
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
