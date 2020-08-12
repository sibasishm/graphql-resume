import { makeSchema } from '@nexus/schema';
import * as types from './types';

const schema = makeSchema({
	types,
});

export default schema;
