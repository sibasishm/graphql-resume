export interface BioInterface {
	name: string;
	title: string;
	email: string;
	website: string;
	twitter: string;
	github: string;
	stackoverflow: string;
	linkedin: string;
	behance: string;
}

export interface PositionInterface {
	id: string;
	role: string;
	company: string;
	startDate: string;
	endDate?: string;
	location: string;
	achievements: string[];
}

export interface EducationInterface {
	id: string;
	certificate: string;
	school: string;
	startYear: string;
	endYear: string;
	location: string;
	grade: string;
}
