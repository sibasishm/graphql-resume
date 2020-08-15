import { queryType, idArg } from '@nexus/schema';

import { Bio, Position, Education } from './index';
import { data } from 'lib/data';

export const Query = queryType({
	definition(t) {
		t.field('bio', {
			type: Bio,
			description: 'Get bio',
			resolve: () => data.bio,
		});
		t.list.field('positions', {
			type: Position,
			description: 'Get all positions',
			resolve: () => data.position,
		});
		t.field('position', {
			type: Position,
			description: 'Find a position by ID',
			nullable: true,
			args: { id: idArg() },
			resolve: (root, { id }: { id: string }) =>
				data.position.find((position) => position.id === id),
		});
		t.list.field('educations', {
			type: Education,
			description: 'Get all education history',
			resolve: () => data.education,
		});
		t.field('education', {
			type: Education,
			description: 'Find an education history by ID',
			nullable: true,
			args: { id: idArg() },
			resolve: (root, { id }: { id: string }) =>
				data.education.find((education) => education.id === id),
		});
	},
});
