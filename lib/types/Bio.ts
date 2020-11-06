import { objectType } from '@nexus/schema';

export const Bio = objectType({
	name: 'Bio',
	definition(t) {
		t.string('name');
		t.string('title');
		t.string('email');
		t.url('website', bio => new URL(bio.website));
		t.url('twitter', bio => new URL(bio.twitter));
		t.url('github', bio => new URL(bio.github));
		t.url('stackoverflow', bio => new URL(bio.stackoverflow));
		t.url('behance', bio => new URL(bio.behance));
		t.url('linkedin', bio => new URL(bio.linkedin));
	},
});
