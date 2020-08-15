export interface BioInterface {
	name: string;
	title: string;
	github: string;
}

export interface PositionInterface {
	id: string;
	position: string;
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
	startDate: string;
	endDate?: string;
	location: string;
	achieved: number;
	total: number;
	achievements: string[];
}
