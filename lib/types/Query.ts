import { queryType } from '@nexus/schema';

import { Bio } from './index';
import { data } from 'lib/data';

export const Query = queryType({
	definition(t) {
		t.field('bio', {
			type: Bio,
			resolve: () => data.bio,
		});
	},
});
