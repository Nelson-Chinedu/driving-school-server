import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';

export default new GraphQLObjectType({
  name: 'State',
  description: 'Query accessible to see states',
  fields: () => ({
    id: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString
    },
    landmark: {
      type: GraphQLString
    }
  })
})