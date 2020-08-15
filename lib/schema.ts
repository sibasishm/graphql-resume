import path from 'path';
import { makeSchema } from '@nexus/schema';

import * as types from './types';

const schema = makeSchema({
	types,
	outputs: {
		schema: path.join(process.cwd(), 'schema.graphql'),
		typegen: path.join(process.cwd(), 'lib', 'generated', 'nexus.ts'),
	},
	typegenAutoConfig: {
		sources: [
			{
				alias: 'faces',
				source: path.join(process.cwd(), 'lib', 'interfaces.ts'),
				typeMatch: (type) => new RegExp(`(${type}Interface)`),
			},
		],
		backingTypeMap: {
			Date: 'Date',
			URL: 'URL',
		},
		debug: process.env.NODE_ENV === 'development',
	},
});

export default schema;
