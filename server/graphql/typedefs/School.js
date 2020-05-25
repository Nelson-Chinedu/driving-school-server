import { GraphQLObjectType,GraphQLID, GraphQLString } from 'graphql';

export default new GraphQLObjectType({
  name: 'School',
  description: 'Query accessible for driving school',
  fields: () => ({
    id: {
      type: GraphQLID
    },
    accreditationNumber: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    address: {
      type: GraphQLString
    },
    state: {
      type: GraphQLString
    }
  })
});