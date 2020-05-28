import { GraphQLSchema } from 'graphql';

import RootQuery from '../graphql/query';


const schema = new GraphQLSchema({
  query: RootQuery
});

export default schema;
