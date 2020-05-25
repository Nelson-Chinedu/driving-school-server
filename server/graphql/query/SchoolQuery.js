import {
  GraphQLObjectType, 
  GraphQLID, 
  GraphQLList, 
  GraphQLString,
  GraphQLNonNull
} from 'graphql';

import School from '../../model/model';

import SchoolType from "../typedefs/School";

export default new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'Query accessible to get a single driving school, list of driving school and driving schools in a state',
  fields: {
    School: {
      type: SchoolType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID)
        }
      },
      resolve(parent, args){
        return School.findById(args.id);
      }
    },
    Schools: {
      type: new GraphQLList(SchoolType),
      resolve(parent, args){
        return School.find({})
      }
    },
    State: {
      type: new GraphQLList(SchoolType),
      args: {
        state: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve(parent, args){
        return School.find({state: args.state.toUpperCase()})
      }
    }
  }
});