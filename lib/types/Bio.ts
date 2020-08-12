import { objectType } from '@nexus/schema';

export const Bio = objectType({
	name: 'Bio',
	definition(t) {
		t.string('name');
		t.string('title');
		t.url('github', (bio) => new URL(bio.github));
	},
});
