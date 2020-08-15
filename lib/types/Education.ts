import { objectType } from '@nexus/schema';

export const Education = objectType({
	name: 'Education',
	definition(t) {
		t.id('id');
		t.string('certificate');
		t.string('school');
		t.string('location');
		t.string('startYear');
		t.string('endYear');
		t.string('grade');
	},
});
